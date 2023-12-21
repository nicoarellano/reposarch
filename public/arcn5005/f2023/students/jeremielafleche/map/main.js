const MAPTILER_KEY = 'yyLFvKmMAkOmBAVbj4mk';
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/basic/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    zoom: 15,
    center: [12.492187981731984, 41.890329973316234],
    pitch: 60,
    antialias: true
});

// Function to load models
function loadModel(modelPath) {
    const loader = new THREE.GLTFLoader();
    loader.load(modelPath, (gltf) => {
        customLayer.scene.add(gltf.scene);
    });
}

// Load multiple models
loadModel('./models/JerMesh1.glb');
loadModel('./models/colosseum.glb');

const modelOrigin = [12.492587981731984, 41.890329973316234];
const modelAltitude = 0;
const modelRotate = [Math.PI / 2, 6, 0];

const modelAsMercatorCoordinate = maplibregl.MercatorCoordinate.fromLngLat(
    modelOrigin,
    modelAltitude
);

const modelTransform = {
    translateX: modelAsMercatorCoordinate.x,
    translateY: modelAsMercatorCoordinate.y,
    translateZ: modelAsMercatorCoordinate.z,
    rotateX: modelRotate[0],
    rotateY: modelRotate[1],
    rotateZ: modelRotate[2],
    scale: modelAsMercatorCoordinate.meterInMercatorCoordinateUnits() *12
};

const customLayer = {
    id: '3d-models',
    type: 'custom',
    renderingMode: '3d',
    onAdd(map, gl) {
        this.camera = new THREE.Camera();
        this.scene = new THREE.Scene();

        const directionalLight = new THREE.DirectionalLight(0xE1C16E);
        directionalLight.position.set(100, 100, 100).normalize();
        this.scene.add(directionalLight);

        const directionalLight2 = new THREE.DirectionalLight(0xE1C16E);
        directionalLight2.position.set(100, 100, 100).normalize();
        this.scene.add(directionalLight2);

        this.renderer = new THREE.WebGLRenderer({
            canvas: map.getCanvas(),
            context: gl,
            antialias: true
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
        map.triggerRepaint();
    }
};

// Add custom layer when the map style is loaded
    map.on('style.load', () => {
        map.addLayer(customLayer);
    });

    // Function to add a point of interest
    function addPointOfInterest(name, image, coordinates, iconSize) {
        map.loadImage(image, (error, img) => {
            if (error) throw error;

            map.addImage(`${name}-marker`, img);

            map.addSource(name, {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': [
                        {
                            'type': 'Feature',
                            'geometry': {
                                'type': 'Point',
                                'coordinates': coordinates
                            },
                            'properties': {
                                'Name': name
                            }
                        }
                    ]
                }
            });

            map.addLayer({
                'id': name,
                'type': 'symbol',
                'source': name,
                'layout': {
                    'icon-image': `${name}-marker`,
                    'icon-size': iconSize
                }
            });

            // Popups
            map.on('click', name, (e) => {
                const coords = e.features[0].geometry.coordinates.slice();

                // Ensure the popup appears over the correct feature
                while (Math.abs(e.lngLat.lng - coords[0]) > 180) {
                    coords[0] += e.lngLat.lng > coords[0] ? 360 : -360;
                }

                new maplibregl.Popup()
                    .setLngLat(coords)
                    .setHTML(`
                        <h3>${name}</h3>
                        <img src="Images/${name}.JPG" alt="${name} Image" style="width:100%; max-width:300px; height:auto;">
                    `)
                    .addTo(map);
            });
        });
    }

    // Define points of interest
    const pointsOfInterest = [
        { name: 'Roman Forum', image: 'Images/Roman Forum.png', coordinates: [12.4853, 41.8925], iconSize: 0.2 },
        { name: 'Spanish Steps', image: 'Images/Spanish Steps.png', coordinates: [12.4828, 41.9060], iconSize: 0.2 },
        { name: 'Trevi Fountain', image: 'Images/Trevi Fountain.png', coordinates: [12.4833, 41.9009], iconSize: 0.2 },
        { name: 'Arch of Constantine', image: 'Images/Arch of Constantine.png', coordinates: [12.4907, 41.8898], iconSize: 0.1 }
        // Add more points of interest as needed
    ];

    // Add points of interest
    pointsOfInterest.forEach(point => {
        addPointOfInterest(point.name, point.image, point.coordinates, point.iconSize);
    });

    const fullScreenButton = document.getElementById("full-screen");

let fullScreen = false;

fullScreenButton.addEventListener("click", () => {
  fullScreen = !fullScreen;
  resize();
  console.log(fullScreen ? "FULL SCREEN!!" : "little screen");
});

//Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  resize();
});

const resize = () => {
  size.width = window.innerWidth * (fullScreen ? 0.92 : 0.6);
  size.height = window.innerHeight * (fullScreen ? 0.9 : 0.4);
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
};