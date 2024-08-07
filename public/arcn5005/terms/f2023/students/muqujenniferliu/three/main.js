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

//Creates grids and axes in the scene
const grid = new THREE.GridHelper(50, 30);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const geometry = new THREE.BoxGeometry(1, 1, 1);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

const yellowCube = new THREE.Mesh(geometry, yellowMaterial);
const blueCube = new THREE.Mesh(geometry, blueMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const greenCube = new THREE.Mesh(geometry, greenMaterial);

yellowCube.position.z = -3;
blueCube.position.x = -3;
redCube.position.x = 3;
greenCube.position.z = 3;

scene.add(yellowCube);
scene.add(blueCube);
scene.add(redCube);
scene.add(greenCube);

//ADD GLFT MODEL
const loader = new THREE.GLTFLoader();

let mesh;
loader.load(
  "/arcn5005/terms/f2023/students/muqujenniferliu/three/models/Jennifermesh.gltf",
  function (gltf) {
    gltf.scene.scale.x = 2;
    gltf.scene.scale.y = 2;
    gltf.scene.scale.z = 2;

    mesh = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader2 = new THREE.GLTFLoader();

let mesh2;
loader2.load(
  "/arcn5005/terms/f2023/students/muqujenniferliu/three/models/Table1.glb",
  function (gltf) {
    gltf.scene.scale.x = 5;
    gltf.scene.scale.y = 5;
    gltf.scene.scale.z = 3;
    mesh2 = gltf.scene;
    mesh2.position.z = -7; // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader3 = new THREE.GLTFLoader();

let mesh3;
loader3.load(
  "/arcn5005/terms/f2023/students/muqujenniferliu/three/models/Coffee_Vendor.glb",
  function (gltf) {
    gltf.scene.scale.x = 1.5;
    gltf.scene.scale.y = 1.5;
    gltf.scene.scale.z = 1.5;
    mesh3 = gltf.scene;
    mesh3.position.z = 10; // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader4 = new THREE.GLTFLoader();

let mesh4;
loader4.load(
  "/arcn5005/terms/f2023/students/muqujenniferliu/three/models/Vaso.glb",
  function (gltf) {
    gltf.scene.scale.x = 0.05;
    gltf.scene.scale.y = 0.05;
    gltf.scene.scale.z = 0.05;
    mesh4 = gltf.scene;
    mesh4.position.z = -5.5; // Adjust the position as needed
    mesh4.position.y = 1.5; // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader5 = new THREE.GLTFLoader();

let mesh5;
loader5.load(
  "/arcn5005/terms/f2023/students/muqujenniferliu/three/models/COFFEE.glb",
  function (gltf) {
    gltf.scene.scale.x = 5;
    gltf.scene.scale.y = 5;
    gltf.scene.scale.z = 5;
    mesh5 = gltf.scene;
    mesh5.position.z = -6.2; // Adjust the position as needed
    mesh5.position.y = 1.7; // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader6 = new THREE.GLTFLoader();

let mesh6;
loader6.load(
  "/arcn5005/terms/f2023/students/muqujenniferliu/three/models/espresso_machine.glb",
  function (gltf) {
    gltf.scene.scale.x = 0.5;
    gltf.scene.scale.y = 0.5;
    gltf.scene.scale.z = 0.5;
    mesh6 = gltf.scene;
    mesh6.position.z = -8.2; // Adjust the position as needed
    mesh6.position.y = 1.7; // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader7 = new THREE.GLTFLoader();

let mesh7;
loader7.load(
  "/arcn5005/terms/f2023/students/muqujenniferliu/three/models/tree.glb",
  function (gltf) {
    gltf.scene.scale.x = 0.5;
    gltf.scene.scale.y = 0.5;
    gltf.scene.scale.z = 0.5;
    mesh7 = gltf.scene;
    mesh7.position.z = -15; // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader8 = new THREE.GLTFLoader();

let mesh8;
loader8.load(
  "/arcn5005/terms/f2023/students/muqujenniferliu/three/models/tree.glb",
  function (gltf) {
    gltf.scene.scale.x = 0.5;
    gltf.scene.scale.y = 0.5;
    gltf.scene.scale.z = 0.5;
    mesh8 = gltf.scene;
    mesh8.position.z = 5; // Adjust the position as needed
    mesh8.position.x = -5; // Adjust the position as needed
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const fontLoader = new THREE.FontLoader();

function createText(text, z = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (font) {
    const textGeo = new THREE.TextGeometry(textValue, {
      font: font,
      size: textSize,
      height: 0.1,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.05,
      bevelSize: 0.0,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    const color = new THREE.Color();

    color.setHex(textColor);
    const textMaterial = new THREE.MeshBasicMaterial({ color: color });
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = 3;
    text.position.y = z;
    text.position.z = 0;

    scene.add(text);
  });
}

createText("Jennifer Liu", 5, "0X1f400a");
createText(
  "- Graduated from University of Manitoba with B. Env. Design",
  3,
  "0X000000"
);
createText("- Looooves matcha", 2, "0X000000");
createText(
  "- Favourite colours are white and brown (green occasionally)",
  1,
  "0X000000"
);
createText("- Loves photography and art", 0, "0X000000");

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

function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.01;
  if (mesh2) mesh2.rotation.y += 0.01;
  if (mesh3) mesh3.rotation.y += 0.01;
  if (mesh4) mesh4.rotation.y += 0.01;
  if (mesh5) mesh5.rotation.y += 0.01;
  if (mesh6) mesh6.rotation.y += 0.01;
  if (mesh7) mesh7.rotation.y += 0.01;
  if (mesh8) mesh8.rotation.y += 0.01;

  yellowCube.rotation.x += 0.01;
  yellowCube.rotation.y += 0.01;

  blueCube.rotation.x += 0.02;
  blueCube.rotation.y -= 0.01;

  redCube.rotation.x -= 0.01;
  redCube.rotation.y -= 0.02;

  greenCube.rotation.x += 0.02;
  greenCube.rotation.y -= 0.01;

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
