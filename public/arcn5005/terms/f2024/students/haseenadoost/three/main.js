const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

// Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Creates grids and axes in the scene
const grid = new THREE.GridHelper(5, 5);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

// Custom Sinusoidal Curve class for the knot-like structure
class CustomSinCurve extends THREE.Curve {
  constructor(scale = 1) {
    super();
    this.scale = scale;
  }

  getPoint(t, optionalTarget = new THREE.Vector3()) {
    const tx = Math.sin(t * Math.PI * 2) * this.scale;
    const ty = Math.cos(t * Math.PI * 2) * this.scale;
    const tz = t * 10 - 5;

    return optionalTarget.set(tx, ty, tz);
  }
}

// Create the first knot path using the custom curve
const path1 = new CustomSinCurve(10);
const geometry1 = new THREE.TubeGeometry(path1, 100, 1, 8, false);
const material1 = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const knotMesh1 = new THREE.Mesh(geometry1, material1);
scene.add(knotMesh1);

// Create the second knot path using another custom curve
const path2 = new CustomSinCurve(8);
const geometry2 = new THREE.TubeGeometry(path2, 100, 1, 8, false);
const material2 = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const knotMesh2 = new THREE.Mesh(geometry2, material2);
scene.add(knotMesh2);

// Geometry for cubes
const geometry = new THREE.BoxGeometry(1, 1, 1);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFF00 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000FF });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00FF00 });

const yellowCube = new THREE.Mesh(geometry, yellowMaterial);
const blueCube = new THREE.Mesh(geometry, blueMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const greenCube = new THREE.Mesh(geometry, greenMaterial);

yellowCube.position.z = -5;
blueCube.position.x = -5;
redCube.position.x = 5;
greenCube.position.z = 5;

scene.add(yellowCube);
scene.add(blueCube);
// scene.add(redCube);
scene.add(greenCube);

// Loading GLTF model
const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "./haseena.glb", // Model path
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

// Load background texture
const loader = new THREE.TextureLoader();
const texture = loader.load("backgroundd.jpg", () => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  scene.background = texture;
});

// Load font and create 3D text
const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = 0x000000, size = 0.5) {
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

    const textMaterial = new THREE.MeshLambertMaterial({ color: textColor });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.x = 2;
    textMesh.position.y = elevation;

    scene.add(textMesh);
  });
}

// Example text creation
createText("Haseena Doost", 5, 0xFF00FF);
createText("- Undergrad at U of T", 3, 0xFF0000);
createText("- 1st Year Master of Architecture Student", 2, 0xFF0000);
createText("- From Mississauga", 1, 0xFF0000);
createText("-Interested in regenerative landscapes and adaptive re-use", 0, 0xFF0000);

// Camera positioning
camera.position.z = 13;
camera.position.x = 5;
camera.position.y = 2;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Light setup
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

// Animation function
function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.01;

  yellowCube.rotation.x += 0.0;
  yellowCube.rotation.y += 0.1;

  blueCube.rotation.x += 0.0;
  blueCube.rotation.y -= 0.1;

  redCube.rotation.x -= 0.0;
  redCube.rotation.y -= 0.1;

  greenCube.rotation.x += 0.0;
  greenCube.rotation.y -= 0.1;

  // Rotate the first knot mesh faster
  knotMesh1.rotation.y += 0.05;

  // Rotate the second knot mesh and make it orbit around the first one
  knotMesh2.rotation.y += 0.02;

  // Orbit the second mesh around the first knot mesh
  knotMesh2.position.x = Math.cos(Date.now() * 0.001) * 15;
  knotMesh2.position.z = Math.sin(Date.now() * 0.001) * 15;

  renderer.render(scene, camera);
}

animate();

// Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
