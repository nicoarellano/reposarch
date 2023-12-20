const scene = new THREE.Scene();

const size = {
  width: window.innerWidth * 0.6,
  height: window.innerHeight * 0.4,
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
const threeContainer = document.getElementById("three-container");
threeContainer.appendChild(renderer.domElement);

// Creates grids and axes in the scene
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const sphereGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const torusGeometry = new THREE.TorusGeometry(1.5, 0.5, 16, 100);
const cylinderGeometry = new THREE.CylinderGeometry(1, 1, 3, 16);
const dodecahedronGeometry = new THREE.DodecahedronGeometry(1.5);
const octahedronGeometry = new THREE.OctahedronGeometry(1.5);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });
const whiteMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff }); // White font color

const yellowTorus = new THREE.Mesh(torusGeometry, yellowMaterial);
const greenCylinder = new THREE.Mesh(cylinderGeometry, greenMaterial);
const blueOctahedron = new THREE.Mesh(octahedronGeometry, blueMaterial);

yellowTorus.position.z = -3;
greenCylinder.position.x = -3;
blueOctahedron.position.x = 3;
blueOctahedron.position.z = 3;

scene.add(yellowTorus);
scene.add(greenCylinder);
scene.add(blueOctahedron);

const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "./three/models/From Blender.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 0.5;
    mesh.scale.y = 0.5;
    mesh.scale.z = 0.5;

    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0xffffff", size = 0.5) { 
  const textValue = text;
  const textSize = size;
  fontLoader.load(
    "./three/fonts/helvetiker_regular.typeface.json",
    function (font) {
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

      text.position.x = 2;
      text.position.y = elevation;

      scene.add(text);
    }
  );
}

createText("Anthony Papini", 5, "0xffffff"); 
createText("- Architect in Training", 3, "0xffffff"); 
createText("- Intermediate Architectural Associate at Greystone Inc", 2, "0xffffff"); 
createText("- Carleton M.Arch1", 1, "0xffffff"); 
createText("- Super duper Amateur programmer", 0, "0xffffff"); 

camera.position.z = 8;
camera.position.x = 2;
camera.position.y = 8;

scene.position.y = -3;


const starsGeometry = new THREE.BufferGeometry();
const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });

const starsVertices = [];
for (let i = 0; i < 1000; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = -Math.random() * 2000;
  starsVertices.push(x, y, z);
}

starsGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starsVertices, 3)
);

const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);


const fireGeometry = new THREE.BufferGeometry();
const fireMaterial = new THREE.PointsMaterial({
  color: 0xff6600,
  size: 0.5, 
  transparent: true,
  blending: THREE.AdditiveBlending,
});

const fireVertices = [];
const numFireParticles = 1000;
const radius = 13; 
const ringHeight = 1; 

for (let i = 0; i < numFireParticles; i++) {
  
  const angle = (i / numFireParticles) * Math.PI * 2;

  
  const x = Math.cos(angle) * radius;
  const z = Math.sin(angle) * radius;

  
  fireVertices.push(x, ringHeight, z);
}

fireGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(fireVertices, 3)
);

const fire = new THREE.Points(fireGeometry, fireMaterial);
scene.add(fire);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;


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

  if (mesh) mesh.rotation.y += 0.01;

  yellowTorus.rotation.x += 0.01;
  yellowTorus.rotation.y += 0.01;

  greenCylinder.rotation.x += 0.02;
  greenCylinder.rotation.y -= 0.01;

  blueOctahedron.rotation.x -= 0.01;
  blueOctahedron.rotation.y -= 0.02;

  renderer.render(scene, camera);
}

animate();

const fullScreenButton = document.getElementById("full-screen");

let fullScreen = false;

fullScreenButton.addEventListener("click", () => {
  fullScreen = !fullScreen;
  resize();
  console.log(fullScreen ? "FULL SCREEN!!" : "little screen");
});


window.addEventListener("resize", () => {
  resize();
});

const resize = () => {
  size.width = window.innerWidth * (fullScreen ? 0.92 : 0.6);
  size.height = window.innerHeight * (fullScreen ? 0.9 : 0.4);
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
};
