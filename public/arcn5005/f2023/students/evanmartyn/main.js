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
const grid = new THREE.GridHelper(5, 5);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

//geometry
const knotgeometry = new THREE.TorusKnotGeometry( 30, 3, 100, 16 ); 
const knotmaterial = new THREE.MeshBasicMaterial( { color: 0X3D85C6 } ); 
const torusKnot = new THREE.Mesh( knotgeometry, knotmaterial ); 

scene.add( torusKnot );

const geometry = new THREE.BoxGeometry(1, 1, 1);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 187 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 187 });
const redMaterial = new THREE.MeshLambertMaterial({ color: 187 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 187 });

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

const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  //"/arcn5005/f2023/students/evanmartyn/evan.glb",
  "./evan.glb",
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

const loader = new THREE.TextureLoader();
  const texture = loader.load(
    'background.jpg',
    () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    });

const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "26, 35, 92", size = 0.3) {
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

    text.position.x = 5;
    text.position.y = elevation;

    scene.add(text);
  });
}


createText("Evan Martyn", 5, "0X3D85C6");
createText("- I am a graduate of Bachlors of Design from the University of Alberta.", 3, "0X3D85C6");
createText("- I have lived in edmonton my whole life.", 2, "0X3D85C6");
createText("- My favourite movie is Rush.", 1, "0X3D85C6");
createText("- My faourite sport is skiing.", 0, "0X3D85C6");

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

  yellowCube.rotation.x += 0.00;
  yellowCube.rotation.y += 0.10;

  blueCube.rotation.x += 0.00;
  blueCube.rotation.y -= 0.10;

  redCube.rotation.x -= 0.00;
  redCube.rotation.y -= 0.10;

  greenCube.rotation.x += 0.00;
  greenCube.rotation.y -= 0.10;

  torusKnot.rotation.x += 0.02
  torusKnot.rotation.y -= 0.02


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
