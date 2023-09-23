import { canada } from "../../assets/canada.js";
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
    // infoBox: true,
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
  flyTo(viewer, -98.74, 56.415, 25000000, -90.0, 0);
  // GET LOCATION CANDA🔍
  //    GET PROVINCE 🗺️
  const pNames = [];
  const provinces = canada.provinces;
  const territories = canada.territories;
  territories.forEach((territory) => {
    provinces.push(territory);
  });
  const provinceMenu = document.getElementById("p-menu");
  provinces.forEach((province) => {
    let option = document.createElement("option");
    option.innerHTML = province.provinceName;
    pNames.push(province.provinceName);
    provinceMenu.appendChild(option);
  });
  document.getElementById("p-menu").addEventListener("change", function () {
    viewer.dataSources.removeAll();
    const pIndex = pNames.indexOf(this.value);
    const pCode = provinces[pIndex].code;

    // GET PROVINCE GEOJSON 🌐
    getJson(
      "https://geogratis.gc.ca/services/geoname/en/geonames.geojson?concise=PROV&province=" +
        pCode
    ).then((pGeojson) => {
      loadGeojson(pGeojson, viewer);
      cMenu.style.display = "inline-block";
    });
    // GET CITY 🏙️
    const cNames = [];
    getJson(
      "https://geogratis.gc.ca/services/geoname/en/geonames.json?province=" +
        pCode +
        "&concise=CITY"
    ).then((jsonCity) => {
      const cities = jsonCity.items;
      cities.sort((a, b) => a.name.localeCompare(b.name));
      let cityMenu = document.getElementById("c-menu");
      while (cityMenu.childElementCount > 1) {
        cityMenu.removeChild(cityMenu.lastChild);
      } //Clear cities
      cities.forEach((city) => {
        cNames.push(city.name);
        let option = document.createElement("option");
        option.innerHTML = city.name;
        cityMenu.appendChild(option);
      });
      cityMenu = document.getElementById("c-menu");
      let city = "";
      cityMenu.addEventListener("change", function () {
        viewer.dataSources.removeAll();
        const cIndex = cNames.indexOf(this.value);
        city = cities[cIndex];
        const { latitude, longitude } = city;

        // GET CITY GEOJSON 🌐
        getJson(
          "https://geogratis.gc.ca/services/geoname/en/geonames.geojson?q=" +
            city.name +
            "&concise=CITY&province=" +
            pCode
        ).then((cGeojson) => {
          sMenu.style.display = "inline-block";
          loadGeojson(cGeojson, viewer);
        });
      });
    });
  });

  // Toggle Nav bar
  const locationBar = document.getElementById("location");
  const locationButton = document.getElementById("close-nav-bar");
  let toggleLocationBar = false;
  locationButton.onclick = function () {
    locationBar.style.display = toggleLocationBar ? "inline-block" : "none";
    locationButton.style.transform = toggleLocationBar ? "" : "rotate(180deg)";
    const navBar = document.getElementById("nav-bar");
    navBar.style.backgroundColor = toggleLocationBar ? "" : "#FFFFFF00";
    navBar.style.boxShadow = toggleLocationBar ? "" : "none";
    toggleLocationBar = !toggleLocationBar;
  };

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
      // Fly To Downsview flyTo(viewer, -79.47, 43.73, 1000, -45.0, 0);
      // Fly to Carleton
      flyTo(viewer, -75.696, 45.371, 1500, -45.0, 0);
      pMenu.style.display = "none";
      cMenu.style.display = "none";
      sMenu.style.display = "none";
      bMenu.style.display = "inline-block";
    } else {
      this.setAttribute("title", "Go to site");
      document.getElementById("go-to-icon").setAttribute("d", icons.goToIcon);
      // Fly to Canada
      flyTo(viewer, -98.74, 56.415, 25000000, -90.0, 0);
      pMenu.style.display = "inline-block";
      cMenu.style.display = "none";
      sMenu.style.display = "none";
      bMenu.style.display = "none";
    }
    toggleGoTo = !toggleGoTo;
  };

  // Add Cesium OSM Buildings, a global 3D buildings layer.
  const buildingTileset = viewer.scene.primitives.add(
    Cesium.createOsmBuildings()
  );
}
// Select Provinces and Territories
let pMenu = document.getElementById("p-menu");
// Select Cities
let cMenu = document.getElementById("c-menu");
// Select Site
let sMenu = document.getElementById("s-menu");
// Select Building
let bMenu = document.getElementById("b-menu");

// FUNCTIONS _____________________________________________________________________________________________________

async function getJson(path) {
  let response = await fetch(path);
  let json = await response.json();
  return json;
}

async function loadGraph1(geojson, viewer, param, min, max) {
  let colors = [];
  const promise = Cesium.GeoJsonDataSource.load(geojson);
  promise.then(function (dataSource) {
    viewer.dataSources.add(dataSource);
    const entities = dataSource.entities.values;
    entities.forEach((entity) => {
      let geoParam = geojson.properties[param];
      isNaN(geoParam) ? (geoParam = 0) : geoParam;
      let perc = ((geoParam - min) * 100) / (max - min);
      let color = perc2color(perc);
      colors.push(color);
      if (geoParam === 0) {
        entity.polygon.extrudedHeight = 1700;
        entity.polygon.material = Cesium.Color.DARKGRAY;
        entity.polygon.outlineColor = Cesium.Color.DARKGRAY;
      } else {
        entity.polygon.extrudedHeight = (perc + 5) * 1000;
        entity.polygon.material = Cesium.Color.fromCssColorString(color);
        entity.polygon.outlineColor = Cesium.Color.fromCssColorString(color);
      }
    });
  });
  return colors;
}

async function loadGeojson(geojson, viewer, h) {
  const fillPromise = Cesium.GeoJsonDataSource.load(geojson, {
    fill: Cesium.Color.fromBytes(251, 184, 41, 70),
    clampToGround: true,
  });
  fillPromise.then(function (dataSource) {
    viewer.dataSources.add(dataSource);
    const entities = dataSource.entities.values;
    viewer.flyTo(entities);
  });
}

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

function perc2color(perc) {
  let r,
    g,
    b = 0;
  if (perc < 50) {
    r = 255;
    g = Math.round(5.1 * perc);
  } else {
    g = 255;
    r = Math.round(510 - 5.1 * perc);
  }
  let h = r * 0x10000 + g * 0x100 + b * 0x1;
  return "#" + ("000000" + h.toString(16)).slice(-6);
}

async function chartIt(x, y, label) {
  const ctx = document.getElementById("myChart").getContext("2d");

  const max = Math.max(...y);
  const min = Math.min(...y);
  let color = [];
  y.forEach((i) => {
    let p = ((i - min) * 100) / (max - min);
    let c = perc2color(p);
    color.push(c);
  });
  color.length === 1 ? (color = "darkgray") : color;

  let chartStatus = Chart.getChart("myChart");
  if (chartStatus != undefined) {
    chartStatus.destroy();
  }

  const myChart = await new Chart(ctx, {
    type: "bar",
    data: {
      labels: x,
      datasets: [
        {
          label: label,
          data: y,
          backgroundColor: color,
          borderColor: color,
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            // Include degrees sign
            callback: function (value) {
              return value;
              // + '°'
            },
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            boxWidth: 0,
          },
        },
      },
    },
  });
  return myChart;
}
