  const MAPTILER_KEY = 'get_your_own_OpIi9ZULNHzrESv6T2vL';
  const map = new maplibregl.Map({
      style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${MAPTILER_KEY}`,
      center: [-74.0066, 40.7135],
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
  });

  // The 'building' layer in the streets vector source contains building-height
  // data from OpenStreetMap.
  map.on('load', () => {``
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;

      let labelLayerId;
      for (let i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
              labelLayerId = layers[i].id;
              break;
          }
      }

        // Add an image to use as a custom marker
        map.loadImage(
            'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Airplane_silhouette.svg/2048px-Airplane_silhouette.svg.png',
            (error, image) => {
                if (error) throw error;
                map.addImage('custom-marker', image);
                // Add a GeoJSON source with 15 points
                map.addSource('conferences', {
                    'type': 'geojson',
                    'data': 
                    {
                      "type": "FeatureCollection",
                      "features": [
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -123.120735,49.28273 ]
                       },
                       "properties": {
                       "Date":"Annually",
                       "Name":"BC"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -75.697189,45.421532 ]
                       },
                       "properties": {
                       "Date":"2003",
                       "Name":"Ontario"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -71.207977,46.813877 ]
                       },
                       "properties": {
                       "Date":"2015",
                       "Name":"Quebec"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -63.13091,46.234953 ]
                       },
                       "properties": {
                       "Date":"2015",
                       "Name":"PEI"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -63.581683,44.649116 ]
                       },
                       "properties": {
                       "Date":"2015",
                       "Name":"Nova Scotia"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -66.646192,45.959265 ]
                       },
                       "properties": {
                       "Date":"2015",
                       "Name":"New Brunswick"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -118.177647,33.979809 ]
                       },
                       "properties": {
                       "Date":"2016",
                       "Name":"California"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -0.115262,51.511307 ]
                       },
                       "properties": {
                       "Date":"2009",
                       "Name":"England"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -81.58107,28.416636 ]
                       },
                       "properties": {
                       "Date":"2005",
                       "Name":"Florida"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -111.30227,47.503055 ]
                       },
                       "properties": {
                       "Date":"2001",
                       "Name":"Montana"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -85.954544,11.927486 ]
                       },
                       "properties": {
                       "Date":"2015",
                       "Name":"Nicaragua "
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -74.0066,40.7135 ]
                       },
                       "properties": {
                       "Date":"2018",
                       "Name":"New York "
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  [ -157.854971,21.30153 ]
                       },
                       "properties": {
                       "Date":"2003",
                       "Name":"Hawaii"
                       }
                     },
                     {
                       "type": "Feature",
                       "geometry": {
                          "type": "Point",
                          "coordinates":  { }
                       },
                       "properties": {
                       "Date":"",
                       "Name":""
                       }
                     }
                   ]
                   }});
                // Add a symbol layer
                'planeicon.png'
                map.addLayer({
                    'id': 'conferences',
                    'type': 'symbol',
                    'source': 'conferences',
                    'layout': {
                        'icon-image': 'custom-marker',
                        'icon-size': 0.02,
                        // get the year from the source's "year" property
                        'text-field': ['get', 'Date'],
                        'text-font': [
                            'Open Sans Semibold',
                            'Arial Unicode MS Bold'
                        ],
                        'text-offset': [0, 1.25],
                        'text-anchor': 'top'
                    }
                });
            }
        );

    map.addSource('openmaptiles', {
        url: `https://api.maptiler.com/tiles/v3/tiles.json?key=${MAPTILER_KEY}`,
        type: 'vector',
    });
    
      map.addLayer(
          {
              'id': '3d-buildings',
              'source': 'openmaptiles',
              'source-layer': 'building',
              'type': 'fill-extrusion',
              'minzoom': 15,
              'paint': {
                  'fill-extrusion-color': [
                      'interpolate',
                      ['linear'],
                      ['get', 'render_height'], 0, 'lightgray', 200, 'royalblue', 400, 'lightblue'
                  ],
                  'fill-extrusion-height': [
                      'interpolate',
                      ['linear'],
                      ['zoom'],
                      15,
                      0,
                      16,
                      ['get', 'render_height']
                  ],
                  'fill-extrusion-base': ['case',
                      ['>=', ['get', 'zoom'], 16],
                      ['get', 'render_min_height'], 0
                  ]
              }
          },
          labelLayerId
      );
  });
