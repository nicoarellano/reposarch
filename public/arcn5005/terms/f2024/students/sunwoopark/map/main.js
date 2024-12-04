const map = new maplibregl.Map({
  container: 'map',
  style:
      'light.json',
  center: [-88.81870039120976, 57.66636419601575],
  zoom: 2.7
});



// description 
map.on('load', () => {
  const textOverlay = document.createElement('div');
  textOverlay.style.position = 'fixed';
  textOverlay.style.top = '70px';
  textOverlay.style.right = '30px';
  textOverlay.style.backgroundColor = 'rgb(255,255,255, 0.5)';
  textOverlay.style.color = 'rgb(21, 73, 128)';
  textOverlay.style.padding = '15px';
  textOverlay.style.borderRadius = '20px';
  textOverlay.innerHTML =
   `<strong style="font-size: 16px;">˖°.₊˚☕⊹♡<br>
   <strong style="font-size: 14px;">explore cafes from all around canada !</strong><br>
    <span style="font-size: 12px; font-weight: normal;">hover over the icons for more information</span><br>
  `;
  
  document.getElementById('map').appendChild(textOverlay);})



// zoom to toronto button
  document.getElementById('zoom-toronto-button').addEventListener('click', () => {
    map.flyTo({
        center: [-79.38970481349419, 43.664988789557746], // Coordinates for Toronto
        zoom: 11.9,                   // Desired zoom level
        speed: 1.5                  // Animation speed
    });
});


