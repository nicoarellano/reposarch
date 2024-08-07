//Add Base Map _ winter Style
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/winter-v2/style.json?key=ZKMmWKQ1ZgQlt7DmzS2c', // MapTiler Winter style
    center: [-97.1384, 49.8951], // Winnipeg coordinates
    zoom: 10.5
});

//Home layer
map.on('load', () => {
    // Home Marker
    map.loadImage(
        'https://img.icons8.com/?size=30&id=59809&format=png', // Replace with the actual URL of your home icon
        (error, image) => {
            if (error) throw error;
            map.addImage('home-marker', image);
        
            // Adding Home
            map.addSource('Home', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-97.20314, 49.78456] // Coordinates for your home
                            },

                            //add information
                            "properties":{
                                "Name": "Muchen's Home",
                                "Neighbourhood": "Bridgwater",
                            }
                        }
                        // Add more features for additional homes if needed
                    ]
                }
            });
          
            // Add a symbol layer for homes
            map.addLayer({
                'id': 'Home',
                'type': 'symbol',
                'source': 'Home',
                'layout': {
                    'icon-image': 'home-marker',
                    'icon-size': 1.0 // Adjust this value based on your preference
                }
            });
        }
    );
});


//Home Popups
map.on('contextmenu', 'Home', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const Home = e.features[0];
  
  
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
                <h3>${Home.properties.Name}</h3>
                <img src="./Home.png" alt="Home Image" style="width:100%; max-width:300px; height:auto;">
                <p>Neighbourhood: ${Home.properties.Neighbourhood}</p>
                `)
            .addTo(map);
});


  //Add Polygon to Neighbourhood
  map.on('load', () => {
    map.addSource ('Bridgwater', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "Neighbourhood": "Bridgwater",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#4baf69",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                    [-97.1764735405674, 49.81188765601837],
                    [-97.21381259451056, 49.79957036588665],
                    [-97.21368413500902, 49.778311477666406],
                    [-97.19566522923692, 49.77757308261418],
                    [-97.18957096659443, 49.77922752649859],
                    [-97.1948721466091, 49.78744040598072],
                    [-97.19325820251984, 49.79502163595098],
                    [-97.17419635216902, 49.803125159106976],
                    [-97.17409628395643, 49.80902588345772],
                ]
              ],
              "type": "Polygon"
            },
            "id": 1
          },
          {
            "type": "Feature",
            "properties": {
              "name": "Bridgwater",
            },
            "geometry": {
                "type": "Point",
                "coordinates": [-97.19789982583141, 49.7946860037751] 
            }
          }
                  ]
      }
      });
  
    map.addLayer({
      'id': 'Bridgwater',
      'type': 'fill',
      'source': 'Bridgwater',
      'layout': {},
      'paint': {
              'fill-color': '#f28482',
              'fill-opacity': 0.25,
                }
      });

      map.addLayer({
        'id': 'Bridgwater-label',
        'type': 'symbol',
        'source': 'Bridgwater',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
        });
    });


    

//UofM layer
map.on('load', () => {
    // UofM Marker
    map.loadImage(
        'https://img.icons8.com/?size=30&id=79250&format=png', // Replace with the actual URL of your home icon
        (error, image) => {
            if (error) throw error;
            map.addImage('UofM Marker', image);
        
            // Adding UofM
            map.addSource('UofM', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                        {
                            "type": "Feature",
                            "geometry": {
                                "type": "Point",
                                "coordinates": [-97.13658297675923, 49.807653068729685] // Coordinates for your home
                            },

                            //add information
                            "properties":{
                                "Name": "University of Manitoba",
                                "Description": "Circa-1877 public university with programs such as law, business, native studies & health sciences."
                            }
                        }
                        // Add more features for additional homes if needed
                    ]
                }
            });
          
            // Add a symbol layer for homes
            map.addLayer({
                'id': 'UofM',
                'type': 'symbol',
                'source': 'UofM',
                'layout': {
                    'icon-image': 'UofM Marker',
                    'icon-size': 1.0 // Adjust this value based on your preference
                }
            });
        }
    );
});


//UofM Popups
map.on('contextmenu', 'UofM', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const UofM = e.features[0];
  
  
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
                <h3>${UofM.properties.Name}</h3>
                <img src="./UofM.jpg" alt="UofM Image" style="width:100%; max-width:300px; height:auto;">
                <p>Description: ${UofM.properties.Description}</p>
                `)
            .addTo(map);
});



  //UofM Polygon
  map.on('load', () => {
    map.addSource ('University of Manitoba', {
      "type": 'geojson',
      "data": {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "properties": {
              "School": "University of Manitoba",
              "stroke": "#555555",
              "stroke-width": 2,
              "stroke-opacity": 1,
              "fill": "#ff5c5c",
              "fill-opacity": 0.5
            },
            "geometry": {
              "coordinates": [
                [
                    [-97.14286187919389, 49.81090173828268],
                    [-97.13689362418769, 49.80385992522205],
                    [-97.13170543285337, 49.80565565400811],
                    [-97.12639993823771, 49.80952843764015],
                    [-97.12902126032172, 49.81283590942576],
                    [-97.13694597622259, 49.81224678914696],
                    [-97.13875183867228, 49.8123571090783],

                ]
              ],
              "type": "Polygon"
            },
            "id": 28
          },
          {
            "type": "Feature",
            "properties": {
              "name": "University of Manitoba",
                          },
            "geometry": {
                "type": "Point",
                "coordinates": [-97.13268895781664, 49.8095759675761] 
            }
          }
        ]
      }
      });
  
    map.addLayer({
      'id': 'University of Manitoba',
      'type': 'fill',
      'source': 'University of Manitoba',
      'layout': {},
      'paint': {
              'fill-color': '#2f3e46',
              'fill-opacity': 0.25,
                }
      });
    
      map.addLayer({
        'id': 'UofM-label',
        'type': 'symbol',
        'source': 'University of Manitoba',
        'layout':  {
          'text-field': ['get', 'name'],
          'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
          'text-radial-offset': 0.5,
          'text-justify': 'auto',
            },
          'filter': ['==', '$type', 'Point']
      });
    });


