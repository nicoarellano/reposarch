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
  });}