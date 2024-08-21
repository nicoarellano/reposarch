import { icons } from "../assets/icons.js";
import { airports } from "./airports/airports-list.js";

const map = (window.map = new maplibregl.Map({
  container: "map-f2024",
  style: "/map-styles/satellite.json",
  center: [-98.74, 56.415], // starting position [lng, lat]
  zoom: 3, // starting zoom
  antialias: true, // create the gl context with MSAA antialiasing, so custom layers are antialiased
  maxPitch: 70,
  minZoom: 3,
}));

map.addControl(new maplibregl.FullscreenControl(), "top-left");

// parameters to ensure the model is georeferenced correctly on the map
const modelOrigin = [-75.69435, 45.38435];
const modelAltitude = 15;
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
const customLayer = {
  id: "3d-model",
  type: "custom",
  renderingMode: "3d",
  onAdd(map, gl) {
    this.camera = new THREE.Camera();
    this.scene = new THREE.Scene();

    // create two three.js lights to illuminate the model
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(0, -70, 100).normalize();
    this.scene.add(directionalLight);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff);
    directionalLight2.position.set(0, 70, 100).normalize();
    this.scene.add(directionalLight2);

    // use the three.js GLTF loader to add the 3D model to the three.js scene
    const loader = new THREE.GLTFLoader();

    const buldings = [
      "../three/models/AA/on_ott_arc_220485353_walls.glb",
      "../three/models/AA/on_ott_arc_220485353_roofs.glb",
      "../three/models/AA/on_ott_arc_220485353_slabs.glb",
      "../three/models/AA/on_ott_arc_220485353_windows.glb",
    ];

    buldings.forEach((building) => {
      loader.load(building, (gltf) => {
        this.scene.add(gltf.scene);
      });
    });

    loader.load("../three/models/justin.glb", (gltf) => {
      const model = gltf.scene;

      const scale = 50;

      model.scale.x = scale;
      model.scale.y = scale;
      model.scale.z = scale;

      this.scene.add(model);
    });

    this.map = map;

    // use the MapLibre GL JS map canvas for three.js
    this.renderer = new THREE.WebGLRenderer({
      canvas: map.getCanvas(),
      context: gl,
      antialias: true,
    });

    this.renderer.autoClear = false;
  },
  render(gl, matrix) {
    const rotationX = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(1, 0, 0),
      modelTransform.rotateX
    );
    const rotationY = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 1, 0),
      modelTransform.rotateY
    );
    const rotationZ = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 0, 1),
      modelTransform.rotateZ
    );

    const m = new THREE.Matrix4().fromArray(matrix);
    const l = new THREE.Matrix4()
      .makeTranslation(
        modelTransform.translateX,
        modelTransform.translateY,
        modelTransform.translateZ
      )
      .scale(
        new THREE.Vector3(
          modelTransform.scale,
          -modelTransform.scale,
          modelTransform.scale
        )
      )
      .multiply(rotationX)
      .multiply(rotationY)
      .multiply(rotationZ);

    this.camera.projectionMatrix = m.multiply(l);
    this.renderer.resetState();
    this.renderer.render(this.scene, this.camera);
    this.map.triggerRepaint();
  },
};

map.on("style.load", () => {
  map.addLayer(customLayer);
  addLayers();
});

map.on("mousemove", () => {
  const layer = map.getLayer("places");
  if (!layer) addLayers();
});

// Go To Site 🏢
const goTo = document.getElementById("go-to");
let toggleGoTo = true;
goTo.onclick = function () {
  if (toggleGoTo) {
    this.setAttribute("title", "Go to Canada");
    document.getElementById("go-to-icon").setAttribute("d", icons.worldIcon);
    // Fly to Carleton
    flyTo(map, -75.697, 45.384, 15.6);
  } else {
    this.setAttribute("title", "Go to site");
    document.getElementById("go-to-icon").setAttribute("d", icons.goToIcon);
    // Fly to Canada
    flyTo(map, -98.74, 56.415, 3, 0);
  }
  toggleGoTo = !toggleGoTo;
};

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
      description: `<h2>${airport.name}</h2><ul><li>Code: ${airport.code}</li><li>Province: ${airport.province}</li><li>City: ${airport.city}</li></ul><img src="${image}" alt="${airport.code}" width=100px>`,
    },
    geometry: {
      type: "Point",
      coordinates: [airport.longitude, airport.latitude],
    },
  };

  airporsFeatureCollection.push(airportFeature);
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
});

const addLayers = () => {
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: airporsFeatureCollection,
    },
  });

  // Add a layer showing the places.
  map.addLayer({
    id: `places`,
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
