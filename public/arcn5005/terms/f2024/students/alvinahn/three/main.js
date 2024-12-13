const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(125, aspect, 1, 1000);

//Renderer
const threeCanvas = document.getElementById("three-canvas-f2024");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

//Background
const loader = new THREE.TextureLoader();
const texture = loader.load('./imgs/The City.avif', () => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  scene.background = texture;
});

//Mesh
const gltfLoader = new THREE.GLTFLoader();

let mesh;
gltfLoader.load(
  "./models/alvinahn.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.set(6, 6, 6);

    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let suede;
gltfLoader.load(
  "./models/puma_suede.glb",
  function (gltf) {
    suede = gltf.scene;
    suede.scale.set(10, 10, 10);
    suede.position.set(-20, 0, -10);

    scene.add(suede);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let chair;
gltfLoader.load(
  "./models/chair_freeze.glb",
  function (gltf) {
    chair = gltf.scene;
    chair.scale.set(0.025, 0.025, 0.025);
    chair.position.set(0.5, 1, 6);

    scene.add(chair);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let flip;
gltfLoader.load(
  "./models/back_flip.glb",
  function (gltf) {
    flip = gltf.scene;
    flip.scale.set(0.04, 0.04, 0.04);
    flip.position.set(-5, 12, -5);

    scene.add(flip);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

camera.position.set(7, 1, 15);
scene.position.set(-5, -3, 5);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Text
const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
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

    const color = new THREE.Color();
    color.setHex(textColor);
    const textMaterial = new THREE.MeshLambertMaterial({ color: color });
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = 5;
    text.position.y = elevation;

    scene.add(text);
    
  });
}

    createText("Love Architecture", 5, "0Xe53505");
    createText("Love City", 4, "0Xe09727");
    createText("and Red Bull BC One", 3, "0Xe09727");
    createText("Press 'space' to be more dynamic!", 1, "0Xe09727");

//Light
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 0.9);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

//Animation: rotation speed
let spinSpeed = 0.01;
let pressCount = 0;

window.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    pressCount++;
    if (pressCount === 1) {
      spinSpeed = 0.1;
    } else if (pressCount === 2) {
      spinSpeed = 0.01
      pressCount =0;
    } 
  }
});

function animate() {
  requestAnimationFrame(animate);

  if (mesh) chair.rotation.y += spinSpeed;
  if (mesh) flip.rotation.x += -spinSpeed;

  renderer.render(scene, camera);
}

animate();

//Viewport
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
