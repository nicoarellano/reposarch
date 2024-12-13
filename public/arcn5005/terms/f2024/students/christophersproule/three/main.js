const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

// Renderer Setup
const threeCanvas = document.getElementById('three-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const gltfLoader = new THREE.GLTFLoader();

let mesh;
let tennisBall; 
let targetScale = new THREE.Vector3(0.01, 0.01, 0.01); 
let currentScale = new THREE.Vector3(0.01, 0.01, 0.01); 
const scaleSpeed = 0.05; 
let isEnlarged = false; 

// Load Sitting Chris Model
gltfLoader.load(
  "Model/sitting_chris_final.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.set(3, 3, 3);
    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Load Tennis Ball Model
gltfLoader.load(
  "Model/tennisball2.glb",
  function (gltf) {
    tennisBall = gltf.scene;
    tennisBall.position.set(0, 1, 1);
    tennisBall.scale.set(0.01, 0.01, 0.01); 
    scene.add(tennisBall);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Background Sphere
const sphereGeometry = new THREE.SphereGeometry(100, 100, 100);
const sphereMaterial = new THREE.MeshBasicMaterial({
  map: new THREE.TextureLoader().load('./prairie.jpg'),
  side: THREE.BackSide
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);

// Dot Particle System (Falling Dots with Irregular Movement)
const dotTexture = new THREE.TextureLoader().load('./Dot.png'); 
const dots = [];
const numDots = 300; // Number of dots

for (let i = 0; i < numDots; i++) {
  const spriteMaterial = new THREE.SpriteMaterial({
    map: dotTexture,
    transparent: true,
  });

  const dot = new THREE.Sprite(spriteMaterial);
  dot.position.set(
    Math.random() * 20 - 10,  // X position (random, scattered)
    Math.random() * 20 + 10,  // Y position (starting higher for falling effect)
    Math.random() * 8 - 4   // Z position (for depth)
  );
  dot.scale.set(0.05, 0.05); // Initial scale of the dot

  // Assign random velocities for irregular movement
  dot.velocity = {
    x: Math.random() * 0.2 - 0.1,  
    y: Math.random() * 0.1 + 0.02, 
    z: Math.random() * 0.05 - 0.025 
  };

  dots.push(dot);
  scene.add(dot);
}

function animateDots() {
  dots.forEach((dot) => {
    // Apply irregular movement based on random velocity
    dot.position.x += dot.velocity.x; 
    dot.position.y -= dot.velocity.y; 
    dot.position.z += dot.velocity.z;

    // Gradually increase the scale of each dot over time (larger growth)
    const scaleIncrease = 0.01; 
    dot.scale.set(dot.scale.x + scaleIncrease, dot.scale.y + scaleIncrease);

    // Reset dot position when it falls off the screen
    if (dot.position.y < -10) {
      dot.position.y = Math.random() * 20 + 20;  
      dot.position.x = Math.random() * 20 - 10;  
      dot.position.z = Math.random() * 8 - 4;    
      dot.scale.set(0.05, 0.05); 

      // Assign new random velocities to keep the motion irregular
      dot.velocity = {
        x: Math.random() * 0.2 - 0.1,  
        y: Math.random() * 0.1 + 0.02, 
        z: Math.random() * 0.05 - 0.025 
      };
    }
  });
}

// Light Setup
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

// Camera Setup
camera.position.z = 15; 
camera.position.x = 0;
camera.position.y = 2;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Text Creation Function
const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "ffffff", size = 0.5) {
  fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (font) {
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
    color.setHex(textColor);
    const textMaterial = new THREE.MeshLambertMaterial({ color: color });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.x = 4;
    textMesh.position.y = elevation;

    scene.add(textMesh);
  });
}

// Create texts
createText("Chris Sproule", 5, "0XFFFFFF");
createText("Embrace the dots!", 4, "0X000000");
createText("Let the halftone consume you!! ", 3, "0X000000");
createText("consume you!! ", 2, "0X000000");
createText("press space", 1, "0X000000");

// Event listener for Spacebar press
window.addEventListener('keydown', onKeyDown, false);

// Spacebar keydown event handler
function onKeyDown(event) {
  if (event.code === 'Space') {
    if (!isEnlarged) {
      targetScale.set(30, 30, 30);
      isEnlarged = true;
    } else {
      targetScale.set(0.01, 0.01, 0.01);
      isEnlarged = false;
    }
  }
}

// Function to scale the tennis ball smoothly
function scaleTennisBall() {
  if (tennisBall) {
    currentScale.lerp(targetScale, scaleSpeed); 
    tennisBall.scale.set(currentScale.x, currentScale.y, currentScale.z);
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.01;

  animateDots(); 
  scaleTennisBall(); 

  controls.update(); 
  renderer.render(scene, camera); 
}

animate(); 
