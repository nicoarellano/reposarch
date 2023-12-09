const geojson = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'properties': {
          'message': 'Versace Mansion',
          'iconSize': [100, 100],
          'iconImage': 'MIA_1.jpg'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-80.1304877179423, 25.782001618784943]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Newport Beachside Hotel',
          'iconSize': [100, 100],
          'iconImage': 'MIA_3.jpg'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-80.12095644405645, 25.930901656202497]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Casablanca on The Bay',
          'iconSize': [100, 100],
          'iconImage': 'MIA_4.jpg'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-80.18603573114235, 25.791786921161403]
        }
      },
      {
        'type': 'Feature',
        'properties': {
          'message': 'Espanola Way',
          'iconSize': [100, 100],
          'iconImage': 'MIA_2.jpg'
        },
        'geometry': {
          'type': 'Point',
          'coordinates': [-80.13002831429822, 25.787565314341776]
        }
      }
    ]
  };
  
  const map = new maplibregl.Map({
    container: 'map',
    style:
      'https://api.maptiler.com/maps/f41c7035-7d66-4a23-8706-f4ac1903b10f/style.json?key=TcKJH5tccyd0AjlsEtqk',
    center: [-80.12002610127502, 25.8442553156438],
    zoom: 11
  });
  
  // add markers to map
  geojson.features.forEach((marker) => {
    // create a DOM element for the marker
    const el = document.createElement('div');
    el.className = 'marker';
    el.style.backgroundImage = `url(${marker.properties.iconImage})`;
    el.style.width = `${marker.properties.iconSize[0]}px`;
    el.style.height = `${marker.properties.iconSize[1]}px`;
  
    el.addEventListener('click', () => {
      window.alert(marker.properties.message);
    });
  
    // add marker to map
    new maplibregl.Marker({ element: el })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

   // Add tooltip text
   const tooltip = new maplibregl.Popup({
    offset: 25,
    closeButton: false,
    closeOnClick: false
  }).setHTML(marker.properties.message);

  el.addEventListener('mouseenter', () => {
    tooltip.setLngLat(marker.geometry.coordinates)
      .addTo(map);
  });

  el.addEventListener('mouseleave', () => {
    tooltip.remove();
  });

  // add marker to map
  new maplibregl.Marker({ element: el })
    .setLngLat(marker.geometry.coordinates)
    .addTo(map);
});
