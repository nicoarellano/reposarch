const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById('three-canvas-f2024');

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

const gltfLoader = new THREE.GLTFLoader();

let mesh; //Photogram model
gltfLoader.load(
  './models/Banana.glb',
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 3;
    mesh.scale.y = 3;
    mesh.scale.z = 3;

    mesh.position.x = 0;
    mesh.position.y = 4.3;
    mesh.position.z = 0;

    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let funky; //Funkykong
gltfLoader.load(
  './models/funky_kong.glb',
  function (gltf) {
    funky = gltf.scene;
    funky.scale.x = 1.5;
    funky.scale.y = 1.5;
    funky.scale.z = 1.5;

    funky.position.x = -6;
    funky.position.y = 0;
    funky.position.z = 0;

    scene.add(funky);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

let donkey; //Donkeykong
gltfLoader.load(
  './models/donkey_kong.glb',
  function (gltf) {
    donkey = gltf.scene;
    donkey.scale.x = .16;
    donkey.scale.y = .16;
    donkey.scale.z = .16;

    donkey.position.x = 6;
    donkey.position.y = 0;
    donkey.position.z = 0;

    scene.add(donkey);
  },

  undefined,
  function (error) {
    console.error(error);
  }
);

let diddy; //Diddykong
gltfLoader.load(
  './models/diddy_kong.glb',
  function (gltf) {
    diddy = gltf.scene;
    diddy.scale.x = .16;
    diddy.scale.y = .16;
    diddy.scale.z = .16;

    diddy.position.x = 0;
    diddy.position.y = 0;
    diddy.position.z = 6;

    scene.add(diddy);
  },

  undefined,
  function (error) {
    console.error(error);
  }
);

let dixie; //Dixiekong
gltfLoader.load(
  './models/dixie_kong.glb',
  function (gltf) {
    dixie = gltf.scene;
    dixie.scale.x = 1.2;
    dixie.scale.y = 1.2;
    dixie.scale.z = 1.2;

    dixie.position.x = 0;
    dixie.position.y = 0;
    dixie.position.z = -6;

    scene.add(dixie);
  },

  undefined,
  function (error) {
    console.error(error);
  }
);

let barrel; //Barrel
gltfLoader.load(
  './models/barrel.glb',
  function (gltf) {
    barrel = gltf.scene;
    barrel.scale.x = 2.5;
    barrel.scale.y = 2.5;
    barrel.scale.z = 2.5;
    
    barrel.position.x = .75;
    barrel.position.y = 0;
    barrel.position.z = 0;

    barrel.rotation.y = Math.PI /.65

    scene.add(barrel);
  },

  undefined,
  function (error) {
    console.error(error);
  }
);

//Text
const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = '0x000000', size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load('./fonts/Doto Black_Regular.json', function (font) {
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
    const textMaterial = new THREE.MeshLambertMaterial({ color: color });
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = -1.5;
    text.position.y = 9;

    scene.add(text);
  });
}

createText('DK WORLD', 0, '0xFFFF00');

// Camera and scene
camera.position.z = 9;
camera.position.x = 9;
camera.position.y = 3;

scene.position.x = 0;
scene.position.z = 0;
scene.position.y = -2;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Lights of the scene
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, .75);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

let donkeyangle = 0 //Starts orbit at 0 degrees
let funkyangle = Math.PI; // Starts orbit at 180 
let diddyangle = Math.PI / 2; // Starts orbit at 90
let dixieangle = 3 * Math.PI / 2; //Starts orbit at 270

function animate() {
  requestAnimationFrame(animate);

  const oscillationFactor = 0.5;

  if (donkey) {
    donkeyangle += 0.01;  // Control speed of orbit (higher = faster orbit)
    donkey.position.x = 6 * Math.cos(donkeyangle);  // Circular motion (X-axis)
    donkey.position.z = 6 * Math.sin(donkeyangle);  // Circular motion (Z-axis)
    donkey.rotation.y += 0.01;  // Rotate to face the direction of movement
    donkey.position.y = oscillationFactor * Math.sin(donkeyangle * 5); // Up and down ovement
  }

  if (funky) {
    funkyangle += 0.01;  // Control speed of orbit (higher = faster orbit)
    funky.position.x = 6 * Math.cos(funkyangle);  // Circular motion (X-axis)
    funky.position.z = 6 * Math.sin(funkyangle);  // Circular motion (Z-axis)
    funky.rotation.y += 0.03;  // Rotate to face the direction of movement
    funky.position.y = oscillationFactor * Math.sin(funkyangle * 3); // Up and down ovement
  }

  if (diddy) {
    diddyangle += 0.01;  // Control speed of orbit (higher = faster orbit)
    diddy.position.x = 6 * Math.cos(diddyangle);  // Circular motion (X-axis)
    diddy.position.z = 6 * Math.sin(diddyangle);  // Circular motion (Z-axis)
    diddy.rotation.y += 0.07;  // Rotate to face the direction of movement
    diddy.position.y = oscillationFactor * Math.sin(diddyangle * 10); // Up and down ovement
  }

  if (dixie) {
    dixieangle += 0.01;  // Control speed of orbit (higher = faster orbit)
    dixie.position.x = 6 * Math.cos(dixieangle);  // Circular motion (X-axis)
    dixie.position.z = 6 * Math.sin(dixieangle);  // Circular motion (Z-axis)
    dixie.rotation.y += 0.05;  // Rotate to face the direction of movement
    dixie.position.y = oscillationFactor * Math.sin(dixieangle * 7); // Up and down ovement 
  }

  renderer.render(scene, camera);
}

animate();

//Adjust the viewport to the size of the browser
window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});


