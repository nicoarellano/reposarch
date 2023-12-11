const map = new maplibregl.Map({
  container: 'map', // container id
  style: 'https://demotiles.maplibre.org/style.json', // style URL
  center: [50, 32], // starting position [lng, lat]
  zoom: 2 // starting zoom
});

map.on('load', () => {
  // Load custom marker
  map.loadImage('https://img.icons8.com/?size=160&id=F5FOy2ERFZ2G&format=png', (error, image) => {
      if (error) throw error;
      map.addImage('custom-marker', image);

      // Adding countries visited
      map.addSource('countriesVisited', {
          'type': 'geojson',
          'data': {
              "type": "FeatureCollection",
              "features": [
                  {
                      "type": "Feature",
                      "geometry": {
                          "type": "Point",
                          "coordinates": [-75.6972, 45.4215]
                      },
                      "properties": {
                          "Country": "Canada",
                          "Capital": "Ottawa",
                          "Population": "38 million",
                          "Languages": "English, French",
                          "Climate": "Varied",
                          "Cuisine": "Poutine, Maple Syrup"
                      }
                  },
                  {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [105.8342, 21.0285]
                    },
                    "properties": {
                        "Country": "Vietnam",
                        "Capital": "Hanoi",
                        "Population": "98 million",
                        "Languages": "Vietnamese",
                        "Climate": "Tropical, Subtropical",
                        "Cuisine": "Pho, Banh Mi"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [116.4074, 39.9042]
                    },
                    "properties": {
                        "Country": "China",
                        "Capital": "Beijing",
                        "Population": "1.4 billion",
                        "Languages": "Mandarin",
                        "Climate": "Varied",
                        "Cuisine": "Peking Duck, Dim Sum"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [96.1561, 19.7633]
                    },
                    "properties": {
                        "Country": "Myanmar",
                        "Capital": "Naypyidaw",
                        "Population": "54 million",
                        "Languages": "Burmese",
                        "Climate": "Tropical",
                        "Cuisine": "Mohinga, Tea Leaf Salad"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [100.5018, 13.7563]
                    },
                    "properties": {
                        "Country": "Thailand",
                        "Capital": "Bangkok",
                        "Population": "70 million",
                        "Languages": "Thai",
                        "Climate": "Tropical",
                        "Cuisine": "Pad Thai, Tom Yum Goong"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [55.2708, 25.2769]
                    },
                    "properties": {
                        "Country": "Dubai",
                        "Capital": "Dubai",
                        "Population": "3.4 million",
                        "Languages": "Arabic, English",
                        "Climate": "Desert",
                        "Cuisine": "Shawarma, Al Harees"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [35.9071, 31.9454]
                    },
                    "properties": {
                        "Country": "Jordan",
                        "Capital": "Amman",
                        "Population": "10 million",
                        "Languages": "Arabic",
                        "Climate": "Mediterranean, Arid",
                        "Cuisine": "Mansaf, Falafel"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [46.6753, 24.7136]
                    },
                    "properties": {
                        "Country": "Saudi Arabia",
                        "Capital": "Riyadh",
                        "Population": "35 million",
                        "Languages": "Arabic",
                        "Climate": "Desert",
                        "Cuisine": "Kabsa, Shawarma"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [104.8887, 11.5564]
                    },
                    "properties": {
                        "Country": "Cambodia",
                        "Capital": "Phnom Penh",
                        "Population": "17 million",
                        "Languages": "Khmer",
                        "Climate": "Tropical",
                        "Cuisine": "Fish Amok, Lap Khmer"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [102.6367, 17.9757]
                    },
                    "properties": {
                        "Country": "Laos",
                        "Capital": "Vientiane",
                        "Population": "7.3 million",
                        "Languages": "Lao",
                        "Climate": "Tropical",
                        "Cuisine": "Laap, Sticky Rice"
                    }
                },
                {
                    "type": "Feature",
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-3.7038, 40.4168]
                    },
                    "properties": {
                        "Country": "Spain",
                        "Capital": "Madrid",
                        "Population": "47 million",
                        "Languages": "Spanish",
                        "Climate": "Mediterranean",
                        "Cuisine": "Paella, Tapas"
                    }
                }
                
              ]
          }
      });

      // Add a symbol layer for countries visited
      map.addLayer({
          'id': 'countriesVisited',
          'type': 'symbol',
          'source': 'countriesVisited',
          'layout': {
              'icon-image': 'custom-marker',
              'icon-size': 0.2
          }
      });
  });

  // Country Popups
  map.on('click', 'countriesVisited', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const countryProps = e.features[0].properties;

      // Ensure the popup appears over the point
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      new maplibregl.Popup()
          .setLngLat(coordinates)
          .setHTML(`
              <h3>${countryProps.Country}</h3>
              <p>Capital: ${countryProps.Capital}</p>
              <p>Population: ${countryProps.Population}</p>
              <p>Languages: ${countryProps.Languages}</p>
              <p>Climate: ${countryProps.Climate}</p>
              <p>Cuisine: ${countryProps.Cuisine}</p>
          `)
          .addTo(map);
  });

  // Change cursor on hover
  map.on('mouseenter', 'countriesVisited', () => {
      map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseleave', 'countriesVisited', () => {
      map.getCanvas().style.cursor = '';
  });
});

