const map = new maplibregl.Map({
  container: 'map',
  style:
      'light.json',
  center: [-96.81595411588849,49.77154223266254],
  zoom: 3
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
                    "Image": "map-images/black-heart.jpg"
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