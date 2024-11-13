//Three.js Setup
const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);


//Add gravity for jumping
let character, ground;
let velocity = 0; // velocity in Y-axis
let isJumping = false;
let gravity = -0.1; // gravity force
let jumpStrength = 2; // how strong the jump is
let groundLevel = 4; // Y level of the ground

//Canvas Setup
const threeCanvas = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);
const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

for (let i = 0; i < 1000; i++) {
  const starGeometry = new THREE.SphereGeometry(0.05, 24, 24);
  const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const star = new THREE.Mesh(starGeometry, starMaterial);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);
}

const gltfLoader = new THREE.GLTFLoader();

//all the CUBES!
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

const yellowCube = new THREE.Mesh(geometry, yellowMaterial);
const blueCube = new THREE.Mesh(geometry, blueMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const greenCube = new THREE.Mesh(geometry, greenMaterial);

yellowCube.position.z = -3;
blueCube.position.x = -3;
redCube.position.x = 3;
greenCube.position.z = 3;

scene.add(yellowCube);
scene.add(blueCube);
scene.add(greenCube);
scene.background = new THREE.Color(0x87ceeb); 

//Loading in all the .glb files in different posisitons.
let mesh;

gltfLoader.load("./models/rebecca.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 1;
    mesh.scale.y = 1;
    mesh.scale.z = 1;
    mesh.position.x = 0;
    mesh.position.y = 4;
    mesh.position.z = 0;

    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let earth;

gltfLoader.load("./models/PolyEarth.glb",
  function (gltf) {
    earth = gltf.scene;
    earth.scale.x = 1;
    earth.scale.y = 1;
    earth.scale.z = 1;
    earth.position.x = 0;
    earth.position.y = 4.2;
    earth.position.z = 0;

    scene.add(earth);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let moon;

gltfLoader.load("./models/moon.glb",
  function (gltf) {
    moon = gltf.scene;
    moon.scale.x = 1;
    moon.scale.y = 1;
    moon.scale.z = 1;
    moon.position.x = 0;
    moon.position.y = 3;
    moon.position.z = 2;

    scene.add(moon);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//Loading in the font file.
const fontLoader = new THREE.FontLoader();

function createText(text, elevation, textColor, size) {
  fontLoader.load('./Fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry(text, {
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
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    textMesh.position.set(2, elevation, 0);

    scene.add(textMesh);
  });
}
// Editing the text to appear in different colours
createText("Rebecca Sondermeyer", 5, 0xFF00FF, 0.5);
createText("- I have a 3D model now!", 3, 0x00008B, 0.5);
createText("- I'm floating in Three.js", 2, 0x00008B, 0.5);
createText("- CLICK SPACEBAR!", 1, 0x00008B, 0.5);
createText("- Master of Architecture", 0, 0x00008B, 0.5);


//Setting up the location of the camera for the scene
camera.position.set(5, 2, 13);
scene.position.set(-5, -3, 5);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Adding Ambient Light ex. 3
const ambientLight = new THREE.AmbientLight(0xffffff, 3);
scene.add(ambientLight);

//Adding directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

//Setting up the keybindings and results before animating
let increment = 0;
window.addEventListener('keydown', function(event) {
  if (event.code === 'Space' && !isJumping) {
      isJumping = true;
      velocity = jumpStrength; // Apply jump strength
      mesh.scale.set(mesh.scale.x * 2, mesh.scale.y * 2, mesh.scale.z * 2);
  }
});

//Animating all elements one at a time 
function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.01;
  if (earth) earth.rotation.y += 0.01;
  if (moon) moon.rotation.y += 0.02;
  if (mesh) mesh.position.y += velocity;
  if (mesh.position.y > groundLevel + 1) { // Don't fall below ground
    velocity += gravity; // Simulate gravity)
} else {
    mesh.position.y = groundLevel + 1; // Reset position to ground level
    isJumping = false; // Allow jumping again
    velocity = 0; // Reset vertical velocity when on the ground
}

  yellowCube.rotation.x += 0.01;
  yellowCube.rotation.y += 0.01;

  blueCube.rotation.x += 0.02;
  blueCube.rotation.y -= 0.01;

  greenCube.rotation.x += 0.02;
  greenCube.rotation.y -= 0.01;

  increment += 0.001;
  camera.position.x = Math.sin(increment) *5
  camera.position.y = Math.cos(increment) *5
  camera.rotation.z = increment;

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

document.querySelector(".scroll-down-arrow").addEventListener("click", function () {
  document.querySelector(".about-me").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".scroll-up-arrow").addEventListener("click", function () {
  document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".scroll-down-arrow-3d").addEventListener("click", function () {
  document.querySelector(".assignment2").scrollIntoView({ behavior: "smooth" });
});