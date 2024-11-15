const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );



// FPS CONTROLS





//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("MostafaCanvas");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

//SNOWFALL
let particles;
let positions = [], velocities = [];

const numSnowflakes = 1500;

const maxRange = 100, minRange = maxRange/2;
const minHeight = 50;

const geometry = new THREE.BufferGeometry();

const textureloader = new THREE.TextureLoader();

addSnowflakes();

function addSnowflakes() {
  for(let i=0; i<numSnowflakes; i++) {
    positions.push(
      Math.floor(Math.random() * maxRange - minRange),
      Math.floor(Math.random() * minRange + minHeight),
      Math.floor(Math.random() * maxRange - minRange));
    
    velocities.push(
      Math.floor(Math.random() * 6 - 3) * 0.1,
      Math.floor(Math.random() * 5 + 0.12) * 0.18,
      Math.floor(Math.random() * 6 - 3) * 0.1);
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocities, 3));

  const flakeMaterial = new THREE.PointsMaterial({
    size: 1,
    map: textureloader.load("snowflak1.png"),
    blending: THREE.AdditiveBlending,
    depthTest: false,
    transparent: true,
    opacity: 0.7,
  });

  particles = new THREE.Points(geometry, flakeMaterial);
  scene.add(particles);
}

animate();

function animate() {
  requestAnimationFrame( animate );
  

  updateParticles();

  renderer.render( scene, camera );
}

function updateParticles() {
  for (let i = 0; i < numSnowflakes*3; i +=3 ) {
    particles.geometry.attributes.position.array[i] -= particles.geometry.attributes.velocity.array[i];
    particles.geometry.attributes.position.array[i+1] -= particles.geometry.attributes.velocity.array[i+1];
    particles.geometry.attributes.position.array[i+2] -= particles.geometry.attributes.velocity.array[i+2];

    if(particles.geometry.attributes.position.array[i+1] < 0) {
      particles.geometry.attributes.position.array[i] = Math.floor(Math.random()*maxRange - minRange);
      particles.geometry.attributes.position.array[i+1] = Math.floor(Math.random()*minRange + minHeight);
      particles.geometry.attributes.position.array[i+2] = Math.floor(Math.random()*maxRange - minRange);
    } 
  }

  particles.geometry.attributes.position.needsUpdate = true;
}


//Creates grids and axes in the scene
const grid = new THREE.GridHelper(20, 20);
//scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
//scene.add(axes);

const geometry1 = new THREE.BoxGeometry(1.5, 1.5, 1.5);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

const yellowCube = new THREE.Mesh(geometry1, yellowMaterial);
const blueCube = new THREE.Mesh(geometry1, blueMaterial);
const redCube = new THREE.Mesh(geometry1, redMaterial);
const greenCube = new THREE.Mesh(geometry1, greenMaterial);

yellowCube.position.z = -3;
blueCube.position.x = -3;
redCube.position.x = 3;
greenCube.position.z = 3;



const gltfLoader = new THREE.GLTFLoader();

let mesh;


gltfLoader.load(
  "scenetest1.glb",
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


const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load("Evil Empire_Regular.json", function (font) {
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

const loader = new THREE.TextureLoader();
loader.load('nightskypink.jpeg', function (texture) {
    scene.background = texture;
});


createText("Mostafa Bdeir", 4, "0Xff7a06");
createText("- Art/Media Enthusiast", 3, "0X8200ff");
createText("- Certified Trap Music Enjoyer", 2, "0X8200ff");
createText("- M.Arch First Year at Carleton", 1, "0X8200ff");
createText("- Boston Celtics Fan", 0, "0X009102");

camera.position.z = 20;
camera.position.x = 0;
camera.position.y = 15;

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



function animate1() {
  requestAnimationFrame(animate);

  

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

animate1();

//Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
