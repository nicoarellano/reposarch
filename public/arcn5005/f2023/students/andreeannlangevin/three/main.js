const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

const threeCanvas = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const grid = new THREE.GridHelper(50, 30);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

// Load background texture
const textureLoader = new THREE.TextureLoader();
const backgroundImage = textureLoader.load("wall.jpg"); // Replace with the path to your background image

// Create a plane geometry that covers the entire scene
const backgroundGeometry = new THREE.PlaneGeometry(100, 100, 1, 1);
const backgroundMaterial = new THREE.MeshBasicMaterial({
  map: backgroundImage,
  side: THREE.DoubleSide,
});
const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
scene.add(backgroundMesh);

let mesh;

const loader = new THREE.GLTFLoader();

loader.load(
  "./models/wDonut2.glb",
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

loader.load(
  "./models/Candy2.glb",
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

camera.position.z = 7;
camera.position.x = 4;
camera.position.y = 6;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);
  if (mesh) {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
  }
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
