const map = new maplibregl.Map({
    container: 'map',
    style:
        'darkADJUSTED.json',
    center: [-96.81595411588849,49.77154223266254],
    zoom: 3
});

map.on('load', () => {
    // Parks picture
    map.loadImage(
      'Pin.png',
      (error, image) => {
        if (error) throw error;
        map.addImage('park-icon', image);
  
        // Adding parks
        map.addSource('CanadaTour', {
          'type': 'geojson',
          'data': {
            "type": "FeatureCollection",
            "features": [
                // Qausuittuq
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-100.203128, 76.073125]
                },
                "properties": {
                  "PlaceName": "Qausuittuq National Park",
                  "Location": "Nunavut",
                  "Image": "./Park Images/Qausuittuq.jpg"
                }
              },
                // Quttinirpaaq
                {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [-70.493653, 82.179317]
                    },
                    "properties": {
                      "PlaceName": "Quttinirpaaq National Park",
                      "Location": "Nunavut",
                      "Image": "./Park Images/Quttinirpaaq.jpg"
                    }
                  },
                   // Aulavik
                {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [-119.619404, 73.765207]
                    },
                    "properties": {
                      "PlaceName": "Quttinirpaaq National Park",
                      "Location": "Northwest Territories",
                      "Image": "./Park Images/Aulavik.jpg"
                    }
                  },
                  // Sirmilik
                  {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [-78.561627, 73.254666]
                    },
                    "properties": {
                      "PlaceName": "Sirmilik National Park",
                      "Location": "Nunavut",
                      "Image": "./Park Images/Sirmilik.jpg"
                    }
                  }, 
                   // Ivvavik
                   {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [-139.689455, 69.104278]
                    },
                    "properties": {
                      "PlaceName": "Ivvavik National Park",
                      "Location": "Yukon",
                      "Image": "./Park Images/Ivvavik.jpg"
                    }
                  }, 
                     // Vuntut
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-139.801411, 68.376539]
                        },
                        "properties": {
                          "PlaceName": "Vuntut National Park",
                          "Location": "Yukon",
                          "Image": "./Park Images/Vuntut.jpg"
                        }
                      }, 
                      // Tuktut Nogait
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-122.006437, 68.69786]
                        },
                        "properties": {
                          "PlaceName": "Tuktut Nogait National Park",
                          "Location": "Northwest Territories",
                          "Image": "./Park Images/Tuktut Nogait.jpg"
                        }
                      },
                       // Ukkusiksalik
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-89.808006, 65.764741]
                        },
                        "properties": {
                          "PlaceName": "Ukkusiksalik National Park",
                          "Location": "Nunavut",
                          "Image": "./Park Images/Ukkusiksalik.jpg"
                        }
                      },
                       // Auyuittuq
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-65.861231, 67.345886]
                        },
                        "properties": {
                          "PlaceName": "Auyuittuq National Park",
                          "Location": "Nunavut",
                          "Image": "./Park Images/Auyuittuq.jpg"
                        }
                      },
                       // Torngat Mountains
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-64.109879, 59.346091]
                        },
                        "properties": {
                          "PlaceName": "Torngat Mountains National Park",
                          "Location": "Newfoundland and Labrador",
                          "Image": "./Park Images/Torngat Mountains.jpg"
                        }
                      },
                       // Wapusk
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-93.334936, 57.951034]
                        },
                        "properties": {
                          "PlaceName": "Wapusk National Park",
                          "Location": "Manitoba",
                          "Image": "./Park Images/Wapusk.jpg"
                        }
                      },
                         // Wood Buffalo
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-112.729228, 59.383053]
                        },
                        "properties": {
                          "PlaceName": "Wood Buffalo National Park",
                          "Location": "Alberta",
                          "Image": "./Park Images/Wood Buffalo.jpg"
                        }
                      },
                       // Nahanni
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-126.252597, 61.688577]
                        },
                        "properties": {
                          "PlaceName": "Nahanni National Park Reserve",
                          "Location": "Northwest Territories",
                          "Image": "./Park Images/Nahanni.jpg"
                        }
                      },
                       // Thaidene Nëné
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-110.390625, 61.773123]
                        },
                        "properties": {
                          "PlaceName": "Thaidene Nëné National Park Reserve",
                          "Location": "Northwest Territories",
                          "Image": "./Park Images/Thaidene.jpg"
                        }
                      },
                        // Nááts'įhch'oh
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-128.144531, 62.754726]
                        },
                        "properties": {
                          "PlaceName": "Nááts'įhch'oh National Park Reserve",
                          "Location": "Northwest Territories",
                          "Image": "./Park Images/Naats.jpg"
                        }
                      },
                      // Kluane
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-139.18986, 60.665033]
                        },
                        "properties": {
                          "PlaceName": "Kluane National Park and Reserve",
                          "Location": "Yukon",
                          "Image": "./Park Images/Kluane.jpg"
                        }
                      },
                       // Akami-Uapishku-KakKasuak-Mealy
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-60.7571, 54.5150]
                        },
                        "properties": {
                          "PlaceName": "Akami-Uapishku-KakKasuak-Mealy Mountains National Park Reserve",
                          "Location": "Newfoundland and Labrador",
                          "Image": "./Park Images/Akami.jpg"
                        }
                      },
                      // Gros Morne
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-57.7813, 49.5802]
                        },
                        "properties": {
                          "PlaceName": "Gros Morne National Park",
                          "Location": "Newfoundland and Labrador",
                          "Image": "./Park Images/Gros.jpg"
                        }
                      },
                       // Terra Nova
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-53.7568, 48.5244]
                        },
                        "properties": {
                          "PlaceName": "Terra Nova National Park",
                          "Location": "Newfoundland and Labrador",
                          "Image": "./Park Images/Terra.jpg"
                        }
                      },
                      // Mingan Archipelago
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-63.4364, 50.2411]
                        },
                        "properties": {
                          "PlaceName": "Mingan Archipelago National Park Reserve",
                          "Location": "Quebec",
                          "Image": "./Park Images/Mingan.jpg"
                        }
                      },
                       // Forillon
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-64.3315, 48.9331]
                        },
                        "properties": {
                          "PlaceName": "Forillon National Park",
                          "Location": "Quebec",
                          "Image": "./Park Images/Forillon.jpg"
                        }
                      },
                       // Cape Breton
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-60.5421, 46.6617]
                        },
                        "properties": {
                          "PlaceName": "Cape Breton Highlands National Park",
                          "Location": "Nova Scotia",
                          "Image": "./Park Images/Cape.jpg"
                        }
                      },
                      // Sable Island
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-60.0180, 43.9333]
                        },
                        "properties": {
                          "PlaceName": "Sable Island National Park Reserve",
                          "Location": "Nova Scotia",
                          "Image": "./Park Images/Sable.jpg"
                        }
                      },
                       // Prince Edward
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-63.3512, 46.4695]
                        },
                        "properties": {
                          "PlaceName": "Prince Edward Island National Park",
                          "Location": "Prince Edward Island",
                          "Image": "./Park Images/PEI.jpg"
                        }
                      },
                      // Kouchibouguac
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-64.7753, 46.5357]
                        },
                        "properties": {
                          "PlaceName": "Kouchibouguac National Park",
                          "Location": "New Brunswick",
                          "Image": "./Park Images/Kouchibouguac.jpg"
                        }
                      },
                      // Fundy
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-64.7424, 45.7262]
                        },
                        "properties": {
                          "PlaceName": "Fundy National Park",
                          "Location": "New Brunswick",
                          "Image": "./Park Images/Fundy.jpg"
                        }
                      },
                       // Kejimkujik
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-65.1742, 44.5017]
                        },
                        "properties": {
                          "PlaceName": "Kejimkujik National Park and National Historic Site",
                          "Location": "Nova Scotia",
                          "Image": "./Park Images/Keji.jpg"
                        }
                      },
                      // La Mauricie
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-72.7485, 46.6005]
                        },
                        "properties": {
                          "PlaceName": "La Mauricie National Park",
                          "Location": "Quebec",
                          "Image": "./Park Images/Mauricie.jpg"
                        }
                      },
                       // Thousand Islands
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-75.9411, 44.3357]
                        },
                        "properties": {
                          "PlaceName": "Thousand Islands National Park",
                          "Location": "Ontario",
                          "Image": "./Park Images/Thousand.jpg"
                        }
                      },
                      // Bruce Peninsula
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-81.5179, 45.2376]
                        },
                        "properties": {
                          "PlaceName": "Bruce Peninsula National Park",
                          "Location": "Ontario",
                          "Image": "./Park Images/Bruce.jpg"
                        }
                      },
                      // Georgian Bay
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-81.7537, 45.0870]
                        },
                        "properties": {
                          "PlaceName": "Georgian Bay Islands National Park",
                          "Location": "Ontario",
                          "Image": "./Park Images/Georgian.jpg"
                        }
                      },
                       // Rouge
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-79.2455, 43.8577]
                        },
                        "properties": {
                          "PlaceName": "Rouge National Urban Park",
                          "Location": "Ontario",
                          "Image": "./Park Images/Rouge.jpg"
                        }
                      },
                      // Point Pelee
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-82.5654, 41.9492]
                        },
                        "properties": {
                          "PlaceName": "Point Pelee National Park",
                          "Location": "Ontario",
                          "Image": "./Park Images/Pelee.jpg"
                        }
                      },
                      // Pukaskwa
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-81.7927, 48.8243]
                        },
                        "properties": {
                          "PlaceName": "Pukaskwa National Park",
                          "Location": "Ontario",
                          "Image": "./Park Images/Pukaskwa.jpg"
                        }
                      },
                      // Riding Mountain
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-99.9573, 50.9697]
                        },
                        "properties": {
                          "PlaceName": "Riding Mountain National Park",
                          "Location": "Manitoba",
                          "Image": "./Park Images/Riding.jpg"
                        }
                      },
                      // Prince Albert
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-105.1813, 53.9608]
                        },
                        "properties": {
                          "PlaceName": "Prince Albert National Park",
                          "Location": "Saskatchewan",
                          "Image": "./Park Images/Prince.jpg"
                        }
                      },
                      // Grasslands
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-106.2425, 49.0462]
                        },
                        "properties": {
                          "PlaceName": "Grasslands National Park",
                          "Location": "Saskatchewan",
                          "Image": "./Park Images/Grasslands.jpg"
                        }
                      },
                       // Elk Island
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-112.9032, 53.6222]
                        },
                        "properties": {
                          "PlaceName": "Elk Island National Park",
                          "Location": "Alberta",
                          "Image": "./Park Images/Elk.jpg"
                        }
                      },
                       // Jasper
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-118.0801, 52.8744]
                        },
                        "properties": {
                          "PlaceName": "Jasper National Park",
                          "Location": "Alberta",
                          "Image": "./Park Images/Jasper.jpg"
                        }
                      },
                        // Waterton
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-114.0432, 49.0833]
                        },
                        "properties": {
                          "PlaceName": "Waterton Lakes National Park",
                          "Location": "Alberta",
                          "Image": "./Park Images/Waterton.jpg"
                        }
                      },
                       // Gwaii Haanas
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-131.7265, 53.1970]
                        },
                        "properties": {
                          "PlaceName": "Gwaii Haanas National Park Reserve, National Marine Conservation Area Reserve, and Haida Heritage Site",
                          "Location": "British Columbia",
                          "Image": "./Park Images/Gwaii.jpg"
                        }
                      },
                       // Pacific Rim
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-125.2308, 48.7465]
                        },
                        "properties": {
                          "PlaceName": "Pacific Rim National Park Reserve",
                          "Location": "British Columbia",
                          "Image": "./Park Images/Pacific.jpg"
                        }
                      },
                      // Gulf Islands
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-123.3970, 48.6340]
                        },
                        "properties": {
                          "PlaceName": "Gulf Islands National Park Reserve",
                          "Location": "British Columbia",
                          "Image": "./Park Images/Gulf.jpg"
                        }
                      },
                       // Banff
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-115.5287, 51.4968]
                        },
                        "properties": {
                          "PlaceName": "Banff National Park",
                          "Location": "Alberta",
                          "Image": "./Park Images/Banff.jpg"
                        }
                      },
                      // Yoho
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-116.5375, 51.5000]
                        },
                        "properties": {
                          "PlaceName": "Yoho National Park",
                          "Location": "British Columbia",
                          "Image": "./Park Images/Yoho.jpg"
                        }
                      },
                      // Glacier
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-118.2295, 51.3052]
                        },
                        "properties": {
                          "PlaceName": "Glacier National Park",
                          "Location": "British Columbia",
                          "Image": "./Park Images/Glacier.jpg"
                        }
                      },
                        // Mount Revelstoke
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-118.1900, 51.3950]
                        },
                        "properties": {
                          "PlaceName": "Mount Revelstoke National Park",
                          "Location": "British Columbia",
                          "Image": "./Park Images/Mount.jpg"
                        }
                      },
                      // Kootenay
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-116.0735, 50.9997]
                        },
                        "properties": {
                          "PlaceName": "Kootenay National Park",
                          "Location": "British Columbia",
                          "Image": "./Park Images/Kootenay.jpg"
                        }
                      },
                      
            ]
          }
        });
  
        // Add a symbol layer for parks
        map.addLayer({
          'id': 'parks',
          'type': 'symbol',
          'source': 'CanadaTour',
          'layout': {
            'icon-image': 'park-icon',
            'icon-size': 0.3
          }
        });
      }
    );
  
    // Create a new popup instance
    const popup = new maplibregl.Popup();
  
    // Park Popups on hover
    map.on("mouseenter", "parks", (e) => {
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
  
    map.on('mousemove', 'parks', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const park = e.features[0];
  
      if (park.id !== hoveredParkId) {
        hoveredParkId = park.id;
  
        const imageUrl = park.properties.Image || 'https://example.com/default-image.jpg';
  
        new maplibregl.Popup({
          closeButton: false // Hide the close button
        })
          .setLngLat(coordinates)
          .setHTML(`
            <h3>${park.properties.PlaceName}</h3>
            <img src="${park.properties.Image}" alt="${park.properties.PlaceName}" style="max-width: 100%; height: auto;">
            <p>Location: ${park.properties.Location}</p>
            <p>Description: ${park.properties.Description}</p>
          `)
          .addTo(map);
      }
    });
  
    map.on('mouseout', 'Parks', () => {
      if (hoveredParkId) {
        map.getCanvas().style.cursor = '';
        hoveredParkId = null;
      }
      
    });
  });