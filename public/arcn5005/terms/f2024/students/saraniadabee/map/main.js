const map = new maplibregl.Map({
  container: 'map',
  style:
      'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
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
                  'text-color': 'rgba(0,0,0,0.)'
              }
          });

          // Initialize the filter to show the first month
          filterBy(0);

          // Add event listener for the slider
          document
              .getElementById('slider')
              .addEventListener('input', (e) => {
                  const month = parseInt(e.target.value, 10);
                  filterBy(month);
              });
      })
      .catch((err) => console.error('Error loading GeoJSON:', err));
});
