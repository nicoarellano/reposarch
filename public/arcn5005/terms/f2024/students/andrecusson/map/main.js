const map = new maplibregl.Map({
  container: 'map',
  style: 'light.json',
  center: [-79.63064, 43.68218],
  zoom: 3,
  pitch: 0,
  bearing: 0
});

let hoveredVanId = null;

map.on('load', () => {
  
  // Coordinate Icon
  map.loadImage('./Images/Icon.png', (error, image) => {
    if (error) {
      console.error('Error loading image:', error);
      return;
    }
    map.addImage('custom-icon', image);

    // Chronological Coordinate List 
    const coordinates = [
      [-79.63064, 43.68218, 'Toronto', 'The departure point of my journey!', './Images/Toronto.jpg'],
      [139.77806, 35.54901, 'Tokyo', 'I had a 7-hour layover in Japan on my way to the Philippines.', './Images/Tokyo.jpeg'],
      [121.01682, 14.51319, 'Manila', 'This was my final flight transfer before settling in my first location.', './Images/Manila.jpeg'],
      [120.15306, 12.04968, 'Coron', 'I spent a week here to get my PADI Advanced Open Water Certification.', './Images/Coron.jpg'],
      [118.74601, 9.77664, 'Puerto Princesa', 'On journey between dive sites, I stopped in Puerto Princesa to see the Underground River!', './Images/PP.jpg'],
      [124.11559, 11.33582, 'Malapascua', 'Arrived on Malapascua to do some diving after my new certification. This is the only place you can find Thresher Sharks!', './Images/Thresher.jpg'],
      [144.95680, -37.80165, 'Melbourne', 'My first stop in Australia was to visit my sister in Melbourne!', './Images/Melbourne.jpg'],
      [115.86229, -31.95153, 'Perth', 'I moved to Perth to live with distant family for three months and found myself working for an Architect at a coffeeshop during that time.', './Images/Perth.jpg'],
      [145.76362, -16.91857, 'Cairns', 'My first stop along the Australian East Coast was in Cairns to do a dive trip on the Great Barrier Reef where I swam with Minke whales!', './Images/Cairns.jpg'],
      [146.81566, -19.26114, 'Townsville', 'Next up, Townsville! I got to explore where my sister did her Masters degree.', './Images/Townsville.jpg'],
      [148.71608, -20.26787, 'Airlie Beach', 'Airlie Beach is home to one of the most famous clusters of islands and beaches; the Whitsundays!', './Images/Airlie.jpg'],
      [153.08962, -26.39620, 'Noosa', 'In Noosa, I camped out in the only other Everglades apart from Florida, where kangaroos roamed freely!', './Images/Noosa.jpg'],
      [153.60856, -28.64129, 'Byron Bay', 'One of the highlights of my time on the East Coast, unfortunately the surfing conditions were not good during my stay.', './Images/Byron.jpg'],
      [131.03418, -25.34352, 'Uluru', 'Going into the heart of the Australian outback was out of this world! The red dirt and vastness was unlike anything I have experienced!', './Images/Uluru.jpg'],
      [151.20860, -33.86782, 'Sydney', 'My last stop in Australia, I was able to cross many attractions off the bucket list; the Opera House, the Blue Mountains and Bondi Beach.', './Images/Sydney.jpg'],
      [-75.69941, 45.41961, 'Ottawa', 'Following a gap year full of travel, I am back at Carleton to complete my M.Arch degree!', './Images/Ottawa.jpg'],
    ];

    console.log('Coordinates:', coordinates);

    // Linking Coordinate Points to Descriptions Above
    const pointFeatures = coordinates.map(coord => ({
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [coord[0], coord[1]]
      },
      'properties': {
        'PlaceName': coord[2], 
        'Description': coord[3], 
        'Image': coord[4] 
      }
    }));

    // Line Going from Coordinate to Coordinate
    const lineFeature = {
      'type': 'Feature',
      'geometry': {
        'type': 'LineString',
        'coordinates': coordinates.map(coord => [coord[0], coord[1]])
      }
    };

    map.addSource('customCoordinates', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': [...pointFeatures, lineFeature]
      }
    });

    map.addLayer({
      'id': 'custom-points',
      'type': 'symbol',
      'source': 'customCoordinates',
      'layout': {
        'icon-image': 'custom-icon',
        'icon-size': 0.2
      },
      'filter': ['==', '$type', 'Point'] 
    });

//Line going in Chronological Order between Coordinates

    map.addLayer({
      'id': 'custom-line',
      'type': 'line',
      'source': 'customCoordinates',
      'paint': {
        'line-color': '#9370db', 
        'line-width': 2
      },
      'filter': ['==', '$type', 'LineString']
    });

    // Create a new popup instance
    const popup = new maplibregl.Popup();

    // Show popup on hover over custom points
    map.on('mouseenter', 'custom-points', (e) => {
      map.getCanvas().style.cursor = 'pointer';

      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.Description;

      // Update the popup content and position
      popup.setLngLat(coordinates).setHTML(`
        <h3>${e.features[0].properties.PlaceName}</h3>
        <img src="${e.features[0].properties.Image}" alt="${e.features[0].properties.PlaceName}" style="max-width: 100%; height: auto;">
        <p>${description}</p>
      `).addTo(map);
    });

    map.on('mousemove', 'custom-points', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const place = e.features[0];

      if (place.id !== hoveredVanId) {
        hoveredVanId = place.id;

        new maplibregl.Popup({
          closeButton: false 
        })
          .setLngLat(coordinates)
          .setHTML(`
            <h3>${place.properties.PlaceName}</h3>
            <img src="${place.properties.Image}" alt="${place.properties.PlaceName}" style="max-width: 100%; height: auto;">
            <p>${place.properties.Description}</p>
          `)
          .addTo(map);
      }
    });

    map.on('mouseout', 'custom-points', () => {
      if (hoveredVanId) {
        map.getCanvas().style.cursor = '';
        hoveredVanId = null;
      }
    });
  });
});
