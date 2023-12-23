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

const loader = new THREE.GLTFLoader();

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

  if (mesh) mesh.rotation.y += 0.01;

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

let mest
let donutMesh, candyMesh, redbullMesh;

loader.load(
  "./models/Donut10.glb",
  function (gltf) {
    // ... (similar code)
    donutMesh = gltf.scene;
    scene.add(donutMesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "./models/Candy9.glb",
  function (gltf) {
    // ... (similar code)
    candyMesh = gltf.scene;
    scene.add(candyMesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "./models/dragonfruit.glb",
  function (gltf) {
    // ... (similar code)
    redbullMesh = gltf.scene;
    scene.add(redbullMesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);