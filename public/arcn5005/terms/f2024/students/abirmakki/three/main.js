const scene = new THREE.Scene();

// Camera setup
const size = { width: window.innerWidth, height: window.innerHeight };
const camera = new THREE.PerspectiveCamera(75, size.width / size.height, 0.1, 1000);
camera.position.set(5, 2, 13);

// Renderer setup
const canvas = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true });
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Raycasting and mouse
const mouse = new THREE.Vector2();
const raycaster = new THREE.Raycaster();
let myModel = null;

// Load model
const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load(
  "./models/my-model.glb",
  (gltf) => {
    myModel = gltf.scene;
    myModel.scale.set(3, 3, 3);
    scene.add(myModel);
    console.log("Model loaded:", myModel);
  },
  undefined,
  (error) => console.error("Error loading model:", error)
);

// Popup function
const texts = ["It's okay to give up!", "Best to find a lawyer.", "Feelings aren't reciprocated.", "Outlook not so good, indefinitely.", "You will likely fail!", "You have a hidden talent, keep it hidden!", "The stars are tired of you asking.", "With lots of doubts.", "YTA", "Big dreams, small result."];
function showPopup(randomText) {
  const popup = document.getElementById("popup");
  popup.textContent = randomText;
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

// Handle clicks
canvas.addEventListener("click", (event) => {
  console.log("Canvas clicked!");
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  if (myModel) {
    const intersects = raycaster.intersectObject(myModel, true);
    console.log("Intersects:", intersects);

    if (intersects.length > 0) {
      console.log("Model clicked!");
      const randomText = texts[Math.floor(Math.random() * texts.length)];
      showPopup(randomText);
    } else {
      console.log("No intersection detected.");
    }
  } else {
    console.log("Model not loaded yet.");
  }
});

// Lights and controls
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Resize handler
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

function animate() {
  requestAnimationFrame(animate);

  if (myModel) {
    myModel.rotation.y += 0.003;
  }

  controls.update();
  renderer.render(scene, camera);
}

animate();
