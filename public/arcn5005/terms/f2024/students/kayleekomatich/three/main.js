
const scene = new THREE.Scene();


const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);


camera.position.set(0, 50, 200);
camera.lookAt(new THREE.Vector3(0, 0, 0));


const threeCanvas = document.getElementById('three-kaylee-canvas');
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);


const rgbeLoader = new THREE.RGBELoader();
rgbeLoader.load('./model/meadow.hdr', function (texture) {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
});


const gltfLoader = new THREE.GLTFLoader();
let kayleeMesh, cabinMesh, butterflyMeshLeft, butterflyMeshRight, leafMeshes = [];


gltfLoader.load(
  './model/kaylee.glb',
  function (gltf) {
    kayleeMesh = gltf.scene;
    kayleeMesh.scale.set(8, 8, 8);
    kayleeMesh.position.set(0, 0, 0);
    scene.add(kayleeMesh);


    if (cabinMesh) {
      const direction = new THREE.Vector3().subVectors(cabinMesh.position, kayleeMesh.position);
      kayleeMesh.lookAt(kayleeMesh.position.clone().add(direction)); 
    }
  },
  undefined,
  function (error) {
    console.error("Error loading kaylee model:", error);
  }
);


gltfLoader.load(
  './model/cabin4.glb',
  function (gltf) {
    cabinMesh = gltf.scene;
    cabinMesh.scale.set(6, 6, 6);
    cabinMesh.position.set(20, 0, 0);
    scene.add(cabinMesh);


    if (kayleeMesh) {
      const direction = new THREE.Vector3().subVectors(cabinMesh.position, kayleeMesh.position);
      kayleeMesh.lookAt(kayleeMesh.position.clone().add(direction));
    }
  },
  undefined,
  function (error) {
    console.error("Error loading cabin model:", error);
  }
);


gltfLoader.load(
  './model/butterfly.glb',
  function (gltf) {
    butterflyMeshLeft = gltf.scene;
    butterflyMeshLeft.scale.set(0.025, 0.025, 0.025);
    butterflyMeshLeft.position.set(-30, 10, 0);
    scene.add(butterflyMeshLeft);
  },
  undefined,
  function (error) {
    console.error("Error loading left butterfly model:", error);
  }
);

gltfLoader.load(
  './model/butterfly.glb',
  function (gltf) {
    butterflyMeshRight = gltf.scene;
    butterflyMeshRight.scale.set(0.025, 0.025, 0.025);
    butterflyMeshRight.position.set(30, 10, 0);
    scene.add(butterflyMeshRight);
  },
  undefined,
  function (error) {
    console.error("Error loading right butterfly model:", error);
  }
);


const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);


const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);


const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;


function addFallingLeaves() {
  const numLeaves = 50; 

  gltfLoader.load('./model/leaf.glb', function (gltf) {
    for (let i = 0; i < numLeaves; i++) {
      const leaf = gltf.scene.clone();
      leaf.scale.set(1, 1, 1); 
      leaf.position.set(
        Math.random() * 400 - 200,  
        Math.random() * 100 + 50,  
        Math.random() * 400 - 200   
      );
     
      leaf.userData = {
        velocity: new THREE.Vector3(
          Math.random() * 0.5 - 0.25, 
          -Math.random() * 0.2 - 0.1, 
          Math.random() * 0.5 - 0.25  
        ),
      };
      scene.add(leaf);
      leafMeshes.push(leaf);
    }
  });
}


addFallingLeaves();


function animate() {
  requestAnimationFrame(animate);


  leafMeshes.forEach((leaf) => {
    leaf.position.add(leaf.userData.velocity);

    if (leaf.position.y < -50) {
      leaf.position.set(
        Math.random() * 400 - 200,
        Math.random() * 100 + 50,
        Math.random() * 400 - 200
      );
    }
  });


  if (butterflyMeshLeft) {
    butterflyMeshLeft.rotation.y += 0.05;  
    butterflyMeshLeft.rotation.x += 0.01;  
  }


  if (butterflyMeshRight) {
    butterflyMeshRight.rotation.y -= 0.05;  
    butterflyMeshRight.rotation.x += 0.01;  
  }

  renderer.render(scene, camera);
}

animate();


window.addEventListener('resize', () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
