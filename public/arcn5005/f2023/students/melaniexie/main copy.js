const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xbbbbbb );
const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const aspect = size.width / size.height;

//Set up Camera
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
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);


const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

const yellowMaterial = new THREE.MeshNormalMaterial();
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
// scene.add(redCube);
scene.add(greenCube);

const gltfLoader = new THREE.GLTFLoader();

let mesh;
gltfLoader.load(
    "/models/Figure2.glb",
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x = 1;
      mesh.scale.y = 1;
      mesh.scale.z = 1;
  
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  let mesh1;
  gltfLoader.load(
      "/models/Donut.glb",
      function (gltf) {
        mesh1 = gltf.scene;
        mesh1.scale.x = 1;
        mesh1.scale.y = 1;
        mesh1.scale.z = 1;
        
    
        scene.add(mesh1);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );



////text ///
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
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = 2;
    text.position.y = elevation;

    scene.add(text);
  });
}

createText("Nicolas Arellano", 5, "0XFF00FF");
createText("- Architect from PUC", 3, "0XFF0000");
createText("- Research team lead at CIMS", 2, "0XFF0000");
createText("- PhD candidate at ASAU", 1, "0XFF0000");
createText("- Amateur programmer", 0, "0XFF0000");

//camera and scene position
camera.position.z = 13;
camera.position.x = 5;
camera.position.y = 2;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 1.0);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 0.8);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

// Animate
function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.0;

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