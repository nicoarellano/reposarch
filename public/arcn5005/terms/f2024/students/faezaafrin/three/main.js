// Create a Three.js scene
const scene = new THREE.Scene();

// Background
scene.background = new THREE.Color(0x1a001f);

// Camera size and aspect ratio
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.15, 1000);

// Set up WebGL renderer with canvas
const threeCanvas = document.getElementById('three-canvas-f2024');
console.log(threeCanvas);

// Set up WebGL renderer
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.body.appendChild(renderer.domElement);

// Load Background Texture
loadTexture('Galaxy6.jpg');

// Function to load a texture and set it as the background
function loadTexture(path) {
  const loader = new THREE.TextureLoader();
  const texture = loader.load(path, () => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.encoding = THREE.sRGBEncoding;
    scene.background = texture;
  });
}

// Function to adjust the viewport size on window resize
window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

// CREATE GEOMETRY

// Create Torus Geometries with different colors
const torus1 = new THREE.Mesh(new THREE.TorusGeometry(100, 50, 16, 100), new THREE.MeshStandardMaterial({ color: 0xea73ff }));
const torus2 = new THREE.Mesh(new THREE.TorusGeometry(50, 25, 16, 100), new THREE.MeshStandardMaterial({ color: 0x83fcf4 }));
const torus3 = new THREE.Mesh(new THREE.TorusGeometry(25, 18, 16, 75), new THREE.MeshStandardMaterial({ color: 0xfc4cdc }));
const torus4 = new THREE.Mesh(new THREE.TorusGeometry(25, 18, 16, 75), new THREE.MeshStandardMaterial({ color: 0x83fcf4 }));
const torus5 = new THREE.Mesh(new THREE.TorusGeometry(25, 18, 16, 75), new THREE.MeshStandardMaterial({ color: 0xea73ff }));
const torus6 = new THREE.Mesh(new THREE.TorusGeometry(5, 4, 8, 25), new THREE.MeshStandardMaterial({ color: 0x83fcf4 }));
const torus7 = new THREE.Mesh(new THREE.TorusGeometry(5, 4, 8, 25), new THREE.MeshStandardMaterial({ color: 0xfc4cdc }));

// Position Geometry
torus1.position.set(0, 0, 0);
torus2.position.set(-100, 0, -300);
torus3.position.set(300, 0, 50);
torus4.position.set(300, 75, -200);
torus5.position.set(1000, 300, -200);
torus6.position.set(50, 100, -200);
torus7.position.set(20, 75, -300);

// Add Torus Geometries to Scene
scene.add(torus1, torus2, torus3, torus4, torus5, torus6, torus7);

// Shooting Stars Class
class ShootingStar {
  constructor() {
    const geometryStar = new THREE.TorusGeometry(1, 0.8, 8, 25);
    const starColors = [0x83fcf4, 0xea73ff, 0xfc4cdc]; // Blue, Pink, Purple
    const color = starColors[Math.floor(Math.random() * starColors.length)];
    const materialStar = new THREE.MeshBasicMaterial({
      color: color,
      blending: THREE.AdditiveBlending, // Additive blending for glow effect
    });

    this.star = new THREE.Mesh(geometryStar, materialStar);
    this.resetPosition();

    this.velocityX = -2 - Math.random() * 1.25;
    this.velocityY = -2 - Math.random() * 1.25;
    this.velocityZ = -2 - Math.random() * 1.25;
  }

  resetPosition() {
    this.star.position.set(
      1000 + Math.random() * 10,
      1000 + Math.random() * 50,
      1000 + Math.random() * 50
    );
  }

  animate() {
    this.star.position.x += this.velocityX;
    this.star.position.y += this.velocityY;
    this.star.position.z += this.velocityZ;

    if (this.star.position.x < -300 || this.star.position.y < -300 || this.star.position.z < -300) {
      this.resetPosition();
    }
  }
}

