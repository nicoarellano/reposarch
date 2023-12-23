import { icons } from "../../assets/icons.js";
const cesiumContainer = document.getElementById("cesiumContainer");
initCesium();

function initCesium() {
  Cesium.Ion.defaultAccessToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJhNGRmZjIxZC0wMTJkLTQzZmEtOGVhYy05MjYzNWM3ZTRmMjAiLCJpZCI6NTczNTEsImlhdCI6MTYyMjIxMTIwOX0.DiHzzec1-KXRcfMmpppc_4yGSVYSSiEchZa2cGw6dIU";
  const viewer = new Cesium.Viewer("cesiumContainer", {
    terrainProvider: Cesium.createWorldTerrain(),
    selectionIndicator: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    animation: false,
    timeline: false,
    allowTextureFilterAnisotropic: false,
    targetFrameRate: 60,
    resolutionScale: 0.1,
    orderIndependentTranslucency: true,
    baseLayerPicker: true,
    geocoder: false,
    automaticallyTrackDataSourceClocks: false,
    fullscreenButton: false,
    dataSources: null,
    clock: null,
    terrainShadows: Cesium.ShadowMode.DISABLED,
  });

  // Fly the camera to the Canada.
  flyTo(viewer, -98.74, 56.415, 20000000, -90.0, 0);

  // Map Style
  let baseLayerPickerViewModel = viewer.baseLayerPicker.viewModel;
  baseLayerPickerViewModel.selectedImagery =
    baseLayerPickerViewModel.imageryProviderViewModels[0];
  // Toggle Map view
  const mapView = document.getElementById("map-view");
  let style = 1;
  let toggleMapView = true;
  mapView.onclick = function () {
    if (toggleMapView) {
      style = 2;
      const mapIcon = document.getElementById("map-icon");
      mapIcon.setAttribute("d", icons.satelliteIcon);
      this.setAttribute("title", "Satellite view");
    } else {
      const mapIcon = document.getElementById("map-icon");
      style = 0;
      this.setAttribute("title", "Map view");
      mapIcon.setAttribute("d", icons.mapIcon);
    }
    baseLayerPickerViewModel.selectedImagery =
      baseLayerPickerViewModel.imageryProviderViewModels[style];
    toggleMapView = !toggleMapView;
  };

  // Go To Site 🏢
  const goTo = document.getElementById("go-to");
  let toggleGoTo = true;
  goTo.onclick = function () {
    if (toggleGoTo) {
      viewer.dataSources.removeAll();
      this.setAttribute("title", "Go to Canada");
      document.getElementById("go-to-icon").setAttribute("d", icons.worldIcon);
      flyTo(viewer, -75.696, 45.371, 1500, -45.0, 0);
    } else {
      this.setAttribute("title", "Go to site");
      document.getElementById("go-to-icon").setAttribute("d", icons.goToIcon);
      // Fly to Canada
      flyTo(viewer, -98.74, 56.415, 25000000, -90.0, 0);
    }
    toggleGoTo = !toggleGoTo;
  };

  // Add Cesium OSM Buildings, a global 3D buildings layer.
  const buildingTileset = viewer.scene.primitives.add(
    Cesium.createOsmBuildings()
  );
}

// FUNCTIONS _____________________________________________________________________________________________________

function flyTo(viewer, lng, lat, h, pitch = 0, roll = 0) {
  const destination = Cesium.Cartesian3.fromDegrees(lng, lat, h);
  viewer.camera.flyTo({
    destination: destination,
    duration: 0.5,
    orientation: {
      pitch: Cesium.Math.toRadians(pitch),
      roll: Cesium.Math.toRadians(roll),
    },
  });
}
