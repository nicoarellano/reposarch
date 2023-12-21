// Create a Three.js scene
const scene = new THREE.Scene();

// Set up the size and aspect ratio for the camera
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

// Get the canvas element from the HTML
const threeCanvas = document.getElementById("three-canvas");

// Set up the WebGL renderer with the canvas
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

// Set renderer size and pixel ratio
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Create a sphere geometry and material for multiple spheres
const geometry = new THREE.SphereGeometry(1, 5, 5);
const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x0A0600 });

// Create and position spheres in the scene
const ASphere = createSphere(5, 12);
const BSphere = createSphere(4, 6);
const CSphere = createSphere(9, 10);
const DSphere = createSphere(-3, 0.5);

// Load GLB models and add them to the scene
loadGLB("./Models/astronaut.glb", 0.5, 0, 0, 0);
loadGLB("./Models/need_some_space.glb", 200, -285, -285, 300);
loadGLB("./Models/space_shuttle.glb", 0.5, 10, 0, -10);
loadGLB("./Models/space_rocks.glb", 10, 0, 0, 15);

// Load texture for the background
loadTexture('./Photos/milky-way-night.jpg');

// Create text in the scene using a custom font
createText("Ben Segal", 6, "0xFFFFFF");
createText("Toronto, Canada", 4, "0xFFFFFF");
createText("M.Arch Student", 3, "0xFFFFFF");
createText("Idol: Arnold Schwarzenegger", 2, "0xFFFFFF");

// Set initial camera position and scene position
camera.position.set(5, 2, 13);
scene.position.set(-5, -3, 5);

// Set up OrbitControls for interactive navigation
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Add lights to the scene
addLights();

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate spheres
  rotateSpheres();

  // Render the scene
  renderer.render(scene, camera);
}

// Start the animation loop
animate();

// Adjust viewport on window resize
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

// Function to create and return a sphere with given position
function createSphere(positionX, positionZ) {
  const sphere = new THREE.Mesh(geometry, sphereMaterial);
  sphere.position.x = positionX;
  sphere.position.z = positionZ;
  scene.add(sphere);
  return sphere;
}

// Function to load a GLB model and add it to the scene
function loadGLB(path, scale, x, y, z) {
  const gltfLoader = new THREE.GLTFLoader();
  gltfLoader.load(path, (gltf) => {
    const mesh = gltf.scene;
    mesh.scale.set(scale, scale, scale);
    mesh.position.set(x, y, z);
    scene.add(mesh);
  }, undefined, (error) => {
    console.error(error);
  });
}

// Function to load a texture and set it as the background
function loadTexture(path) {
  const loader = new THREE.TextureLoader();
  const texture = loader.load(path, () => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.encoding = THREE.sRGBEncoding;
    scene.background = texture;
  });
}

// Function to create text in the scene
function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textSize = size;
  const fontLoader = new THREE.FontLoader();
  fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (font) {
    const textGeo = new THREE.TextGeometry(textValue, {
      font: font,
      size: textSize,
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
    const textMaterial = new THREE.MeshLambertMaterial({ color: color });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.x = 2;
    textMesh.position.y = elevation;

    scene.add(textMesh);
  });
}

// Function to add lights to the scene
function addLights() {
  const lightColor = 0xffffff;

  const ambientLight = new THREE.AmbientLight(lightColor, 1);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(lightColor, 1);
  directionalLight.position.set(5, 10, 5);
  directionalLight.target.position.set(0, 3, 0);
  scene.add(directionalLight);
  scene.add(directionalLight.target);
}

// Function to rotate the spheres in the scene
function rotateSpheres() {
  ASphere.rotation.x += 0.01;
  ASphere.rotation.y += 0.01;

  BSphere.rotation.x += 0.005;
  BSphere.rotation.y -= 0.01;

  CSphere.rotation.x -= 0.01;
  CSphere.rotation.y -= 0.005;

  DSphere.rotation.x += 0.01;
  DSphere.rotation.y -= 0.005;
}