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



//geometry
const geometry = new THREE.OctahedronGeometry(2, 2);
const geometry2 = new THREE.TorusKnotGeometry(1.2, 0.633, 60, 13, 2, 3)
const geometries = [geometry, geometry2];


const darkredMaterial = new THREE.MeshLambertMaterial({ color: 0xFF7298, wireframe: true });
const blueMaterial = new THREE.MeshToonMaterial({ color: 0x4F5936, wireframe: true  });
const redMaterial = new THREE.MeshToonMaterial({ color: 0x00ff00 });
const greenMaterial = new THREE.MeshToonMaterial({ color: 0x4056F4, wireframe: true  });
const testbgreenMaterial = new THREE.MeshLambertMaterial({ color: 0x8D5B6C, wireframe: true})

const darkredCube = new THREE.Mesh(geometry, darkredMaterial);
const blueCube = new THREE.Mesh(geometry, blueMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const greenCube = new THREE.Mesh(geometry, greenMaterial);
const testbgreentorusknot = new THREE.Mesh(geometry2, testbgreenMaterial);

darkredCube.position.z = -3;
blueCube.position.x = -3;
redCube.position.x = 3;
greenCube.position.z = 3;

//scene.add(darkredCube);
//scene.add(blueCube);
//scene.add(redCube);
//scene.add(greenCube);
//scene.add(testbgreentorusknot);

const meshes = []; 

const count = 65; 

for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * 2); 
    const randomGeometry = randomIndex === 0 ? geometry : geometry2; 
  
    let material; 
  

    function getRandomColor() {
        return new THREE.Color(Math.random(), Math.random(), Math.random());
      }
   
    switch (randomIndex) {
      case 0:
        material = blueMaterial;
        break;
      case 1:
        material = darkredMaterial;
        break;
      case 2:
         material = bgreenMaterial;
         break;
      
      default:
        material = new THREE.MeshStandardMaterial({ 
          color: 0xffffff,
          metalness: params.metalness,
          roughness: params.roughness,
        });
        break;
    }
  
    const mesh = new THREE.Mesh(randomGeometry, material);
  

    mesh.position.x = Math.random() * 30 - 0; 
    mesh.position.y = Math.random() * 20 - 4; 
    mesh.position.z = Math.random() * 20 - 20; 
  
    mesh.rotation.x = Math.random() * Math.PI * 2; 
    mesh.rotation.y = Math.random() * Math.PI * 2; 
    mesh.rotation.z = Math.random() * Math.PI * 2; 
  
    scene.add(mesh);
    meshes.push(mesh); 
  }

meshes.forEach((mesh) => {
    mesh.scale.set(0.5, 0.5, 0.5); 
  });

  testbgreentorusknot.scale.set(0.7, 0.7, 0.7);


const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "/arcn5005/f2023/students/mikhalagibson/models/mini mel bl.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 0.5;
    mesh.scale.y = 0.5;
    mesh.scale.z = 0.5;

    mesh.position.set(18,3,4)
    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

gltfLoader.load(
    "/arcn5005/f2023/students/mikhalagibson/models/mini me bl.glb",
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x = 0.5;
      mesh.scale.y = 0.5;
      mesh.scale.z = 0.5;
  
      mesh.position.set(0,0,0)
      scene.add(mesh);
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
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = 2;
    text.position.y = elevation;

    scene.add(text);
  });
}

createText("Mikhala Gibson", 5, "0X2eab3b");
createText("- M.Arch student at Carleton University", 3, "0X4287f5");
createText("- Bachelor in History and Theory of Architecture", 2, "0X4287f5");
createText("- I am currently learning how to make knitwear", 1, "0X4287f5");
createText("- I made this model of Melanie -> ", 0, "0X4287f5");

camera.position.z = 18;
camera.position.x = 0;
camera.position.y = 0;

scene.position.x = -10;
scene.position.z = 5;
scene.position.y = -3;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Creates the lights of the scene
const lightColor = 0xffffff;

const hemiLight = new THREE.HemisphereLight(lightColor, 0.5);
hemiLight.position.set( 0, 20, 0 );
scene.add(hemiLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(-3, 10, -10);
directionalLight.target.position.set(0, 3, 0);
directionalLight.castShadow = true;
directionalLight.shadow.camera.top = 2;
directionalLight.shadow.camera.bottom = - 2;
directionalLight.shadow.camera.left = - 2;
directionalLight.shadow.camera.right = 2;
directionalLight.shadow.camera.near = 0.1;
directionalLight.shadow.camera.far = 40;

scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
    requestAnimationFrame(animate);
  
    meshes.forEach((mesh) => {
      mesh.rotation.x += 0.008 * Math.random(); 
      mesh.rotation.y += 0.008 * Math.random();
      mesh.rotation.z += 0.008 * Math.random();
    });
  
    renderer.render(scene, camera);
  }
  
  animate();

animate();

window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});