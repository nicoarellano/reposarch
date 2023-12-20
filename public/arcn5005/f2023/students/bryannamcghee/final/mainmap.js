const MAPTILER_KEY = 'ddv3jl46b28PPXBexmlx';
const map = new maplibregl.Map({
    style: 'https://api.maptiler.com/maps/basic-v2/style.json?key=' + MAPTILER_KEY,
    center: [-75.6919, 45.4215], // Ottawa, Ontario
    zoom: 12,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true
});

// The 'building' layer in the streets vector source contains building-height
// data from OpenStreetMap.
map.on('load', () => {
   
    const layers = map.getStyle().layers;

    let labelLayerId;
    for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
            labelLayerId = layers[i].id;
            break;
        }
    }

    // Markers
    const markers = [
        { name: 'Patterson Creek', color: '#b4d7ff', coordinates: [-75.68735, 45.40668], image: 'pattersoncreek.jpg' },
        { name: 'Wolf Trail', color: '#b4d7ff', coordinates: [-75.9095, 45.5433], image: 'wolftrail.jpg' },
        { name: 'Lusk Cave', color: '#b4d7ff', coordinates: [-75.9816, 45.5832], image: 'luskcave.jpg' },
        { name: 'The Pond', color: '#b4d7ff', coordinates: [-75.6666, 45.4512], image: 'thepond.jpg' },
        { name: '613 Flea', color: '#b6d7a8', coordinates: [-75.6836, 45.3944], image: '613flea.jpg' },
        { name: 'Nordik Spa', color: '#b6d7a8', coordinates: [-75.8344, 45.5115], image: 'nordikspa.jpg' },
        { name: 'Walk Along The Canal', color: '#b6d7a8', coordinates: [-75.6993, 45.4215], image: 'walkalongthecanal.jpg' },
        { name: 'Mayfair Theatre', color: '#b6d7a8', coordinates: [-75.6902, 45.3998], image: 'mayfairtheatre.jpg' },
        { name: "Ha's Noodle House", color: '#fff2cc', coordinates: [-75.7051, 45.4086], image: 'hasnoodlehouse.jpg' },
        { name: 'Pizza Nerd', color: '#fff2cc', coordinates: [-75.6984, 45.4153], image: 'pizzanerd.jpg' },
        { name: 'Collonande Pizza', color: '##fff2cc', coordinates: [-75.6965, 45.4155], image: 'collonandepizza.jpg' },
        { name: 'La Cigale', color: '#fff2cc', coordinates: [-75.8823, 45.5075], image: 'lacigale.jpg' },
        { name: 'Fariang Thai', color: '#fff2cc', coordinates: [-75.6836, 45.3944], image: 'fariangthai.jpg' },
        { name: 'Scone Witch', color: '#fff2cc', coordinates: [-75.6925, 45.4217], image: 'sconewitch.jpg' },
        { name: 'Midcentury Modern', color: '#fce5cd', coordinates: [-75.6598, 45.3952], image: 'midcenturymodern.jpg' },
        { name: 'Eat The Rich', color: '#fce5cd', coordinates: [-75.6822, 45.4500], image: 'eattherich.jpg' },
        { name: 'Historic', color: '#fce5cd', coordinates: [-75.6899, 45.3994], image: 'historic.jpg' },
        { name: 'Cute Homes', color: '#fce5cd', coordinates: [-75.7101, 45.4021], image: 'cutehomes.jpg' }
    ];

    markers.forEach((marker) => {
      // Add markers for each location
      const markerElement = document.createElement('div');
      markerElement.className = 'marker';
      markerElement.style.backgroundColor = marker.color;
      markerElement.style.borderRadius = '50%';
      markerElement.style.width = '20px';
      markerElement.style.height = '20px';

      new maplibregl.Marker(markerElement)
          .setLngLat(marker.coordinates)
          .addTo(map);
  });

  map.on('mouseenter', 'symbols', () => {
      map.getCanvas().style.cursor = 'pointer';
  });

  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'symbols', () => {
      map.getCanvas().style.cursor = '';
  });
});

map.addSource('openmaptiles', {
  url: 'https://api.maptiler.com/tiles/v3/tiles.json?key=' + MAPTILER_KEY,
  type: 'vector',
});

map.addLayer(
  {
      'id': '3d-buildings',
      'source': 'openmaptiles',
      'source-layer': 'building',
      'type': 'fill-extrusion',
      'minzoom': 15,
      'paint': {
          'fill-extrusion-color': [
              'interpolate',
              ['linear'],
              ['get', 'render_height'], 0, 'lightgray', 200, 'royalblue', 400, 'lightblue'
          ],
          'fill-extrusion-height': [
              'interpolate',
              ['linear'],
              ['zoom'],
              15,
              0,
              16,
              ['get', 'render_height']
          ],
          'fill-extrusion-base': ['case',
              ['>=', ['get', 'zoom'], 16],
              ['get', 'render_min_height'], 0
          ]
      }
  },
  labelLayerId
);

map.on('click', 'symbols', (e) => {
  const features = map.queryRenderedFeatures(e.point, { layers: ['symbols'] });

  if (!features.length) {
      return;
  }

  const locationName = features[0].properties.name;

  // Now you have the name of the clicked location, you can do something with it
  alert(`You clicked on ${locationName}`);
});

goTo.onclick = function () {
  if (toggleGoTo) {
      this.setAttribute('title', 'Go to Canada');
      document.getElementById('go-to-icon').setAttribute('d', icons.worldIcon);

      function flyTo(lng, lat, zoom = 15, pitch = 50) {
          map.flyTo({
              center: [lng, lat],
              zoom: zoom,
              pitch: pitch,
              duration: 2000,
          });
      }

      flyTo(-75.6919, 45.4215); // Example coordinates for Ottawa, Ontario
  }
  // ... (other code)
};

// Function to update map scale
function updateMapScale(scale) {
  // Adjust pitch and zoom based on the scale
  map.setPitch(scale * 10); // Adjust the factor as needed
  map.setZoom(scale * 10); // Adjust the factor as needed
}

// Event listener for scale changes
document.addEventListener('scaleChange', function (event) {
  updateMapScale(event.detail.scale);
  
});