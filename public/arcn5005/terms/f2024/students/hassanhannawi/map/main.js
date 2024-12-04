const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    center: [35.895355, 33.922211],
    zoom: 8
});

map.on('load', async () => {
    const image = await map.loadImage('redicon.png'); 
    // Add an image to use as a custom marker
    map.addImage('custom-marker', image.data);

    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Lost Love</strong><p>Baalbak</p><img src="DRAWING ONE.jpg"width=200px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [36.208370, 34.009691]  
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Hold My Hand</strong><p>Saida</p><img src="DRAWING TWO.jpg"width=200px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [35.371071, 33.566990]  
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>My Heart</strong><p>Beirut</p><img src="DRAWING THREE.jpg"width=200px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [35.499438, 33.886393]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Shattered Dreams</strong><p>Tyre</p><img src="DRAWING FOUR.jpg"width=200px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [35.194996, 33.272589]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Sweatest Flower</strong><p>Jezzine</p><img src="DRAWING FIVE.jpg"width=200px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [35.576203, 33.545219]
                    }
                },
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>All Seeing Eyes</strong><p>Tripoli</p><img src="DRAWING SIX.jpg"width=200px>'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [35.825348, 34.439715]
                    }
                },
            ]
        }
    });

    // Add a layer showing the places.
    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': 'custom-marker',
            'icon-overlap': 'always'
        }
    });

    // Create a popup, but don't add it to the map yet.
    const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', (e) => {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = ''; 
    });
});