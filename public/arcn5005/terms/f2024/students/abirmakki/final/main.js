// Create the scene
const scene = new THREE.Scene();

// Select the container
const canvas = document.getElementById("three-canvas");
const container = document.querySelector(".model"); // Target the container

// Camera setup
const size = {
  width: container.clientWidth, // Match container's width
  height: container.clientHeight, // Match container's height
};
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.set(0, 1, 8); // Position the camera to view the model

// Renderer setup
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(size.width, size.height); // Match the container's size
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Raycasting and mouse setup
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let myModel = null;

// Load the model
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load(
  "./models/my-model.glb",
  (gltf) => {
    myModel = gltf.scene;

    // Center the model
    const box = new THREE.Box3().setFromObject(myModel);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());

    myModel.position.x -= center.x;
    myModel.position.y -= center.y;
    myModel.position.z -= center.z;

    // Scale the model to fit the container
    const maxAxis = Math.max(size.x, size.y, size.z);
    myModel.scale.setScalar(15 / maxAxis); // Adjust scale as needed

    scene.add(myModel);
    console.log("Model loaded and centered:", myModel);

    // Update OrbitControls to focus on the model
    controls.target.set(0, 0, 0);
    controls.update();
  },
  undefined,
  (error) => console.error("Error loading model:", error)
);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// OrbitControls setup
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Popup function for clicks
const texts = ["Jackpot! You struck green gold!", "Pass! It's going to taste chalky.", "Save your money, donate to 🍉.", "Yuck! Matcha shouldn't be grassy!", "This matcha is worth the financial debt.", "Stock up for the year with this matcha.", "Duck approves of this matcha", "You've dissapointed Duck with your choice."];
function showPopup(randomText) {
  const popup = document.getElementById("popup");
  popup.textContent = randomText;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 5000);
}

// Handle clicks on the canvas
canvas.addEventListener("click", (event) => {
  const rect = canvas.getBoundingClientRect(); // Get canvas dimensions
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  if (myModel) {
    const intersects = raycaster.intersectObject(myModel, true);

    if (intersects.length > 0) {
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      showPopup(randomText);
    }
  }
});

// Resize handler to adapt to the container size
window.addEventListener("resize", () => {
  size.width = container.clientWidth;
  size.height = container.clientHeight;

  renderer.setSize(size.width, size.height);
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
});

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  if (myModel) {
    myModel.rotation.y += 0.003; // Rotate the model slightly for animation
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();
