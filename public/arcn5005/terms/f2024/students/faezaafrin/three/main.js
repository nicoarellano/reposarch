// Create a Three.js scene
const scene = new THREE.Scene();

//background
scene.background = new THREE.Color(0x1a001f);

// Camera size and aspect ratio
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.15, 1000);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById('three-canvas-f2024');
console.log(threeCanvas);

//Set up WebGL renderer with canvas
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

//Renderer size and pixel ratio
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
/*renderer.gammaOutput = true;*/

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

//Function to adjust the viewport to the size of the browser
window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

// CREATE GEOMETRY //

//Create Torus Geometry
const geometry1 = new THREE.TorusGeometry(100, 50, 16, 100);
const material1 = new THREE.MeshStandardMaterial({ color: 0xea73ff }); //Purple
const torus1 = new THREE.Mesh(geometry1, material1);

const geometry2 = new THREE.TorusGeometry(50, 25, 16, 100);
const material2 = new THREE.MeshStandardMaterial({ color: 0x83fcf4 }); //Blue
const torus2 = new THREE.Mesh(geometry2, material2);

const geometry3 = new THREE.TorusGeometry(25, 18, 16, 75);
const material3 = new THREE.MeshStandardMaterial({ color: 0xfc4cdc }); //Pink
const torus3 = new THREE.Mesh(geometry3, material3);

const geometry4 = new THREE.TorusGeometry(25, 18, 16, 75);
const material4 = new THREE.MeshStandardMaterial({ color: 0x83fcf4 }); //Blue
const torus4 = new THREE.Mesh(geometry4, material4);

const geometry5 = new THREE.TorusGeometry(25, 18, 16, 75);
const material5 = new THREE.MeshStandardMaterial({ color: 0xea73ff }); //Purple
const torus5 = new THREE.Mesh(geometry5, material5);

const geometry6 = new THREE.TorusGeometry(5, 4, 8, 25);
const material6 = new THREE.MeshStandardMaterial({ color: 0x83fcf4 }); //Blue
const torus6 = new THREE.Mesh(geometry6, material6);

const geometry7 = new THREE.TorusGeometry(5, 4, 8, 25);
const material7 = new THREE.MeshStandardMaterial({ color: 0xfc4cdc }); //Blue
const torus7 = new THREE.Mesh(geometry7, material7);

//Position Geometry
torus1.position.set(0, 0, 0);
torus2.position.set(-100, 0, -300);
torus3.position.set(300, 0, 50);
torus4.position.set(300, 75, -200);
torus5.position.set(1000, 300, -200);
torus6.position.set(50, 100, -200);
torus7.position.set(20, 75, -300);

//Add Torus Geometry to Scene
scene.add(torus1);
scene.add(torus2);
scene.add(torus3);
scene.add(torus4);
scene.add(torus5);
scene.add(torus6);
scene.add(torus7);

// Shooting Stars
class ShootingStar {
  constructor() {
    // Create donut stars
    const geometryStar = new THREE.TorusGeometry(1, 0.8, 8, 25); // Small sphere geometry
    const starColors = [0x83fcf4, 0xea73ff, 0xfc4cdc]; // Blue, Pink, Purple
    const color = starColors[Math.floor(Math.random() * starColors.length)];
    const materialStar = new THREE.MeshBasicMaterial({
      color: color,
      blending: THREE.AdditiveBlending, // Additive blending for glow effect... not really enough tbh
    });

    this.star = new THREE.Mesh(geometryStar, materialStar);

    // Initial Position of shooting stars
    this.resetPosition();

    // Move geometry diagonally toward the bottom-left corner
    this.velocityX = -2 - Math.random() * 1.25;
    this.velocityY = -2 - Math.random() * 1.25;
    this.velocityZ = -2 - Math.random() * 1.25;
  }

  resetPosition() {
    // Reset position to initial
    this.star.position.set(
      1000 + Math.random() * 10, // X position near right
      1000 + Math.random() * 50, // Y position near top
      1000 + Math.random() * 50 // Z position to add depth
    );

    // Randomize velocity for diagonal movement
    this.velocityX = -2 - Math.random() * 1.25;
    this.velocityY = -2 - Math.random() * 1.25;
    this.velocityZ = -2 - Math.random() * 1.25;
  }

  animate() {
    // Move the star diagonally
    this.star.position.x += this.velocityX;
    this.star.position.y += this.velocityY;
    this.star.position.z += this.velocityZ;

    // Reset IF the star moves out of view
    if (
      this.star.position.x < -300 || // X limit
      this.star.position.y < -300 || // Y limit
      this.star.position.z < -300 // Z limit
    ) {
      this.resetPosition();
    }
  }
}

