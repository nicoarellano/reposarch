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
            'icon-size': [
                'interpolate', 
                ['linear'],
                ['zoom'],
                // When zoom is 10, icon size is 0.5
                10, 0.05,
                // When zoom is 15, icon size is 2
                15, .25,
                // When zoom is 20, icon size is 3
                20, .5
            ],
            'text-field': ['get', 'name'], 
            'text-offset': [0, 1.5],
            'text-anchor': 'top'
        },
        paint: {
            'text-halo-color': '#FFE46A',  // Black halo/background
            'text-halo-width': 2  // Width of the halo/background
        }
    });
 // Add a click event listener for popups
 map.on('click', 'points', function (e) {
    // Extract the feature properties
    const coordinates = e.features[0].geometry.coordinates.slice();
    const properties = e.features[0].properties;
    const description = `
    <div style="max-width: 300px;">
        <strong>${properties.name}</strong><br>
        Category: ${properties.category}<br>
        ${properties.imageUrl ? `<img src="${properties.imageUrl}" alt="${properties.name}" style="max-width: 100%; height: auto;">` : ''}
        ${properties.description ? `<p>${properties.description}</p>` : ''}
    </div>
    `;

    // Create a popup at the clicked location
    new maplibregl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
});

// Change the cursor to a pointer when hovering over the points
map.on('mouseenter', 'points', function () {
    map.getCanvas().style.cursor = 'pointer';
});

// Reset the cursor when no longer hovering over points
map.on('mouseleave', 'points', function () {
    map.getCanvas().style.cursor = '';
});

});
