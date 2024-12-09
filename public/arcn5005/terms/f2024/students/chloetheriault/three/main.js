//#region sceen init
const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
camera.position.z = 105;

camera.position.y = 95;

const threeCanvas = document.getElementById("three-canvas-f2024-CT");
//#endregion

//#region Set renderer
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));     
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.NoToneMapping;

//#endregion

const gltfLoader = new THREE.GLTFLoader();
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(0, 0, 0);
controls.enableDamping = true;

//#region Player Variables
let angularSpeed = 0.005;
let playerSpeed = 0.05;
let playerbackwardSpeed = playerSpeed * -0.5;

let playerMoveForward = false;
let playerMoveBackward = false;
let playerMoveRight = false;
let playerMoveLeft = false;
//#endregion

//#region Populate Scene
let mesh, ground;

gltfLoader.load("./models/moi.glb", (gltf) => {
  mesh = gltf.scene;
  mesh.position.set(0, 0, 0);
  mesh.scale.set(3, 3, 3);
  mesh.castShadow = true;
  mesh.receiveShadow = false;
  scene.add(mesh);
});

gltfLoader.load("./models/scene.gltf", (gltf) => {
  ground = gltf.scene;
  ground.position.set(0, -3.2, -25);
  ground.scale.set(3, 3, 3);
  ground.castShadow = true;
  ground.receiveShadow = false;
  scene.add(ground);
});

const light = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(10, 50, 10);
light.castShadow = true;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.shadow.camera.near = 1;
light.shadow.camera.far = 1000;
scene.add(light);
//#endregion

//#region Input Handling
window.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 65:
      playerMoveLeft = true;
      break;
    case 87:
      playerMoveForward = true;
      break;
    case 83:
      playerMoveBackward = true;
      break;
    case 68:
      playerMoveRight = true;
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.keyCode) {
    case 65:
      playerMoveLeft = false;
      break;
    case 87:
      playerMoveForward = false;
      break;
    case 83:
      playerMoveBackward = false;
      break;
    case 68:
      playerMoveRight = false;
      break;
  }
});
//#endregion

//#region Animation
function updatePlayer() {
  if (playerMoveForward) {
    moveForward(playerSpeed);
  }
  if (playerMoveBackward) {
    moveForward(playerbackwardSpeed);
  }
  if (playerMoveRight) {
    rotatePlayer(-angularSpeed);
  }
  if (playerMoveLeft) {
    rotatePlayer(angularSpeed);
  }
}

function moveForward(speed) {
  mesh.translateX(speed);
  controls.target = new THREE.Vector3(mesh.position.x, mesh.position.y, mesh.position.z);
}

function rotatePlayer(amount) {
  mesh.rotation.y += amount;
}

function animate() {
  updatePlayer();
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();
//#endregion

//Adding 3D Text
const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0xD49973", size = 10) {
  fontLoader.load("./fonts/helvetiker_regular.typeface.json", (font) => {
    const textGeo = new THREE.TextGeometry(text, {
      font,
      size,
      height: 0.1,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.0,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    const color = new THREE.Color();
    color.setHex(textColor);
    const textMaterial = new THREE.MeshLambertMaterial({ color });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.set(-40, 20, -70);
    scene.add(textMesh);
  });
}

createText("Wilcuma park");