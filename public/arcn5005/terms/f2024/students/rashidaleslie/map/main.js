const map = new maplibregl.Map({
    container: 'map',
    style: 'style.json',
    center: [-122.9697, 49.2488], // [Longitude, Latitude]
    zoom: 12
});

map.on('load', function () {
    // Add a GeoJSON source
    map.addSource('places', {
        type: 'geojson',
        data: 'places.geojson' // Path to your GeoJSON file
    });

    // Add a custom marker image
    map.loadImage('star-marker.png', function (error, image) {
        map.addImage('custom-marker', image, { pixelRatio: 2 });
       
    });

    // Add a layer using the custom marker
    map.addLayer({
        id: 'points',
        type: 'symbol',
        source: 'places',
        layout: {
            'icon-image': 'custom-marker', // Use your custom marker here
            'icon-size': 1.5,
            'text-field': ['get', 'name'], 
            'text-offset': [0, 1.5],
            'text-anchor': 'top'
        }
    });
});
