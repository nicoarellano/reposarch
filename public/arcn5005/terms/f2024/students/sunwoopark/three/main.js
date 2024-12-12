const scene = new THREE.Scene();
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);


//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas-park");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);


// Enable shadow map
renderer.shadowMap.enabled = true;

//Creates grids and axes in the scene
const grid = new THREE.GridHelper(40, 10);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

// Add a Torus Knot to the scene
const torusKnotGeometry = new THREE.TorusKnotGeometry(10, 3.5, 100, 16); // Customize radius, tube, radial segments, and tubular segments
const torusmaterial = new THREE.MeshStandardMaterial
({ color: 0xffffff,        // Base color of the glass
  metalness: 0,           // No metalness for glass
  roughness: 0,           // Low roughness for a clear surface
  transmission: 1,        // Full transmission for clear glass
  opacity: 0.25,          // Adjust to make it semi-transparent
  transparent: true,      // Enable transparency
  reflectivity: 0.9,      // Adjust reflectivity for a glass-like reflection
  clearcoat: 1,           // Adds a shiny, polished effect on top
  clearcoatRoughness: 0,  // Smooth clearcoat for clean reflections
});

const torusKnot = new THREE.Mesh(torusKnotGeometry, torusmaterial);
torusKnot.position.set(0, 10, -25);
scene.add(torusKnot);

// Reuse the same torus knot geometry and material, or create new ones if needed
const torusKnotGeometry2 = torusKnotGeometry;  // Reuse existing geometry
const torusmaterial2 = torusmaterial;          // Reuse existing material
const torusKnot2 = new THREE.Mesh(torusKnotGeometry2, torusmaterial2);
torusKnot2.position.set(-20, 10, -8);  // Adjust x, y, z coordinates as needed
torusKnot2.scale.set(.5,.5,.5);
scene.add(torusKnot2);

// Reuse the same torus knot geometry and material, or create new ones if needed
const torusKnotGeometry3 = torusKnotGeometry;  // Reuse existing geometry
const torusmaterial3 = torusmaterial;          // Reuse existing material
const torusKnot3 = new THREE.Mesh(torusKnotGeometry3, torusmaterial2);
torusKnot3.position.set(20, 10, -8);  // Adjust x, y, z coordinates as needed
torusKnot3.scale.set(.4,.4,.4);
scene.add(torusKnot3);

//keyboard interaction - move camera
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "w":
      // Move the camera forward
      camera.position.z -= 1;
      break;
    case "s":
      // Move the camera backward
      camera.position.z += 1;
    case "a":
      // Move the camera left
      camera.position.x -= 1;
      break;
    // Add more cases for other keys

    case "d":
      // Move the camera right
      camera.position.x += 1;
    case "q":
      // Move the camera up
      camera.position.y += 1;
      break;
    case "e":
      // Move the camera down
      camera.position.y -= 1;
  }
});

//Camera
camera.position.z = 25;
camera.position.x = 5;
camera.position.y = 3;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -10;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Set the background color of the scene
scene.background = new THREE.Color(0xCFE2F3); // Replace 0x000000 with your desired color hex value