//Airport layer
map.on('load', () => {
  // Airport Marker
  map.loadImage(
      'https://img.icons8.com/?size=30&id=60631&format=png', // Replace with the actual URL of your home icon
      (error, image) => {
          if (error) throw error;
          map.addImage('Airport Marker', image);
      
          // Adding Airport
          map.addSource('Airport', {
              'type': 'geojson',
              'data': {
                  "type": "FeatureCollection",
                  "features": [
                      {
                          "type": "Feature",
                          "geometry": {
                              "type": "Point",
                              "coordinates": [-97.23769260710702, 49.9095567044922] // Coordinates for your home
                          },

                          //add information
                          "properties":{
                              "Name": "Winnipeg Richardson International Airport",
                              "Description": "Airport servicing the Manitoba region & featuring free WiFi plus a children's play area & a chapel."
                          }
                      }
                      // Add more features for additional homes if needed
                  ]
              }
          });
        
          // Add a symbol layer for homes
          map.addLayer({
              'id': 'Airport',
              'type': 'symbol',
              'source': 'Airport',
              'layout': {
                  'icon-image': 'Airport Marker',
                  'icon-size': 1.0 // Adjust this value based on your preference
              }
          });
      }
  );
});


//Airport Popups
map.on('contextmenu', 'Airport', (e) => {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const Airport = e.features[0];


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
              <h3>${Airport.properties.Name}</h3>
              <img src="./Airport.jpg" alt="Airport Image" style="width:100%; max-width:300px; height:auto;">
              <p>Description: ${Airport.properties.Description}</p>
              `)
          .addTo(map);
});



//Measure Distance
const distanceContainer = document.getElementById('distance');

// GeoJSON object to hold our measurement features
const geojson = {
    type: 'FeatureCollection',
    features: []
};

// Used to draw a line between points
const linestring = {
    type: 'Feature',
    geometry: {
        type: 'LineString',
        coordinates: []
    }
};

map.on('load', () => {
    map.addSource('geojson', {
        type: 'geojson',
        data: geojson
    });

    // Add styles to the map
    map.addLayer({
        id: 'measure-points',
        type: 'circle',
        source: 'geojson',
        paint: {
            'circle-radius': 5,
            'circle-color': '#f6bd60'
        },
        filter: ['in', '$type', 'Point']
    });

    map.addLayer({
        id: 'measure-lines',
        type: 'line',
        source: 'geojson',
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': '#f6bd60',
            'line-width': 2.5
        },
        filter: ['in', '$type', 'LineString']
    });

    map.on('click', (e) => {
        const features = map.queryRenderedFeatures(e.point, {
            layers: ['measure-points']
        });

        // Remove the linestring from the group
        // So we can redraw it based on the points collection
        if (geojson.features.length > 1) geojson.features.pop();

        // Clear the Distance container to populate it with a new value
        distanceContainer.innerHTML = '';

        // If a feature was clicked, remove it from the map
        if (features.length) {
            const id = features[0].properties.id;
            geojson.features = geojson.features.filter((point) => {
                return point.properties.id !== id;
            });
        } else {
            const point = {
                type: 'Feature',
                geometry: {
                    type: 'Point',
                    coordinates: [e.lngLat.lng, e.lngLat.lat]
                },
                properties: {
                    id: String(new Date().getTime())
                }
            };

            geojson.features.push(point);
        }

        if (geojson.features.length > 1) {
            linestring.geometry.coordinates = geojson.features.map(
                (point) => {
                    return point.geometry.coordinates;
                }
            );

            geojson.features.push(linestring);

            // Populate the distanceContainer with total distance
            const value = document.createElement('pre');
            value.textContent =
                `Total distance: ${
                    turf.length(linestring).toLocaleString()
                }km`;
            distanceContainer.appendChild(value);
        }

        map.getSource('geojson').setData(geojson);
    });
});

map.on('mousemove', (e) => {
    const features = map.queryRenderedFeatures(e.point, {
        layers: ['measure-points']
    });
    // UI indicator for clicking/hovering a point on the map
    map.getCanvas().style.cursor = features.length ?
        'pointer' :
        'crosshair';
});

//Ottawa Home Layer
map.on('load', () => {
  // Ottawa Home
  map.loadImage(
      'https://img.icons8.com/?size=30&id=67881&format=png', // Replace with the actual URL of your home icon
      (error, image) => {
          if (error) throw error;
          map.addImage('OHome Marker', image);
      
          // Adding OHome
          map.addSource('OHome', {
              'type': 'geojson',
              'data': {
                  "type": "FeatureCollection",
                  "features": [
                      {
                          "type": "Feature",
                          "geometry": {
                              "type": "Point",
                              "coordinates": [-75.71998290882117, 45.36130432579201] // Coordinates for your home
                          },

                          //add information
                          "properties":{
                              "Name": "Ottawa Home",
                              "Neighbourhood": "Nepean"
                          }
                      }
                      // Add more features for additional homes if needed
                  ]
              }
          });
        
          // Add a symbol layer for homes
          map.addLayer({
              'id': 'OHome',
              'type': 'symbol',
              'source': 'OHome',
              'layout': {
                  'icon-image': 'OHome Marker',
                  'icon-size': 1.0 // Adjust this value based on your preference
              }
          });
      }
  );
});


//Ohome Popups
map.on('contextmenu', 'OHome', (e) => {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const OHome = e.features[0];


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
              <h3>${OHome.properties.Name}</h3>
              <img src="./OHome.png" alt="OHome Image" style="width:100%; max-width:300px; height:auto;">
              <p>Description: ${OHome.properties.Neighbourhood}</p>
              `)
          .addTo(map);
});


