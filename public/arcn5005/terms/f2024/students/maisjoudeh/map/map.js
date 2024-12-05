const map = new maplibregl.Map({
  container: 'map',
  style: 'https://demotiles.maplibre.org/style.json',
  center: [0, 0], 
  zoom: 2 
});

map.on('load', () => {
 
  const geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
          "type": "Polygon",
          "coordinates": [[
            [-74.006, 40.7128],
            [-74.005, 40.7128],
            [-74.005, 40.7138],
            [-74.006, 40.7138],
            [-74.006, 40.7128]
          ]]
        },
      }
    ]
  };


  map.addSource('buildings', {
    type: 'geojson',
    data: geojson
  });


  map.addLayer({
    id: '2d-buildings',
    type: 'fill',
    source: 'buildings',
    paint: {
      'fill-color': '#aaa',
      'fill-opacity': 0.5
    }
  });


  const coffeeShops = [
    { name: 'Dimitris Coffee', coords: [35.9106, 31.9497] },
    { name: 'Rome', coords: [12.4964, 41.9028] },
    { name: 'One Life Coffee', coords: [55.2768, 25.2048] },
    { name: 'Caffe Nero', coords: [55.2804, 25.2760] },
    { name: 'Second Cup Heron Park', coords: [-75.6811, 45.3490] },
    { name: 'Bridgehead Coffee', coords: [-75.6990, 45.4115] }
  ];

  coffeeShops.forEach(shop => {
    const el = document.createElement('div');
    el.className = 'marker';
    new maplibregl.Marker(el)
      .setLngLat(shop.coords)
      .setPopup(new maplibregl.Popup().setText(shop.name))
      .addTo(map);
  });
});