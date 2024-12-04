import { reads } from "./readers.js";

const map = new maplibregl.Map({
  container: "map",
  style: "https://api.maptiler.com/maps/backdrop-light/style.json?key=RGPOEN82OWm2BBbdAcht",
  center: [-75.7, 45.37],
  zoom: 12.5,
  pitch: 95,
});

let ReadsFeatureCollection = [];

// Replace Street View with an image viewer
reads.forEach((read) => {
  const imagePath = `images/${read.id}.jpg`; 

  let readFeature = {
    code: `${read.code}`,
    type: "Feature",
    properties: {
      description: `<h3>${read.Name}</h3>
      <ul>
      <li>Rating: ${read.Rating}</li>
      <li>Address: ${read.Address}</li>
       </ul>
       <img src="${imagePath}" alt="${read.Name}" width="220" height="145" style="border:1px solid #ccc;"/>`,
    },
    geometry: {
      type: "Point",
      coordinates: [read.Longitude, read.Latitude],
    },
  };
  ReadsFeatureCollection.push(readFeature);
});

map.on("load", () => {
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: ReadsFeatureCollection,
    },
  });

  // Add a layer showing the places with a custom icon.
  map.loadImage("Reader.png", (error, image) => {
    if (error) {
      console.error("Error loading image:", error);
      return;
    }
    map.addImage("custom-marker", image);

    map.addLayer({
      id: "places",
      type: "symbol",
      source: "places",
      layout: {
        "icon-image": "custom-marker",
        "icon-size": 0.1, 
        "icon-allow-overlap": true,
      },
    });
  });

  // Create a popup that will stay open when clicked.
  const popup = new maplibregl.Popup({
    closeButton: true, // Set closeButton to true so the user can close the popup manually
    closeOnClick: false, // Keep the popup open after a click
  });

  map.on("click", "places", (e) => {
    // Check if the popup already exists
    const coordinates = e.features[0].geometry.coordinates.slice();
    const description = e.features[0].properties.description;

    // Ensure that if the map is zoomed out such that multiple
    // copies of the feature are visible, the popup appears
    // over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    // Set the popup content and coordinates
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on("mouseenter", "places", (e) => {
    // Change the cursor style as a UI indicator.
    map.getCanvas().style.cursor = "pointer";
  });

  map.on("mouseleave", "places", () => {
    // Reset the cursor style when the mouse leaves
    map.getCanvas().style.cursor = "";
  });
});

// ? button 
document.getElementById('helloButton').addEventListener('click', () => {
  alert('For my studio assignment I am creating a senior care center that emulates the idea of a "Living Library", as such this is an interactive map of the well known public libraries in Ottawa. Click on the little readers to see more info!');
});

// Show the loader on page load
const loader = document.getElementById("map-loader");

// Hide the loader when the map finishes loading
map.on("load", () => {
  loader.style.display = "none";
});
map.on("load", () => {
  loader.classList.add("hidden");
  setTimeout(() => loader.style.display = "none", 500); // Ensure the loader is removed after fade-out
});