// Add shooting stars
const shootingStars = [];
for (let i = 0; i < 800; i++) {
  const star = new ShootingStar();
  shootingStars.push(star);
  scene.add(star.star);
}

// Import external models
const gltfLoader = new THREE.GLTFLoader();
let mesh1, mesh2;
gltfLoader.load('./models/Astronaut3.glb', (gltf) => {
  mesh1 = gltf.scene;
  mesh1.scale.set(8, 8, 8);
  mesh1.position.set(-35, 12, 20);
  scene.add(mesh1);
}, undefined, console.error);

gltfLoader.load('./models/Astronaut4.glb', (gltf) => {
  mesh2 = gltf.scene;
  mesh2.scale.set(8, 8, 8);
  mesh2.position.set(10, 20, 30);
  scene.add(mesh2);
}, undefined, console.error);

// ADD TEXT

const fontLoader = new THREE.FontLoader();
const textMeshes = [];

// Function to create 3D text
function createText(text, elevation = 0, textColor = '0x83fcf4', size = 7) {
  fontLoader.load('./fonts/helvetiker_regular.typeface.json', (font) => {
    const textGeometry = new THREE.TextGeometry(text, {
      font: font,
      size: size,
      height: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.75,
      bevelSize: 0.5,
      bevelSegments: 5,
    });

    textGeometry.center();

    const textMaterial = new THREE.MeshNormalMaterial();
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(0, elevation, 0);
    scene.add(textMesh);
    textMeshes.push(textMesh);
  }, undefined, console.error);
}

// Function to make each text mesh face the camera
function faceCamera() {
  textMeshes.forEach((textMesh) => {
    textMesh.lookAt(camera.position);
  });
}

createText('Press Spacebar', 3, 0xffffff, 3);
createText('Hellooooo!', 15, 0xffffff, 3);

// SLOW MOTION EFFECT

let isSlowMotion = false;
const normalSpeed = 0.005;
const slowSpeed = 0.001;

window.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    isSlowMotion = !isSlowMotion;
    console.log(isSlowMotion ? 'Slow motion enabled' : 'Slow motion disabled');
  }
});

// Lights
const lightColor = 0xffffff;
scene.add(new THREE.AmbientLight(lightColor, 0.4));
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);
const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

// Camera
camera.position.set(-40, 10, 40);
scene.position.set(-5, -5, 5);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Action
function animate() {
  requestAnimationFrame(animate);

  const speed = isSlowMotion ? slowSpeed : normalSpeed;

  // Rotate geometries
  torus1.rotation.x += speed;
  torus1.rotation.y += speed * 5;
  torus1.rotation.z += speed;

  torus2.rotation.x += speed;
  torus2.rotation.y += speed * 10;
  torus2.rotation.z += speed;

  torus3.rotation.x += speed;
  torus3.rotation.y += speed;
  torus3.rotation.z += speed;

  torus4.rotation.x += speed;
  torus4.rotation.y += speed * 4;
  torus4.rotation.z += speed;

  torus5.rotation.x += speed * 10;
  torus5.rotation.y += speed * 2;
  torus5.rotation.z += speed;

  torus6.rotation.x += speed;
  torus6.rotation.y += speed;
  torus6.rotation.z += speed;

  torus7.rotation.x += speed * 10;
  torus7.rotation.y += speed * 2;
  torus7.rotation.z += speed;

  if (mesh1) {
    mesh1.rotation.x += speed * 0.5;
    mesh1.rotation.y += speed * 0.5;
    mesh1.position.z += speed;
  }

  if (mesh2) {
    mesh2.rotation.x += speed * 0.5;
    mesh2.rotation.y += speed;
    mesh2.position.z += speed * 0.2;
  }

  // Animate shooting stars
  shootingStars.forEach((star) => {
    star.animate();
  });

  // Make text face the camera
  faceCamera();

  // Render the scene
  renderer.render(scene, camera);
}

// Start animation loop
animate();
