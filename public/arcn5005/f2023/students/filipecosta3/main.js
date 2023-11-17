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

const gltfLoader = new THREE.GLTFLoader 

let mesh;

gltfLoader.load(
  "./models/3D_Filipe_Mario_Bros.glb",
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


const loader = new THREE.TextureLoader();
  const texture = loader.load(
    'Super_Mario.jpg',
    () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    });

const fontLoader = new THREE.FontLoader();

function createText(text, z = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load("./fonts/Roboto_Regular.json", function (font) {
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

//Mario colour-coded
createText("  Filipe Costa", 10, "0X000000", 1);
createText("      Portuguese-Canadian", 9, "0X049CD8");
createText("M.Arch at Carleton University", 8, "0XFFBF00");
createText("       Undergrad at UofT", 7, "0XE52521");
createText("       Design Enthusiast", 6, "0X43B047");

camera.position.z = 18;
camera.position.x = 0;
camera.position.y = 2;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

console.log(camera);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, .5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, .5);
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
