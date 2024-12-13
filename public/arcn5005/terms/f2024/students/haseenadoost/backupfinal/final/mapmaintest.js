const map = new maplibregl.Map({
    container: 'map',
    style:
        'SATELITE.json',
    center: [-96.81595411588849,49.77154223266254],
    zoom: 3
});



map.on('load', () => {
    // LANDSCAPES picture
    map.loadImage(
      'postindustrialactualfinalagain.png',
      (error, image) => {
        if (error) throw error;
        map.addImage('park-icon', image);
  
        // Adding LANDSCAPES
        map.addSource('CanadaTour', {
          'type': 'geojson',
          'data': {
            "type": "FeatureCollection",
            "features": [
                // North Maple Regional Park
              {
                "type": "Feature",
                "geometry": {
                  "type": "Point",
                  "coordinates": [-79.5156, 43.8614]
                },
                "properties": {
                  "PlaceName": "NORTH MAPLE REGIONAL PARK",
                  "Location": "11085 Keele St, Vaughan, ON L6A 1S1",
                  "Description":"Previously, the second largest landfill in North America, and the largest in Canada, the Keele Valley Landfill was transformed into the North Maple Regional Park, as a the residential community of Maple began to grow around the landfill, posing health risks to potential residents. Today the park houses 2 fifa sized soccer fields. ",
                  "Image": "northmapleregional.jpg"
                }
              },
                // Tommy Thompson Park
                {
            
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-79.3386, 43.6277] // Tommy Thompson Park
                        },
                        "properties": {
                          "PlaceName": "TOMMY THOMPSON PARK",
                          "Location": "1 Leslie St, Toronto, ON M4M 3M2",
                          "Image": "tommythompsonpark.jpg",
                          "Description": "Tommy Thompson Park originated from landfill of construction debris in the 1950. Overtime in accidental wilderness, vegetation took over the land, transforming into an oasis for different speces, and on of Toronto's most unique lakefill parks."
            
                        }
                    
                  },
                   // The Port Lands 
                   {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [-79.3448, 43.6475] // The Port Lands
                    },
                    "properties": {
                      "PlaceName": "THE PORT LANDS",
                      "Location": "Port Lands, Toronto, ON",
                      "Image": "theportlands.jpg",
                      "Description": "A historic industrial zone under revitalization, transforming into a sustainable mixed-use community with naturalized waterfront spaces. "
                    }
                  
                  },
                  // Seattle GasWorks Park 
                  {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [-122.3344, 47.6456]
                    },
                    "properties": {
                      "PlaceName": "GAS WORKS PARK",
                      "Location": "SEATTLE, WASHINGTON",
                      "Image": "gasworkspark.jpg",
                      "Description": "A former gasification plant repurposed into a green space with industrial remnants that celebrate its history."
                    }
                  }, 
                   // Parc de la Villette – Paris, France

                   {
                    "type": "Feature",
                    "geometry": {
                      "type": "Point",
                      "coordinates": [2.3927, 48.8919]
                    },
                    "properties": {
                      "PlaceName": "PARC DE LA VILLETTE",
                      "Location": "Paris France",
                      "Image": "laviletteparis.jpg",
                      "Description": "An avant-garde cultural and recreational park blending open green spaces with modern architecture and cultural venues."
                    }
                  }, 
                     // FRESH KILLS PARK NEW YORK
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-74.1910, 40.5764]

            
                        },
                        "properties": {
                          "PlaceName": "FRESH KILLS PARK ",
                          "Location": "NEW YORK",
                          "Image": "freshkills.jpg",
                           "Description": "A monumental transformation of the world’s largest landfill into a sprawling ecological park with wetlands and recreational areas."
                        }
                      }, 
                      // COLLINGWOOD HABOURVIEW PARK
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-80.2264, 44.5042]
                        },
                        "properties": {
                          "PlaceName": "COLLINGWOOD HARBOURVIEW PARK",
                          "Location": "ONTARIO",
                          "Image": "collingwoodwaterfrontpark.jpg",
                          "Description": "This Ontario waterfront park offers scenic trails, picnic spots, and vistas of Georgian Bay, replacing industrial docks."
                        }
                      },
                       //CHICAGO WATERFRONT NAVY PIER 
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-87.6040, 41.8917]
                        },
                        "properties": {
                          "PlaceName": "Chicago Navy Pier",
                          "Location": "Ilinois",
                          "Image": "navypier.jpg",
                          "Description": " A transformed shipping terminal that now offers vibrant public spaces, attractions, and cultural events on Lake Michigan."
                        }
                      },
                       // Little Island Park 
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-74.0102, 40.7411]
                        },
                        "properties": {
                          "PlaceName": "Little Island Park",
                          "Location": "New York",
                          "Image": "littleislandpark.jpg",
                          "Description": "An innovative park on the Hudson River with undulating landscapes, performance spaces, and water views."
                        }
                      },
                       // Battery Park
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-74.0170, 40.7033],
                          "Description": " A historical waterfront park with lush gardens, walkways, and monuments, symbolizing New York's maritime past."
                        },
                        "properties": {
                          "PlaceName": "Battery Park",
                          "Location": "New York",
                          "Image": "batterypark.jpg"
                        }
                      },
                       // Jim Tovey Park
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-79.5614, 43.5658]
                        },
                        "properties": {
                          "PlaceName": "Jim Tovey Park",
                          "Location": "Mississauga",
                          "Image": "jimtoveypark.jpg",
                          "Description": " A waterfront restoration project turning former industrial lands into an urban green space that supports biodiversity."
                        }
                      },
                         // Emscher Landscape Park Germany Landschaftspark
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [6.7974, 51.5048]
                        },
                        "properties": {
                          "PlaceName": "Emscher Landscape Park Germany",
                          "Location": "Germany",
                          "Image": "emscherlandscapepark.jpg",
                          "Description":"A vast network of industrial heritage sites transformed into parks and cultural spaces in the Ruhr region."
    
                        }
                      },
                       // Ontario Place
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-79.4133, 43.6284]
                        },
                        "properties": {
                          "PlaceName": "Ontario Place",
                          "Location": "Ontario",
                          "Image": "ontarioplace.jpg",
                          "Description":" A reinvigorated lakeside venue that balances recreational spaces, cultural facilities, and green areas."
                        }
                      },
                       // The High Line
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-74.0048, 40.7480]
                        },
                        "properties": {
                          "PlaceName": "The High Line Park",
                          "Location": "New York",
                          "Image": "thehighline.jpg",
                          "Description": "An elevated linear park repurposed from a rail line, featuring gardens, art, and stunning city views"
                        }
                      },
                        // The Bentway
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-79.3970, 43.6414]
                        },
                        "properties": {
                          "PlaceName": "The Bentway",
                          "Location": "Toronto Fort York",
                          "Image": "thebentway.jpeg",
                          "Description": "A linear urban park under the Gardiner Expressway offering unique cultural and recreational opportunities."
                        }
                      },
                      // Teras Cikapundung Riverside Park – Bandung, Indonesia
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [107.6166, -6.8972]
                        },
                        "properties": {
                          "PlaceName": "Teras Cikapundung Riverside Park",
                          "Location": "Bandug, Indonesia",
                          "Image": "terasparkindonesia.jpg",
                          "Description": "A revitalized riverside park that integrates modern landscapes with cultural spaces in Bandung."
                        }
                      },
                       // Crescent Park – New Orleans, USA
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-90.0416, 29.9606]
                        },
                        "properties": {
                          "PlaceName": "Crescent Park New Orleans, USA",
                          "Location": "New Orleans",
                          "Image": "crescentparkneworleans.jpeg",
                          "Description": "A reclaimed industrial area along the Mississippi River turned into a dynamic urban park."


                        }
                      },
                      // Zollverein Coal Mine Industrial Complex – Essen, Germany
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-7.0049, 51.4909]
                        },
                        "properties": {
                          "PlaceName": "Zollverein Coal Mine Industrial Complex",
                          "Location": "Essen Germany",
                          "Image": "zollverein.jpg",
                          "Description": "A UNESCO World Heritage Site transformed into a cultural and green space preserving industrial heritage."
                        }
                      },
                       // Parc de la Cité-du-Havre – Montreal, Canada
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-73.5582, 45.4851]
                        },
                        "properties": {
                          "PlaceName": "Parc de la Cité-du-Havre ",
                          "Location": "Montreal Quebec",
                          "Image": "Cite_du_havre.jpg",
                          "Description": "A peaceful green oasis offering stunning views of the city skyline and the Saint Lawrence Rive"
                        }
                      },
                      // Parco Industria– Milan, Italy
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [9.1792, 45.4703]
                        },
                        "properties": {
                          "PlaceName": "Parco Industria",
                          "Location": "Milan Italy",
                          "Image": "parcoindustria.jpg",
                          "Description": "A green space created from industrial grounds, blending sustainability with Milanese urban culture."
                        }
                      },
                       // St. Pauli Elbtunnel Park – Hamburg, Germany
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [9.9699, 53.5489]
                        },
                        "properties": {
                          "PlaceName": "St. Pauli Elbtunnel Park",
                          "Location": "Hamburg Germany",
                          "Image": "stpauli.jpeg",
                          "Description": " A park near the historic Elbtunnel with a mix of urban design and green relaxation spaces."
                        }
                      
                      },
                      // Kunstpark Ost – Munich, Germany
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [11.5786, 48.1409]
                        },
                        "properties": {
                          "PlaceName": "Kunstpark Ost",
                          "Location": "Munich Germany",
                          "Image": "kuntspark.jpg",
                          "Description": "Formerly an industrial zone, now a hub for cultural activities and vibrant nightlife."
                        }
                      },
                      
                      
                      // Brooklyn Bridge Park
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-73.996864, 40.702301]
                        },
                        "properties": {
                          "PlaceName": "Brooklyn Bridge Park",
                          "Location": "New  York",
                          "Image": "brooklynbridgeparkfall.jpg",
                          "Description":"A waterfront park along the East River, featuring lush gardens, piers, and views of Manhattan."
                        }
                      },
                      // HafenCity Park – Hamburg, Germany
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [9.9816, 53.5439]
                        },
                        "properties": {
                          "PlaceName": "HafenCity Park",
                          "Location": "Hamburg, Germany",
                          "Image": "HafenCity.jpg",
                          "Description":"Part of a waterfront redevelopment, offering modern design and green spaces in Hamburg"
                        }
                     
                      },
                      // Parks at the Turbine Hall – London, UK
                     {
                        "type": "Feature",
                        "geometry": {
                          "type": "Point",
                          "coordinates": [-0.1000, 51.5072]
                        },
                        "properties": {
                          "PlaceName": "Parks at the Turbine Hall",
                          "Location": "London, UK",
                          "Image": "turbinehall.jpg",
                          "Description": "Surrounding the Tate Modern, these parks provide a mix of art, relaxation, and cultural exploration."
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
            'icon-size': 0.03
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
        <p>Location: ${e.features[0].properties.Description}</p>

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