// Add multiple stars
const shootingStars = [];
for (let i = 0; i < 800; i++) {
  const star = new ShootingStar();
  shootingStars.push(star);
  scene.add(star.star);
}

// IMPORT EXTERNAL MODELS

const gltfLoader = new THREE.GLTFLoader();

let mesh1;
gltfLoader.load(
  './models/Astronaut3.glb',
  function (gltf) {
    mesh1 = gltf.scene;
    mesh1.scale.x = 8;
    mesh1.scale.y = 8;
    mesh1.scale.z = 8;

    mesh1.position.x = -35;
    mesh1.position.y = 12;
    mesh1.position.z = 20;

    scene.add(mesh1);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let mesh2;
gltfLoader.load(
  './models/Astronaut4.glb',
  function (gltf) {
    mesh2 = gltf.scene;
    mesh2.scale.x = 8;
    mesh2.scale.y = 8;
    mesh2.scale.z = 8;

    mesh2.position.x = 10;
    mesh2.position.y = 20;
    mesh2.position.z = 30;

    scene.add(mesh2);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let mesh3;
gltfLoader.load(
  './models/Meeee10.glb',
  function (gltf) {
    if (gltf.scene) {
      mesh3 = gltf.scene;
      mesh3.scale.set(8, 8, 8);
      mesh3.position.set(0, 15, 25);

      console.log('Model loaded: ', mesh3);

      scene.add(mesh3);
    } else {
      console.error('Failed to load the model', gltf);
    }
  },
  undefined,
  function (error) {
    console.error('Error loading the model:', error);
  }
); /**/

// ADD TEXT //

// Load the font using FontLoader
const fontLoader = new THREE.FontLoader();

// Store text meshes globally
const textMeshes = [];

// Function to create 3D text
function createText(text, elevation = 0, textColor = '0x83fcf4', size = 7) {
  fontLoader.load(
    './fonts/helvetiker_regular.typeface.json', // Make sure the font file is available in the correct path
    function (font) {
      // Create 3D Text Geometry
      const textGeometry = new THREE.TextGeometry(text, {
        font: font,
        size: size,
        height: 0.1,
        curveSegments: 25,
        bevelEnabled: true,
        bevelThickness: 0.75,
        bevelSize: 0.5,
        bevelOffset: 0,
        bevelSegments: 5,
      });

      // Center the geometry along all axes
      textGeometry.center();

      // Create a material for the text
      const textMaterial = new THREE.MeshNormalMaterial();

      // Create a mesh for the text using the geometry and material
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);

      // Position the text in the scene
      textMesh.position.set(0, elevation, 0);

      // Add the text mesh to the scene
      scene.add(textMesh);

      // Add text mesh to the array of meshes to be updated in the animate loop
      textMeshes.push(textMesh);
    },
    undefined,
    function (error) {
      console.error(error); // Handle font loading errors
    }
  );
}

// Function to make each text mesh face the camera
function faceCamera() {
  textMeshes.forEach((textMesh) => {
    textMesh.lookAt(camera.position);
  });
}

createText('', -5, 0xffffff, 3);
createText('Press Spacebar', 3, 0xffffff, 3);
createText('Hellooooo!', 15, 0xffffff, createText.size);

// SLOW MOTION EFFECT //

// Variable to track whether slow motion is enabled
let isSlowMotion = false;

// Speed factor for rotation and animation
const normalSpeed = 0.005;
const slowSpeed = 0.001;

// When space bar is pressed => Slow Motion enabled
window.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    isSlowMotion = !isSlowMotion;
    console.log(isSlowMotion ? 'Slow motion enabled' : 'Slow motion disabled');
  }
});

//Lights!
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.4);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20, 20, 20);
scene.add(pointLight, ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

//Camera!
camera.position.x = -40;
camera.position.y = 10;
camera.position.z = 40;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -5;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Action!
function animate() {
  requestAnimationFrame(animate);

  //Speed based on enable/disabled Slow Motion
  const speed = isSlowMotion ? slowSpeed : normalSpeed;

  // Rotating geometry
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
    mesh1.position.x += speed * 0.2;
    mesh1.position.y += speed;
    mesh1.position.z += speed;
  }

  if (mesh2) {
    mesh2.rotation.x += speed * 0.5;
    mesh2.rotation.y += speed;
    mesh2.position.x += speed * 0.5;
    mesh2.position.y += speed;
    mesh2.position.z += speed * 0.2;
  }

  if (mesh3) {
    mesh3.rotation.x += speed * 0.1;
    mesh3.rotation.y += speed * 0.1;
    mesh3.position.x += speed * 0.1;
    mesh3.position.y += speed * 0.1;
    mesh3.position.z += speed * 0.1; /**/
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
