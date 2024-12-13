import { builders } from "./builderlist.js";

const map = (window.map = new maplibregl.Map({
  container: 'map',
  style:'https://api.maptiler.com/maps/satellite/style.json?key=y7eVB4YCD5CCSpo4wjSi',
  center: [-98.74, 57.415],
  zoom: 1,
  antialias: true, // create the gl context with MSAA antialiasing, so custom layers are antialiased
  maxPitch: 70,
  minZoom: 3,
}));

map.addControl(new maplibregl.FullscreenControl(), "top-left");

// parameters to ensure the model is georeferenced correctly on the map
const modelOrigin = [-75.69435, 45.38435];
const modelAltitude = 10;
const modelRotate = [Math.PI / 2, 0, 0];

const modelAsMercatorCoordinate = maplibregl.MercatorCoordinate.fromLngLat(
  modelOrigin,
  modelAltitude
);

// transformation parameters to position, rotate and scale the 3D model onto the map
const modelTransform = {
  translateX: modelAsMercatorCoordinate.x,
  translateY: modelAsMercatorCoordinate.y,
  translateZ: modelAsMercatorCoordinate.z,
  rotateX: modelRotate[0],
  rotateY: modelRotate[1],
  rotateZ: modelRotate[2],
  /* Since our 3D model is in real world meters, a scale transform needs to be
   * applied since the CustomLayerInterface expects units in MercatorCoordinates.
   */
  scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits(),
};

const THREE = window.THREE;

// configuration of the custom layer for a 3D model per the CustomLayerInterface


map.on("style.load", () => {
  addLayers();
});



let builderFeatureCollection = [];

builders.forEach((builder) => {
  const image =
  builder.image === ""
      ? "straworks.jpg"
      : builder.image;

  let builderFeature = {
    code: `${builder.code}`,
    type: "Feature",
    properties: {
      description: `<h2>${builder.name}</h2><ul><li>Province: ${builder.province}</li><li>City: ${builder.city}</li><li>Materials: ${builder.materials}</li></ul><img src="${image}" alt="${builder.name}" width=100px>`,
    },
    geometry: {
      type: "Point",
      coordinates: [builder.longitude, builder.latitude],
    },
  };

  builderFeatureCollection.push(builderFeature);

});

const addLayers = () => {
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: builderFeatureCollection,
    },
  });

  // Add a layer showing the places.
  map.addLayer({
    id: `places`,
    type: "circle",
    source: "places",
    paint: {
      "circle-color": "green",
      "circle-radius": 8,
    },
  });

  // Create a popup, but don't add it to the map yet.
  const popup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: false,
  });

  map.on("mouseenter", "places", (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = "pointer";

    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Populate the popup and set its coordinates based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on("mouseleave", "places", () => {
    map.getCanvas().style.cursor = "";
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


