const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);  // Set background to black


const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

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
//const grid = new THREE.GridHelper(10, 10);
//scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

camera.position.set(0, 0, 13);
camera.lookAt(0, 0, 0);

scene.position.set(0, 0, 0);

// Creates the lights of the scene
const lightColor = 0xffffff;
const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

// Enable shadow rendering
renderer.shadowMap.enabled = true;

// Orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

// Load GLB models and add them to the scene
let offendedBird;

loadGLB("OffendedBird.glb", 1, 0, 0, 0); // Position the bird on the grid at y = 0

// Function to load the GLB model and add it to the scene
function loadGLB(path, scale, x, y, z) {
  const gltfLoader = new THREE.GLTFLoader();
  gltfLoader.load(path, (gltf) => {
    const mesh = gltf.scene;
    mesh.scale.set(scale, scale, scale);
    mesh.position.set(x, y, z);
    scene.add(mesh);
    
    // Store references to the loaded models
    if (path === "OffendedBird.glb") {
      offendedBird = mesh; // Store the bird model reference
    } 
  }, undefined, (error) => {
    console.error(error);
  });
}


// Create a cylinder geometry ref:https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/
const radiusTop = 5;  // Radius at the top of the cylinder
const radiusBottom = 2;  // Radius at the bottom of the cylinder
const height = 0.5;  // Height of the cylinder
const radialSegments = 75;  // Number of radial segments (sides)
const heightSegments = 25;  // Number of height segments
const openEnded = false;  // Whether the cylinder is open at the top and bottom

const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded);

// Create a yellow material
const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0x00A3A3 });

// Create the mesh using the geometry and material
const yellowCylinder = new THREE.Mesh(geometry, yellowMaterial);
scene.add(yellowCylinder);

// Store wave data for each vertex
const waveData = [];
const positions = yellowCylinder.geometry.attributes.position.array;
const numVertices = positions.length / 3; // Each vertex has 3 components (x, y, z)

//information about each vertex in the cylinder geometry (sort of don't under)
for (let i = 0; i < numVertices; i++) { 
  waveData.push({
    x: positions[i * 3],  // X position
    y: positions[i * 3 + 1],  // Y position
    z: positions[i * 3 + 2],  // Z position
    angle: Math.random() * Math.PI * 2,  // Random angle for wave movement
    amplitude: 0.05 + Math.random() * 0.15,  // Random wave amplitude
    speed: 0.01 + Math.random() * 0.03,  // Random wave speed
  });
}

// Function to update the wave motion of the cylinder
function updateWaves() {
  for (let i = 0; i < numVertices; i++) {
    const vprops = waveData[i];
    const i3 = i * 3;

    // Update the y position of each vertex to create wave-like movement
    positions[i3 + 1] = vprops.y + Math.sin(vprops.angle) * vprops.amplitude;  // y-axis

    // Increment the angle for the wave effect
    vprops.angle += vprops.speed;
  }

  // Tell the renderer that the geometry has been updated
  yellowCylinder.geometry.attributes.position.needsUpdate = true;
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  updateWaves();  // Update the wave motion
  controls.update();  // Update camera controls
  renderer.render(scene, camera);
}

animate();  // Start the animation loop

// Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
