const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

const threeCanvas = document.getElementById("three-canvas-f2024");
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const grid = new THREE.GridHelper(10, 10);
scene.add(grid);
grid.visible = false;

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const geometry = new THREE.SphereGeometry(1.5, 32, 32);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffc0cb });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0xf0f8ff });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0xd2b48c });

const yellowSphere = new THREE.Mesh(geometry, yellowMaterial);
const blueSphere = new THREE.Mesh(geometry, blueMaterial);
const greenSphere = new THREE.Mesh(geometry, greenMaterial);

yellowSphere.position.z = -3;
blueSphere.position.x = -3;
greenSphere.position.z = 3;

scene.add(yellowSphere);
scene.add(blueSphere);
scene.add(greenSphere);

const gltfLoader = new THREE.GLTFLoader();

let scene1Mesh, meModelMesh;

gltfLoader.load(
  "./scene (1).glb",
  function (gltf) {
    scene1Mesh = gltf.scene;
    scene1Mesh.scale.set(5, 5, 5);
    scene1Mesh.position.x = 23.5
    scene1Mesh.position.y = -7
    scene1Mesh.position.z = 8

    scene.add(scene1Mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

gltfLoader.load(
  "./me-model!.glb",
  function (gltf) {
    meModelMesh = gltf.scene;
    meModelMesh.scale.set(5, 5, 5);
    meModelMesh.position.x = -8
    meModelMesh.position.y = 0
    meModelMesh.z = -8

    scene.add(meModelMesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
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
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.x = 2;
    textMesh.position.y = elevation;

    scene.add(textMesh);
  });
}

createText("Jasmine Hersh", 5, "000080");
createText("- M.arch student at Carleton", 3, "483D8B");
createText("- BA in Architecture, University of San Diego", 2, "2F4F4F");
createText("- Press SPACE BAR to make the feet jump!", 1, "000080");

camera.position.set(7, 4, 15);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;


const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

let isJumping = false;
let jumpDirection = 1;
let jumpHeight = 0;
const originalY = -7; 

function animateJump() {
  if (scene1Mesh && isJumping) {
   
    jumpHeight += 0.2 * jumpDirection;

   
    scene1Mesh.position.y = originalY + jumpHeight;

  
    if (jumpHeight >= 2) {
      jumpDirection = -1; 
    } else if (jumpHeight <= 0) {
      jumpDirection = 0; 
      isJumping = false; 
      scene1Mesh.position.y = originalY; 
    }
  }
}

function animate() {
  requestAnimationFrame(animate);

  if (meModelMesh) {
    meModelMesh.rotation.y += 0.01;
  }


  yellowSphere.rotation.x += 0.01;
  yellowSphere.rotation.y += 0.01;
  yellowSphere.position.y = -4
  yellowSphere.position.z = -14

  blueSphere.rotation.x += 0.02;
  blueSphere.rotation.y -= 0.01;
  blueSphere.position.x = 4
  blueSphere.position.y = -3
  blueSphere.position.z = -9

  greenSphere.rotation.x += 0.02;
  greenSphere.rotation.y -= 0.01;
  greenSphere.position.x = 7
  greenSphere.position.y = -5
  greenSphere.position.z = -10

  animateJump();

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

window.addEventListener("keydown", (event) => {
  if (event.code === "Space" && scene1Mesh && !isJumping) {
    isJumping = true;
    jumpDirection = 1;
  }
});

const loader = new THREE.TextureLoader();
const texture = loader.load("IMG_1252.jpg", () => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  scene.background = texture;
});
