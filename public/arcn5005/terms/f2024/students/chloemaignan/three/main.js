const scene = new THREE.Scene();
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

const threeCanvas = document.getElementById("three-canvas-f2024");
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Stage
const stageGeometry = new THREE.CylinderGeometry(4, 4, 0.5, 64);
const stageMaterial = new THREE.MeshPhongMaterial({ color: 0xffc0cb });
const stage = new THREE.Mesh(stageGeometry, stageMaterial);
stage.position.y = -2.95;
scene.add(stage);

const TextureLoader = new THREE.TextureLoader();
const backgroundTexture = TextureLoader.load('Dark-galaxy-background.jpg');
scene.background = backgroundTexture;

// Mesh (body model)
const gltfLoader = new THREE.GLTFLoader();
let mesh;
gltfLoader.load(
  "untitled.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.set(5, 5, 5);
    mesh.position.y = 1.20;
    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Circular 3D meshes
let circleMesh;
gltfLoader.load(
  "3Dmeshes.glb",
  function (gltf) {
    circleMesh = gltf.scene;
    scene.add(circleMesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

// Add "Pink Friday" text with spotlights
const fontLoader = new THREE.FontLoader();
fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (font) {
  const textGeometry = new THREE.TextGeometry("Pink Friday", {
    font: font,
    size: 1,
    height: 0.1,
    curveSegments: 4,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 3,
  });
  const textMaterial = new THREE.MeshStandardMaterial({ color: 0xff69b4 });
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(-3, 6, 2);
  scene.add(textMesh);

  // Create spotlights for the "Pink Friday" text
  const spotLightLeft = new THREE.SpotLight(0xffc0cb, 1);
  spotLightLeft.position.set(-5, 5, 5);
  spotLightLeft.target = textMesh;
  scene.add(spotLightLeft);

  const spotLightRight = new THREE.SpotLight(0xffc0cb, 1);
  spotLightRight.position.set(5, 5, 5);
  spotLightRight.target = textMesh;
  scene.add(spotLightRight);

  // Add 3-point form text next to the body mesh
  const factTexts = ["1. I am a Barb - Nicki Minaj Fan", "2. Went to two of her concerts", "3. I know most (all) lyrics by heart."];
  const factMeshes = [];

  factTexts.forEach((fact, index) => {
    const factGeometry = new THREE.TextGeometry(fact, {
      font: font,
      size: 0.5,
      height: 0.05,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 3,
    });

    const factMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const factMesh = new THREE.Mesh(factGeometry, factMaterial);
    factMesh.position.set(3, 2.5 - index, 2); // Positioning the text next to the body mesh
    scene.add(factMesh);
    factMeshes.push(factMesh);
  });
});

// Animated outfits
const textureLoader = new THREE.TextureLoader();
const outfitColors = ['cover-image1.jpg', 'cover-image2.jpg', 'cover-image3.jpg'];
const outfits = [];
const outfitGeometry = new THREE.SphereGeometry(0.5, 32, 32);

outfitColors.forEach((texturePath, index) => {
  const texture = textureLoader.load(texturePath);
  const material = new THREE.MeshStandardMaterial({ map: texture });
  const outfit = new THREE.Mesh(outfitGeometry, material);
  outfit.position.set(2 * Math.cos(index * (Math.PI / 1.5)), 0, 2 * Math.sin(index * (Math.PI / 1.5)));
  outfits.push(outfit);
  scene.add(outfit);
});

// Lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 0, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

camera.position.set(5, 2, 13);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Create particle geometry for shooting stars
const starCount = 100;
const starGeometry = new THREE.BufferGeometry();
const positions = new Float32Array(starCount * 3);

for (let i = 0; i < starCount; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 100; // x
  positions[i * 3 + 1] = Math.random() * 50; // y
  positions[i * 3 + 2] = (Math.random() - 0.5) * 100; // z
}

starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

// Create material for the stars
const starMaterial = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.5,
  transparent: true,
  opacity: 0.8,
  blending: THREE.AdditiveBlending,
});

// Create the stars mesh and add to the scene
const stars = new THREE.Points(starGeometry, starMaterial);
scene.add(stars);

// Function to update shooting star positions
function updateShootingStars() {
  const positions = starGeometry.attributes.position.array;
  for (let i = 0; i < starCount; i++) {
    positions[i * 3] -= Math.random() * 0.2; // x-axis movement (shooting effect)
    positions[i * 3 + 1] -= Math.random() * 0.5; // y-axis movement (falling effect)

    // Reset star position when it goes offscreen
    if (positions[i * 3 + 1] < -5) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = Math.random() * 50 + 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
  }
  starGeometry.attributes.position.needsUpdate = true;
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);

  // Rotate circular mesh (if it exists)
  if (circleMesh) {
    circleMesh.rotation.y += 0.01; // Adjust rotation speed as needed
    circleMesh.rotation.x += 0.005; // Optional: rotation around the x-axis
  }

  // Rotate outfits
  outfits.forEach((outfit, index) => {
    outfit.rotation.y += 0.01 + index * 0.01;
    outfit.position.y = Math.sin(Date.now() * 0.001 + index) * 0.5;
  });

  // Update shooting stars
  updateShootingStars();

  renderer.render(scene, camera);
}

animate();

// Adjust viewport size on window resize
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