//add first gltf model
const loader = new THREE.GLTFLoader();
let mesh;
loader.load(
  "Park_Sun-Woo.glb",
  function (gltf) {
    gltf.scene.scale.x = 3;
    gltf.scene.scale.y = 3;
    gltf.scene.scale.z = 3;
    mesh = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader2 = new THREE.GLTFLoader();
let mesh2;
loader2.load(
  "./capybara.glb",
  function (gltf) {
    gltf.scene.scale.x = 100;
    gltf.scene.scale.y = 100;
    gltf.scene.scale.z = 100;
    mesh2 = gltf.scene;
    mesh2.position.x = -7;  // Adjust the position as needed
    mesh2.position.z = 4;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader3 = new THREE.GLTFLoader();
let mesh3;
loader3.load(
  "./moo_deng.glb",
  function (gltf) {
    gltf.scene.scale.x = 3;
    gltf.scene.scale.y = 3;
    gltf.scene.scale.z = 3;
    mesh3 = gltf.scene; 
    mesh3.position.x = -13;  // Adjust the position as needed
    mesh3.position.y = .5;
    mesh3.position.z = 4;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader4 = new THREE.GLTFLoader();
let mesh4;
loader4.load(
  "./chick_trio.glb",
  function (gltf) {
    gltf.scene.scale.x = 1;
    gltf.scene.scale.y = 1;
    gltf.scene.scale.z = 1;
    mesh4 = gltf.scene;
    mesh4.position.x = -11;  // Adjust the position as needed
    mesh4.position.y = 0;
    mesh4.position.z = -1;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);


//set up background colors to change
const backgroundColors = [0xB3C5E3, 0xA2C4C9, 0x152744];
let currentColorIndex = 0;

// Change background color on key press
window.addEventListener("keydown", (event) => {
  if (event.key === "b") {
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    const newBgColor = backgroundColors[currentColorIndex];
    scene.background = new THREE.Color(newBgColor);
  }
});

// Initially set the grid to be invisible
grid.visible = false;

// Toggle grid visibility with "G" key
window.addEventListener("keydown", (event) => {
  if (event.key === "g") {
    grid.visible = !grid.visible;
  }
});

// turn on and off light
let lightsOn = true;

window.addEventListener("keydown", (event) => {
  if (event.key === "l") {
    lightsOn = !lightsOn;

    // Toggle lights
    ambientLight.visible = lightsOn;
    directionalLight.visible = lightsOn;
  }
});


//add text
const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textSize = size;
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
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = 5;
    text.position.y = elevation;

  // Enable shadows for the text
  text.castShadow = true;
  text.receiveShadow = true; // Allow the text to receive shadows

  // Add the text to the scene
  scene.add(text);

    // Listen for keyboard events
    window.addEventListener("keydown", (event) => {
      // Check if the pressed key is "t"
      if (event.key === "t") {

      // Array of specific colors to randomize between
      const colors = [0X26465F, 0xd2a517, 0xe74c3c, 0x358b88, 0x965f9f];  // Add as many colors as you'd like

      // Pick a random color from the array
      const randomColor = colors[Math.floor(Math.random() * colors.length)];

      // Apply the color to the text
      text.material.color.setHex(randomColor);
      }
    });

    scene.add(text);
  });
}

createText("press W S A D Q E to move camera", 9, "0X26465F")
createText("left-click to rotate + right-click to shift", 8, "0X26465F")
createText("press B to change background & T for text color", 7, "0X26465F")
createText("press G to toggle grid & L for light", 6, "0X26465F")
createText("Bachelor of Interior Design @ TMU", 4, "0XE74C3C");
createText("i have a dog, kkami <3", 3, "0XE74C3C");
createText("i enjoy vlogging", 2, "0XE74C3C");
createText("Sun-Woo Park", 0, "0XE74C3C", 1.5)


// Function to generate a random hex color
function getRandomHexColor() {
  return Math.random() * 0xffffff;
}

//Creates the lights of the scene
const lightColor = 0xffffff;
const ambientLight = new THREE.AmbientLight(lightColor, .7);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(lightColor, 2);
directionalLight.position.set(15, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

// Enable shadows for the directional light
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.width = 1024;
directionalLight.shadow.mapSize.height = 1024;
directionalLight.shadow.camera.near = 0.5;
directionalLight.shadow.camera.far = 500;

//add animation
function animate() {
  requestAnimationFrame(animate);
  if (mesh) mesh.rotation.y -= 0.01;
  if (mesh2) mesh2.rotation.y += 0.01;
  if (mesh3) mesh3.rotation.y += 0.01;
  if (mesh4) mesh4.rotation.y += 0.01;
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  torusKnot2.rotation.x -= 0.01;
  torusKnot2.rotation.y -= 0.01;
  torusKnot3.rotation.x -= 0.01;
  torusKnot3.rotation.y -= 0.01;
  renderer.render(scene, camera);
}
animate();

//Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

