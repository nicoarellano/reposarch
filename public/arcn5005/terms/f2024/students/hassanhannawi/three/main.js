const scene = new THREE.Scene();
const raycaster = new THREE.Raycaster();
let clickobject ; 
//const pointer = new THREE.pointer();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

document.addEventListener('mousedown', onMouseDown);
function onMouseDown(event)
{
        clickobject = true;
}


//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("HassanCanvas");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);




//Creates grids and axes in the scene
const grid = new THREE.GridHelper(20, 20);
//scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
//scene.add(axes);

const geometry1 = new THREE.BoxGeometry(1.5, 1.5, 1.5);



const gltfLoader = new THREE.GLTFLoader();
function newGltf(gltf) {
    meshObject = gltf.scene;
    meshObject.scale.x = 0.2;
    meshObject.scale.y = 0.2;
    meshObject.scale.z = 0.2;
    meshObject.position.z = 15;
    return meshObject;
}



let HassanMesh;


gltfLoader.load(
  "Hassan Mesh.glb",
  function (gltf) {
    HassanMesh = gltf.scene;
    HassanMesh.scale.x = 3;
    HassanMesh.scale.y = 3;
    HassanMesh.scale.z = 3;

    scene.add(HassanMesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
let Chair,Chair2,Chair3,Chair4

function formatChair(ChairObject, Chairz,Chairx,Chairy){
    ChairObject.scale.x = 0.2;
    ChairObject.scale.y = 0.2;
    ChairObject.scale.z = 0.2;
    ChairObject.position.z = Chairz;
    ChairObject.position.x = Chairx;
    ChairObject.position.y = Chairy;

    return ChairObject;
}

gltfLoader.load(
    "Chair.glb",
    function (gltf) {
      Chair = gltf.scene;
      formatChair(Chair,2,-2,3)
      scene.add(Chair)
    },
    undefined,
    function (error) {
      console.error(error);
    }
);

gltfLoader.load(
    "Chair.glb",
    function (gltf) {
      Chair2 = gltf.scene;
      formatChair(Chair2,2,2,3)
      scene.add(Chair2)
    },
    undefined,
    function (error) {
      console.error(error);
    }
);

gltfLoader.load(
    "Chair.glb",
    function (gltf) {
      Chair3 = gltf.scene;
      formatChair(Chair3,-2,2,3)
      scene.add(Chair3)
    },
    undefined,
    function (error) {
      console.error(error);
    }
);

gltfLoader.load(
    "Chair.glb",
    function (gltf) {
      Chair4 = gltf.scene;
      formatChair(Chair4,-2,-2,3)
      scene.add(Chair4)
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
  fontLoader.load("helvetiker_regular.typeface.json", function (font) {
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

    text.position.x = -16;
    text.position.z = -5;
    text.position.y = elevation;

    scene.add(text);
  });
}

const loader = new THREE.TextureLoader();
loader.load('Light Pink Smoke.jpg', function (texture) {
    scene.background = texture;
});


createText("Hassan Al Taher Hannawi", 7, "0Xff7a06");
createText("- Masters of Architecture", 6, "0X8200ff");
createText("- 11:11 synchronization", 5, "0X8200ff");
createText("- Let me breath", 4, "0X8200ff");
createText("- I'll die for those I love", 3, "0X009102");

camera.position.z = 30;
camera.position.x = 10;
camera.position.y = 6;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Creates the lights of the scene

const hemisphereLight = new THREE.HemisphereLight(0xff3f9c, 0xffffff, .4);
hemisphereLight.position.set(0, 100, 0);

scene.add(hemisphereLight);

const pointLight = new THREE.PointLight(0xffffff, 2);
pointLight.position.set(-4, 5, -5);
pointLight.distance = 5;

scene.add(pointLight);



function animate() {
  requestAnimationFrame(animate);
if (clickobject == true) {
    Chair.rotation.x += 0.05;
    Chair.rotation.y += 0.05;
    Chair.position.y -= 0.05;
    Chair.position.x += 0.05;

    Chair2.rotation.y += 0.05;
    Chair2.rotation.x += 0.05;
    Chair2.position.y += 0.05;
    Chair2.position.x -= 0.05;

    Chair3.rotation.y += 0.05;
    Chair3.rotation.x += 0.05;
    Chair3.position.y -= 0.05;
    Chair3.position.x -= 0.05;

    Chair4.rotation.y += 0.05;
    Chair4.rotation.x += 0.05;
    Chair4.position.y += 0.05;
    Chair4.position.x += 0.05;
}
  

  renderer.render(scene, camera);
}

animate()
//Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});