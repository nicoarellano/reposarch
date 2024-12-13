const map = new maplibregl.Map({
  container: 'map',
  style: 'light.json',
  center: [39.8173, 21.4241],
  zoom: 2,
});


const locations = [
  [104.1954, 35.8617, 'Tang Dynasty, China', ' Matcha’s predecessor was a powdered tea consumed during the Tang Dynasty. Tea leaves were steamed, formed into bricks for easy transport, and ground into powder before consumption.'],
  [135.8048, 34.6851, 'Nara, Japan', 'Buddhist monks brought powdered tea to Japan from China, using it in religious rituals. This was the beginning of matchas journey in Japan.'],
  [135.7681, 35.0116, 'Kyoto, Japan', 'Matcha was refined and formalized during the Kamakura Period, thanks to Zen monk Eisai. Kyoto’s Uji region became the center for matcha cultivation and production.'],
  [-0.1276, 51.5072, 'London, England', 'During the 19th and early 20th centuries, Europe (particularly the UK) developed a strong tea culture. Although matcha wasn’t mainstream, Japan’s tea culture, including matcha, intrigued European elites through art and cultural exchanges during the Meiji Restoration.'],
  [2.3514,48.8575, 'Paris, France', 'In the late 20th century, France became an early adopter of matcha in desserts, incorporating it into macarons, cakes, and other pastries. French patisseries loved matcha’s vivid color and unique flavor, which complemented their emphasis on artistry in desserts.'],
  [-74.0060, 40.7128, 'New York, USA', 'Matcha gained mainstream traction in North America in the early 2000s, largely fueled by the growing health-conscious movement. In the U.S., cities like New York and Los Angeles became hotspots for matcha cafes and lattes.'],
  [-123.1216, 49.2827, 'Vancouver, Canada', 'Vancouver boasts a rich array of matcha offerings, from traditional teas to innovative desserts. Establishments like Cowdog Coffee and Oidé Coffee have been recognized for their exceptional matcha beverages.'],
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
          <alt="${properties.PlaceName}" style="max-width: 100%; height: auto;">
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
