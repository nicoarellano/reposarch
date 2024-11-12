//#region sceen init
const scene = new THREE.Scene();

const size = {
  width: 1000,
  height: 1000,
};
const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
//set camera position
camera.position.z = 105;
camera.position.y = 95;

const threeCanvas = document.getElementById("three-canvas-f2024");
//#endregion




//#region Set renderer
// setting renderer attributes + setting background color
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.shadows = true;
renderer.shadowType = 1;
renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));     
renderer.shadowMap.enabled = true;
renderer.toneMapping =0;
renderer.toneMappingExposure = 1;
renderer.useLegacyLights = false;      
renderer.toneMapping = THREE.NoToneMapping;
document.body.appendChild(renderer.domElement);
renderer.setClearColor(0x9AC6C5) 
//#endregion




//create a file loader
const gltfLoader = new THREE.GLTFLoader();

// creates notify for certain events 
addEventListener("keydown", (event) => {});
addEventListener("keyup", (event) => {});

//create a controller for orbiting
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//#region  player variables
let angularSpeed = 0.0005;
let playerSpeed = 0.0025;
let playerbackwardSpeed = playerSpeed*-0.5;


let playerMoveForward = false;
let playerMoveBackward = false;
let playerMoveRight = false;
let playerMoveLeft = false;
//#endregion



//#region Populate Scene




let mesh;
//load file
gltfLoader.load("./models/moi.glb",function (gltf) {
                                    mesh = gltf.scene;

                                    mesh.position.x=0;
                                    mesh.position.y=0;
                                    mesh.position.z=0;

                                    mesh.scale.x = 3;
                                    mesh.scale.y = 3;
                                    mesh.scale.z = 3;

                                    mesh.castShadow = true;
                                    mesh.receiveShadow = false;
                                    scene.add(mesh);},
                                    undefined,
                                    function (error) {
                                      console.error(error);
                                    });

                                    
                                    
let ground;
//load file
gltfLoader.load("./models/scene.gltf",function (gltf) {
                                    ground = gltf.scene;

                                    ground.position.x=0;
                                    ground.position.y=-3.2;
                                    ground.position.z=-25;

                                  
                                    ground.scale.x = 3;
                                    ground.scale.y = 3;
                                    ground.scale.z = 3;

                                    ground.castShadow = true;
                                    ground.receiveShadow = false;
                                    scene.add(ground);},
                                    undefined,
                                    function (error) {
                                      console.error(error);
                                    });

//set light color
const lightColor = 0xffffff;

//create the light
const light = new THREE.DirectionalLight( lightColor, 1 );
light.position.set( 10, 50, 10); //default; light shining from top
light.castShadow = true; // default false
//scene.add( light );

//Set up shadow properties for the light
light.shadow.mapSize.width = 512; // default
light.shadow.mapSize.height = 512; // default
light.shadow.camera.near = 0.5; // default
light.shadow.camera.far = 500; // default

//#region logic

//gives us the intended direction (input)
onkeydown = (event) => {
  let w = 87;
  let a = 65;
  let s = 83;
  let d = 68;;

  let k = event.keyCode;
  console.log(k);
  switch(k){
   case(a):
    playerMoveLeft = true;
   break;
   case(w):
    playerMoveForward = true;
   break;
   case(s):
    playerMoveBackward = true;
   break;
   case(d):
    playerMoveRight = true;
   break;
  }
};

onkeyup = (event) => {
  let w = 87;
  let a = 65;
  let s = 83;
  let d = 68;

  let k = event.keyCode;
  console.log(k);
  switch(k){
   case(a):
    playerMoveLeft = false;
   break;
   case(w):
    playerMoveForward = false;
   break;
   case(s):
    playerMoveBackward = false;
   break;
   case(d):
    playerMoveRight = false;
   break;
  }
};


//Check current player state and execute appropriate functions
function updatePlayer(){
  if(playerMoveForward){
    moveForward(playerSpeed);
  }
  if(playerMoveBackward){
    moveForward(playerbackwardSpeed);
  }
  if(playerMoveRight){
    rotatePlayer(-angularSpeed);
  }
  if(playerMoveLeft){
    rotatePlayer(angularSpeed);
  }
}


// Moves the mesh on local X
function moveForward(speed){
  mesh.translateX( speed);
  camera.lookAt(mesh.position.x,mesh.position.y,mesh.position.z);
  
}

//rotates mesh
function rotatePlayer(amount){
  mesh.rotation.y +=amount 
}


//Update every frame
function animate() {
  updatePlayer();
  renderer.render( scene, camera );
  requestAnimationFrame(animate);
}
renderer.setAnimationLoop( animate ); 

//Adding 3d text 
const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x000000", size = 10) {
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

    text.position.x = -40;
    text.position.y = 20;
    text.position.z = -70

    scene.add(text);
  });
}


createText("Wilcuma park", 5, "0X7785AC");
