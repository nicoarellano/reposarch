const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
camera.position.set(0, 5, 20);
scene.add(camera);

const threeCanvas = document.getElementById("three-canvas");
if (!threeCanvas) {
  console.error('Canvas element with ID "three-canvas" not found.');
}

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.target.set(0, 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 7.5);
scene.add(directionalLight);

const rgbeLoader = new THREE.RGBELoader();
rgbeLoader.load('Model/Sunset.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
}, undefined, (error) => {
  console.error('Error loading the HDRI background:', error);
});

const gltfLoader = new THREE.GLTFLoader();

let pineapples = [];
let centerModel;

gltfLoader.load(
  "Model/Pineapple.glb",
  (gltf) => {
    for (let i = 0; i < 50; i++) {
      const pineapple = gltf.scene.clone();
      pineapple.scale.set(3, 3, 3);
      pineapple.position.set(
        Math.random() * 100 - 50,
        Math.random() * 50 + 20,
        Math.random() * 100 - 50
      );
      pineapples.push(pineapple);
      scene.add(pineapple);
    }
    animate();
  },
  undefined,
  (error) => {
    console.error('Error loading the pineapple model:', error);
  }
);

gltfLoader.load(
  "Model/SimpleNinja.glb",
  (gltf) => {
    centerModel = gltf.scene;
    centerModel.scale.set(5, 5, 5);
    centerModel.position.set(0, 0, 0);
    scene.add(centerModel);
  },
  undefined,
  (error) => {
    console.error('Error loading the center model:', error);
  }
);

function animate() {
  requestAnimationFrame(animate);

  pineapples.forEach((pineapple) => {
    pineapple.position.y -= 0.1;

    if (pineapple.position.y < -5) {
      pineapple.position.y = Math.random() * 10 + 20;
      pineapple.position.x = Math.random() * 40 - 20;
      pineapple.position.z = Math.random() * 40 - 20;
    }
  });

  controls.update();
  renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;

  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();

  renderer.setSize(size.width, size.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
function addInstructionText() {
  const loader = new THREE.FontLoader();
  loader.load('./Fonts/helvetiker.json', function (font) { 
    const textGeometry = new THREE.TextGeometry(' Click on Scene to Rotate Panorama', {
      font: font,
      size: 3, 
      height: 1, 
      curveSegments: 12,
      bevelEnabled: false 
    });

    const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

  
    textGeometry.computeBoundingBox();
    const centerOffset = -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);

    textMesh.position.set(centerOffset, 10, 0); 
    scene.add(textMesh);
  }, undefined, function (error) {
    console.error('Error loading font:', error);
  });
}


addInstructionText();
