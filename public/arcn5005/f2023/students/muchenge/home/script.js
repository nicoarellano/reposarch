import * as THREE from 'https://threejs.org/build/three.module.js';

// Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a textured plane as the background
const aspectRatio = 8 / 3; // Adjust this based on the aspect ratio of your background image
const planeGeometry = new THREE.PlaneGeometry(7 * aspectRatio, 10, 32, 32);
const planeMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('bg.jpg'),
    side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(plane);

// Create a cube with texture and add it to the scene
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg');
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ map: texture });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Create a text sprite for instructions
const instructionsText = createTextSprite('Press space to bounce\nUse WASD to move\nDrag to rotate\nPress C to shake screen');
instructionsText.position.set(0, 3, 0); // Adjust the position as needed
scene.add(instructionsText);

// Initialize movement flags
let moveUp = false;
let moveDown = false;
let moveLeft = false;
let moveRight = false;

// Position the camera
camera.position.z = 5;

// Handle window resize
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Add mouse interactions
let isDragging = false;
let previousMousePosition = {
    x: 0,
    y: 0
};

document.addEventListener('mousedown', (event) => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (event) => {
    const deltaMove = {
        x: event.clientX - previousMousePosition.x,
        y: event.clientY - previousMousePosition.y
    };

    if (isDragging) {
        const deltaRotationQuaternion = new THREE.Quaternion()
            .setFromEuler(new THREE.Euler(
                toRadians(deltaMove.y * 1),
                toRadians(deltaMove.x * 1),
                0,
                'XYZ'
            ));

        cube.quaternion.multiplyQuaternions(deltaRotationQuaternion, cube.quaternion);
    }

    previousMousePosition = {
        x: event.clientX,
        y: event.clientY
    };
});

// Add bounce effect on spacebar press
document.addEventListener('keydown', (event) => {
    if (event.key === ' ') {
        bounceCube();
    }
});

// Handle continuous movement
document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'w':
            moveUp = true;
            break;
        case 's':
            moveDown = true;
            break;
        case 'a':
            moveLeft = true;
            break;
        case 'd':
            moveRight = true;
            break;
    }
});

document.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'w':
            moveUp = false;
            break;
        case 's':
            moveDown = false;
            break;
        case 'a':
            moveLeft = false;
            break;
        case 'd':
            moveRight = false;
            break;
    }
});

// Convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Bounce effect
function bounceCube() {
    const bounceHeight = 1.5;
    const bounceDuration = 500;

    const initialPosition = cube.position.y;

    const startTime = Date.now();

    function updateBounce() {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / bounceDuration, 1);
        const bounceOffset = Math.sin(progress * Math.PI) * bounceHeight;

        cube.position.y = initialPosition + bounceOffset;

        if (progress < 1) {
            requestAnimationFrame(updateBounce);
        }
    }

    updateBounce();
}

// Animate the cube
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.005;
    cube.rotation.y += 0.005;

    // Move the cube based on active movement flags
    if (moveUp) cube.position.y += 0.1;
    if (moveDown) cube.position.y -= 0.1;
    if (moveLeft) cube.position.x -= 0.1;
    if (moveRight) cube.position.x += 0.1;

    renderer.render(scene, camera);
}

animate();

// Function to create a text sprite with multiple lines
function createTextSprite(message) {
    const lines = message.split('\n');
    const lineHeight = 20; // Adjust the line height as needed
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '20px Arial';

    const textWidth = Math.max(...lines.map(line => context.measureText(line).width));
    const canvasWidth = 400; // Set a fixed canvas width
    const canvasHeight = lines.length * lineHeight;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    context.font = '20px Arial';
    context.fillStyle = 'white';

    lines.forEach((line, index) => {
        context.fillText(line, canvas.width / 4, (index + 1) * lineHeight);
    });

    const texture = new THREE.CanvasTexture(canvas);
    const material = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(material);

    // Adjust the scale based on the fixed canvas size
    const scale = canvasWidth / canvasHeight;
    sprite.scale.set(scale, 1, 0.2); // Adjust the scale as needed

    return sprite;
}

// Create an audio listener and load the audio file
const audioListener = new THREE.AudioListener();
const audioLoader = new THREE.AudioLoader();
const backgroundMusic = new THREE.Audio(audioListener);

audioLoader.load('bgm.mp3', (buffer) => {
    backgroundMusic.setBuffer(buffer);
    backgroundMusic.setLoop(true);
    backgroundMusic.setVolume(0.5); // Adjust the volume as needed
    backgroundMusic.play();
});

// Connect the audio listener to the camera
camera.add(audioListener);

// Handle camera shake on 'C' key press
document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        shakeCamera();
    }
});

// Function to shake the camera
function shakeCamera() {
    const intensity = 0.5; // Adjust the intensity of the shake
    const duration = 1000; // Duration of the shake in milliseconds

    const startPosition = camera.position.clone();
    const startTime = Date.now();

    function updateShake() {
        const elapsedTime = Date.now() - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const randomOffset = new THREE.Vector3(
            Math.random() * intensity - intensity / 2,
            Math.random() * intensity - intensity / 2,
            Math.random() * intensity - intensity / 2
        );

        camera.position.copy(startPosition).add(randomOffset);

        if (progress < 1) {
            requestAnimationFrame(updateShake);
        }
    }

    updateShake();
}