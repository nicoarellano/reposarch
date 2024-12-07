const map = new maplibregl.Map({
  container: 'map',
  style:
      'light.json',
  center: [-96.81595411588849,49.77154223266254],
  zoom: 3
});
map.on('load', () => {
  //pin photo 
  map.loadImage(
    'Starfish.png',
    (error, image) => {
      if (error) throw error;
      map.addImage('Starfish.png', image);

      // Adding travels
      map.addSource('CanadaTour', {
        'type': 'geojson',
        'data': {
          "type": "FeatureCollection",
          "features": [
              // SanDiego
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-117.1474859899931, 32.74099158231063]
              },
              "properties": {
                "PlaceName": "San Diego",
                "Location": "California",
                "Image": "./mapimages/SD.jpg"
              }
              },
                    // SF
                   {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-122.43906096641514, 37.78008624181167]
                      },
                      "properties": {
                        "PlaceName": "San Fransisco",
                        "Location": "California",
                        "Image": "./mapimages/SF.jpg"
                      }
                    },
                     // LA
                   {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-118.27995109506813, 34.040525123120425]
                      },
                      "properties": {
                        "PlaceName": "Los Angeles",
                        "Location": "California",
                        "Image": "./mapimages/LA.jpg"
                      }
                    },
                    // LV
                   {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-115.16059369165588, 36.16092959125445]
                      },
                      "properties": {
                        "PlaceName": "Las Vegas",
                        "Location": "Nevada",
                        "Image": "./mapimages/LV.jpg"
                      }
                    },
                    // Miami
                   {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-80.21160937375691, 25.769399457151827]
                      },
                      "properties": {
                        "PlaceName": "Miami",
                        "Location": "Florida",
                        "Image": "./mapimages/Miami.jpg"
                      }
                    },
                      // Mexico
                   {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-86.87158690173356, 21.152902128714793]
                      },
                      "properties": {
                        "PlaceName": "Cancun",
                        "Location": "Mexico",
                        "Image": "./mapimages/Mexico.jpg"
                      }
                    },
                     // Jordan
                   {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [35.44436373816214, 30.328465573150314]
                    },
                    "properties": {
                      "PlaceName": "Petra",
                      "Location": "Jordan",
                      "Image": "./mapimages/Jordan.jpg"
                    }
                  },
                    //Kenya
                    {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [35.129742832753706, -1.4819822450491402]
                      },
                      "properties": {
                        "PlaceName": "Maasai Mara",
                        "Location": "Kenya",
                        "Image": "./mapimages/Kenya.jpg"
                      }
                    },
                    //Rome
                    {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [12.48174076804869, 41.906376185016995]
                      },
                      "properties": {
                        "PlaceName": "Rome",
                        "Location": "Italy",
                        "Image": "./mapimages/Rome.jpg"
                      }
                    },
                    //Florence
                    {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [11.25744444206787, 43.779928550640754]
                      },
                      "properties": {
                        "PlaceName": "Florence",
                        "Location": "Italy",
                        "Image": "./mapimages/Florence.jpg"
                      }
                    },
                    //Santa maria
                    {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-25.10343674862947, 36.979745344961586]
                      },
                      "properties": {
                        "PlaceName": "Santa Maria Azores",
                        "Location": "Portugal",
                        "Image": "./mapimages/santamaria.jpg"
                      }
                    },
                    //Mykonos
                    {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [25.441226914532052, 36.40740185880659]
                      },
                      "properties": {
                        "PlaceName": "Santorini",
                        "Location": "Greece",
                        "Image": "./mapimages/greece.jpg"
                      }
                    },
                      //Ottawa
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-75.69867865534997, 45.40416339852037]
                        },
                        "properties": {
                          "PlaceName": "Ottawa",
                          "Location": "Ontario",
                          "Image": "./mapimages/ottawa.jpg"
                        }
                      },
                      //Minnesota
                      {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-93.2752142987294, 44.96240851606607]
                        },
                        "properties": {
                          "PlaceName": "Minneapolis",
                          "Location": "Minnesota",
                          "Image": "./mapimages/Minnesota.jpg"
                        }
                      },
                       //Chicago
                       {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-87.62691934040828, 41.887822751836694]
                        },
                        "properties": {
                          "PlaceName": "Chicago",
                          "Location": "Illinois",
                          "Image": "./mapimages/Chicago.jpg"
                        }
                      },
                  // TO
                   {
                      "type": "Feature",
                      "geometry": {
                        "type": "Point",
                        "coordinates": [-79.36845677655806, 43.66152108244681]
                      },
                      "properties": {
                        "PlaceName": "Toronto",
                        "Location": "Ontario",
                        "Image": "./mapimages/Toronto.jpg"
                      }
                    },
                    
          ]
        }
      });
      

      // Add a symbol layer for travels
      map.addLayer({
        'id': 'travels',
        'type': 'symbol',
        'source': 'CanadaTour',
        'layout': {
          'icon-image': 'Starfish.png',
          'icon-size': 0.04
        }
      });
    }
  );

  // Create a new popup instance
  const popup = new maplibregl.Popup();

  // travel Popups on hover
  map.on("mouseenter", "travels", (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = "pointer";

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

  map.on('mousemove', 'travels', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const travel = e.features[0];

    if (travel.id !== hoveredtravelId) {
      hoveredtravelId = travel.id;

      const imageUrl = travel.properties.Image || 'https://example.com/default-image.jpg';

      new maplibregl.Popup({
        closeButton: false // Hide the close button
      })
        .setLngLat(coordinates)
        .setHTML(`
          <h3>${travel.properties.PlaceName}</h3>
          <img src="${travel.properties.Image}" alt="${travel.properties.PlaceName}" style="max-width: 100%; height: auto;">
          <p>Location: ${travel.properties.Location}</p>
          <p>Description: ${travel.properties.Description}</p>
        `)
        .addTo(map);
    }
  });

  map.on('mouseout', 'travels', () => {
    if (hoveredtravelId) {
      map.getCanvas().style.cursor = '';
      hoveredtravelId = null;
    }
    
  });
});