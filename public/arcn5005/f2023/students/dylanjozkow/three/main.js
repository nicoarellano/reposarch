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

//Creates grids and axes in the scene
const grid = new THREE.GridHelper(50, 30);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const geometry = new THREE.BoxGeometry(1, 1, 1);

const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x009900 });

const greencube1 = new THREE.Mesh(geometry, greenMaterial);
const greencube2 = new THREE.Mesh(geometry, greenMaterial);
const greencube3 = new THREE.Mesh(geometry, greenMaterial);
const greencube4 = new THREE.Mesh(geometry, greenMaterial);

greencube1.position.z = -3;
greencube1.position.y = 1;
greencube2.position.z = -3;
greencube3.position.z = -2;
greencube3.position.y = 1;
greencube4.position.z = 3;

scene.add(greencube1);
scene.add(greencube2);
scene.add(greencube3);
scene.add(greencube4);

const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "./models/dylan.gltf",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 1.4;
    mesh.scale.y = 1.4;
    mesh.scale.z = 1.4;
    mesh.position.x = 1;
    mesh.position.z = 0;
    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

gltfLoader.load(
  "./models/tree.gltf",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 1.4;
    mesh.scale.y = 1.4;
    mesh.scale.z = 1.4;
    mesh.position.x = 6;
    mesh.position.z = 0;
    scene.add(mesh);
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

//Creates the lights of the scene
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

  if (mesh) mesh.rotation.y += 0.01;

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
