//Project Scene
const scene = new THREE.Scene();



//Scene Camera
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);



//Linking Renderer to HTML Canvas
const threeCanvas = document.getElementById('three-canvas-f2024');

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);



// Ground Plane
const gltfLoader = new THREE.GLTFLoader();

let fieldmesh;

gltfLoader.load(
  './models/Field.glb',
  function (gltf) {
    fieldmesh = gltf.scene;
    fieldmesh.position.set(0, 0, 0);
    fieldmesh.position.y -= -.5;
    fieldmesh.scale.set(0.15, 0.15, 0.15);

    scene.add(fieldmesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);



// Photogrametric Model
let cradlemesh;

gltfLoader.load(
  './models/CradleHead.glb',
  function (gltf) {
    cradlemesh = gltf.scene;
    cradlemesh.position.set(0, 0, 0);
    cradlemesh.position.y = 0.75;
    cradlemesh.scale.set(5, 5, 5);
    cradlemesh.rotateY(Math.PI/2);

    scene.add(cradlemesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);



//RingWraith
let ghostmesh;

const radius = 10;
const angleSpeed = 0.01;
const orbitGroup = new THREE.Group();

gltfLoader.load(
  './models/Wraith.glb',
  function (gltf) {
    ghostmesh = gltf.scene;
    ghostmesh.position.set(0, .5, 8);
    ghostmesh.scale.set(3.5, 3.5, 3.5);
    ghostmesh.rotateY(Math.PI/2);
    orbitGroup.add(ghostmesh);

    scene.add(orbitGroup);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);



//"Orc" Head
let headmesh5;
let orbitGroupHead5 = new THREE.Group();

gltfLoader.load(
  './models/Scream.glb',
  function (gltf) {
    headmesh5 = gltf.scene;
    headmesh5.position.set(0, 5, -7);
    headmesh5.scale.set(8, 8, 8);
    headmesh5.rotateY(Math.PI);

    orbitGroupHead5.add(headmesh5);
    scene.add(orbitGroupHead5);

  },
  undefined,
  function (error) {
    console.error(error);
  }
);



//Background Image: Mordor
const loader = new THREE.TextureLoader();
loader.load('./Images/Mordor.jpg', function(texture) {
    scene.background = texture;
});



// Font
const textGroup = new THREE.Group(); 
const fontLoader = new THREE.FontLoader();

function createText(text = '', position = { x: 0, y: 0, z: 0 }, rotation = { x: 0, y: 0, z: 0 }, textColor = '0x000000', size = 0.2) {
  fontLoader.load('./Fonts/Magilio_Regular.json', function (font) {
    const color = new THREE.Color();
    color.setHex(textColor);
    const textMaterial = new THREE.MeshLambertMaterial({ color: color });

    const textGeo = new THREE.TextGeometry(text, {
      font: font,
      size: size * 3,
      height: .7,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.0,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    textGeo.computeBoundingBox();
    const boundingBox = textGeo.boundingBox;
    const textWidth = boundingBox.max.x - boundingBox.min.x;

    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.set(position.x - textWidth / 2, position.y, position.z);
    textMesh.rotation.set(rotation.x, rotation.y, rotation.z);

    textGroup.add(textMesh);
    scene.add(textGroup);
  });
}

createText(
  'I Would Have Gone With You to the End', 
  { x: 0, y: .01, z: -7 }, // Position
  { x: -Math.PI / 2, y: 0, z: 0 }, // Rotation
  0xFFA500
);

createText(
  'Into the Very Fires of Mordor', 
  { x: 10, y: .01, z: 7 }, 
  { x: -Math.PI / 2, y: 0, z: Math.PI }, 
  0xFFA500 
);



//Camera Position
camera.position.z = -5;
camera.position.x = 10;
camera.position.y = 10;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;



//Orbit Controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;



//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, .5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);



//Animation Loop
function animate() {
  requestAnimationFrame(animate);

  textGroup.rotation.y += 0.01;

  if (fieldmesh) fieldmesh.rotation.y += 0.01;

  if (ghostmesh) {
    orbitGroup.rotation.y -= angleSpeed;
  }

  if (orbitGroupHead5) {
    orbitGroupHead5.rotation.y -= angleSpeed;
  }

  renderer.render(scene, camera);
}

animate();



//Adjust the viewport to the size of the browser
window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});