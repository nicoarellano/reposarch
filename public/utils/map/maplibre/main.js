import { icons } from '../../assets/icons.js';
import { airports } from '../airports/airports-list.js';

const map = (window.map = new maplibregl.Map({
  container: 'map-f2024',
  style: '/map-styles/satelliteHybrid.json',
  center: [-98.74, 56.415], // starting position [lng, lat]
  zoom: 3.5, // starting zoom
  antialias: true, // create the gl context with MSAA antialiasing, so custom layers are antialiased
  maxPitch: 70,
  minZoom: 3,
  maplibreLogo: true,
}));

map.addControl(new maplibregl.FullscreenControl(), 'top-left');

// parameters to ensure the model is georeferenced correctly on the map
const modelOrigin = [-75.69435, 45.38435];
const modelAltitude = 15;
const modelRotate = [Math.PI / 2, 0, 0];

const modelAsMercatorCoordinate = maplibregl.MercatorCoordinate.fromLngLat(
  modelOrigin,
  modelAltitude,
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
  id: '3d-model',
  type: 'custom',
  renderingMode: '3d',
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

    const buildings = [
      '/models/AA/on_ott_arc_220485353_walls.glb',
      '/models/AA/on_ott_arc_220485353_roofs.glb',
      '/models/AA/on_ott_arc_220485353_slabs.glb',
      '/models/AA/on_ott_arc_220485353_windows.glb',
    ];

    buildings.forEach((building) => {
      loader.load(building, (gltf) => {
        this.scene.add(gltf.scene);
      });
    });

    this.clock = new THREE.Clock();
    this.mixer = null;

    loader.load('/models/wind_turbine_small.glb', (gltf) => {
      const model = gltf.scene;

      const scale = 1.5;
      model.scale.set(scale, scale, scale);

      // Position the wind turbine at its real-world coordinates
      const turbineCoord = maplibregl.MercatorCoordinate.fromLngLat(
        [-75.69687902927399, 45.38359291972455],
        0,
      );
      model.position.set(
        (turbineCoord.x - modelAsMercatorCoordinate.x) / modelTransform.scale, // lng
        (turbineCoord.z - modelAsMercatorCoordinate.z) / modelTransform.scale, // altitude
        (turbineCoord.y - modelAsMercatorCoordinate.y) / modelTransform.scale, // lat
      );

      this.scene.add(model);

      // Enable GLTF animations
      if (gltf.animations && gltf.animations.length > 0) {
        this.mixer = new THREE.AnimationMixer(model);
        gltf.animations.forEach((clip) => {
          this.mixer.clipAction(clip).play();
        });
      }
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
    if (this.mixer) this.mixer.update(this.clock.getDelta());
    const rotationX = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(1, 0, 0),
      modelTransform.rotateX,
    );
    const rotationY = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 1, 0),
      modelTransform.rotateY,
    );
    const rotationZ = new THREE.Matrix4().makeRotationAxis(
      new THREE.Vector3(0, 0, 1),
      modelTransform.rotateZ,
    );

    const m = new THREE.Matrix4().fromArray(matrix);
    const l = new THREE.Matrix4()
      .makeTranslation(
        modelTransform.translateX,
        modelTransform.translateY,
        modelTransform.translateZ,
      )
      .scale(
        new THREE.Vector3(
          modelTransform.scale,
          -modelTransform.scale,
          modelTransform.scale,
        ),
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

map.on('style.load', () => {
  map.addLayer(customLayer);
  addLayers();
});

map.on('mousemove', () => {
  const layer = map.getLayer('places');
  if (!layer) addLayers();
});

// Go To Site 🏢
const goTo = document.getElementById('go-to');
let toggleGoTo = true;
goTo.onclick = function () {
  if (toggleGoTo) {
    this.setAttribute('title', 'Go to Canada');
    document.getElementById('go-to-icon').setAttribute('d', icons.worldIcon);
    // Fly to Carleton
    flyTo(map, -75.697, 45.384, 15.6);
  } else {
    this.setAttribute('title', 'Go to site');
    document.getElementById('go-to-icon').setAttribute('d', icons.goToIcon);
    // Fly to Canada
    flyTo(map, -98.74, 56.415, 3.5, 0);
  }
  toggleGoTo = !toggleGoTo;
};

let airporsFeatureCollection = [];

airports.forEach((airport) => {
  const image =
    airport.image === ''
      ? 'https://upload.wikimedia.org/wikipedia/commons/5/5e/ANA_777-300_Taking_off_from_JFK.jpg'
      : airport.image;

  let airportFeature = {
    code: `${airport.code}`,
    type: 'Feature',
    properties: {
      description: `<article class="airport-card"><header class="airport-card-header">Airport</header><div class="airport-card-body"><h3 class="airport-card-title">${airport.name}</h3><p class="airport-card-meta"><strong>${airport.code}</strong> | ${airport.city}, ${airport.province}</p><img class="airport-card-image" src="${image}" alt="${airport.name} (${airport.code})" /></div></article>`,
    },
    geometry: {
      type: 'Point',
      coordinates: [airport.longitude, airport.latitude],
    },
  };

  airporsFeatureCollection.push(airportFeature);
  // Map Style
  // Toggle Map view
  const mapView = document.getElementById('map-view');
  let toggleMapView = true;
  mapView.onclick = function () {
    if (toggleMapView) {
      const mapIcon = document.getElementById('map-icon');
      mapIcon.setAttribute('d', icons.satelliteIcon);
      this.setAttribute('title', 'Satellite view');
      map.setStyle('/map-styles/streets.json');
    } else {
      const mapIcon = document.getElementById('map-icon');
      this.setAttribute('title', 'Map view');
      mapIcon.setAttribute('d', icons.mapIcon);
      map.setStyle('/map-styles/satelliteHybrid.json');
    }
    toggleMapView = !toggleMapView;
  };
});

const addLayers = () => {
  if (!map.hasImage('airport-custom')) {
    map.addImage('airport-custom', createAirportIcon());
  }

  map.addSource('places', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: airporsFeatureCollection,
    },
  });

  // Add airport icon symbols.
  map.addLayer({
    id: `places`,
    type: 'symbol',
    source: 'places',
    layout: {
      'icon-image': 'airport-custom',
      'icon-size': 0.7,
      'icon-allow-overlap': true,
      'icon-ignore-placement': true,
    },
  });

  // Create a popup, but don't add it to the map yet.
  const popup = new maplibregl.Popup({
    closeButton: false,
    closeOnClick: false,
    className: 'airport-popup',
    offset: 16,
  });

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

    // Populate the popup and set its coordinates based on the feature found.
    popup.setLngLat(coordinates).setHTML(description).addTo(map);
  });

  map.on('mouseleave', 'places', () => {
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

function createAirportIcon() {
  const size = 48;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext('2d');
  if (!ctx) {
    return { width: size, height: size, data: new Uint8Array(size * size * 4) };
  }

  // Draw the provided Maki airport path in white on transparent background.
  const makiAirportPath = new Path2D(
    'M15,6.8182L15,8.5l-6.5-1l-0.3182,4.7727L11,14v1l-3.5-0.6818L4,15v-1l2.8182-1.7273L6.5,7.5L0,8.5V6.8182L6.5,4.5v-3c0,0,0-1.5,1-1.5s1,1.5,1,1.5v2.8182L15,6.8182z',
  );

  ctx.save();
  ctx.translate(6, 6);
  ctx.scale(2.4, 2.4);
  ctx.fillStyle = '#2f2f2f';
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 0.7;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.fill(makiAirportPath);
  ctx.stroke(makiAirportPath);
  ctx.restore();

  const imageData = ctx.getImageData(0, 0, size, size);
  return { width: size, height: size, data: imageData.data };
}
