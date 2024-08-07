import { chinatowns } from "/arcn5005/terms/f2023/students/weixizhong/map/maplibre/chinatowns/chinatowns-list.js";

const map = (window.map = new maplibregl.Map({
  container: "map",
  style:
    "https://api.maptiler.com/maps/ec847ff3-3c4a-4e49-b950-d572fd38fcbc/style.json?key=tsXILlKT33fdQiqtvY70",
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
  /* Since our 3D model is in real-world meters, a scale transform needs to be
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
let toggleGoTo = 0;

// Add image elements for the icons
const goToIconImg = document.createElement("img");
goToIconImg.id = "go-to-icon-img";

// Set the initial image source to chinatown.png
updateButtonStyle(goToIconImg, "./images/chinatown.png");
goTo.appendChild(goToIconImg);

// Set initial position for the button
setButtonPosition(goTo, { bottom: 10, left: 10 });

goTo.onclick = function () {
  switch (toggleGoTo) {
    case 0:
      this.setAttribute("title", "Go to China");
      updateButtonStyle(goToIconImg, "./images/china.png");
      // Fly to Chinatown
      flyTo(map, -75.708, 45.411, 15.6, 60, 4);
      map.setStyle(
        "https://api.maptiler.com/maps/b8d97f5e-18db-42d0-9b96-bbd717462f5c/style.json?key=tsXILlKT33fdQiqtvY70"
      );
      toggleGoTo = 1;
      break;
    case 1:
      this.setAttribute("title", "Go to Canada");
      updateButtonStyle(goToIconImg, "./images/canada.png");
      // Fly to China
      flyTo(map, 104.1954, 35.8617, 3, 0, 4);
      map.setStyle(
        "https://api.maptiler.com/maps/ec847ff3-3c4a-4e49-b950-d572fd38fcbc/style.json?key=tsXILlKT33fdQiqtvY70"
      );
      toggleGoTo = 2;
      break;
    case 2:
      this.setAttribute("title", "Go to Chinatown (Ottawa)");
      updateButtonStyle(goToIconImg, "./images/chinatown.png");
      // Fly to your original location (Canada)
      flyTo(map, -98.74, 56.415, 3.2, 0, 1);
      toggleGoTo = 0;
      break;
    default:
      break;
  }
};

function updateButtonStyle(button, imageSrc) {
  // Set the image source
  button.src = imageSrc;

  // Set the same size and shape
  const size = 80;
  const borderRadius = 10;

  // Additional fancy styles
  button.style.width = size + "px";
  button.style.height = size + "px";
  button.style.borderRadius = borderRadius + "px";
  button.style.transition = "transform 0.3s ease-in-out";
  button.style.transform = "scale(3)";

  // Reset styles after a short delay (for the animation effect)
  setTimeout(() => {
    button.style.transform = "";
  }, 300);
}

// Function to set button position
function setButtonPosition(button, position) {
  button.style.position = "fixed";
  button.style.bottom = position.bottom + "px";
  button.style.left = position.left + "px";
}

const chinatownsFeatureCollection = chinatowns.map((chinatown) => {
  const image = chinatown.image || "";
  const { code, name, province, city, longitude, latitude } = chinatown;

  return {
    code,
    type: "Feature",
    properties: {
      description: `
        <div class="popup-container">
          <h2>${name}</h2>
          <ul>
            <li><strong>Province:</strong> ${province}</li>
            <li><strong>City:</strong> ${city}</li>
          </ul>
          <img src="${image}" alt="${code}" class="popup-image">
        </div>
      `,
    },
    geometry: {
      type: "Point",
      coordinates: [longitude, latitude],
    },
  };
});

// Add a style for the popup container
const popupStyle = `
  .popup-container {
    max-width: 150px;
    max-hight: 130px;
    padding: 3px;
    background-color: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    font-family: 'Arial', sans-serif;
    border: 2px solid #000;
    transition: transform 0.3s ease-in-out;
    text-align: center; /* Center-align text */
  }

  .popup-container:hover {
    transform: scale(1.05);
  }

  .popup-container h2 {
    font-size: 15px;
    margin-bottom: 3px;
    color: #000;
  }

  .popup-container ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .popup-container li {
    margin-bottom: 3px;
  }

  .popup-container img {
    max-width: 100%;
    height: auto;
    margin-top: 3px;
    border-radius: 4px;
  }
`;

// Apply the popup style to the map
const style = document.createElement("style");
style.textContent = popupStyle;
document.head.appendChild(style);

const addLayers = () => {
  map.addSource("places", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: chinatownsFeatureCollection,
    },
  });

  // Add a layer showing the places.
  map.addLayer({
    id: `places`,
    type: "symbol",
    source: "places",
    layout: {
      "icon-image": "custom-marker",
      "icon-allow-overlap": true,
      "icon-size": 0.2,
      "icon-offset": [0, -70],
      "icon-anchor": "center",
    },
  });

  map.loadImage("./images/location.png", (error, image) => {
    if (error) throw error;

    map.addImage("custom-marker", image);

    map.on("click", "places", (e) => {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = "pointer";

      const coordinates = e.features[0].geometry.coordinates.slice();
      const description = e.features[0].properties.description;

      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }

      // Create a popup, set its coordinates, and add to the map.
      const popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
      })
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);

      // Update the popup style to make it smaller
      updatePopupStyle(popup);

      // Close the popup when the map is clicked.
      map.on("click", closePopup);

      function closePopup() {
        map.getCanvas().style.cursor = "";
        popup.remove();
        map.off("click", closePopup);
      }
    });
  });
};

// Function to update the style of the popup to make it smaller
function updatePopupStyle(popup) {
  const smallerMaxWidth = "150px";
  const smallerMaxHeight = "100px";

  const popupContainer = popup._container;

  popupContainer.style.maxWidth = smallerMaxWidth;
  popupContainer.style.maxHeight = smallerMaxHeight;
}

// FUNCTIONS _____________________________________________________________________________________________________

function flyTo(map, lng, lat, zoom = 30, pitch = 50, speed = 4) {
  map.flyTo({
    center: [lng, lat],
    zoom: zoom,
    pitch: pitch,
    speed: speed,
    curve: 1,
    easing: (t) => t,
  });
}
