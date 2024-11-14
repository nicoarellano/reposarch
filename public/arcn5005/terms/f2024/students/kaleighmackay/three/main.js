const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(25, aspect, 0.1, 1000);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas-f2024");

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

//Creates grids and axes in the scene
const grid = new THREE.GridHelper(500, 500);


const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;

const boxGeometry = new THREE.BoxGeometry(20, 0.05, 10);
const sphereGeometry = new THREE.SphereGeometry(0.4, 12, 12);

const whiteMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const blackMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
const lightMaterial = new THREE.MeshLambertMaterial({ color: 0xf88158 });

const ceiling = new THREE.Mesh(boxGeometry, whiteMaterial);
const blueCube = new THREE.Mesh(boxGeometry, blueMaterial);
const redCube = new THREE.Mesh(boxGeometry, redMaterial);
const greenCube = new THREE.Mesh(boxGeometry, greenMaterial);
const floor = new THREE.Mesh(boxGeometry, whiteMaterial);
const lightBulb = new THREE.Mesh(sphereGeometry, lightMaterial);

ceiling.position.z = 0;
ceiling.position.y = 8;
ceiling.position.x = -10;
blueCube.position.x = -3;
redCube.position.x = 3;
greenCube.position.z = 0;
floor.position.z = 0;
floor.position.y = 0;
floor.position.x = -5;
lightBulb.position.y = 20;
lightBulb.position.x = -0.85;
lightBulb.position.z = 0.22;


scene.add(floor);
// scene.add(ceiling);
scene.add(lightBulb);




const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "./models/kaleigh.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 3;
    mesh.scale.y = 3;
    mesh.scale.z = 3;

    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x000000", size = 1) {
  const textValue = text;
  const textSize = size;
  fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (font) {
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

    text.position.x = -12;
    text.position.y = elevation;

    scene.add(text);
  });
}

createText("SPACE JAM", 0.5, "0Xf88158");
// createText("- it's a bird", 3, "0XFF0000");
// createText("- it's a plane", 2, "0XFF0000");
// createText("- ", 1, "0XFF0000");
// createText("- Lost", 0, "0XFF0000");

camera.position.z = 50;
camera.position.x = 20;
camera.position.y = -5;

scene.position.x = 12;
scene.position.z = 0;
scene.position.y = -8;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(0, 5, 10);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.00;

  // yellowCube.rotation.x += 0.01;
  // yellowCube.rotation.y += 0.01;

  // blueCube.rotation.x += 0.02;
  // blueCube.rotation.y -= 0.01;

  // redCube.rotation.x -= 0.01;
  // redCube.rotation.y -= 0.02;

  // greenCube.rotation.x += 0.02;
  // greenCube.rotation.y -= 0.01;

  lightBulb.rotation.y += 0.01;
  lightBulb.position.y -= 0.1;

  if (lightBulb.position.y < 4.95) {
    lightBulb.position.y = 4.95;
  }


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