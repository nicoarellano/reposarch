// import * as THREE from '../../node_modules/three/build/three.module.js';
// import { GLTFLoader } from '../../node_modules/three/examples/jsm/loaders/GLTFLoader.js';
// import { TTFLoader } from '../../node_modules/three/examples/jsm/loaders/TTFLoader.js';
// import { OrbitControls } from '../../node_modules/three/examples/jsm/controls/OrbitControls.js';
// import { FontLoader } from '../../node_modules/three/examples/jsm/loaders/FontLoader.js';
// import { TextGeometry } from '../../node_modules/three/examples/jsm/geometries/TextGeometry.js';

//scenery
const scene = new THREE.Scene();
const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load('/Assignment 2/imgs/4.jpeg');

//axes
const axesHelper = new THREE.AxesHelper(3);
scene.add(axesHelper);

//camera
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.set(-10, 30, 30);

//renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.outputEncoding = THREE.sRGBEncoding;
document.body.appendChild(renderer.domElement);

renderer.render(scene, camera);
renderer.setAnimationLoop(animate);

//orbit control
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

//Mesh 1
const boxGeometry = new THREE.BoxGeometry(3, 3, 3);
const boxMaterial = new THREE.MeshStandardMaterial({ color: 0x41aeff });
const box = new THREE.Mesh(boxGeometry, boxMaterial);
scene.add(box);
box.position.set(10, 2.6, 10);

//Mesh 2
const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0xff5733 });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add(sphere);
sphere.position.set(-10, 30, -10);
sphere.castShadow = true;

//Mesh 3
const gltfLoader = new GLTFLoader();

let mesh;

gltfLoader.load(
  './alvinahn.glb',
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.set(12, 12, 12);

    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//Text
const fontLoader = new FontLoader();
fontLoader.load(
  '/node_modules/three/examples/fonts/droid/droid_sans_mono_regular.typeface.json',
  function (droidfont) {
    const textGeometry = new TextGeometry('Welcome to My 3D Space', {
      height: 0.5,
      size: 1.5,
      font: droidfont,
    });
    const textMaterial = new THREE.MeshNormalMaterial();
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);
    textMesh.position.set(-14, 1, 14);
    scene.add(textMesh);
  }
);

//Light
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
scene.add(directionalLight);
directionalLight.position.set(-30, 50, 0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.bottom = -12;

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(0, 50, 0);
scene.add(pointLight);

//Plane
const planeGeometry = new THREE.PlaneGeometry(30, 30);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: 0xffffff,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
plane.rotation.x = -0.5 * Math.PI;
plane.receiveShadow = true;
scene.add(plane);

const gridHelper = new THREE.GridHelper(30);
scene.add(gridHelper);

//function
let step = 0;
let speed = 0.01;

function animate() {
  box.rotation.x += 0.01;
  box.rotation.y += 0.01;

  step += speed;
  sphere.position.y = 9 * Math.abs(Math.sin(step));

  if (mesh) {
    mesh.rotation.y -= 0.02; // Rotate around the Y-axis
  }

  renderer.render(scene, camera);
}
