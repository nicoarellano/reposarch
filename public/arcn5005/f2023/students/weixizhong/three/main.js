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

const loader = new THREE.TextureLoader();
const texture = loader.load(
  'image/Sky.jpg',
  () => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    scene.background = texture;
  }
);

const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const dodecahedronGeometry = new THREE.DodecahedronGeometry(1.5);
const octahedronGeometry = new THREE.OctahedronGeometry(1.5);
const torusKnotGeometry = new THREE.TorusKnotGeometry(1.5);

const material1 = new THREE.MeshLambertMaterial({ color: 0xDAF7A6 });
const material2 = new THREE.MeshLambertMaterial({ color: 0xDFAA9E });
const material3 = new THREE.MeshLambertMaterial({ color: 0x9EA9DF });

const geometry1 = new THREE.Mesh(dodecahedronGeometry, material1);
const geometry2 = new THREE.Mesh(octahedronGeometry, material2);
const geometry3 = new THREE.Mesh(torusKnotGeometry, material3);

geometry1.position.z = -15;
geometry1.position.y = 16;
geometry1.position.x = -15;
geometry2.position.x = -20;
geometry2.position.y = -6;
geometry3.position.x = 20;

geometry1.scale.set(2, 2, 2);
geometry2.scale.set(1.5, 1.5, 1.5);
geometry3.scale.set(3.5, 3.5, 3.5);

scene.add(geometry1);
scene.add(geometry2);
scene.add(geometry3);

const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "3Dmecolor.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.set(3, 3, 3);
    mesh.position.set(0, 11, 0);
    mesh.rotation.y += 0.01;

    scene.add(mesh);

    mesh.rotation.y -= Math.PI /2;
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const carLoader = new THREE.GLTFLoader();

let carMesh;

carLoader.load(
  "car.glb",
  function (gltf) {
    carMesh = gltf.scene;
    carMesh.scale.set(2, 2, 2);
    carMesh.rotation.y += 0.01;

    scene.add(carMesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = 0x000000, size = 0.8) {
  const textValue = text;
  const textSize = size;
  fontLoader.load("helvetiker_regular.typeface.json", function (font) {
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

    const color = new THREE.Color(textColor);
    const textMaterial = new THREE.MeshLambertMaterial({ color: color });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.x = 5;
    textMesh.position.y = elevation + 10;

    scene.add(textMesh);
  });
}

createText("Weixi Zhong", 6, 0x354FA9);
createText("- Background in Environmental Design", 4, 0x729FA6);
createText("- MArch Student at CU", 2.5, 0x729FA6);
createText("- Love Drawing", 1, 0x729FA6);

camera.position.z = 30;
camera.position.x = 0;
camera.position.y = 8;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.7);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

  if (mesh) {
    mesh.rotation.y += 0.01;
  }

  if (carMesh) {
    carMesh.rotation.y += 0.01;
  }

  geometry1.rotation.x += 0.06;

  geometry2.rotation.y -= 0.01;

  geometry3.rotation.x -= 0.01;
  geometry3.rotation.y -= 0.02;

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
