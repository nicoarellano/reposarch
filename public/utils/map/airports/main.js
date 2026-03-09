import { airports } from "./airports-list";

const map = new maplibregl.Map({
  container: "map",
  style: "/map-styles/light.json",
  center: [-75, 45],
  zoom: 5,
});

let airporsFeatureCollection = [];

airports.forEach((airport) => {
  const image =
    airport.image === ""
      ? "https://upload.wikimedia.org/wikipedia/commons/5/5e/ANA_777-300_Taking_off_from_JFK.jpg"
      : airport.image;

  let airportFeature = {
    code: `${airport.code}`,
    type: "Feature",
    properties: {
      description: `<h1>${airport.name}</h1><ul><li>Code: ${airport.code}</li><li>Province: ${airport.province}</li><li>City: ${airport.city}</li></ul><img src="${image}" alt="${airport.code}" width=200px>`,
    },
    geometry: {
      type: "Point",
      coordinates: [airport.longitude, airport.latitude],
    },
  };

  airporsFeatureCollection.push(airportFeature);
});

map.on("load", () => {
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: airporsFeatureCollection,
    },
  });

  // Add a layer showing the places.
  map.addLayer({
    id: "places",
    type: "circle",
    source: "places",
    paint: {
      "circle-color": "red",
      "circle-radius": 6,
      "circle-stroke-width": 2,
      "circle-stroke-color": "yellow",
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
});
