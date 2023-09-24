import { icons } from "../../assets/icons.js";

initMaplibre();

/* Mapbox renders maps and map tiles with Web Mercator projection 
using the EPSG:3857 projected coordinate system 
(sometimes called EPSG:900913)*/

function initMaplibre() {
  const map = new maplibregl.Map({
    container: "maplibreContainer", // container ID
    style: "/map-styles/satelliteHybrid.json",
    center: [-98.74, 56.415], // starting position [lng, lat]
    zoom: 3, // starting zoom
    antialias: true,
    maplibreLogo: true,
    // projection: "globe", // display the map as a 3D globe
  });
  // Day sky
  map.on("style.load", () => {
    map.setFog({}); // Set the default atmosphere style
  });

  // Go To Site 🏢
  const goTo = document.getElementById("go-to");
  let toggleGoTo = true;
  goTo.onclick = function () {
    if (toggleGoTo) {
      this.setAttribute("title", "Go to Canada");
      document.getElementById("go-to-icon").setAttribute("d", icons.worldIcon);
      // Fly to Carleton
      flyTo(map, -75.697, 45.384);
    } else {
      this.setAttribute("title", "Go to site");
      document.getElementById("go-to-icon").setAttribute("d", icons.goToIcon);
      // Fly to Canada
      flyTo(map, -98.74, 56.415, 3, 0);
    }
    toggleGoTo = !toggleGoTo;
  };

  // Map Style
  // Toggle Map view
  const mapView = document.getElementById("map-view");
  let toggleMapView = true;
  mapView.onclick = function () {
    if (toggleMapView) {
      const mapIcon = document.getElementById("map-icon");
      mapIcon.setAttribute("d", icons.satelliteIcon);
      this.setAttribute("title", "Satellite view");
      map.setStyle("/map-styles/streets.json");
    } else {
      const mapIcon = document.getElementById("map-icon");
      this.setAttribute("title", "Map view");
      mapIcon.setAttribute("d", icons.mapIcon);
      map.setStyle("/map-styles/satelliteHybrid.json");
    }
    toggleMapView = !toggleMapView;
  };
}

// FUNCTIONS _____________________________________________________________________________________________________

function flyTo(map, lng, lat, zoom = 15, pitch = 50) {
  map.flyTo({
    center: [lng, lat],
    zoom: zoom,
    pitch: pitch,
    duration: 2000,
  });
}