//Carleton Layer
map.on('load', () => {
  // Carleton
  map.loadImage(
      'https://img.icons8.com/?size=30&id=ptQ1FFgqAJQP&format=png', // Replace with the actual URL of your home icon
      (error, image) => {
          if (error) throw error;
          map.addImage('Carleton Marker', image);
      
          // Adding Carleton
          map.addSource('Carleton', {
              'type': 'geojson',
              'data': {
                  "type": "FeatureCollection",
                  "features": [
                      {
                          "type": "Feature",
                          "geometry": {
                              "type": "Point",
                              "coordinates": [-75.69601610485378, 45.38791287144083] // Coordinates for your home
                          },

                          //add information
                          "properties":{
                              "Name": "Carleton University",
                              "Description": "Public research university with popular public policy, journalism & international affairs programs."
                          }
                      }
                      // Add more features for additional homes if needed
                  ]
              }
          });
        
          // Add a symbol layer for homes
          map.addLayer({
              'id': 'Carleton',
              'type': 'symbol',
              'source': 'Carleton',
              'layout': {
                  'icon-image': 'Carleton Marker',
                  'icon-size': 1.0 // Adjust this value based on your preference
              }
          });
      }
  );
});


//Carleton Popups
map.on('contextmenu', 'Carleton', (e) => {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const Carleton = e.features[0];


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
              <h3>${Carleton.properties.Name}</h3>
              <img src="./Carleton.jpg" alt="Carleton Image" style="width:100%; max-width:300px; height:auto;">
              <p>Description: ${Carleton.properties.Description}</p>
              `)
          .addTo(map);
});

//OAirport Layer
map.on('load', () => {
  // OAirport
  map.loadImage(
      'https://img.icons8.com/?size=30&id=62222&format=png', // Replace with the actual URL of your home icon
      (error, image) => {
          if (error) throw error;
          map.addImage('OAirport Marker', image);
      
          // Adding OAirport
          map.addSource('OAirport', {
              'type': 'geojson',
              'data': {
                  "type": "FeatureCollection",
                  "features": [
                      {
                          "type": "Feature",
                          "geometry": {
                              "type": "Point",
                              "coordinates": [-75.66751147013088, 45.32308589523252] // Coordinates for your home
                          },

                          //add information
                          "properties":{
                              "Name": "Ottawa Macdonald-Cartier International Airport",
                              "Description": "Long-standing Ontario-based airport featuring free WiFi plus a chapel & a variety of shops."
                          }
                      }
                      // Add more features for additional homes if needed
                  ]
              }
          });
        
          // Add a symbol layer for homes
          map.addLayer({
              'id': 'OAirport',
              'type': 'symbol',
              'source': 'OAirport',
              'layout': {
                  'icon-image': 'OAirport Marker',
                  'icon-size': 1.0 // Adjust this value based on your preference
              }
          });
      }
  );
});


//OAirport Popups
map.on('contextmenu', 'OAirport', (e) => {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const OAirport = e.features[0];


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
              <h3>${OAirport.properties.Name}</h3>
              <img src="./OAirport.jpg" alt="OAirport Image" style="width:100%; max-width:300px; height:auto;">
              <p>Description: ${OAirport.properties.Description}</p>
              `)
          .addTo(map);
});


