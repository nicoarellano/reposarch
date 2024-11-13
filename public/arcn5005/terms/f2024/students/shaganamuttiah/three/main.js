const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(100, aspect, 1, 2000);

// Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas-f2024");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Creates grids and axes in the scene
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

// Function to create a puffy 3D heart shape
function createPuffyHeartMesh(color) {
  const x = 0, y = 0;
  const heartShape = new THREE.Shape();
  heartShape.moveTo(x + 0.25, y + 0.25);
  heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.20, y, x, y);
  heartShape.bezierCurveTo(x - 0.30, y, x - 0.30, y + 0.35, x - 0.30, y + 0.35);
  heartShape.bezierCurveTo(x - 0.30, y + 0.55, x - 0.10, y + 0.77, x + 0.25, y + 1.0);
  heartShape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
  heartShape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);

  const extrudeSettings = {
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 10,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1,
  };

  const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  const material = new THREE.MeshLambertMaterial({ color: color });
  const heart = new THREE.Mesh(geometry, material);
  heart.scale.set(2, 2, 2);
  return heart;
}

const yellowHeart = createPuffyHeartMesh(0xD63333);
const blueHeart = createPuffyHeartMesh(0xD63333);
const redHeart = createPuffyHeartMesh(0xD63333);
const greenHeart = createPuffyHeartMesh(0xD63333);

yellowHeart.position.set(0, 0, -3);
blueHeart.position.set(-3, 0, 0);
redHeart.position.set(3, 0, 0);
greenHeart.position.set(0, 0, 3);

scene.add(yellowHeart);
scene.add(blueHeart);
scene.add(greenHeart);
scene.add(blueHeart);

const gltfLoader = new THREE.GLTFLoader();
let deerMesh;
const moveSpeed = 0.1; // Speed for WASD movement

// Load the deer model and make it movable with WASD
gltfLoader.load(
  "./models/deer.glb",
  function (gltf) {
    deerMesh = gltf.scene;
    deerMesh.scale.set(1, 1, 1);
    deerMesh.position.set(5, 1, 8);
    scene.add(deerMesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

gltfLoader.load("./models/grass.glb", function (gltf) {
  const grassMesh = gltf.scene;
  grassMesh.scale.set(0.1, 0.1, 0.1);
  scene.add(grassMesh);
}, undefined, function (error) { console.error(error); });

gltfLoader.load("./models/justin.glb", function (gltf) {
  const justinMesh = gltf.scene;
  justinMesh.scale.set(3, 3, 3);
  scene.add(justinMesh);
}, undefined, function (error) { console.error(error); });


gltfLoader.load("./models/sword.glb", function (gltf) {
  const swordMesh = gltf.scene;
  swordMesh.scale.set(1, 1, 1);
  swordMesh.rotation.set(Math.PI / 2, Math.PI, 0);
  swordMesh.position.set(-1, 3, 8);
  scene.add(swordMesh);
}, undefined, function (error) { console.error(error); });

// Keyboard event listener for WASD movement
document.addEventListener("keydown", function (event) {
  if (!deerMesh) return; // Ensure deerMesh is loaded before moving it
  switch (event.key) {
    case "w": deerMesh.position.z -= moveSpeed; break;
    case "s": deerMesh.position.z += moveSpeed; break;
    case "a": deerMesh.position.x -= moveSpeed; break;
    case "d": deerMesh.position.x += moveSpeed; break;
  }
});

const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
  fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (font) {
    const textGeo = new THREE.TextGeometry(text, {
      font: font,
      size: size,
      height: 0.1,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.0,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    const textMaterial = new THREE.MeshLambertMaterial({ color: new THREE.Color(textColor) });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.set(2, elevation, 0);
    scene.add(textMesh);
  });
}

createText("Shagana Muttiah", 7, "0XFF00FF", 1);
createText("- Architect from PUC", 5, "0XFF0000");
createText("- Research team lead at CIMS", 4, "0XFF0000");
createText("- PhD candidate at ASAU", 3, "0XFF0000");
createText("- Amateur programmer", 2, "0XFF0000");

camera.position.set(6, 9, 25);
scene.position.set(-5, -3, 5);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const lightColor = 0xffffff;
const ambientLight = new THREE.AmbientLight(lightColor, 0.2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

 

  yellowHeart.rotation.x += 0.01;
  yellowHeart.rotation.y += 0.01;
  blueHeart.rotation.x += 0.02;
  blueHeart.rotation.y -= 0.01;
  redHeart.rotation.x -= 0.01;
  redHeart.rotation.y -= 0.02;
  greenHeart.rotation.x += 0.02;
  greenHeart.rotation.y -= 0.01;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
