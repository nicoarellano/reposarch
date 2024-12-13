import { recordstores } from './Recordstores.js';
import { venues } from './Venues.js';
const map = (window.map = new maplibregl.Map({
  container: 'map',
  style:
    'https://api.maptiler.com/maps/streets/style.json?key=BsQV9nh1HzSGX3QZmgDL',
  center: [-75.697193, 45.42153],
  zoom: 10,
  antialias: true,
  maxPitch: 70,
  minZoom: 3,
}));

map.addControl(new maplibregl.FullscreenControl(), 'top-left');

let recordstoreFeatureCollection = [];
let venueFeatureCollection = [];

// Prepare recordstore features
recordstores.forEach((recordstore) => {
  const image = recordstore.image;
  let recordstoreFeature = {
    type: 'Feature',
    properties: {
      description: `<h2>${recordstore.name}</h2><ul><li>Address: ${recordstore.Address}</li><li>Genres: ${recordstore.Genres}</li></ul><img src="${image}" alt="${recordstore.name}" width=100px>`,
    },
    geometry: {
      type: 'Point',
      coordinates: [recordstore.longitude, recordstore.latitude],
    },
  };
  recordstoreFeatureCollection.push(recordstoreFeature);
});

// Prepare venue features
venues.forEach((venue) => {
  const image = venue.image;
  let venueFeature = {
    type: 'Feature',
    properties: {
      description: `<h2>${venue.name}</h2><ul><li>Address: ${venue.Address}</li><li>Genres: ${venue.Genres}</li></ul><img src="${image}" alt="${venue.name}" width=100px>`,
    },
    geometry: {
      type: 'Point',
      coordinates: [venue.longitude, venue.latitude],
    },
  };
  venueFeatureCollection.push(venueFeature);
});

map.on('style.load', () => {
  addLayers();
});

const addLayers = () => {
  // Add recordstores source
  map.addSource('recordstores', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: recordstoreFeatureCollection,
    },
  });

  // Add venues source
  map.addSource('venues', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: venueFeatureCollection,
    },
  });

  // Load and add recordstore icon
  map.loadImage('./PNG of Vinyl.png', (error, image) => {
    if (error) throw error;

    map.addImage('vinyl-icon', image);

    // Add recordstores layer
    map.addLayer({
      id: 'recordstores',
      type: 'symbol',
      source: 'recordstores',
      layout: {
        'icon-image': 'vinyl-icon',
        'icon-size': 0.03,
      },
    });
  });

  // Load and add venue icon
  map.loadImage('./Live.png', (error, image) => {
    if (error) throw error;

    map.addImage('live-icon', image);

    // Add venues layer
    map.addLayer({
      id: 'venues',
      type: 'symbol',
      source: 'venues',
      layout: {
        'icon-image': 'live-icon',
        'icon-size': 0.03,
      },
    });
  });

  // Create a popup
  const popup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  // Handle popups for recordstores
  map.on('mouseenter', 'recordstores', (e) => {
    map.getCanvas().style.cursor = 'pointer';
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on('mouseleave', 'recordstores', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });

  // Handle popups for venues
  map.on('mouseenter', 'venues', (e) => {
    map.getCanvas().style.cursor = 'pointer';
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on('mouseleave', 'venues', () => {
    map.getCanvas().style.cursor = '';
    popup.remove();
  });
};

// FUNCTIONS _____________________________________________________________________________________________________

function flyTo(map, lng, lat, zoom = 15, pitch = 50) {
  map.flyTo({
    center: [lng, lat],
    zoom: zoom,
    pitch: pitch,
    duration: 2000,
  });
}
