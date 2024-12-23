const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('three-canvas-f2024') });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new THREE.OrbitControls(camera, renderer.domElement)

const loader = new THREE.GLTFLoader();
loader.load(
  './models/cafe.glb', 
  (gltf) => {
    scene.add(gltf.scene);  
  },
  
  (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');  
  },
  (error) => {
    console.error('An error occurred while loading the model', error); 
  }
);
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5); 
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); 
directionalLight.position.set(5, 10, 7);
scene.add(directionalLight);
let person;
loader.load('./models/me3d.glb', (gltf) => {
  person = gltf.scene;
  person.position.set(2, 1.5, 0); 
  person.rotation.y = Math.PI *2;
  person.scale.set(2, 2, 2); 
  scene.add(person);
});
function cycleDrink() {
  
  if (person && drinks[currentDrinkIndex]) {
    person.remove(drinks[currentDrinkIndex]);
  }
  currentDrinkIndex = (currentDrinkIndex + 1) % drinks.length
  showDrink(currentDrinkIndex);
}
window.addEventListener('click', cycleDrink);
const fontLoader = new THREE.FontLoader();
fontLoader.load('fonts/helvetiker.json', (font) => {
  const textGeometry = new THREE.TextGeometry('Click to choose your drink', {
    font: font,
    size: 0.1,
    height: 0.05,
  });

  const textMaterial = new THREE.MeshBasicMaterial({  color: 0xff0000});
  const textMesh = new THREE.Mesh(textGeometry, textMaterial);
  textMesh.position.set(1, 1.5, 1);
  scene.add(textMesh);
});
const textureLoader = new THREE.TextureLoader();
textureLoader.load('textures/sky.jpg', function(texture) {
  scene.background = texture;  
});

let drinks = [];
const drinkModels = ['./models/drink1.glb', './models/drink2.glb', './models/drink3.glb']; 
let currentDrinkIndex = 0;
drinkModels.forEach((modelPath,index) => {
  loader.load(modelPath, (gltf) => {
    const drink = gltf.scene;
    switch (index) {
      case 0: 
        drink.scale.set(0.3, 0.3,0.3); 
        break;
      case 1: 
        drink.scale.set(0.002, 0.002, 0.002); 
        break;
      case 2: 
        drink.scale.set(3,3,3); 
        break;
      default:
        break;
    }
    drinks.push(gltf.scene);
  });
});
function showDrink(index) {
  if (person && drinks[index]) {
    person.add(drinks[index]);
    drinks[index].position.set(0.1, 0.65, 0.1);
  }
}

showDrink(currentDrinkIndex);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();



