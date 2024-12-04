// THREE.js Scene Setup
const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.set(5, 2, 13); // Initial camera positioning

// Renderer Setup
const threeCanvas = document.getElementById('three-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Scene Helpers (Grid and Axes)
const grid = new THREE.GridHelper(5, 5);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

// Load GLTF Model for UFO
const gltfLoader = new THREE.GLTFLoader();
let ufoMesh;

gltfLoader.load(
  './haseenaapplymodifiersmetallicc.glb',
  (gltf) => {
    ufoMesh = gltf.scene;
    ufoMesh.scale.set(3, 3, 3);
    scene.add(ufoMesh);

    // Add Point Light at the UFO's position
    const ufoLight = new THREE.PointLight(0xffaa00, 30, 1); // Warm light color
    ufoLight.position.set(5, 10, 5); // Position it at the UFO
    scene.add(ufoLight);
  },
  undefined,
  (error) => console.error(error)
);

// Load Background Texture
const loader = new THREE.TextureLoader();
const texture = loader.load('milkyway_.jpeg', () => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  scene.background = texture;
});

// Load Font and Create 3D Text
const fontLoader = new THREE.FontLoader();
function createText(text, elevation = 0, textColor = 0x000000, size = 0.5) {
  fontLoader.load('./fonts/helvetiker_regular.typeface.json', (font) => {
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
    const textMaterial = new THREE.MeshLambertMaterial({ color: textColor });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);
    textMesh.position.set(2, elevation, 0);
    scene.add(textMesh);
  });
}
// TEXT CREATION
createText(
  '                               PRESS SPACEBAR 1X TO SPIN',
  5,
  0xffa500
); // Orange
createText(
  '                               PRESS SPACEBAR 2X TO SOAR',
  3,
  0xffa500
); // Orange
createText(
  '                               PRESS SPACEBAR 3X TO SLOW DOWN',
  2,
  0x000000
); // Black
createText('                               HASEENA DOOST', 1, 0x000000); // Black
createText(
  '                              Would like to go to Mars one day',
  0,
  0xffa500
); // Orange

// Gold Star Particle System
const starGeometry = new THREE.PlaneGeometry(0.5, 0.5);
const starMaterial = new THREE.MeshBasicMaterial({
  color: 0xffd700,
  transparent: true,
  opacity: 0.8,
  side: THREE.DoubleSide,
  map: new THREE.TextureLoader().load('./smallstar__.png'),
});

const stars = [];
const numStars = 100;

for (let i = 0; i < numStars; i++) {
  const star = new THREE.Mesh(starGeometry, starMaterial);
  star.position.set(
    Math.random() * 20 - 10,
    Math.random() * 20 + 10,
    Math.random() * 20 - 10
  );
  star.scale.set(Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5, 1);
  stars.push(star);
  scene.add(star);
}

function animateStars() {
  stars.forEach((star) => {
    star.position.y -= 0.1;
    if (star.position.y < -10) {
      star.position.y = Math.random() * 20 + 10;
      star.position.x = Math.random() * 20 - 10;
      star.position.z = Math.random() * 20 - 10;
    }
  });
}

// Orbit and Light
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 6);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// Variables to control the rotation speed
let spinSpeed = 0.01;
let pressCount = 0;

window.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    pressCount++;
    if (pressCount === 1) {
      spinSpeed = 0.1;
    } else if (pressCount === 2) {
      spinSpeed = 1.0;
    } else if (pressCount === 3) {
      spinSpeed = 0.01;
      pressCount = 0;
    }
  }
});

function animate() {
  requestAnimationFrame(animate);

  if (ufoMesh) {
    ufoMesh.rotation.y += spinSpeed;
  }

  animateStars();

  controls.update();
  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
