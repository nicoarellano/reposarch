

const map = new maplibregl.Map({
    container: 'map',
    style:
        'light.json',
    center: [-18.128288, 65.0],
    zoom: 5

});

map.on('load', function () {
  map.loadImage('icon.png',
  // Add an image to use as a custom marker
  function (error, image) {
  if (error) throw error;
  map.addImage('custom-Marker', image);

//map.on('load', async () => {
    // iceland picture
  //const image = map.loadImage('icon.png');
    //map.addImage('custom-marker',image.data);

        // Adding destinations
        map.addSource('iceland', {
          'type': 'geojson',
          'data': {
            "type": "FeatureCollection",
            "features": [
                // blue lagoon
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-22.449, 63.881]
                },
                "properties": {
                  "PlaceName": "Blue Lagoon",
                  "Location": "Grindavik",
                  "Image": "./icelandimg/bluelagoon.jpg"
                }
              },
                   // bridge between two continents
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-22.675, 63.868]
                },
                "properties": {
                  "PlaceName": "Bridge between two continents",
                  "Location": "Reykjanesbaer",
                  "Image": "./icelandimg/continents.jpg"
                }
              },    
                   // godafoss
                   {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [-17.548, 65.683]
                    },
                    "properties": {
                      "PlaceName": "Godafoss waterfall",
                      "Location": "Godafoss",
                      "Image": "./icelandimg/godafoss.jpg"
                    }
                  },     
                   // game of thrones cave
                   {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [-16.905, 65.625]
                    },
                    "properties": {
                      "PlaceName": "Game of thrones cave",
                      "Location": "middle of nowhere",
                      "Image": "./icelandimg/got.jpg"
                    }
                  },         
                     // zipline
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-18.126, 65.684]
                        },
                        "properties": {
                          "PlaceName": "Zipline",
                          "Location": "Akuyeri",
                          "Image": "./icelandimg/zipline.jpg"
                        }
                      },      
                      // gullfoss
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-20.120, 64.327]
                        },
                        "properties": {
                          "PlaceName": "gullfoss waterfall",
                          "Location": "golden circle",
                          "Image": "./icelandimg/gullfoss.jpg"
                        }
                      },  
                       // videy
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-21.861, 64.163]
                        },
                        "properties": {
                          "PlaceName": "June 21, midnight",
                          "Location": "Videy, Reyjkavik",
                          "Image": "./icelandimg/videy.jpg"
                        }
                      },    
                      // seljalandsfoss
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-19.989, 63.615]
                        },
                        "properties": {
                          "PlaceName": "seljalandsfoss",
                          "Location": "Iceland",
                          "Image": "./icelandimg/seljalandsfoss.jpg"
                        }
                      },  
                      // skogafoss
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-19.5129, 63.531]
                        },
                        "properties": {
                          "PlaceName": "skogafoss",
                          "Location": "Iceland",
                          "Image": "./icelandimg/skogafoss.jpg"
                        }
                      },  
                       // glacier tongue
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-16.940, 64.021]
                        },
                        "properties": {
                          "PlaceName": "glacier thongue",
                          "Location": "Skaftafellsjokull gonguleid",
                          "Image": "./icelandimg/Skaftafellsjokullgonguleid.jpg"
                        }
                      },  
                      // diamond beach
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-16.178, 64.042]
                        },
                        "properties": {
                          "PlaceName": "diamond beach",
                          "Location": "Diamond beach",
                          "Image": "./icelandimg/diamondbeach.jpg"
                        }
                      }, 
                      // vik
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-19.041, 63.402]
                        },
                        "properties": {
                          "PlaceName": "Reynisdrangar cliffs",
                          "Location": "Vik",
                          "Image": "./icelandimg/vik.jpg"
                        }
                      }, 
                      // harpa
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-21.931, 64.149]
                        },
                        "properties": {
                          "PlaceName": "Harpa concert hall",
                          "Location": "Reyjkavik",
                          "Image": "./icelandimg/harpa.jpg"
                        }
                      }, 
            ]
          }
        });
  
        // Add a symbol layer for destination
        map.addLayer({
          'id': 'iceland',
          'type': 'symbol',
          'source': 'iceland',
          'layout': {
            'icon-image': 'custom-Marker',
            'icon-size': 0.1,
            

          }
        });
      }
    );
  
    // Create a new popup instance
    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false
    });
  
    // Park Popups on hover
    map.on("mouseenter", "iceland", (e) => {

      
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = 'pointer';
  
      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.Description;
  
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
  
      // Populate the popup and set its coordinates based on the feature found.
      popup.setLngLat(coordinates).setHTML(`
        <h3>${e.features[0].properties.PlaceName}</h3>
        <img src="${e.features[0].properties.Image}" alt="${e.features[0].properties.PlaceName}" style="max-width: 100%; height: auto;">
        <p>Location: ${e.features[0].properties.Location}</p>
      `).addTo(map);
    });
  
    
  
  
    map.on('mouseleave', 'iceland', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
        
    });
  });