const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

const threeContainer = document.createElement('div');
threeContainer.id = 'three-container';

document.querySelector('.container').appendChild(threeContainer);

const renderer = new THREE.WebGLRenderer();
threeContainer.appendChild(renderer.domElement);

renderer.setClearColor(0xffffff);

renderer.setSize(threeContainer.clientWidth, threeContainer.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

window.addEventListener('resize', () => {
  renderer.setSize(threeContainer.clientWidth, threeContainer.clientHeight);
  camera.aspect = threeContainer.clientWidth / threeContainer.clientHeight;
  camera.updateProjectionMatrix();
});

camera.position.set(0, 0, 12); 
camera.lookAt(new THREE.Vector3(0, 0, 0)); 

scene.position.set(0, -5, 0); 

///GLTFS///
const loader = new THREE.GLTFLoader();
const models = [];

function loadAndAddModel(modelPath, scale, position, behavior, rotation) {
  loader.load(
    modelPath,
    function (gltf) {
      gltf.scene.scale.set(scale, scale, scale);
      gltf.scene.position.copy(position);

      if (rotation) {
        gltf.scene.rotation.set(rotation.x, rotation.y, rotation.z);
      }

      models.push({
        mesh: gltf.scene,
        behavior: behavior,
        restPosition: position.clone(),
      });

      scene.add(gltf.scene);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}

loadAndAddModel('Hemi/scene.gltf', 0.05, new THREE.Vector3(4, 0, 2), 'rest');
loadAndAddModel('Flowers/scene.gltf', 0.1, new THREE.Vector3(-3, 0, 3), 'spin');
loadAndAddModel('Bone/scene.gltf', 0.005, new THREE.Vector3(4, 4, 4), 'spin');
loadAndAddModel('AshMESH.glb', 3.0, new THREE.Vector3(0, -1, 0), 'rest', { x: 0, y: Math.PI / 2, z: 0 });

function animate() {
  requestAnimationFrame(animate);

  models.forEach((model, index) => {
    if (model.behavior === 'spin') {
      
      if (index === 1) {
        model.mesh.rotation.y += 0.01; 
      } else if (index === 2) {
        model.mesh.rotation.y += 0.01; 
      } else {
        model.mesh.rotation.y += 0.01; 
      }
    }

    if (model.behavior !== 'rest' && model.behavior !== 'spin') {
      model.mesh.position.y -= 0.01;
    }
  });

  renderer.render(scene, camera);
}

animate();


const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

///TEXT//
const fontloader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textsize = size;

  fontloader.load("./Fonts/helvetiker_regular.typeface.json", function (font) {
    const textGeo = new THREE.TextGeometry(textValue, {
      font: font,
      size: textsize,
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
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    textMesh.position.x = -5;
    textMesh.position.y = elevation;

    scene.add(textMesh);
  });
}

createText ("Ashlynn Holman", 12, "0x727272");
createText ("- Hometown: Truro, Nova Scotia", 10, "0x727272");
createText ("- Hobbies: pottery, camping, trying new foods", 9, "0x727272");
createText ("- I've danced ballet since the age of three", 8, "0x727272"); 
createText ("- I make cinnamon buns better than Cinnabon", 7, "0x727272");
createText ("- The beach is my happy place, but i'm terrified of the ocean", 6, "0x727272");

/////GRASS//
const groundGeometry = new THREE.PlaneGeometry(10, 10); 
const groundTexture = new THREE.TextureLoader().load('grass_texture_01.jpg'); 
const groundMaterial = new THREE.MeshStandardMaterial({ map: groundTexture, side: THREE.DoubleSide });
const groundPlane = new THREE.Mesh(groundGeometry, groundMaterial);
groundPlane.rotation.x = -Math.PI / 2; 
scene.add(groundPlane);

grid.position.y = 0; 

groundPlane.position.y = 0; 

renderer.shadowMap.enabled = true;

groundPlane.receiveShadow = true;

//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.8);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 0.8);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

///Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);

});