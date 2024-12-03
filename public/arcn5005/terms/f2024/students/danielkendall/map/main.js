
maplibregl.setRTLTextPlugin(
    'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.min.js'
);

const MAPTILER_KEY = 'oCFGyzwQ7UBV484XYhxL';
const map = new maplibregl.Map({
  style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${MAPTILER_KEY}`,
  center: [-97.35881953862771, 51.16108666946192],      
  zoom: 3,
  pitch: 40,
  bearing: 0,
  container: 'map',
  antialias: true
});


map.on('load', () => {
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
                  ['get', 'render_height'], 0, 'lightgrey', 30, 'grey', 75, 'darkgrey'
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
        './images/icon.png',
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
                                   `<strong> Carleton University </strong><p> Azrieli School of Architecture </p>'
                                    <img src="./images/carleton.png" alt="Carleton University" style="width:150px; height:auto; border-radius:8px;">`
                            },
                            'geometry': { 
                                'type': 'Point',
                                'coordinates': [-75.6974593945735, 45.38411018369545] //Carleton
                            }
                        },

                   {
                            'type': 'Feature',
                            'properties': { 
                                'description':
                                    `<strong> University of British Columbia </strong><p> School of Architecture and Landscape Architecture </p>'
                                    <img src="./images/ubc.jpg" alt="University of British Columbia" style="width:150px; height:auto; border-radius:8px;">`
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-123.25596488042004, 49.26761171032466] //UBC
                            }
                        },
                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                   `<strong>University of Calgary</strong><p>School of Architecture, Planning and Landscape</p>
                                   <img src="./images/calgary.jpg" alt="University of Calgary" style="width:150px; height:auto; border-radius:8px;">`
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-114.05787928794986, 51.04654113722505] //Calgary
                                
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                    `<strong> Université de Montréal </strong><p> École d'Architecture </p>
                                   <img src="./images/montreal.jpg" alt="Université de Montréal" style="width:150px; height:auto; border-radius:8px;">`
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-73.61966238436186, 45.523377754583] //Université de Montréal
                            }
                        },

                        {
                            'type': 'Feature',
                            'properties': {
                                'description':
                                     `<strong> University of Manitoba </strong><p> Faculty of Architecture </p>
                                   <img src="./images/manitoba.jpg" alt="University of Manitoba" style="width:150px; height:auto; border-radius:8px;">`
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-97.13511868369548, 49.808228285480176]  //University of Manitoba 
                            }
                        },

                        {
                          'type': 'Feature',
                            'properties': {
                                'description':
                                     `<strong> McGill University </strong><p> School of Architecture </p>
                                   <img src="./images/mcgill.jpg" alt="McGill University" style="width:150px; height:auto; border-radius:8px;">`
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-73.57592547565163, 45.506268910014704] //McGill
                            }
                        },
                        
                        {
                          'type': 'Feature',
                            'properties': {
                                'description':
                                     `<strong> University of Waterloo </strong><p> School of Architecture </p>
                                   <img src="./images/waterloo.jpg" alt="University of Waterloo" style="width:150px; height:auto; border-radius:8px;">`
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-80.31669067907758, 43.35825263955037] //Waterloo
                            }
                        },
                        
                        {
                          'type': 'Feature',
                            'properties': {
                                'description':
                                     `<strong> Université Laval </strong><p> École d'Architecture </p>
                                   <img src="./images/laval.jpg" alt="Université Laval" style="width:150px; height:auto; border-radius:8px;">`
                            },
                            'geometry': {
                                'type': 'Point',
                                'coordinates': [-71.2066147805002, 46.81407238418928] //Université Laval 
                            }
                        },

                        {
                            'type': 'Feature',
                              'properties': {
                                  'description':
                                       `<strong> University of Toronto </strong><p> John H. Daniels Faculty of Architecture </p>
                                     <img src="./images/uoft.jpg" alt="University of Toronto" style="width:150px; height:auto; border-radius:8px;">`
                              },
                              'geometry': {
                                  'type': 'Point',
                                  'coordinates': [-79.40027936825444, 43.65988355998815] //University of Toronto 
                              }
                          },

                          {
                            'type': 'Feature',
                              'properties': {
                                  'description':
                                       `<strong> Dalhousie University </strong><p> School of Architecture </p>
                                     <img src="./images/dal.jpg" alt="Dalhousie University" style="width:150px; height:auto; border-radius:8px;">`
                              },
                              'geometry': {
                                  'type': 'Point',
                                  'coordinates': [-63.57459854332211, 44.64333373539182] //Dalhousie University
                              }
                          },

                          {
                            'type': 'Feature',
                              'properties': {
                                  'description':
                                       `<strong> Toronto Metropolitan University </strong><p> Department of Architectural Science </p>
                                     <img src="./images/tmu.jpg" alt="Toronto Metropolitan University" style="width:150px; height:auto; border-radius:8px;">`
                              },
                              'geometry': {
                                  'type': 'Point',
                                  'coordinates': [-79.3780966398624, 43.659449082994804] //Toronto Metropolitan University
                              }
                          },

                          {
                            'type': 'Feature',
                              'properties': {
                                  'description':
                                       `<strong> Laurentian University </strong><p> McEwen School of Architecture </p>
                                     <img src="./images/laurentian.jpg" alt="Laurentian University" style="width:150px; height:auto; border-radius:8px;">`
                              },
                              'geometry': {
                                  'type': 'Point',
                                  'coordinates': [-80.99738865762404, 46.493025772627526] //Laurentian Univeristy 
                              }
                          },
  
  
  
  

                    ]
                }
            });

            map.addLayer({
                'id': 'places',
                'type': 'symbol',
                'source': 'places',
                'layout': {
                    'icon-image': 'custom-marker',
                    'icon-overlap': 'always',
                    'icon-size': .1 
                }
            });
            
    const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', (e) => {
    
        map.getCanvas().style.cursor = 'pointer';

        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
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
    
    })})