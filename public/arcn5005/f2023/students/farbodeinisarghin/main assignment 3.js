const map = new maplibregl.Map({
    container: 'map',
    style:
        'https://api.maptiler.com/maps/streets-v2-dark/style.json?key=Yrv9nYRU3TMYq2PP4dJ5',
    center: [53.682185728841354, 32.87055416700148],
    zoom: 2.5
});

map.on('load', () => {
    // Location pin
    map.loadImage(
        'https://i.ibb.co/MB5XrML/800px-Cat-silhouette-svg1.png',
            (error, image) => {
                if (error) throw error;
                map.addImage('cat', image);
                map.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [53.85901346025484, 32.697703367256665]
                                }
                            }
                        ]
                    }
                });
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point',
                    'layout': {
                        'icon-image': 'cat',
                        'icon-size': 0.25
                    }
                });
            }
        );
    });

        map.on('load', () => {
            // Location pin
            map.loadImage(
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Blue_circle.png/240px-Blue_circle.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('custom-marker', image);
           
            map.addSource('place', {
                'type': 'geojson',
                'data': 
                {
                    "type": "FeatureCollection",
                    "features": [
   
                        {
                            "type": "Feature",
                            "geometry": {
                               "type": "Point",
                               "coordinates":  [ 51.33382083,35.67573587 ]
                            },
                            "properties": {
                            "City":"Tehran",
                            "population":"8.694 million",
                            "Famous":"Toghrol Tower"
                            }
                          },
                          {
                            "type": "Feature",
                            "geometry": {
                               "type": "Point",
                               "coordinates":  [ 52.54570801,29.67795369 ]
                            },
                            "properties": {
                            "City":"Shiraz",
                            "population":"1.566 million",
                            "Famous":"Persepolis"
                            }
                          },
                          {
                            "type": "Feature",
                            "geometry": {
                               "type": "Point",
                               "coordinates":  [ 51.79993136,32.69457373 ]
                            },
                            "properties": {
                            "City":"Isfahan",
                            "population":"1.961 million",
                            "Famous":"Naghsh-E-Jahan Squre"
                            }
                          },
                          {
                            "type": "Feature",
                            "geometry": {
                               "type": "Point",
                               "coordinates":  [ 48.52495445,34.85811104 ]
                            },
                            "properties": {
                            "City":"Hamedan",
                            "population":"554,406",
                            "Famous":"Avicenna Tomb"
                            }
                          },
                          {
                            "type": "Feature",
                            "geometry": {
                               "type": "Point",
                               "coordinates":  [ 48.67606723,31.31994824 ]
                            },
                            "properties": {
                            "City":"Ahvaz",
                            "population":"1.185 million",
                            "Famous":"Shushtar Historical Hydraulic System"
                            }
                          },
                          {
                            "type": "Feature",
                            "geometry": {
                               "type": "Point",
                               "coordinates":  [ 46.30462126,38.07766055 ]
                            },
                            "properties": {
                            "City":"Tabriz",
                            "population":"1.559 million",
                            "Famous":"Arg-e-Alishah"
                            }
                          },
                          {
                            "type": "Feature",
                            "geometry": {
                               "type": "Point",
                               "coordinates":  [ 54.33246456,31.78783706 ]
                            },
                            "properties": {
                            "City":"Yazd",
                            "population":"529,673",
                            "Famous":"Jameh Mosque of Yazd"
                            }
                          },
                          {
                            "type": "Feature",
                            "geometry": {
                               "type": "Point",
                               "coordinates":  [ 59.52033137,36.55250806 ]
                            },
                            "properties": {
                            "City":"Mashahd",
                            "population":"3.001 million",
                            "Famous":"Tomb of Nader Shah-e Afshar"
                            }
                          }
                    ]
                }
                });
  
          // Add a symbol layer for City
          map.addLayer({
            'id': 'place',
            'type': 'symbol',
            'source': 'place',
            'layout': {
                'icon-image': 'custom-marker',
                'icon-size': 0.07
                
                
            }
         });
        }
    );

    const popup1 = new maplibregl.Popup({closeOnClick: false})
    .setLngLat([50.97027823760578,43.765968094549045])
    .setHTML('<h2>Did you know that Iran is like a cat in map!!!</h2>')
    .addTo(map)

        // Create a popup, but don't add it to the map yet.
        const popup = new maplibregl.Popup
        ({
            closeButton: true,
            closeOnClick: true
        });

        map.on('mouseenter', 'place', (e) => 
        
        {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            const coordinates = e.features[0].geometry.coordinates.slice();
            const place = e.features[0];

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates)
            .setHTML(`
                <h3>${place.properties.City}</h3>
                <p>City: ${place.properties.City}</p>
                <p>Population: ${place.properties.population}</p>
                <p>Famous Historic Building: ${place.properties.Famous}</p>
                `)
                .addTo(map);
        });

        map.on('mouseleave', 'place', () => {
            map.getCanvas().style.cursor = '';
            
        });
});
    