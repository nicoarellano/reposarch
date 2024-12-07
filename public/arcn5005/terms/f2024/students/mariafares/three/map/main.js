import { places } from './places.js';


const map = new maplibregl.Map({
  container: 'map',
  style:
    'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
  center: [-79.79873333000715, 43.32621632589032],
  zoom: 8,
  container: 'map',
  style:
    'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
  center: [-79.79873333000715, 43.32621632589032],
  zoom: 8,
});


let placesFeatureCollection = [];

places.forEach((place) => {
  const image = place.image? places.image : "";

    let placesFeature = {
      code: `${places.code}`,
      type: "Feature", 
      properties:{ 
        description: `<h1>${places.name}</h1><ul><li>Code: ${places.code}</li><li>City: ${places.city}</li></ul><img src="${image}" alt="${places.code}" width=200px>`,

      },
      geometry: {
        type: "Point",
        coordinates: [places.longitude, places.latitude],
      },
    };

    placesFeatureCollection.push(placesFeature);

});


  // Add a layer showing the places.
  map.addLayer({
    id: 'places',
    type: 'symbol',
    source: 'places',
    layout: {
      "circle-color": "b",
      "circle-radius": 6,
      "circle-stroke-width": 20,
      "circle-stroke-color": "yellow",
    },
  });

  // Create a popup, but don't add it to the map yet.
  const popup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  map.on('mouseenter', 'places', (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = 'pointer';
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
    // Populate the popup and set its coordinates
    // based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on('mouseleave', 'places', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });