
const scene = new THREE.Scene();

// Loading texture for the background
const textureLoader = new THREE.TextureLoader();
const backgroundTexture = textureLoader.load('background.png'); // Replace 'background.jpg' with your image file
scene.background = backgroundTexture;

// Rest of the code remains the same


const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;

const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

const threeCanvas = document.getElementById("three-canvas");

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.body.appendChild(renderer.domElement);

const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 2;
scene.add(axes);

// Different geometries for variety
const geometries = [
  new THREE.SphereGeometry(5, 32, 32),
  new THREE.ConeGeometry(5, 10, 32),
  new THREE.TorusGeometry(5, 2, 16, 100),
  new THREE.BoxGeometry(10, 10, 10)
];

const materials = [
  new THREE.MeshPhongMaterial({ color: Math.random() * 0xffffff, shininess: 100 }),
  new THREE.MeshPhongMaterial({ color: Math.random() * 0xffffff, shininess: 100 }),
  new THREE.MeshPhongMaterial({ color: Math.random() * 0xffffff, shininess: 100 }),
  new THREE.MeshPhongMaterial({ color: Math.random() * 0xffffff, shininess: 100 })
];

const shapes = geometries.map((geometry, index) => new THREE.Mesh(geometry, materials[index]));

// Positioning shapes
shapes[0].position.z = -40;
shapes[1].position.x = 20;
shapes[2].position.x = 40;
shapes[3].position.z = 20;
shapes.forEach(shape => scene.add(shape));

const gltfLoader = new THREE.GLTFLoader();
let mesh;
gltfLoader.load(
  "./models/3dmesh.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.set(20, 20, 20);
    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const fontLoader = new THREE.FontLoader();

camera.position.set(20, 1, 1);
scene.position.set(-5, -7.5, 5);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(5, 10, 5);
scene.add(pointLight);

// Expanded Particle System
const particlesGeometry = new THREE.BufferGeometry();
const particlesCnt = 5000;
const posArray = new Float32Array(particlesCnt * 3);
for (let i = 0; i < particlesCnt * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 50; // Increased range for particles
}
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.005,
  color: 0xffffff
});
const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

function animate() {
  requestAnimationFrame(animate);

  // Rotating shapes around the mesh
  shapes.forEach((shape, index) => {
    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
    shape.position.x = Math.sin(Date.now() * 0.001 + index) * 20;
    shape.position.z = Math.cos(Date.now() * 0.001 + index) * 20;
  });

  // Particle rotation
  particlesMesh.rotation.y += 0.005;

  pointLight.position.x = Math.sin(Date.now() * 0.001) * 10;
  pointLight.position.z = Math.cos(Date.now() * 0.001) * 10;

  renderer.render(scene, camera);
}

animate();


// Assuming images are named as image1.jpg, image2.jpg, etc., and stored in 'images' folder
const portfolioImages = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    // Add more image paths as needed
];

document.getElementById('portfolio-btn').addEventListener('click', function() {
    const portfolioSection = document.getElementById('portfolio-section');
    portfolioSection.style.display = 'flex';

    // Clear existing images if any
    portfolioSection.innerHTML = '';

    // Add images to the portfolio section
    portfolioImages.forEach(imageSrc => {
        const img = document.createElement('img');
        img.src = imageSrc;
        img.style.width = '300px'; // Set image width
        img.style.height = 'auto'; // Maintain aspect ratio
        portfolioSection.appendChild(img);
    });
});

const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg']; // Placeholder array of images
let currentIndex = 0;

document.getElementById('next-button').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById('gallery-image').src = images[currentIndex];
});

document.getElementById('prev-button').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById('gallery-image').src = images[currentIndex];
});
