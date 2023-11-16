
const scene = new THREE.Scene();
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);


//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas");
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
const grid = new THREE.GridHelper(50, 30);
scene.add(grid);
const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);
const geometry = new THREE.BoxGeometry(1, 1, 1);
const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const yellowCube = new THREE.Mesh(geometry, yellowMaterial);
const blueCube = new THREE.Mesh(geometry, blueMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const greenCube = new THREE.Mesh(geometry, greenMaterial);
yellowCube.position.z = -3;
blueCube.position.x = -3;
redCube.position.x = 3;
greenCube.position.z = 3;
yellowCube.isCube = true;
scene.add(yellowCube);
scene.add(blueCube);
scene.add(redCube);
scene.add(greenCube);

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
camera.position.z = 30;
camera.position.x = 15;
camera.position.y = 2;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Set the background color of the scene
scene.background = new THREE.Color(0xD9D2E9); // Replace 0x000000 with your desired color hex value

//add first gltf model
const loader = new THREE.GLTFLoader();
let mesh;
loader.load(
  "/public/arcn5005/f2023/students/muchenge/Vincent.glb",
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

//add second gltf model
const loader2 = new THREE.GLTFLoader();
let mesh2;
loader2.load(
  "/public/arcn5005/f2023/students/muchenge/Rhino Model 1 1.glb",
  function (gltf) {
    gltf.scene.scale.x = 0.1;
    gltf.scene.scale.y = 0.1;
    gltf.scene.scale.z = 0.1;
    mesh2 = gltf.scene;
    mesh2.position.x = 5;  // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);


//add third gltf model
const loader3 = new THREE.GLTFLoader();
let mesh3;
loader3.load(
  "/public/arcn5005/f2023/students/muchenge/Cat Shelter.glb",
  function (gltf) {
    gltf.scene.scale.x = 1;
    gltf.scene.scale.y = 1;
    gltf.scene.scale.z = 1;
    mesh3 = gltf.scene;
    mesh3.position.z = 7;  // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);


//add fourth glft model
const loader4 = new THREE.GLTFLoader();
let mesh4;
loader4.load(
  "/public/arcn5005/f2023/students/muchenge/Dog Shelter.glb",
  function (gltf) {
    gltf.scene.scale.x = 1;
    gltf.scene.scale.y = 1;
    gltf.scene.scale.z = 1;
    mesh4 = gltf.scene;
    mesh4.position.z = -10;  // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//add fifth glft model
const loader5 = new THREE.GLTFLoader();
let mesh5;
loader5.load(
  "/public/arcn5005/f2023/students/muchenge/Vincent Car.glb",
  function (gltf) {
    gltf.scene.scale.x = 1;
    gltf.scene.scale.y = 1;
    gltf.scene.scale.z = 1;
    mesh5 = gltf.scene; // <-- Change this line to mesh6
    mesh5.position.x = -10;  // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//set up background colors to change
const backgroundColors = [0xD9EAD3, 0xD0E0E3, 0xEAD1DC];
let currentColorIndex = 0;

// Change background color on key press
window.addEventListener("keydown", (event) => {
  if (event.key === "b") {
    currentColorIndex = (currentColorIndex + 1) % backgroundColors.length;
    const newBgColor = backgroundColors[currentColorIndex];
    scene.background = new THREE.Color(newBgColor);
  }
});

//Toggle Grid visibility
window.addEventListener("keydown", (event) => {
  if (event.key === "g") {
    grid.visible = !grid.visible;
  }
});

//Stop and Re-start cube and model rotation
let cubeRotationPaused = false;

window.addEventListener("keydown", (event) => {
  if (event.key === "c") {
    cubeRotationPaused = !cubeRotationPaused;

    // Toggle cube rotation
    yellowCube.rotation.set(0, 0, 0);
    blueCube.rotation.set(0, 0, 0);
    redCube.rotation.set(0, 0, 0);
    greenCube.rotation.set(0, 0, 0);
    mesh.rotation.set(0,0,0)
    mesh3.rotation.set(0,0,0)
    mesh4.rotation.set(0,0,0)
    mesh5.rotation.set(0,0,0)
    mesh6.rotation.set(0,0,0)
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
  let textMaterial;

  fontLoader.load("/public/arcn5005/f2023/students/muchenge/three/Font/helvetiker_regular.typeface.json", function (font) {
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
    textMaterial = new THREE.MeshLambertMaterial({ 
      color: color,
      side: THREE.DoubleSide, //Ensure the text is visible from both sides
    });

    const text = new THREE.Mesh(textGeo, textMaterial);
    text.position.x = 5;
    text.position.z = 3
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
        // Change the color of the text
        const newTextColor = getRandomHexColor();
        text.material.color.setHex(newTextColor);
      }
    });

    scene.add(text);
  });
}

// Function to generate a random hex color
function getRandomHexColor() {
  return Math.random() * 0xffffff;
}

// Add other createText calls here...
createText("Muchen GE", 6, "0Xc27ba0");
createText("- University of Manitoba", 4, "0X3d85c6");
createText("- Bachelor of Environmental Design", 3, "0X3d85c6");
createText("- Recently into Jazz Hip Hop Music", 2, "0X3d85c6");
createText("- Favorite Show is Breaking Bad + Better Call Saul", 1, "0X3d85c6");
createText("- Pet Lover, Having 1 Dog, Used to Have 3 Cats, 2 Chinchillas, 3 Gunie Pigs", 0, "0X3d85c6");



//Creates the lights of the scene
const lightColor = 0xffffff;
const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
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
  if (mesh) mesh.rotation.y += 0.01;
  if (mesh3) mesh3.rotation.y += 0.02;
  if (mesh4) mesh4.rotation.y -= 0.02;
  if (mesh5) mesh5.rotation.y += 0.01;
  yellowCube.rotation.x += 0.01;
  yellowCube.rotation.y += 0.01;
  blueCube.rotation.x += 0.02;
  blueCube.rotation.y -= 0.01;
  redCube.rotation.x -= 0.01;
  redCube.rotation.y -= 0.02;
  greenCube.rotation.x += 0.02;
  greenCube.rotation.y -= 0.01;
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

