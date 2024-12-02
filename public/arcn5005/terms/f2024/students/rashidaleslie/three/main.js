const audio = document.getElementById('rave-music');
const toggleButton = document.getElementById('toggle-play');

//make an array
const songs = [
  'RaveCave.mp3',
  'Baby.mp3',
  'Believer.mp3',
  'September.mp3',
];

let currentSong = 0;  
audio.src = songs[currentSong];  


toggleButton.addEventListener('click', () => {
  
    currentSong = (currentSong + 1) % songs.length;
    audio.src = songs[currentSong];  
    audio.play();  
});

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);  // Set background to black


const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

// Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas-RL");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const rgbeLoader = new THREE.RGBELoader();
rgbeLoader.load('creepy_bathroom_4k.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
  texture.intensity = 0.5; 
}, undefined, (error) => {
  console.error('Error loading the HDRI background:', error);
});



//rerference to know 0,0,0
const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

//camera setup
camera.position.set(-10, 4, 0);
camera.lookAt(0, 0, 0);
scene.position.set(0, 0, 0);

// Creates the lights of the scene
const lightColor = 0xffffff;
const ambientLight = new THREE.AmbientLight(lightColor, .2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(0, 10, 0);
scene.add(directionalLight);

//from example code
const fontLoader = new THREE.FontLoader();


function createText(text, elevation = 3, textColor = '0xFF9900', size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeo = new THREE.TextGeometry(textValue, {
      font: font,
      size: textSize,
      height: 0.2,
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
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = 0;
    text.position.y = elevation;

    const textLight = new THREE.PointLight(0xffffff, 2, 10);
    textLight.position.set(0, elevation + 1, -2);
    scene.add(textLight);

    scene.add(text);
  });
}

createText('Click Me', 1.5, '0xFF9900');

//spotlights ref: https://github.com/mrdoob/three.js/blob/master/examples/webgl_lights_spotlights.html

const spotLight1 = new THREE.SpotLight(0xFF7F00, 10);
spotLight1.position.set(10, 2, 10);
spotLight1.angle=0.025;
spotLight1.penumbra = 0.25;  
spotLight1.decay = 2;
spotLight1.distance = 20; 
spotLight1.castShadow = true;
scene.add(spotLight1);

const spotLight2 = new THREE.SpotLight(0xFF0000, 10);
spotLight2.position.set(50, 2, 50);
spotLight2.angle=0.025;
spotLight2.penumbra = 0.25;  
spotLight2.decay = 2;
spotLight2.distance = 20; 
scene.add(spotLight2);

const spotLight3 = new THREE.SpotLight(0x9900FF, 10);
spotLight3.position.set(5, 2, 5);
spotLight3.angle=0.025;
spotLight3.penumbra = 0.25;  
spotLight3.decay = 2;
spotLight3.distance = 20; 
scene.add(spotLight3);


// Check if spotlights are working as wanted
const spotLightHelper1 = new THREE.SpotLightHelper(spotLight1);
scene.add(spotLightHelper1);

const spotLightHelper2 = new THREE.SpotLightHelper(spotLight2);
scene.add(spotLightHelper2);

const spotLightHelper3 = new THREE.SpotLightHelper(spotLight3);
scene.add(spotLightHelper3);

// Enable shadow rendering
renderer.shadowMap.enabled = true;

// Orbit controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

// Load GLB models and add them to the scene
// Load GLB models and add them to the scene
let offendedBird;
let moi;
const offendedBirds = []; 

function addMultipleDucks(numDucks) {
  for (let i = 0; i < numDucks; i++) {
    // Randomize positions for each duck
    const xPos = Math.random() * 8 - 4; 
    const zPos = Math.random() * 8 - 4;  

    loadGLB("OffendedBird.glb", 1, xPos, .25, zPos);  // Position each duck randomly
  }
}

// Add 5 ducks at random positions
addMultipleDucks(5);

function loadGLB(path, scale, x, y, z, meshReference) {
  const gltfLoader = new THREE.GLTFLoader();
  gltfLoader.load(path, (gltf) => {
    const mesh = gltf.scene;
    mesh.scale.set(scale, scale, scale);
    mesh.position.set(x, y, z);
    scene.add(mesh);
    
    // Store references to the loaded models
    if (path === "OffendedBird.glb") {
      offendedBirds.push(mesh);
    } 
    if (path === "moi.glb") {
      moi = mesh;  // Store the moi model reference
    }
  }, undefined, (error) => {
    console.error(error);
  });
}


loadGLB("moi.glb", 0.25, 0, 0.25, 0); // Position moi model at (3, 0, 0)

let isJumping = false;

document.addEventListener('click', () => {
  if (moi && !isJumping) {
    isJumping = true;

    const jumpHeight = 1.5;  // Height of the jump
    const jumpDuration = 100;  // Duration of the jump in milliseconds (up and down)

    // Animate the jump using a simple timeout
    const originalY = moi.position.y;  // Store original y-position

    // Move up
    moi.position.y = originalY + jumpHeight;

    // Use `setTimeout` to bring the model back down after a short delay
    setTimeout(() => {
      moi.position.y = originalY;  // Reset to original y-position
      isJumping = false;  // Reset the flag
    }, jumpDuration);
  }
});


function updateBirdsJump() {
  // Make all the birds in the offendedBirds group jump
  offendedBirds.forEach(bird => {
    const jumpHeight = 0.25 + (0.75 * Math.sin(time * 5) + 0.75) / 2
    bird.position.y = jumpHeight;
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

// Create a material
const cloudMaterial = new THREE.MeshLambertMaterial({ color:0xFFFFFF });

// Create the mesh using the geometry and material
const cloudCylinder = new THREE.Mesh(geometry, cloudMaterial);
scene.add(cloudCylinder);

// Store wave data for each vertex
const waveData = [];
const positions = cloudCylinder.geometry.attributes.position.array;
const numVertices = positions.length / 3; // Each vertex has 3 components (x, y, z)

//information about each vertex in the cylinder geometry (sort of don't understand the math behind this)
//for loop ref : https://www.w3schools.com/js/js_loop_for.asp

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
  cloudCylinder.geometry.attributes.position.needsUpdate = true;
}
// a variable to keep track of time
let time = 0;

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  updateWaves();  // Update the wave motion
  controls.update();  // Update camera controls
  renderer.render(scene, camera);

  //spotlight time
  time += 0.01; 

  // Move the spotlights in a circular motion
  spotLight1.position.x = 10 * Math.cos(time);
  spotLight1.position.z = 10 * Math.sin(time);
  spotLight1.position.y = Math.max(2, 4 + 2 * Math.sin(time * 0.5));

  spotLight2.position.x = 15 * Math.cos(time * 0.8);  
  spotLight2.position.z = 15 * Math.sin(time * 0.8);
  spotLight2.position.y = Math.max(0, 10 + 3 * Math.sin(time * 0.7)); 

  spotLight3.position.x = 15 * Math.cos(time * 0.5);  
  spotLight3.position.z = 15 * Math.sin(time * 0.5);
  spotLight3.position.y = Math.max(0, 10 + 3 * Math.sin(time * 0.7)); 

  // Update spot light helpers to match new positions
  spotLightHelper1.update();
  spotLightHelper2.update();
  spotLightHelper3.update();

  updateBirdsJump()
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
