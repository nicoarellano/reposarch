const scene = new THREE.Scene();

// Set up the size and aspect ratio
const size = {
  width: window.innerWidth * 0.4,
  height: window.innerHeight * 0.4,
};
const aspect = size.width / size.height;

// Set up the camera
const camera = new THREE.PerspectiveCamera(75, aspect, 1, 1000);

// Set up the renderer
const renderer = new THREE.WebGLRenderer({
  alpha: true,
});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Get the three-container and append the renderer
const threeContainer = document.getElementById("three-container");
threeContainer.appendChild(renderer.domElement);

// Set up grid and axes
const grid = new THREE.GridHelper(3, 3);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

// Set up ground
const groundGeometry = new THREE.SphereGeometry(10, 32, 32);
const groundMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  wireframe: true,
});
const ground = new THREE.Mesh(groundGeometry, groundMaterial);
scene.add(ground);

// Load 3D model
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load(
  "./three/models/From Blender.glb",
  function (gltf) {
    const mesh = gltf.scene;
    mesh.scale.set(0.5, 0.5, 0.5);
    mesh.position.set(0, 0, 0); // Center the model
    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Set up fonts
const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load(
    "./three/fonts/helvetiker_regular.typeface.json",
    function (font) {
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

      textMesh.position.set(0, elevation, 0); // Center the text
      scene.add(textMesh);
    }
  );
}

// Create text elements
createText("Simon Martignago", 5, "0XFF00FF");
createText("- Aspiring Architect", 3, "0XFF0000");
createText("- Very Amateur programmer", 2, "0XFF0000");
createText("- Pineapple Enjoyer", 1, "0XFF0000");
createText("- Locked inside this spherical mesh", 0, "0XFF0000");

// Set up camera position
camera.position.set(2, 8, 8);

scene.position.y = -3;

// Set up controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Set up lights
const lightColor = 0xffffff;
const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

// Set up color change logic
let lastColorChangeTime = Date.now();

function animate() {
  requestAnimationFrame(animate);

  if (ground) {
    ground.rotation.y += 0.01;
  }

  const currentTime = Date.now();
  const elapsedTimeSinceLastChange = currentTime - lastColorChangeTime;

  if (elapsedTimeSinceLastChange > 10000) {
    groundMaterial.color.setHex(
      `0x${Math.floor(Math.random() * 16777215).toString(16)}`
    );
    lastColorChangeTime = currentTime;
  }

  // Render the scene
  renderer.render(scene, camera);
}

animate();

// Set up full-screen functionality
const fullScreenButton = document.getElementById("full-screen");
let fullScreen = false;

fullScreenButton.addEventListener("click", () => {
  fullScreen = !fullScreen;
  resize();
  console.log(fullScreen ? "FULL SCREEN!!" : "little screen");
});

// Set up window resize event
window.addEventListener("resize", () => {
  resize();
});

// Inside the resize function
const resize = () => {
  size.width = window.innerWidth * (fullScreen ? 0.6 : 0.92);
  size.height = window.innerHeight * (fullScreen ? 0.4 : 0.9);
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);

  // Adjust controls to handle resizing
  controls.target.set(0, 0, 0);
  controls.screen.width = size.width;
  controls.screen.height = size.height;
  controls.update();
};

// Set up zoom functionality
document.getElementById("zoom-button").addEventListener("click", function () {
  var simonImage = document.getElementById("simon-image");
  var currentScale = parseFloat(
    getComputedStyle(simonImage).getPropertyValue("transform").split("(")[1].split(")")[0]
  );
  var newScale = currentScale === 1 ? 1.5 : 1;

  simonImage.style.transform = `scale(${newScale})`;
});