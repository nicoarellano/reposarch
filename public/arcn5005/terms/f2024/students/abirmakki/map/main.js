const map = new maplibregl.Map({
  container: 'map',
  style: 'light.json',
  center: [-99.1332, 45],
  zoom: 2,
});


const locations = [
  [-123.1216, 49.2827, 'Vancouver, Canada', 'Youre paying 10$ a slice but 10$ for a slice of heaven isnt too bad.', './Images/Vancouver.png'],
  [-115.5708, 51.1784, 'Banff, Canada', 'This after an 8hr hike >>>.', './Images/Banff.png'],
  [-73.5673, 45.5017, 'Montreal, Canada', 'The french look down on us for our gluttony.', './Images/Montreal.png'],
  [51.5310, 25.2760, 'Doha, Qatar', 'Looked sus, but the flavour was flavouring.', './Images/Doha.png'],
  [35.4815, 33.3786, 'Nabatieh, Lebanon', 'My jeddos famous "Foul w Hummus <3".', './Images/Nabatieh.png'],
  [134.0117, 34.4605, 'Naoshima, Japan', 'What I would do to have this breakfast again.', './Images/Naoshima.png'],
  [-7.5898, 33.5731, 'Casablanca, Morocco', 'Camel meat. CAMEL MEAT!', './Images/Casablanca.png'],
  [-74.0060, 40.7128, 'New York, USA', 'I can eat 10 of these.', './Images/NYE.png'],
];


map.on('load', () => {

  map.loadImage('./Images/BigDot.png', (error, image) => {
    if (error) {
      console.error('Error loading image:', error);
      return;
    }
    map.addImage('big-dot', image);

    
    const pointFeatures = locations.map(location => ({
      'type': 'Feature',
      'geometry': {
        'type': 'Point',
        'coordinates': [location[0], location[1]],
      },
      'properties': {
        'PlaceName': location[2],
        'Description': location[3],
        'Image': location[4],
      },
    }));

    
    map.addSource('locations', {
      'type': 'geojson',
      'data': {
        'type': 'FeatureCollection',
        'features': pointFeatures,
      },
    });

   
    map.addLayer({
      'id': 'dots',
      'type': 'symbol',
      'source': 'locations',
      'layout': {
        'icon-image': 'big-dot',
        'icon-size': 0.1,
      },
    });


    const popup = new maplibregl.Popup();

    map.on('click', 'dots', (e) => {
      const coordinates = e.features[0].geometry.coordinates.slice();
      const properties = e.features[0].properties;

  
      popup.setLngLat(coordinates)
        .setHTML(`
          <h3>${properties.PlaceName}</h3>
          <img src="${properties.Image}" alt="${properties.PlaceName}" style="max-width: 100%; height: auto;">
          <p>${properties.Description}</p>
        `)
        .addTo(map);
    });


    map.on('mouseenter', 'dots', () => {
      map.getCanvas().style.cursor = 'pointer';
    });

 
    map.on('mouseleave', 'dots', () => {
      map.getCanvas().style.cursor = '';
    });
  });
});
