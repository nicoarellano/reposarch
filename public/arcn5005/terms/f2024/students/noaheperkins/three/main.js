const scene = new THREE.Scene();


// Load the 360-degree background image
const textureLoader = new THREE.TextureLoader();
textureLoader.load('Aurora.jpg', (texture) => {
  const sphereGeometry = new THREE.SphereGeometry(500, 60, 40);
  sphereGeometry.scale(-1, 1, 1); // Invert the sphere
  const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  scene.add(sphere);
});

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById('three-canvas-f2024');

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

//Creates grids and axes in the scene
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

const yellowCube = new THREE.Mesh(geometry, yellowMaterial);
const blueCube = new THREE.Mesh(geometry, blueMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const greenCube = new THREE.Mesh(geometry, greenMaterial);

yellowCube.position.z = -3;
blueCube.position.x = -3;
redCube.position.x = 3;
greenCube.position.z = 3;


const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "./models/Tree.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 0.5;
    mesh.scale.y = 0.5;
    mesh.scale.z = 0.5;

    mesh.position.set(2,0.5,3)
    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

gltfLoader.load(
  "./models/Tree.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 0.5;
    mesh.scale.y = 0.5;
    mesh.scale.z = 0.5;

    mesh.position.set(-5,0.5,3)
    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

gltfLoader.load(
    "./models/NEW SCENE.glb",
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x = 0.5;
      mesh.scale.y = 0.5;
      mesh.scale.z = 0.5;
  
      mesh.position.set(0,0,0)
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = '0x000000', size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load('./fonts/helvetiker_regular.typeface.json', function (font) {
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

    const color = new THREE.Color();
    color.setHex(textColor);
    const textMaterial = new THREE.MeshLambertMaterial({ color: color });
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = -5;
    text.position.y = elevation;
    text.position.z = -10;

    scene.add(text);
  });
}

createText('Noah Perkins', 5, '0XFF00FF');
createText('M.Arch', 4, '0XFF00FF');
createText('B.Arch Graduate', 3, '0XF000FF');

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

function animate() {
  requestAnimationFrame(animate);


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