const map = new maplibregl.Map({
  container: 'map',
  style: 'https://api.maptiler.com/maps/backdrop/style.json?key=v73CsWuZ4JslNyKg3ZEH',
  center: [31.4606, 20.7927],
  zoom: 0.5
});

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

// Initialize bomb sound
const bombSound = new Audio('./Fire.wav'); // Ensure correct path to the sound file

function playBombSound() {
  bombSound.currentTime = 0; // Reset sound to the beginning
  bombSound.play().catch((error) => {
      console.error('Error playing bomb sound:', error);
  });
}

// Filter the map based on the selected month
function filterBy(month) {
  const filters = ['==', 'month', month];
  map.setFilter('eruption-circles', filters);
  map.setFilter('eruption-labels', filters);

  // Update the label for the current month
  document.getElementById('month').textContent = months[month];
}

map.on('load', () => {
  fetch('./volcanic_eruptions.json')
      .then((response) => {
          if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
      })
      .then((data) => {
          // Add a `month` property based on `StartDateMonth`
          data.features = data.features.map((feature) => {
              feature.properties.month = feature.properties.StartDateMonth - 1; // Convert to 0-indexed months
              return feature;
          });

          // Add the GeoJSON data as a source
          map.addSource('volcanic-eruptions', {
              type: 'geojson',
              data
          });

          // Add a layer for the eruption circles
          map.addLayer({
              id: 'eruption-circles',
              type: 'circle',
              source: 'volcanic-eruptions',
              paint: {
                  'circle-color': [
                      'interpolate',
                      ['linear'],
                      ['get', 'ExplosivityIndexMax'],
                      0, '#FFF5F5',
                      2, '#FF9999',
                      4, '#FF4D4D',
                      6, '#FF0000'
                  ],
                  'circle-opacity': 0.75,
                  'circle-radius': [
                      'interpolate',
                      ['linear'],
                      ['get', 'ExplosivityIndexMax'],
                      0, 5,
                      8, 40
                  ]
              }
          });

          // Add a layer for eruption labels
          map.addLayer({
              id: 'eruption-labels',
              type: 'symbol',
              source: 'volcanic-eruptions',
              layout: {
                  'text-field': ['get', 'VolcanoName'],
                  'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
                  'text-size': 12
              },
              paint: {
                  'text-color': 'rgba(0,0,0,0)'
              }
          });

          // Initialize the filter to show the first month
          filterBy(0);

          // Add event listener for the slider
          document.getElementById('slider').addEventListener('input', (e) => {
              const month = parseInt(e.target.value, 10);
              filterBy(month);

              // Play the bomb sound when the slider changes
              playBombSound();
          });

          // Tooltip for displaying volcano information
          const tooltip = document.getElementById('tooltip');

          // Show tooltip on hover
          map.on('mousemove', 'eruption-circles', (e) => {
              const features = map.queryRenderedFeatures(e.point, {
                  layers: ['eruption-circles']
              });

              if (features.length > 0) {
                  const feature = features[0];
                  const { VolcanoName, ExplosivityIndexMax, StartDate, ContinuingEruption } = feature.properties;

                  // Populate tooltip content
                  tooltip.innerHTML = `
                      <strong>${VolcanoName}</strong><br>
                      Explosivity Index: ${ExplosivityIndexMax}<br>
                      Start Date: ${StartDate}<br>
                      Continuing Eruption: ${ContinuingEruption}
                  `;

                  // Position tooltip near the mouse pointer
                  tooltip.style.left = `${e.originalEvent.clientX + 15}px`;
                  tooltip.style.top = `${e.originalEvent.clientY + 15}px`;
                  tooltip.style.display = 'block';
              } else {
                  tooltip.style.display = 'none';
              }
          });

          // Hide tooltip when leaving the circles layer
          map.on('mouseleave', 'eruption-circles', () => {
              tooltip.style.display = 'none';
          });
      })
      .catch((err) => console.error('Error loading GeoJSON:', err));
});
