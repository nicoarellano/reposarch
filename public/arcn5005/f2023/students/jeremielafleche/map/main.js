const MAPTILER_KEY = 'yyLFvKmMAkOmBAVbj4mk';
const map = new maplibregl.Map({
    style: `https://api.maptiler.com/maps/basic-v2/style.json?key=${MAPTILER_KEY}`,
    center: [12.490034032328268, 41.894390281115285],
    zoom: 15.3,
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


  
//Roman Forum Layer
map.on('load', () => {
    // Roman Forum Marker
    map.loadImage(
        'Images/Roman Forum.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('roman forum-marker', image);
        
            //Adding Roman Forum
            map.addSource('Roman Forum', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ 12.4853,41.8925 ]
                     },
                     "properties": {
                    "Name": "Roman Forum" 
                     }
                   }
                 ]
                 }
            });
          
            // Add a symbol layer for Roman Forum
            map.addLayer({
                'id': 'Roman Forum',
                'type': 'symbol',
                'source': 'Roman Forum',
                'layout': {
                    'icon-image': 'roman forum-marker',
                    'icon-size': 0.2
                }
            });
        }
    )
  });

 //Colosseum Layer
map.on('load', () => {
    // Colosseum Marker
    map.loadImage(
        'Images/Colosseum.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Colosseum-marker', image);
        
            //Adding Colosseum
            map.addSource('Colosseum', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ 12.4922,41.8902 ]
                     },
                     "properties": {
                    "Name": "Colosseum" 
                     }
                   }
                 ]
                 }
            });
          
            // Add a symbol layer for Colosseum
            map.addLayer({
                'id': 'Colosseum',
                'type': 'symbol',
                'source': 'Colosseum',
                'layout': {
                    'icon-image': 'Colosseum-marker',
                    'icon-size': 0.25
                }
            });
        }
    )
  });

 //Spanish Steps Layer
 map.on('load', () => {
    // Spanish Steps Marker
    map.loadImage(
        'Images/Spanish Steps.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Spanish Steps-marker', image);
        
            //Adding Spanish Steps
            map.addSource('Spanish Steps', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ 12.4828,41.9060 ]
                     },
                     "properties": {
                    "Name": "Spanish Steps" 
                     }
                   }
                 ]
                 }
            });
          
            // Add a symbol layer for Spanish Steps
            map.addLayer({
                'id': 'Spanish Steps',
                'type': 'symbol',
                'source': 'Spanish Steps',
                'layout': {
                    'icon-image': 'Spanish Steps-marker',
                    'icon-size': 0.2
                }
            });
        }
    )
  });

   //Trevi Fountain Layer
 map.on('load', () => {
    // Trevi Fountain Marker
    map.loadImage(
        'Images/Trevi Fountain.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Trevi Fountain-marker', image);
        
            //Adding Spanish Steps
            map.addSource('Trevi Fountain', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ 12.4833,41.9009 ]
                     },
                     "properties": {
                    "Name": "Trevi Fountain" 
                     }
                   }
                 ]
                 }
            });
          
            // Add a symbol layer for Trevi Fountain
            map.addLayer({
                'id': 'Trevi Fountain',
                'type': 'symbol',
                'source': 'Trevi Fountain',
                'layout': {
                    'icon-image': 'Trevi Fountain-marker',
                    'icon-size': 0.2
                }
            });
        }
    )
  });

   //Arch of Constantine Layer
 map.on('load', () => {
    // Arch of Constantine Marker
    map.loadImage(
        'Images/Arch of Constantine.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('Arch of Constantine-marker', image);
        
            //Adding Arch of Constantine
            map.addSource('Arch of Constantine', {
                'type': 'geojson',
                'data': {
                    "type": "FeatureCollection",
                    "features": [
                   {
                     "type": "Feature",
                     "geometry": {
                        "type": "Point",
                        "coordinates":  [ 12.4907,41.8898 ]
                     },
                     "properties": {
                    "Name": "Arch of Constantine" 
                     }
                   }
                 ]
                 }
            });
          
            // Add a symbol layer for Spanish Steps
            map.addLayer({
                'id': 'Arch of Constantine',
                'type': 'symbol',
                'source': 'Arch of Constantine',
                'layout': {
                    'icon-image': 'Arch of Constantine-marker',
                    'icon-size': 0.1
                }
            });
        }
    )
  });

//Roman Forum Popups
map.on('click', 'Roman Forum', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const bookstore = e.features[0];

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
            <h3>${bookstore.properties.Name}</h3>
            <img src="Images/Roman Forum.JPG" alt="Home Image" style="width:100%; max-width:300px; height:auto;">
                `)
            .addTo(map);
    });

//Colosseum Popups
map.on('click', 'Colosseum', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const bookstore = e.features[0];

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
            <h3>${bookstore.properties.Name}</h3>
            <img src="Images/Colosseum.JPG" alt="Home Image" style="width:100%; max-width:300px; height:auto;">
                `)
            .addTo(map);
    });

//Spanish Steps Popups
map.on('click', 'Spanish Steps', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const bookstore = e.features[0];

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
            <h3>${bookstore.properties.Name}</h3>
            <img src="Images/Spanish Steps.JPG" alt="Home Image" style="width:100%; max-width:300px; height:auto;">
                `)
            .addTo(map);
    });
    
//Trevi Fountain Popups
map.on('click', 'Trevi Fountain', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const bookstore = e.features[0];

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
            <h3>${bookstore.properties.Name}</h3>
            <img src="Images/Trevi Fountain.JPG" alt="Home Image" style="width:100%; max-width:300px; height:auto;">
                `)
            .addTo(map);
    });

//Arch of Constantine Popups
map.on('click', 'Arch of Constantine', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const bookstore = e.features[0];

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

        new maplibregl.Popup()
            .setLngLat(coordinates)
            .setHTML(`
            <h3>${bookstore.properties.Name}</h3>
            <img src="Images/Arch of Constantine.JPG" alt="Home Image" style="width:100%; max-width:300px; height:auto;">
                `)
            .addTo(map);
    });
    
