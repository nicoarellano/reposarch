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

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff122 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0159ff });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0045});
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff999 });

const yellowCube = new THREE.Mesh(geometry, yellowMaterial);
const blueCube = new THREE.Mesh(geometry, blueMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const greenCube = new THREE.Mesh(geometry, greenMaterial);

yellowCube.position.z = -3;
yellowCube.position.y = 3;
blueCube.position.x = -3;
blueCube.position.y = 2;
redCube.position.x = 3;
redCube.position.y = -2;
greenCube.position.z = 3;

scene.add(yellowCube);
scene.add(blueCube);
scene.add(redCube);
scene.add(greenCube);

const loader = new THREE.GLTFLoader();

let mesh;

loader.load(
  "/Donut10.glb",
  function (gltf) {
    gltf.scene.scale.x = 7;
    gltf.scene.scale.y = 7;
    gltf.scene.scale.z = 7;

    mesh = gltf.scene;
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

loader.load(
  "/mushroom.glb",
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

loader.load(
  "/Candy9.glb",
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


camera.position.z = 5;
camera.position.x = 2;
camera.position.y = 4;

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
