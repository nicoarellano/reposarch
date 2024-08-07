mapboxgl.accessToken = 'pk.eyJ1Ijoic2ltb25tYXJ0aWduYWdvIiwiYSI6ImNsZGFkenlpcjBobnMzb21wNWwwZDNrY3IifQ.FLGiwxF0HFz_q7stClKu0g';
const map = new mapboxgl.Map({
  container: 'map',
  center: [-75.6934, 45.4215], // Ottawa, Ontario, Canada
  zoom: 12,
  style: 'mapbox://styles/mapbox/light-v10'
});

const embassyLocations = [
  { name: 'Australian Embassy', coordinates: [-75.6998278609583, 45.42046928493152] },
  { name: 'Austrian Embassy', coordinates: [-75.6766091012364, 45.42946130852773] },
  { name: 'Chinese Embassy', coordinates: [-75.68500583228307, 45.43635734252513] },
  { name: 'French Embassy', coordinates: [-75.69475645190913, 45.44334487382583] },
  { name: 'Israel Embassy', coordinates: [-75.69951805098987, 45.42060811912621] },
  { name: 'Japanese Embassy', coordinates: [-75.69880299884716, 45.433061023088925] },
  { name: 'Russian Embassy', coordinates: [-75.67338797383161, 45.42973811989557] },
  { name: 'South African Embassy', coordinates: [-75.69252866102457, 45.444026324529496] },
  { name: 'UK Embassy', coordinates: [-75.69484860651467, 45.4225965719816] },
  { name: 'American Embassy', coordinates: [-75.69592817829518, 45.42790358473624] }
];

map.on('load', () => {
  embassyLocations.forEach((embassy, index) => {
    map.addLayer({
      'id': `marker-${index + 1}`,
      'type': 'circle',
      'source': {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': embassy.coordinates
              },
              'properties': {
                'name': embassy.name,
                'index': index + 1
              }
            }
          ]
        }
      },
      'paint': {
        'circle-radius': 10,
        'circle-color': '#FF474C'
      }
    });

    map.addLayer({
      'id': `text-${index + 1}`,
      'type': 'symbol',
      'source': {
        'type': 'geojson',
        'data': {
          'type': 'FeatureCollection',
          'features': [
            {
              'type': 'Feature',
              'geometry': {
                'type': 'Point',
                'coordinates': embassy.coordinates
              },
              'properties': {
                'name': embassy.name,
                'index': index + 1
              }
            }
          ]
        }
      },
      'layout': {
        'text-field': ['concat', ['get', 'index']],
        'text-size': 12,
        'text-anchor': 'center',
        'text-allow-overlap': true
      }
    });

    // Add a hover effect to increase the marker size
    map.on('mouseenter', `marker-${index + 1}`, function () {
      map.getCanvas().style.cursor = 'pointer';
      map.setPaintProperty(`marker-${index + 1}`, 'circle-radius', 15);
    });

    map.on('mouseleave', `marker-${index + 1}`, function () {
      map.getCanvas().style.cursor = '';
      map.setPaintProperty(`marker-${index + 1}`, 'circle-radius', 10);
    });
  });
});
