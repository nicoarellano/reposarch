mapboxgl.accessToken = 'pk.eyJ1IjoiYnJ5YW5uYW1jZ2hlZWVlZWUiLCJhIjoiY2xubnVpdjQzMDhqdTJybGdqOHRiNTByaCJ9.wcWkMFxVqseygG3InczbkQ';

const map = new mapboxgl.Map({
    style: 'mapbox://styles/mapbox/light-v11',
    center: [-75.6919, 45.4215], // Ottawa's coordinates
    zoom: 15.5,
    pitch: 45,
    bearing: -17.6,
    container: 'map',
    antialias: true
});

map.on('style.load', () => {
    // Insert the layer beneath any symbol layer.
    const layers = map.getStyle().layers;
    const labelLayerId = layers.find(
        (layer) => layer.type === 'symbol' && layer.layout['text-field']
    ).id;

    // The 'building' layer in the Mapbox Streets
    // vector tileset contains building height data
    // from OpenStreetMap.
    map.addLayer(
        {
            'id': 'add-3d-buildings',
            'type': 'fill-extrusion',
            'source': 'composite',
            'source-layer': 'building',
            'filter': ['==', 'extrude', 'true'],
            'minzoom': 15,
            'paint': {
                'fill-extrusion-color': '#aaa',
                'fill-extrusion-height': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'height']
                ],
                'fill-extrusion-base': [
                    'interpolate',
                    ['linear'],
                    ['zoom'],
                    15,
                    0,
                    15.05,
                    ['get', 'min_height']
                ],
                'fill-extrusion-opacity': 0.6
            }
        },
        labelLayerId
    );

    // Waterway layer
    map.addLayer({
        'id': 'rivers',
        'type': 'line',
        'source': 'mapbox://mapbox.mapbox-streets-v8',
        'source-layer': 'waterway',
        'paint': {
            'line-color': '#ffc0cb'
        }
    });

 
    // Markers
    const markers = [
        { name: 'Patterson Creek', color: '#FF5733', coordinates: [-75.68735, 45.40668] },
        { name: 'Wolf Trail', color: '#FF5733', coordinates: [-75.9095, 45.5433] },
        { name: 'Lusk Cave', color: '#FF5733', coordinates: [-75.9816, 45.5832] },
        { name: 'The Pond', color: '#FF5733', coordinates: [-75.6666, 45.4512] },
        { name: '613 Flea', color: '#DAF7A6', coordinates: [-75.6836, 45.3944] },
        { name: 'Nordik Spa', color: '#DAF7A6', coordinates: [-75.8344, 45.5115] },
        { name: 'Walk Along The Canal', color: '#DAF7A6', coordinates: [-75.6993, 45.4215] },
        { name: 'Mayfair Theatre', color: '#DAF7A6', coordinates: [-75.6902, 45.3998] },
        { name: "Ha's Noodle House", color: '#D4AC0D', coordinates: [-75.7051, 45.4086] },
        { name: 'Pizza Nerd', color: '#D4AC0D', coordinates: [-75.6984, 45.4153] },
        { name: 'Collonande Pizza', color: '#D4AC0D', coordinates: [-75.6965, 45.4155] },
        { name: 'La Cigale', color: '#D4AC0D', coordinates: [-75.8823, 45.5075] },
        { name: 'Fariang Thai', color: '#D4AC0D', coordinates: [-75.6836, 45.3944] },
        { name: 'Scone Witch', color: '#D4AC0D', coordinates: [-75.6925, 45.4217] },
        { name: 'Midcentury Modern', color: '#7B241C', coordinates: [-75.6598, 45.3952] },
        { name: 'Eat The Rich', color: '#7B241C', coordinates: [-75.6822, 45.4500] },
        { name: 'Historic', color: '#7B241C', coordinates: [-75.6899, 45.3994] },
        { name: 'Cute Homes', color: '#7B241C', coordinates: [-75.7101, 45.4021] }
    ];

    markers.forEach((marker) => {
        // Add markers for each location
        new mapboxgl.Marker({ color: marker.color, scale: 3 })
            .setLngLat(marker.coordinates)
            .setPopup(new mapboxgl.Popup().setHTML(`<div class="popup-content">${marker.name}</div>`))
            .addTo(map);
    });

    function toggleLayer(layerId) {
        const visibility = map.getLayoutProperty(layerId, 'visibility');
        if (visibility === 'visible') {
            map.setLayoutProperty(layerId, 'visibility', 'none');
        } else {
            map.setLayoutProperty(layerId, 'visibility', 'visible');
        }
    }
});