map.on('load', () => {
  // cafes picture
  map.loadImage(
    'icon.png',
    (error, image) => {
      if (error) throw error;
      map.addImage('cafe-icon', image);

      // Adding cafes
      map.addSource('CanadaTour', {
        'type': 'geojson',
        'data': {
          "type": "FeatureCollection",
          "features": [
              // neo bar cafe
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-79.394659, 43.644980]
              },
              "properties": {
                "PlaceName": "NEO BAR CAFE",
                "Location": "Toronto, Ontario",
                "Description": "★★★★☆",
                "Image": "map-images/neo-cafe.jpg"
              }
            },

                // monogram coffee
              {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-114.099724, 51.010889]
                  },
                  "properties": {
                    "PlaceName": "MONOGRAM COFFEE",
                    "Location": "Calgary, Alberta",
                    "Description": "★★★★☆",
                    "Image": "map-images/monogram.jpg"
                  }
                },
                
                // le nektar
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-71.2280993, 46.8130984]
                  },
                  "properties": {
                    "PlaceName": "NEKTAR CAFÉOLOGUE",
                    "Location": "Québec City, Québec",
                    "Description": "★★★★★",
                    "Image": "map-images/nektar.jpg"
                  }
                },
                 
                // hey happy
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-123.368820, 48.428080]
                  },
                  "properties": {
                    "PlaceName": "HEY HAPPY",
                    "Location": "Victoria, British Columbia",
                    "Description": "★★★★★",
                    "Image": "map-images/hey-happy.jpg"
                  }
                },

                // greenhorn cafe
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-123.134190, 49.286570]
                  },
                  "properties": {
                    "PlaceName": "GREENHORN CAFE",
                    "Location": "Vancouver, British Columbia",
                    "Description": "★★★★★",
                    "Image": "map-images/greenhorn.jpg"
                  }
                },

                // collective coffee
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-106.674443, 52.121391]
                  },
                  "properties": {
                    "PlaceName": "COLLECTIVE COFFEE",
                    "Location": "Saskatoon, Saskatchewan",
                    "Description": "★★★★★",
                    "Image": "map-images/collective-coffee.jpg"
                  }
                },
                 
                // pikolo
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-75.7006336, 45.38368]
                  },
                  "properties": {
                    "PlaceName": "PIKOLO ESPRESSO BAR",
                    "Location": "Montréal, Québec",
                    "Description": "★★★★★",
                    "Image": "map-images/pikolo.jpg"
                  }
                },

                // bean north 
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-135.056845, 60.721187]
                  },
                  "properties": {
                    "PlaceName": "BEAN NORTH COFFEE ROASTING",
                    "Location": "Whitehorse, Yukon",
                    "Description": "★★★★★",
                    "Image": "map-images/bean-north.png"
                  }
                },

                // rocket bakery 
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-52.804656, 47.517705]
                  },
                  "properties": {
                    "PlaceName": "ROCKET BAKERY",
                    "Location": "Mount Pearl, Newfoundland & Labrador",
                    "Description": "★★★★★",
                    "Image": "map-images/rocket-bakery.jpg"
                  }
                },

                // receiver coffee
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-63.1206285, 46.2342223]
                  },
                  "properties": {
                    "PlaceName": "RECEIVER COFFEE COMPANY",
                    "Location": "Charlottetown, PEI",
                    "Description": "★★★★★",
                    "Image": "map-images/receiver-coffee.jpg"
                  }
                },

                // empty cup
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-97.074136, 49.89635]
                  },
                  "properties": {
                    "PlaceName": "EMPTY CUP COLLECTIVE",
                    "Location": "Winnipeg, Manitoba",
                    "Description": "★★★★★",
                    "Image": "map-images/empty-cup.jpg"
                  }
                },

                // lock stock
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-113.5020673, 53.5410471]
                  },
                  "properties": {
                    "PlaceName": "LOCK STOCK COFFEE",
                    "Location": "Edmonton, Alberta",
                    "Description": "★★★★★",
                    "Image": "map-images/lock-stock.jpg"
                  }
                },

                // black heart
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-68.5231875915773, 63.7522526497728]
                  },
                  "properties": {
                    "PlaceName": "BLACK HEART CAFE",
                    "Location": "Iqaluit, Nunavut",
                    "Description": "★★★★★",
                    "Image": "map-images/black-heart.jpg"
                  }
                },
        
                // CAFÉ BOHÈME
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-69.71861621817688, 48.194285728849955]
                  },
                  "properties": {
                    "PlaceName": "CAFÉ BOHÈME",
                    "Location": "Tadoussac, Québec",
                    "Description": "★★★★☆",
                    "Image": "map-images/boheme.jpg"
                  }
                },

                // windy shores cafe
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-89.22167905511101, 48.44162665629492]
                  },
                  "properties": {
                    "PlaceName": "WINDY SHORES CAFE",
                    "Location": "Thunderbay, Ontario",
                    "Description": "★★★★☆",
                    "Image": "map-images/windy-shores.jpg"
                  }
                },

                // Little Sister Coffee Maker
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-97.14686886658872, 49.88013906321064]
                  },
                  "properties": {
                    "PlaceName": "LITTLE SISTER COFFEE MAKER",
                    "Location": "Winnipeg, Manitoba",
                    "Description": "★★★★★",
                    "Image": "map-images/sister-coffee.jpg"
                  }
                },

                // Rooftop Coffee Roasters
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-115.06159353068513, 49.503370855656655]
                  },
                  "properties": {
                    "PlaceName": "ROOFTOP COFFEE ROASTERS",
                    "Location": "Fernie, British Columbia",
                    "Description": "★★★★★",
                    "Image": "map-images/rooftop-coffee.jpg"
                  }
                },

                // Rogue Coffee
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-66.06075446812832, 45.272292288962646]
                  },
                  "properties": {
                    "PlaceName": "ROGUE WAVE COFFEE",
                    "Location": "Saint John, New Brunswick",
                    "Description": "★★★★★",
                    "Image": "map-images/rogue-wave.jpg"
                  }
                },

                // happy goat
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-75.75278292274045, 45.39379539530149]
                  },
                  "properties": {
                    "PlaceName": "HAPPY GOAT COFFEE CO.",
                    "Location": "Ottawa, Ontario",
                    "Description": "★★★★☆",
                    "Image": "map-images/happy-goat.jpg"
                  }
                },

                // kuugaq
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-105.2152194365132, 69.87281031252287]
                  },
                  "properties": {
                    "PlaceName": "KUUGAQ CAFÉ",
                    "Location": "Cambridge Bay, Nunavut",
                    "Description": "★★★★★",
                    "Image": "map-images/kuugaq.jpg"
                  }
                },
              
                // javapunks
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-111.76190993643034, 60.39789790318208]
                  },
                  "properties": {
                    "PlaceName": "JAVAPUNKS",
                    "Location": "Fort Smith, Northwest Territories",
                    "Description": "★★★★★",
                    "Image": "map-images/javapunks.jpg"
                  }
                },
              
                // good times
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-99.84727518975563, 55.19454800505356]
                  },
                  "properties": {
                    "PlaceName": "GOOD TIMES COFFEEHOUSE",
                    "Location": "Snow Lake, Manitoba",
                    "Description": "★★★★★",
                    "Image": "map-images/good-time.jpg"
                  }
                },
              
                // 11:59
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-79.3819953, 43.6510280074543]
                  },
                  "properties": {
                    "PlaceName": "11:59 BAR:CAFÉ",
                    "Location": "Toronto, Ontario",
                    "Description": "★★★★★",
                    "Image": "map-images/11-59.jpg"
                  }
                },
              
                // Milky's Coffee
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-79.40699723068512, 43.652555533436406]
                  },
                  "properties": {
                    "PlaceName": "MILKY'S COFFEE",
                    "Location": "Toronto, Ontario",
                    "Description": "★★★★★",
                    "Image": "map-images/milkys.jpg"
                  }
                },
              
                // arvo cafe
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-79.3611954037897, 43.65003784321319]
                  },
                  "properties": {
                    "PlaceName": "ARVO CAFE",
                    "Location": "Toronto, Ontario",
                    "Description": "★★★★★",
                    "Image": "map-images/arvo.jpg"
                  }
                },
              
                // pilot coffee
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-79.41786420684298, 43.65002946968505]
                  },
                  "properties": {
                    "PlaceName": "PILOT COFFEE ROASTERS",
                    "Location": "Toronto, Ontario",
                    "Description": "★★★★☆",
                    "Image": "map-images/pilot-coffee.jpg"
                  }
                },
              
                // dark horse
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [ -79.35232288542319, 43.659393866867475]
                  },
                  "properties": {
                    "PlaceName": "DARK HORSE ESPRESSO BAR",
                    "Location": "Toronto, Ontario",
                    "Description": "★★★★☆",
                    "Image": "map-images/dark-horse.jpeg"
                  }
                },
              
                // fahrenheit coffee
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-79.43060089865108, 43.707975846230454]
                  },
                  "properties": {
                    "PlaceName": "FAHRENHEIT COFFEE",
                    "Location": "Toronto, Ontario",
                    "Description": "★★★★★",
                    "Image": "map-images/fahrenheit.jpg"
                  }
                },
              
                // sam james
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-79.43893155809613, 43.645079327201614]
                  },
                  "properties": {
                    "PlaceName": "SAM JAMES COFFEE BAR",
                    "Location": "Toronto, Ontario",
                    "Description": "★★★★★",
                    "Image": "map-images/sam-james.png"
                  }
                },
              
                // fika cafe
                {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": [-79.40056242064138, -43.65367406232058]
                  },
                  "properties": {
                    "PlaceName": "FIKA CAFE",
                    "Location": "Toronto, Ontario",
                    "Description": "★★★★★",
                    "Image": "map-images/fika.jpg"
                  }
                },
          ]
        }
      });

      // Add a symbol layer for cafes
      map.addLayer({
        'id': 'cafes',
        'type': 'symbol',
        'source': 'CanadaTour',
        'layout': {
          'icon-image': 'cafe-icon',
          'icon-size': 0.03
        }
      });
    }
  );

  // Create a new popup instance
  const popup = new maplibregl.Popup();

  // cafe Popups on hover
  map.on("mouseenter", "cafes", (e) => {
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
      <p>${e.features[0].properties.Location}</p>
      <p>${e.features[0].properties.Description}</p>
      `).addTo(map);
  });

  map.on('mousemove', 'cafes', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const cafe = e.features[0];

    if (cafe.id !== hoveredcafeId) {
      hoveredcafeId = cafe.id;

      const imageUrl = cafe.properties.Image || 'https://example.com/default-image.jpg';

      new maplibregl.Popup({
        closeButton: false // Hide the close button
      })
        .setLngLat(coordinates)
        .setHTML(`
          <h3>${cafe.properties.PlaceName}</h3>
          <img src="${cafe.properties.Image}" alt="${cafe.properties.PlaceName}" style="max-width: 100%; height: auto;">
          <p>${cafe.properties.Location}</p>
          <p>Description: ${cafe.properties.Description}</p>

          `)
        .addTo(map);
    }
  });

  map.on('mouseout', 'cafes', () => {
    if (hoveredcafeId) {
      map.getCanvas().style.cursor = '';
      hoveredcafeId = null;
    }
    
  });
});