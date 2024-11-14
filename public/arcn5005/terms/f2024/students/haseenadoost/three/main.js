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
const threeCanvas = document.getElementById("three-canvas");
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

// Silver Torus Knot Geometry and Material
const knotGeometry = new THREE.TorusKnotGeometry(30, 3, 100, 16);
const knotMaterial = new THREE.MeshStandardMaterial({
  color: 0xC0C0C0,
  metalness: 1,
  roughness: 0.3,
  emissive: 0x3d85c6,
  emissiveIntensity: 0.5,
});
const torusKnot = new THREE.Mesh(knotGeometry, knotMaterial);
scene.add(torusKnot);


// Load GLTF Model for UFO
const gltfLoader = new THREE.GLTFLoader();
let ufoMesh;

gltfLoader.load(
  "./finalhaseenaufolarge.glb", 
  (gltf) => {
    ufoMesh = gltf.scene;
    ufoMesh.scale.set(3, 3, 3);
    scene.add(ufoMesh);
  },
  undefined,
  (error) => console.error(error)
);

// Load Background Texture
const loader = new THREE.TextureLoader();
const texture = loader.load("backgroundd.jpg", () => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  scene.background = texture;
});

// Load Font and Create 3D Text
const fontLoader = new THREE.FontLoader();
function createText(text, elevation = 0, textColor = 0x000000, size = 0.5) {
  fontLoader.load("./fonts/helvetiker_regular.typeface.json", (font) => {
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

// Example Text Creation
createText("PRESS SPACEBAR 1X TO SPIN", 5, 0xFF00FF);
createText("                            PRESS SPACEBAR 2X TO SOAR", 3, 0xFF0000);
createText("-  PRESS SPACEBAR 3X TO SLOW DOWN", 2, 0xFF0000);
createText("-                           HASEENA DOOST", 1, 0xFF0000);
createText("- Would like to go to space one day", 0, 0xFF0000);

// Torus Rings for UFO Glow Effect
const torusGeometry = new THREE.TorusGeometry(2, 0.3, 16, 100);
const materialTorus = new THREE.MeshBasicMaterial({
  color: 0x00ff00,
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
});
const torus1 = new THREE.Mesh(torusGeometry, materialTorus);
const torus2 = new THREE.Mesh(torusGeometry, materialTorus);
torus1.position.set(-3, 0, 0);
torus2.position.set(3, 0, 0);
torus1.rotation.x = Math.PI / 2;
torus2.rotation.z = Math.PI / 2;
scene.add(torus1, torus2);

// Gold Star Particle System
const starGeometry = new THREE.PlaneGeometry(0.5, 0.5); // Small flat plane geometry for stars
const starMaterial = new THREE.MeshBasicMaterial({
  color: 0xFFD700, // Gold color
  transparent: true,
  opacity: 0.8,
  side: THREE.DoubleSide,
  map: new THREE.TextureLoader().load('./smallstar__.png') //  small star texture 
});

// Array to hold the stars
const stars = [];
const numStars = 100; // Number of stars to create

for (let i = 0; i < numStars; i++) {
  const star = new THREE.Mesh(starGeometry, starMaterial);
  star.position.set(
    Math.random() * 20 - 10, // Random X position
    Math.random() * 20 + 10,  // Random Y position above the camera
    Math.random() * 20 - 10   // Random Z position
  );
  star.scale.set(Math.random() * 0.5 + 0.5, Math.random() * 0.5 + 0.5, 1); // Random scale
  stars.push(star);
  scene.add(star);
}

// Rain Animation
function animateStars() {
  stars.forEach(star => {
    star.position.y -= 0.1; // Move star down (falling effect)
    if (star.position.y < -10) { // Reset the star's position once it goes out of view
      star.position.y = Math.random() * 20 + 10;
      star.position.x = Math.random() * 20 - 10;
      star.position.z = Math.random() * 20 - 10;
    }
  });
}

// Controls and Lighting
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// Variables to control the rotation speed
let spinSpeed = 0.01; // Default slow speed for rotation
let pressCount = 0; // Counter to track number of space bar presses

// Event listener for space key press
window.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    pressCount++; // Increment the press count on each space bar press

    if (pressCount === 1) {
      spinSpeed = 0.1; // Slightly faster rotation on first press
    } else if (pressCount === 2) {
      spinSpeed = 1.0; // Much faster rotation on second press
    } else if (pressCount === 3) {
      spinSpeed = 0.01; // Reset back to the original speed on third press
      pressCount = 0;  // Reset press count to cycle again
    }
  }
});


// Animation Function
function animate() {
  requestAnimationFrame(animate);

  if (ufoMesh) {
    // UFO Rotation based on the spin speed
    ufoMesh.rotation.y += spinSpeed;
  }

  // Rotate Torus Rings
  torus1.rotation.y += 0.02;
  torus2.rotation.x += 0.02;
  torusKnot.rotation.x += 0.02;
  torusKnot.rotation.y -= 0.02;

  animateStars(); // Animate the falling stars

  controls.update();
  renderer.render(scene, camera);
}

animate();

// Resize handling
window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
