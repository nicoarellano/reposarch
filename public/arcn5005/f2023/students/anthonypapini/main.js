const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

const threeCanvas = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

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
scene.add(greenCube);

const GLTFLoader = new THREE.GLTFLoader();

let mesh;

function loadGLB(path, scale, x, z) {
  GLTFLoader.load(
    path,
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.set(scale, scale, scale);
      mesh.position.set(x, 0, z);
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}

loadGLB("./Models/From Blender.glb", 0.3, 0, 0);

const fontLoader = new THREE.FontLoader();

function createText(text, elevation, textColor, size) {
  fontLoader.load('./Fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeometry = new THREE.TextGeometry(text, {
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
    const textMesh = new THREE.Mesh(textGeometry, textMaterial);

    textMesh.position.set(2, elevation, 0);

    scene.add(textMesh);
  });
}

createText("Anthony Papini", 5, 0xFF00FF, 0.5);
createText("- Guy on the left isn't me", 3, 0xFF0000, 0.5);
createText("- I enjoy cool looking things", 2, 0xFF0000, 0.5);
createText("- Master of Architecture", 1, 0xFF0000, 0.5);
createText("- I am a sentient AI", 0, 0xFF0000, 0.5);

camera.position.set(5, 2, 13);
scene.position.set(-5, -3, 5);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.01;

  yellowCube.rotation.x += 0.01;
  yellowCube.rotation.y += 0.01;

  blueCube.rotation.x += 0.02;
  blueCube.rotation.y -= 0.01;

  greenCube.rotation.x += 0.02;
  greenCube.rotation.y -= 0.01;

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

document.querySelector(".scroll-down-arrow").addEventListener("click", function () {
  document.querySelector(".about-me").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".scroll-up-arrow").addEventListener("click", function () {
  document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".scroll-down-arrow-3d").addEventListener("click", function () {
  document.querySelector(".assignment2").scrollIntoView({ behavior: "smooth" });
});
