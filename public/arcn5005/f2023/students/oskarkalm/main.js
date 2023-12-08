const map = new maplibregl.Map({
    container: 'map', // container id
    style: 'https://demotiles.maplibre.org/style.json', // style URL
    center: [ -79.73777,44.10518], // starting position [lng, lat]
    zoom:  6// starting zoom
  });
  
  
  map.on('load', () => {
    // Ski Logo
    map.loadImage(
        'https://static-00.iconduck.com/assets.00/skiing-icon-2048x1959-0heiafb5.png',
        (error, image) => {
            if (error) throw error;
            map.addImage('SkiHills-marker', image);
            
        
            //Adding Ski Hills
            map.addSource('SkiHills', {
                'type': 'geojson',
                'data': 
                {
                  "type": "FeatureCollection",
                  "features": [
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -81.06,46.58 ]
                   },
                   "properties": {
                   "Name":"Adanac Ski Hill",
                   "Location":"Sudbury",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"374 m",
                   "NumberOfLifts":1
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -78.4,46.22 ]
                   },
                   "properties": {
                   "Name":"Antoine Mountain",
                   "Location":"Mattawa",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"192 m",
                   "NumberOfLifts":1
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -77.35,44.1 ]
                   },
                   "properties": {
                   "Name":"Batawa Ski Hill",
                   "Location":"Quinte West",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"762 m",
                   "NumberOfLifts":3
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -80.32,44.21 ]
                   },
                   "properties": {
                   "Name":"Beaver Valley Ski Club",
                   "Location":"Beaver Valley",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"155 m",
                   "NumberOfLifts":6
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -80.18,44.3 ]
                   },
                   "properties": {
                   "Name":"Blue Mountain",
                   "Location":"Collingwood",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":" 220 m",
                   "NumberOfLifts":13
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -81.34,42.94 ]
                   },
                   "properties": {
                   "Name":"Boler Mountain",
                   "Location":"London",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"63 m",
                   "NumberOfLifts":5
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  { }
                   },
                   "properties": {
                   "Name":"Brimacombe",
                   "Location":"Port Perry",
                   "Hours":"9:00 am- 9:00pm",
                   "Vertical":"72 m",
                   "NumberOfLifts":2
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -76.46,45.16 ]
                   },
                   "properties": {
                   "Name":"Calabogie Peaks",
                   "Location":"Ottawa",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"232 m",
                   "NumberOfLifts":3
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -79.86,43.87 ]
                   },
                   "properties": {
                   "Name":"Caledon Ski Club",
                   "Location":"Caledon",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"72 m",
                   "NumberOfLifts":2
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -80.42,43.43 ]
                   },
                   "properties": {
                   "Name":"Chicopee",
                   "Location":"Kitchener",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"61 m",
                   "NumberOfLifts":5
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -79.05,44.01 ]
                   },
                   "properties": {
                   "Name":"Dagmar",
                   "Location":"Port Perry",
                   "Hours":"9:00 am- 9:00pm",
                   "Vertical":"65 m",
                   "NumberOfLifts":4
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -80.38,44.54 ]
                   },
                   "properties": {
                   "Name":"Georgian Peaks Club",
                   "Location":"Thornbury",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"250 m",
                   "NumberOfLifts":5
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -79.9389,43.5040 ]
                   },
                   "properties": {
                   "Name":"Glen Eden",
                   "Location":"Milton",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"72 m",
                   "NumberOfLifts":6
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -79.13,45.2 ]
                   },
                   "properties": {
                   "Name":"Hidden Valley Highlands",
                   "Location":"Huntsville",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"100 m",
                   "NumberOfLifts":4
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -80.05,43.98 ]
                   },
                   "properties": {
                   "Name":"Hockley Valley",
                   "Location":"Mono",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"114 m",
                   "NumberOfLifts":4
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -79.4,44.34 ]
                   },
                   "properties": {
                   "Name":"Horseshoe Valley",
                   "Location":"Barrie",
                   "Hours":"9:00 am- 9:00pm",
                   "Vertical":"94 m",
                   "NumberOfLifts":8
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -79.04,44 ]
                   },
                   "properties": {
                   "Name":"Lakeridge Ski Resort",
                   "Location":"Port perry",
                   "Hours":"9:00 am- 9:00pm",
                   "Vertical":"80 m",
                   "NumberOfLifts":5
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -80.05,44.2 ]
                   },
                   "properties": {
                   "Name":"Mansfield Ski Club",
                   "Location":"Mansfield",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"130 m",
                   "NumberOfLifts":7
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -79.4,44.37 ]
                   },
                   "properties": {
                   "Name":"Mount St. Louis Moonstone",
                   "Location":"Moonstone",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"168 m",
                   "NumberOfLifts":13
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -79.43,43.75 ]
                   },
                   "properties": {
                   "Name":"North York Ski Center",
                   "Location":"Toronto",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"55 m",
                   "NumberOfLifts":1
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -79.01,43.99 ]
                   },
                   "properties": {
                   "Name":"Skyloft Ski Country Club",
                   "Location":"Port Perry",
                   "Hours":"9:00 am- 9:00pm",
                   "Vertical":"45 m",
                   "NumberOfLifts":2
                   }
                 },
                 {
                   "type": "Feature",
                   "geometry": {
                      "type": "Point",
                      "coordinates":  [ -79.4368,43.8260 ]
                   },
                   "properties": {
                   "Name":"Uplands Ski Area",
                   "Location":"",
                   "Hours":"9:00 am- 4:00pm",
                   "Vertical":"30",
                   "NumberOfLifts":1
                   }
                 }
               ]
               }
            });
            // Add a symbol layer for SkiHills
            map.addLayer({
                'id': 'SkiHills',
                'type': 'symbol',
                'source': 'SkiHills',
                'layout': {
                    'icon-image': 'SkiHills-marker',
                    'icon-size': 0.02
  
                }
            });
        }
    )
  
  });
  
  //SkiHills Popups
  map.on('click', 'SkiHills', (e) => {
    const coordinates = e.features[0].geometry.coordinates.slice();
    const SkiHills = e.features[0];
  
  
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
                <h3>${SkiHills.properties.Name}</h3>
                <p>Location: ${SkiHills.properties.Location}</p>
                <p>Hours: ${SkiHills.properties.Hours}</p>
                <p>Vertical: ${SkiHills.properties.Vertical}</p>
                <p>NumberOfLifts: ${SkiHills.properties.NumberOfLifts}</p>
                `)
            .addTo(map);
    });
  
  
    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) 
      {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
  
     
  // Change the cursor to a pointer when the mouse is over the places layer.
  map.on('mouseenter', 'SkiHills', () => {
      map.getCanvas().style.cursor = 'pointer';
  });
  
  // Change it back to a pointer when it leaves.
  map.on('mouseleave', 'SkiHills', () => {
      map.getCanvas().style.cursor = '';
   });
  
  // After the last frame rendered before the map enters an "idle" state.
  map.on('idle', () => {
    // If these two layers were not added to the map, abort
      if (!map.getLayer('SkiHills')) 
      {
      return;
      }
   
  });
  
