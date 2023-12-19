const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/cd13ebd2-8091-4e53-a837-8fa1d8a8843e/style.json?key=WjgzHyreSV1KVtj99fQQ',
    center: [-111.9255129979195, 33.49540937220135],
    zoom: 10.5

});

map.on('load', () => {
    map.loadImage(
        'https://static.thenounproject.com/png/1767877-200.png',
        
        // Add an image to use as a custom marker
        (error, image) => {
            if (error) throw error;
            map.addImage('custom-marker', image);

            map.addSource('places', {
                'type': 'geojson',
                'data': 
                    {
                        "type": "FeatureCollection",
                        "features": [
                            {
                                "type": "Feature",
                                "geometry": {
                                   "type": "Point",
                                   "coordinates":  [-112.01012400323486, 33.435428039427215 ]
                                },
                                "properties": {
                                "Name":"Phoenix Sky Harbor International Airport",
                                "Address":"3400 Sky Hbr Blvd, Phoenix, AZ 85034, United States",
                                "Description":"This 3,000-acre airport serving the Phoenix area features rail service & a variety of artwork.",
                                "FIELD6":""
                                }
                              },
                       {
                         "type": "Feature",
                         "geometry": {
                            "type": "Point",
                            "coordinates":  [ -111.9616552,33.51570181 ]
                         },
                         "properties": {
                         "Name":"Camel Back Mountain ",
                         "Address":"Phoenix, AZ 85018, United States",
                         "Description":"Well-known peak resembling a camel's hump, with hiking, climbing & panoramic city views.",
                         "FIELD6":""
                         }
                       },
                       {
                         "type": "Feature",
                         "geometry": {
                            "type": "Point",
                            "coordinates":  [ -111.8588298,33.65361479 ]
                         },
                         "properties": {
                         "Name":"McDowell Sonoran Preserve",
                         "Address":"18333 N Thompson Peak Pkwy, Scottsdale, AZ 85255, United States",
                         "Description":"Trailhead accessing several hiking & biking trails that vary in skill level & offer scenic views.",
                         "FIELD6":""
                         }
                       },
                       {
                         "type": "Feature",
                         "geometry": {
                            "type": "Point",
                            "coordinates":  [ -111.9231474,33.49227868 ]
                         },
                         "properties": {
                         "Name":"Scottsdale Museum of Contemporary Art",
                         "Address":"7374 E 2nd St, Scottsdale, AZ 85251, United States",
                         "Description":"Multi-gallery museum with rotating modern art & architecture displays, plus a sculpture garden.",
                         "FIELD6":""
                         }
                       },
                       {
                         "type": "Feature",
                         "geometry": {
                            "type": "Point",
                            "coordinates":  [ -111.8453132,33.60734612 ]
                         },
                         "properties": {
                         "Name":"Taliesin West",
                         "Address":"12621 N Frank Lloyd Wright Blvd, Scottsdale, AZ 85259, United States",
                         "Description":"Tours are offered of Frank Lloyd Wright's winter home, now a campus for an architecture school.",
                         "FIELD6":""
                         }
                       },
                       {
                         "type": "Feature",
                         "geometry": {
                            "type": "Point",
                            "coordinates":  [ -111.9284905,33.49282237 ]
                         },
                         "properties": {
                         "Name":"Western Spirit: Scottsdale's Museum of the West",
                         "Address":"3830 N Marshall Way, Scottsdale, AZ 85251, United States",
                         "Description":"City-owned museum celebrating the American West with paintings, crafts, artifacts & theater events.",
                         "FIELD6":""
                         }
                       },
                       {
                         "type": "Feature",
                         "geometry": {
                            "type": "Point",
                            "coordinates":  [ -111.9448831,33.46235932 ]
                         },
                         "properties": {
                         "Name":"Desert Botanical Garden",
                         "Address":"1201 N Galvin Pkwy, Phoenix, AZ 85008, United States",
                         "Description":"Desert garden with 50,000 plants spread over 140 acres, also offering dining, a gift shop & library.",
                         "FIELD6":""
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
                    'icon-overlap': 'always',
                    'icon-size': 0.25,
                }
            });
        }
    );

    // Create a popup, but don't add it to the map yet.
    const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    //Location Pop-ups
  map.on('click', 'places', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const visit = e.features[0];
  
  
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
  
        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
                <h3>${visit.properties.Name}</h3>
                <p>Address: ${visit.properties.Address}</p>
                <p>Description: ${visit.properties.Description}</p>
                `)
            .addTo(map);
  });

    map.on('mouseenter', 'places', (e) => {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;


    });

});