//CHome Layer
map.on('load', () => {
  // CHome
  map.loadImage(
      'https://img.icons8.com/?size=30&id=60641&format=png', // Replace with the actual URL of your home icon
      (error, image) => {
          if (error) throw error;
          map.addImage('CHome Marker', image);
      
          // Adding CHome
          map.addSource('CHome', {
              'type': 'geojson',
              'data': {
                  "type": "FeatureCollection",
                  "features": [
                      {
                          "type": "Feature",
                          "geometry": {
                              "type": "Point",
                              "coordinates": [112.43634855928363, 34.64146247649127] // Coordinates for your home
                          },

                          //add information
                          "properties":{
                              "Name": "Luoyang",
                              "Description": "Luoyang, city, northwestern Henan sheng (province), east-central China. It was important in history as the capital of 9 ruling dynasties (13 dynasties in total) and as a Buddhist centre. The contemporary city is divided into an east town and a west town."
                          }
                      }
                      // Add more features for additional homes if needed
                  ]
              }
          });
        
          // Add a symbol layer for homes
          map.addLayer({
              'id': 'CHome',
              'type': 'symbol',
              'source': 'CHome',
              'layout': {
                  'icon-image': 'CHome Marker',
                  'icon-size': 1.0 // Adjust this value based on your preference
              }
          });
      }
  );
});


//CHome Popups
map.on('contextmenu', 'CHome', (e) => {
  const coordinates = e.features[0].geometry.coordinates.slice();
  const CHome = e.features[0];


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
              <h3>${CHome.properties.Name}</h3>
              <img src="./Luoyang.jpg" alt="CHome Image" style="width:100%; max-width:300px; height:auto;">
              <p>Description: ${CHome.properties.Description}</p>
              `)
          .addTo(map);
});


//Keyboard Interaction - move between Winnipeg and Ottawa
document.addEventListener('keydown', (event) => {
  const key = event.key.toLowerCase();

  switch (key) {
      case 'o':
          map.flyTo({ center: [-75.6972, 45.4215], zoom: 11 }); // Ottawa coordinates
          break;
      case 'w':
          map.flyTo({ center: [-97.1384, 49.8951], zoom: 10.5 }); // Winnipeg coordinates
          break;
      case 'c':
          map.flyTo({ center: [112.45076363784938, 34.61822776111582, ], zoom: 10 }); // China Luoyang coordinates
          break;
      // Add more cases for other keys or locations if needed
  }
});
