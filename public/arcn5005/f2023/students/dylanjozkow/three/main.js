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

//rock geometry
const geometry = new THREE.BoxGeometry(1, 1, 1);

const rockMaterial = new THREE.MeshLambertMaterial({ color: 0x717674 });

const rock1 = new THREE.Mesh(geometry, rockMaterial);
const rock2 = new THREE.Mesh(geometry, rockMaterial);
const rock3 = new THREE.Mesh(geometry, rockMaterial);
const rock4 = new THREE.Mesh(geometry, rockMaterial);

rock1.position.z = -3;
rock1.position.y = 1;

rock2.position.z = -3;

rock3.position.z = -2;

rock4.position.z = 3;
rock4.position.x = 2;

scene.add(rock1);
scene.add(rock2);
scene.add(rock3);
scene.add(rock4);

//Plane Geometry
const planegeometry = new THREE.PlaneGeometry(20, 20);
const planematerial = new THREE.MeshBasicMaterial({
  color: 0x475e1c,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planegeometry, planematerial);
plane.rotation.x = Math.PI / 2;
plane.position.x = 2;
plane.position.z = 4;
plane.position.y = 0;
scene.add(plane);

//Fonts

const fontLoader = new THREE.FontLoader();

function createText(text, z = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load("helvetiker_regular.typeface.json", function (font) {
    const textGeo = new THREE.TextGeometry(textValue, {
      font: font,
      size: textSize,
      height: 0.2,
      curveSegments: 4,
    });

    const color = new THREE.Color();
    color.setHex(textColor);
    const textMaterial = new THREE.MeshBasicMaterial({ color: color });
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = -4;
    text.position.y = z;

    scene.add(text);
  });
}

createText("Dylan Jozkow in his natural habitat", 10, "0XFAF0F2", 1);

//models
const gltfLoader = new THREE.GLTFLoader();

let mesh;

function loadGLB(path, scale, x, z) {
  gltfLoader.load(
    path,
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x = scale;
      mesh.scale.y = scale;
      mesh.scale.z = scale;
      mesh.position.x = x;
      mesh.position.z = z;
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}

loadGLB("./models/dylan.gltf", 3, 3, 3);
loadGLB("./models/tree.gltf", 1, 1, 1);

//camera position
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

//Adding in Texture
const loader = new THREE.TextureLoader();
const texture = loader.load("trees.jpg", () => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  scene.background = texture;
});

//animate
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
