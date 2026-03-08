import { icons } from '../assets/icons.js';

const map = (window.map = new maplibregl.Map({
  container: 'map-martin',
  style: './mapstyles/satellite.json',
  center: [-98.74, 56.415], // starting position [lng, lat]
  zoom: 3, // starting zoom
  antialias: true, // create the gl context with MSAA antialiasing, so custom layers are antialiased
  maxPitch: 70,
  minZoom: 3,
}));

map.addControl(new maplibregl.FullscreenControl(), 'top-left');

map.on('style.load', () => {
  addLayers();
});

// Go To Site 🏢
const goTo = document.getElementById('go-to');
let toggleGoTo = true;
goTo.onclick = function () {
  if (toggleGoTo) {
    this.setAttribute('title', 'Go to Canada');
    document.getElementById('go-to-icon').setAttribute('d', icons.worldIcon);
    // Fly to Carleton
    flyTo(map, -77.2936, 45.912, 14);
  } else {
    this.setAttribute('title', 'Go to site');
    document.getElementById('go-to-icon').setAttribute('d', icons.goToIcon);
    // Fly to Canada
    flyTo(map, -98.74, 56.415, 3, 0);
  }
  toggleGoTo = !toggleGoTo;
};

const layer = 'P_BUILDING';
// const layer = 'T_Spot_Height'

const addLayers = () => {
  map.addLayer({
    id: layer,
    source: {
      type: 'vector',
      tiles: [
        // 'http://cdttest.eastus.cloudapp.azure.com:3000/T_Spot_Height/{z}/{x}/{y}',
        `http://cdttest.eastus.cloudapp.azure.com:3000/${layer}/{z}/{x}/{y}`,
      ],
    },
    'source-layer': layer,
    // type: 'circle',
    // paint: {
    //   'circle-radius': 5,
    //   'circle-color': '#FF0000',
    //   'circle-stroke-color': '#ffffff',
    //   'circle-stroke-width': 1,
    // },
    type: 'fill',
    paint: {
      'fill-color': '#ffff00',
      'fill-opacity': 0.7,
    },
  });
};

map.on('click', layer, (e) => {
  const lng = e.lngLat.lng;
  const lat = e.lngLat.lat;
  const coordinates = [lng, lat];
  // const coordinates = e.features[0].geometry.coordinates.slice();
  const properties = e.features[0].properties;

  // Create popup content from properties
  let title = 'Building';
  if (properties.hasOwnProperty('idname')) title = properties.idname;
  console.log('BUILDING NAME:', title);
  let popupContent = `<div><h2>${title}</h2>`;
  for (const [key, value] of Object.entries(properties)) {
    popupContent += `<strong>${key}:</strong> ${value}<br>`;
  }
  popupContent += '</div>';

  new maplibregl.Popup()
    .setLngLat(coordinates)
    .setHTML(popupContent)
    .addTo(map);
});

// Change cursor to pointer when hovering over layer
map.on('mouseenter', layer, () => {
  map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', layer, () => {
  map.getCanvas().style.cursor = '';
});

// FUNCTIONS _____________________________________________________________________________________________________

function flyTo(map, lng, lat, zoom = 15, pitch = 50) {
  map.flyTo({
    center: [lng, lat],
    zoom: zoom,
    pitch: pitch,
    duration: 2000,
  });
}
