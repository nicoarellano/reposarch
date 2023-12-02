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

const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0x1000000 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x800000 });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });

const yellowCube = new THREE.Mesh(geometry, yellowMaterial);
const blueCube = new THREE.Mesh(geometry, blueMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const greenCube = new THREE.Mesh(geometry, greenMaterial);


const gltfLoader = new THREE.GLTFLoader();

let mesh;

// gltfLoader.load(
//   // "/arcn5005/f2023/students/jeremielafleche/models/JerPhotogrammetryCandy.gltf",
//   "./models/Candy of Me 3.glb",
//   function (gltf) {
//     mesh = gltf.scene;
//     mesh.scale.x = 10;
//     mesh.scale.y = 10;
//     mesh.scale.z = 10;

//     scene.add(mesh);
//   },
//   undefined,
//   function (error) {
//     console.error(error);
//   }
// );

function loadGLB(path,scale,x,z){
    gltfLoader.load(

       path, 
        function (gltf) {
          mesh = gltf.scene;
          mesh.scale.x = scale;
          mesh.scale.y = scale;
          mesh.scale.z = scale;
            mesh.position.x = x
            mesh.position.z = z
          scene.add(mesh);
        },
        undefined,
        function (error) {
          console.error(error);
        }
      );
}
loadGLB("./models/JerMesh1.glb",3, 0, 0)
loadGLB("./models/Building1.glb",20, 5, 4)

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

createText("Look Inside!", 80, "0XD14F33", 10);
createText("Jeremie Lafleche", 6, "D14F33");
createText("- From Montreal, QC", 4, "0XD14F33");
createText("- Background in History and Theory of Architecture", 3, "0XD14F33");
createText("- I have a turtle named Flash", 2, "0XD14F33");
createText("- My favourite architect is Moshe Safdie", 1, "0XD14F33");


camera.position.z = 160;
camera.position.x = 40;
camera.position.y = 40;


const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 2);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.01;

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

const loader = new THREE.TextureLoader();
const texture = loader.load(
    'RomePicture.png',
    () => {
        texture.mapping = THREE.EquirectangularReflectionMapping;
        texture.colorSpace = THREE.SRGBColorSpace;
        scene.background = texture;
    });
