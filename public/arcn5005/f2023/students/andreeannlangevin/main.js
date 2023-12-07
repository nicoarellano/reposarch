
    maplibregl.setRTLTextPlugin(
        'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.min.js'
    );


  const MAPTILER_KEY = 'oCFGyzwQ7UBV484XYhxL';
  const map = new maplibregl.Map({
      style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${MAPTILER_KEY}`,
      center: [-75.731160, 45.400389],      
      zoom: 15.5,
      pitch: 45,
      bearing: -17.6,
      container: 'map',
      antialias: true
  });

  // The 'building' layer in the streets vector source contains building-height
  // data from OpenStreetMap.
  map.on('load', () => {
      // Insert the layer beneath any symbol layer.
      const layers = map.getStyle().layers;

      let labelLayerId;
      for (let i = 0; i < layers.length; i++) {
          if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
              labelLayerId = layers[i].id;
              break;
          }
      }

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
                      ['get', 'render_height'], 0, 'lightsalmon', 30, 'lightgreen', 75, 'mediumslateblue'
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
  

        map.loadImage(
            'https://maplibre.org/maplibre-gl-js/docs/assets/custom_marker.png',
            // Add an image to use as a custom marker
            (error, image) => {
                if (error) throw error;
                map.addImage('custom-marker', image);

                map.addSource('places', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong> LTC Round-About</strong><p> Site of the futur project Round-About LTC </p>'
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-75.730931, 45.400586]
                                }
                            },

                       {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong> Parkdale Market </strong><p> Plays structure, art sculptures, restroom </p>'
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-75.730423, 45.401655] 
                                }
                            },
                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong> **To come** Lantern Park </strong><p> Site of the futur Lantern Park </p>'
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-75.731329, 45.400455]
                                }
                            },

                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong> Irving Greenberg Theatre Centre </strong><p> Drama theather </p>'
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-75.7318414, 45.399944] 
                                }
                            },

                            {
                                'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong> Parc McCormick </strong><p> Park with paths </p>'
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-75.727224, 45.402512]  
                                }
                            },

                            {
                              'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong> Parc McCormick </strong><p> Walking paths with green space </p>'
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-75.7318414, 45.399944] 
                                }
                            },
                            
                            {
                              'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong> Parc Hintonburg </strong><p> Walking paths with green space with historical stone walls </p>'
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-75.723106, 45.403055]
                                }
                            },
                            
                            {
                              'type': 'Feature',
                                'properties': {
                                    'description':
                                        '<strong> Fisher Park Playground </strong><p> Water Playground </p>'
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [-75.731399, 45.396413]
                                }
                            }

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
                        'icon-overlap': 'always'
                    }
                });
            }
        );

        // Create a popup, but don't add it to the map yet.
        const popup = new maplibregl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        map.on('mouseenter', 'places', (e) => {
            // Change the cursor style as a UI indicator.
            map.getCanvas().style.cursor = 'pointer';

            const coordinates = e.features[0].geometry.coordinates.slice();
            const description = e.features[0].properties.description;

            // Ensure that if the map is zoomed out such that multiple
            // copies of the feature are visible, the popup appears
            // over the copy being pointed to.
            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
            }

            // Populate the popup and set its coordinates
            // based on the feature found.
            popup.setLngLat(coordinates).setHTML(description).addTo(map);
        });

        map.on('mouseleave', 'places', () => {
            map.getCanvas().style.cursor = '';
            popup.remove();
        });
    
    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    
    
 

    // implementation of StyleImageInterface to draw a pulsing dot icon on the map
    // Search for StyleImageInterface in https://maplibre.org/maplibre-gl-js/docs/API/
    const size = 200;
    const pulsingDot = {
        width: size,
        height: size,
        data: new Uint8Array(size * size * 4),

        // get rendering context for the map canvas when layer is added to the map
        onAdd () {
            const canvas = document.createElement('canvas');
            canvas.width = this.width;
            canvas.height = this.height;
            this.context = canvas.getContext('2d');
        },

        // called once before every frame where the icon will be used
        render () {
            const duration = 1000;
            const t = (performance.now() % duration) / duration;

            const radius = (size / 2) * 0.3;
            const outerRadius = (size / 2) * 0.7 * t + radius;
            const context = this.context;

            // draw outer circle
            context.clearRect(0, 0, this.width, this.height);
            context.beginPath();
            context.arc(
                this.width / 2,
                this.height / 2,
                outerRadius,
                0,
                Math.PI * 2
            );
            context.fillStyle = `rgba(255, 200, 200,${1 - t})`;
            context.fill();

            // draw inner circle
            context.beginPath();
            context.arc(
                this.width / 2,
                this.height / 2,
                radius,
                0,
                Math.PI * 2
            );
            context.fillStyle = 'rgba(255, 100, 100, 1)';
            context.strokeStyle = 'white';
            context.lineWidth = 2 + 4 * (1 - t);
            context.fill();
            context.stroke();

            // update this image's data with data from the canvas
            this.data = context.getImageData(
                0,
                0,
                this.width,
                this.height
            ).data;

            // continuously repaint the map, resulting in the smooth animation of the dot
            map.triggerRepaint();

            // return `true` to let the map know that the image was updated
            return true;
        }
    };

    map.on('load', () => {
        map.addImage('pulsing-dot', pulsingDot, {pixelRatio: 2});

        map.addSource('points', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [-75.730931, 45.400586]
                        }
                    }
                ]
            }
        });
        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'points',
            'layout': {
                'icon-image': 'pulsing-dot'
            }
        });
    });

    maplibregl.setRTLTextPlugin(
        'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.min.js'
    );

        map.setLayoutProperty('label_country', 'text-field', [
            'format',
            ['get', 'name_en'],
            {'font-scale': 1.2},
            '\n',
            {},
            ['get', 'name'],
            {
                'font-scale': 0.8,
                'text-font': [
                    'literal',
                    ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']
                ]
            }
        ]);
        
            map.setLayoutProperty('label_country', 'text-field', [
                'format',
                ['get', 'name_en'],
                {'font-scale': 1.2},
                '\n',
                {},
                ['get', 'name'],
                {
                    'font-scale': 0.8,
                    'text-font': [
                        'literal',
                        ['DIN Offc Pro Italic', 'Arial Unicode MS Regular']
                    ]
                }
            ]);
        })
