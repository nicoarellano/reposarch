const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const fov = 75;
const aspect = 2;
const near = 0.1;
const far = 2000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

const threeCanvas = document.getElementById("ashathree-canvas-f2024");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const radius = 1.5;  
const widthSegments = 25;  
const heightSegments = 20;
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xe6e1d3 });

const yellowCube = new THREE.Mesh(geometry, yellowMaterial);

yellowCube.position.y = 8;

scene.add(yellowCube);

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

window.addEventListener('click', onMouseClick, false);
function onMouseClick(event) {mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);
  if (mesh) {
    const intersects = raycaster.intersectObject(mesh, true);
    if (intersects.length > 0) {yellowCube.position.y -= 5;
    }
  }
};

window.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {yellowCube.position.y += 5;
  }
});
  
const gltfLoader = new THREE.GLTFLoader();

let mesh;


gltfLoader.load(
  "./models copy/bigchickenlittleasha.glb",
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

const rgbeLoader = new THREE.RGBELoader();
rgbeLoader.load('./models copy/prairiefield.hdr', (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
}, undefined, (error) => {
  console.error('Error loading the HDRI background:', error);
});

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
      bevelSegments: 1,
    });

    const color = new THREE.Color();
    color.setHex(textColor);
    const textMaterial = new THREE.MeshLambertMaterial({ color: color });
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = -6;
    text.position.y = elevation;

    scene.add(text);
  });
}

createText("click the chicken to lay an egg!", 25, "0Xa44706");
createText("click backspace to reset!", 23, "0Xa44706");

camera.position.z = 50;
camera.position.x = 10;
camera.position.y = 8;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.009;

  yellowCube.rotation.x += 0.01;
  yellowCube.rotation.y += 0.01;

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