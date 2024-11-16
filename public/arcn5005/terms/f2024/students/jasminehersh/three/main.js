const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas-f2024");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);


const grid = new THREE.GridHelper(10, 10);
scene.add(grid);
grid.visible = false;


const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const geometry = new THREE.SphereGeometry(1.5, 1.5, 1.5);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffc0cb });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0xf0f8ff });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0xd2b48c });

const yellowSphere = new THREE.Mesh(geometry, yellowMaterial);
const blueSphere = new THREE.Mesh(geometry, blueMaterial);
const redSphere = new THREE.Mesh(geometry, redMaterial);
const greenSphere = new THREE.Mesh(geometry, greenMaterial);

yellowSphere.position.z = -3;
blueSphere.position.x = -3;
redSphere.position.x = 3;
greenSphere.position.z = 3;

scene.add(yellowSphere);
scene.add(blueSphere);
// scene.add(redSphere);
scene.add(greenSphere);

const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "./flowerblue01.gltf", 
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 9;
    mesh.scale.y = 9;
    mesh.scale.z = 9;

    mesh.position.x = 5
    mesh.position.y = 0
    mesh.position.z = 5

    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
gltfLoader.load(
    "./flowerblue01.gltf", 
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x = 8;
      mesh.scale.y = 8;
      mesh.scale.z = 8;
  
      mesh.position.x = 4
      mesh.position.y = 0
      mesh.position.z = 5
  
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  gltfLoader.load(
    "./flowerblue01.gltf", 
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x = 7;
      mesh.scale.y = 7;
      mesh.scale.z = 7;
  
      mesh.position.x = 6
      mesh.position.y = 0
      mesh.position.z = 5
  
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
  gltfLoader.load(
    "./flowerblue01.gltf", 
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x = 9;
      mesh.scale.y = 9;
      mesh.scale.z = 9;
  
      mesh.position.x = 4
      mesh.position.y = 0
      mesh.position.z = 4.5

  
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
);
gltfLoader.load(
    "./birks.glb", 
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x =5;
      mesh.scale.y = 5;
      mesh.scale.z = 5;

      mesh.position.x = 8
  
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
gltfLoader.load(
    "./blacksambashort.glb", 
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x =5;
      mesh.scale.y = 5;
      mesh.scale.z = 5;

      mesh.position.x = 2
      
  
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
);
gltfLoader.load(
    "./bluesamba.glb", 
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x =5;
      mesh.scale.y = 5;
      mesh.scale.z = 5;

      mesh.position.x = 3
  
      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
);

    undefined,
    function (error) {
      console.error(error);
    }
gltfLoader.load(
    "./tallblacksamba.glb", 
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.x =5;
      mesh.scale.y = 5;
      mesh.scale.z = 5;
  
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

createText("Jasmine Hersh", 5, "000080");
createText("- M.arch student at Carleton", 3, "	483D8B");
createText("- BA in Architecture, University of San Diego", 2, "2F4F4F");

camera.position.z = 26;
camera.position.x = 10;
camera.position.y = 4;

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

  yellowSphere.rotation.x += 0.01;
  yellowSphere.rotation.y += 0.01;

  blueSphere.rotation.x += 0.02;
  blueSphere.rotation.y -= 0.01;

  redSphere.rotation.x -= 0.01;
  redSphere.rotation.y -= 0.02;

  greenSphere.rotation.x += 0.02;
  greenSphere.rotation.y -= 0.01;

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
const texture = loader.load("IMG_1252.jpg", () => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  scene.background = texture;
});