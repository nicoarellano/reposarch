const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(100, aspect, 1, 2000);

// Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas-f2024");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Creates grids and axes in the scene
const grid = new THREE.GridHelper(1, 1);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

// Function to create a puffy 3D heart shape
function createPuffyHeartMesh(color) {
  const x = 0, y = 0;
  const heartShape = new THREE.Shape();
  heartShape.moveTo(x + 0.25, y + 0.25);
  heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.20, y, x, y);
  heartShape.bezierCurveTo(x - 0.30, y, x - 0.30, y + 0.35, x - 0.30, y + 0.35);
  heartShape.bezierCurveTo(x - 0.30, y + 0.55, x - 0.10, y + 0.77, x + 0.25, y + 1.0);
  heartShape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
  heartShape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);

  const extrudeSettings = {
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 10,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1,
  };

  const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  const material = new THREE.MeshLambertMaterial({ color: color });
  const heart = new THREE.Mesh(geometry, material);
  heart.scale.set(2, 2, 2);
  return heart;
}

const yellowHeart = createPuffyHeartMesh(0xD63333);
const blueHeart = createPuffyHeartMesh(0xD63333);
const redHeart = createPuffyHeartMesh(0xD63333);
const greenHeart = createPuffyHeartMesh(0xD63333);

yellowHeart.position.set(-6, 3, 6);
yellowHeart.rotation.x = Math.PI; 
blueHeart.position.set(-3, 3, 0);
blueHeart.rotation.x = Math.PI;
redHeart.position.set(3, 1, 9);
redHeart.rotation.x = Math.PI;
greenHeart.position.set(0, 3, 15);
greenHeart.rotation.x = Math.PI;


scene.add(yellowHeart);
scene.add(blueHeart);
scene.add(greenHeart);
scene.add(blueHeart);

const gltfLoader = new THREE.GLTFLoader();
let deerMesh;
const moveSpeed = 0.1; // Speed for WASD movement

// Load the deer model and make it movable with WASD
gltfLoader.load(
  "./models/deer.glb",
  function (gltf) {
    deerMesh = gltf.scene;
    deerMesh.scale.set(1, 1, 1);
    deerMesh.position.set(5, 1, 8);
    scene.add(deerMesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

gltfLoader.load("./models/grass.glb", function (gltf) {
  const grassMesh = gltf.scene;
  grassMesh.scale.set(0.1, 0.1, 0.1);

  // Traverse through the mesh to apply the green color to all materials
  grassMesh.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshLambertMaterial({ color: 0x648a5e }); // Set green color
    }
  });

  scene.add(grassMesh);
}, undefined, function (error) {
  console.error(error);
});


gltfLoader.load("./models/justin.glb", function (gltf) {
  const justinMesh = gltf.scene;
  justinMesh.scale.set(3, 3, 3);
  scene.add(justinMesh);
}, undefined, function (error) { console.error(error); });


gltfLoader.load("./models/sword.glb", function (gltf) {
  const swordMesh = gltf.scene;
  swordMesh.scale.set(1, 1, 1);
  swordMesh.rotation.set(Math.PI / 2, Math.PI, 0);
  swordMesh.position.set(-1, 3, 8);
  scene.add(swordMesh);
}, undefined, function (error) { console.error(error); });

// Keyboard event listener for WASD movement
document.addEventListener("keydown", function (event) {
  if (!deerMesh) return; // Ensure deerMesh is loaded before moving it
  switch (event.key) {
    case "w": deerMesh.position.z -= moveSpeed; break;
    case "s": deerMesh.position.z += moveSpeed; break;
    case "a": deerMesh.position.x -= moveSpeed; break;
    case "d": deerMesh.position.x += moveSpeed; break;
  }
});

const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
  fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (font) {
    const textGeo = new THREE.TextGeometry(text, {
      font: font,
      size: size,
      height: 0.1,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.0,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    const textMaterial = new THREE.MeshLambertMaterial({ color: new THREE.Color(textColor) });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.set(2, elevation, 0);
    scene.add(textMesh);
  });
}

createText("Shagana Muttiah", 7, 0x0000FF, 1);
createText("- Student at Carleton U", 5, 0x0000FF);
createText("- Artist", 4, 0x0000FF);
createText("- Urban Design Graduate", 3, 0x0000FF);
createText("- Figure Skater", 2, 0x0000FF);

camera.position.set(6, 9, 25);
scene.position.set(-5, -3, 5);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const lightColor = 0xffffff;
const ambientLight = new THREE.AmbientLight(lightColor, 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 0.8);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

 

  yellowHeart.rotation.x += 0.0;
  yellowHeart.rotation.y += 0.01;
  blueHeart.rotation.x += 0.0;
  blueHeart.rotation.y -= 0.01;
  redHeart.rotation.x -= 0.0;
  redHeart.rotation.y -= 0.01;
  greenHeart.rotation.x += 0.0;
  greenHeart.rotation.y -= 0.01;

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

const gradientMaterial = new THREE.ShaderMaterial({
  uniforms: {
    color1: { type: 'vec3', value: new THREE.Color(0xff9a9e) },
    color2: { type: 'vec3', value: new THREE.Color(0x84c3c3) }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `,
  side: THREE.BackSide
});

const gradientBackground = new THREE.Mesh(new THREE.SphereGeometry(1000, 32, 32), gradientMaterial);
scene.add(gradientBackground);

