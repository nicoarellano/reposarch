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

const grid = new THREE.GridHelper(10, 10);

scene.add(grid);

 

const axes = new THREE.AxesHelper();

axes.material.depthTest = false;

axes.renderOrder = 2;

scene.add(axes);

 

const geometry = new THREE.BoxGeometry(10, 10, 10);

 

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });

const blueMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });

const redMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });

const greenMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });

 

const yellowCube = new THREE.Mesh(geometry, yellowMaterial);

const blueCube = new THREE.Mesh(geometry, blueMaterial);

const redCube = new THREE.Mesh(geometry, redMaterial);

const greenCube = new THREE.Mesh(geometry, greenMaterial);

 

yellowCube.position.z = -40;

blueCube.position.x = 20;

redCube.position.x = 40;

greenCube.position.z = 20;

 

scene.add(yellowCube);

scene.add(blueCube);

scene.add(redCube);

scene.add(greenCube);

 

const gltfLoader = new THREE.GLTFLoader();

 

let mesh;

 

gltfLoader.load(
  "./models/LastMesh.glb",

  function (gltf) {

    mesh = gltf.scene;

    mesh.scale.x = 20;

    mesh.scale.y = 20;

    mesh.scale.z = 20;

 

    scene.add(mesh);

  },

  undefined,

  function (error) {

    console.error(error);

  }

);




const fontLoader = new THREE.FontLoader();

 

function createText(text, elevation = 0, textColor = "0xffffff", size = 0.5) {

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

 



 

camera.position.z = 20;

camera.position.x = 1;

camera.position.y = 1;

 

scene.position.x = -5;

scene.position.z = 5;

scene.position.y = -7.5;

 

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

 

  if (mesh) mesh.rotation.y += 10;

 

  yellowCube.rotation.x += 30;

  yellowCube.rotation.y += 10;

 

  blueCube.rotation.x += 30;

  blueCube.rotation.y -= 10;

 

  redCube.rotation.x -= 30;

  redCube.rotation.y -= 10;

 

  greenCube.rotation.x += 30;

  greenCube.rotation.y -= 10;

 

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
const loader = new THREE.TextureLoader();
  const texture = loader.load(
    'Background.jpg',
    () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    });

