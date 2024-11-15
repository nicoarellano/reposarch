const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas-f2024");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

//books books books

// Load texture
const textureLoader = new THREE.TextureLoader();
const bookTopTexture = textureLoader.load('./textures/atlas.jpg');
const bookBottomTexture = textureLoader.load('./textures/atlas.jpg');

// Create materials for each face
const materials = [
    new THREE.MeshLambertMaterial({ color: 0xD2B48C }), // Right face
    new THREE.MeshLambertMaterial({ color: 0x556B2F }), // Left face (dark green spine)
    new THREE.MeshLambertMaterial({ color: 0xD2B48C }), // top face placeholder
    new THREE.MeshLambertMaterial({ color: 0xFAF0E6 }), // bottom face placeholder
    new THREE.MeshLambertMaterial({ color: 0xD2B48C }), // Front face
    new THREE.MeshLambertMaterial({ color: 0xD2B48C })  // Back face
];

materials[2] = new THREE.MeshLambertMaterial({ map: bookTopTexture }); // Top face with texture
materials[3] = new THREE.MeshLambertMaterial({ map: bookBottomTexture}) // bottom face with texture

// create shapes with top surface
const geometry = new THREE.BoxGeometry(3, 0.5, 3);

const onebook = new THREE.Mesh(geometry, materials);
const twobook = new THREE.Mesh(geometry, materials);
const threebook = new THREE.Mesh(geometry, materials);
const fourbook = new THREE.Mesh(geometry, materials);
const fivebook = new THREE.Mesh(geometry, materials);

onebook.position.z = -8;
twobook.position.x = -8;
threebook.position.x = 8;
fourbook.position.z = 8;
fivebook.position.y = 6.15;

scene.add(onebook);
scene.add(twobook);
scene.add(threebook);
scene.add(fourbook);
scene.add(fivebook);

//myself
const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "./models/tess.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 6;
    mesh.scale.y = 6;
    mesh.scale.z = 6;

    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

gltfLoader.load(
  "./models/globe.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 0.02;
    mesh.scale.y = 0.02;
    mesh.scale.z = 0.02;
    mesh.position.y = -1.8;

    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

camera.position.z = 13;
camera.position.x = 5;
camera.position.y = 2;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

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

//animations

function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.08;

 onebook.rotation.x += 0.02;
 onebook.position.y = Math.sin(Date.now() * 0.001) * 3

 twobook.rotation.z += 0.02;
 twobook.position.y = Math.sin(Date.now() * 0.001) * 3

 threebook.rotation.x -= 0.02;
 threebook.position.y = Math.sin(Date.now() * 0.001) * 3

 fourbook.rotation.x += 0.02;
 fourbook.position.y = Math.sin(Date.now() * 0.001) * 3

 fivebook.rotation.y += 0.08;

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
