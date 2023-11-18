// Create a scene
const scene = new THREE.Scene();

// Set up the size and aspect ratio
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const aspect = size.width / size.height;

// Create a camera
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.z = 13;
camera.position.x = 5;
camera.position.y = 2;

// Set up the renderer
const threeCanvas = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Create grids and axes in the scene
const grid = new THREE.GridHelper(1, 1);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

// Create a spherical ground plane
const groundGeometry = new THREE.SphereGeometry(10, 32, 32);
const groundMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
scene.add(ground);

// Load 3D model using GLTFLoader
const GLTFLoader = new THREE.GLTFLoader();
let mesh;

function loadGLB(path, scale, x, z) {
  GLTFLoader.load(
    path,
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.set(scale, scale, scale);
      mesh.position.x = x;
      mesh.position.z = z;
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}

loadGLB("./Models/From Blender.glb", 0.3, 0, 0);

// Update ground rotation function
function updateGroundRotation() {
  if (ground) {
    ground.rotation.y += 0.01; // Rotate in a circle
  }
}

// Load font and create text
const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x100000", size = 0.3) {
  fontLoader.load("./Fonts/helvetiker_regular.typeface.json", function (font) {
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

    const color = new THREE.Color();
    // Gradually change the color every 10 seconds
    color.setHex(
      `0x${Math.floor(Math.random() * 16777215).toString(16)}`
    );
    const textMaterial = new THREE.MeshLambertMaterial({ color: color });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.x = 2;
    textMesh.position.y = elevation;

    scene.add(textMesh);
  });
}

// Create text elements
createText("Simon Martignago", 5, "0XFF0000");
createText("- Aspiring Architect", 3, "0XFF0000");
createText("- Not on the research team at CIMS", 2.5, "0XFF0000");
createText("- Master of Architecture", 2, "0XFF0000");
createText("- Very Amateur programmer", 1.5, "0XFF0000");

// Set up lights
const lightColor = 0xffffff;
const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

// Set up controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.01;

  // Update ground rotation
  updateGroundRotation();

  // Render the scene
  renderer.render(scene, camera);
}

// Gradually change ground color every 10 seconds
function changeGroundColor() {
  setInterval(() => {
    groundMaterial.color.setHex(
      `0x${Math.floor(Math.random() * 16777215).toString(16)}`
    );
  }, 1000);
}

// Handle window resize
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

// Start the animation loop
animate();
// Start the color change interval
changeGroundColor();

// extra
