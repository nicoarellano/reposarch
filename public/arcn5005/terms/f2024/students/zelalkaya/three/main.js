import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

let scene, camera, renderer, controls;
const snowflakes = [];
const SNOW_COUNT = 1500;
let textMesh, montrealTextMesh;
let model;
let isJumping = false;
let jumpVelocity = 0;
const JUMP_FORCE = 0.2;
const GRAVITY = -0.01;
const GROUND_Y = 0;

function init() {
    scene = new THREE.Scene();
    
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 5);
    
    renderer = new THREE.WebGLRenderer({ 
        antialias: true,
        alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    document.body.appendChild(renderer.domElement);
    
    controls = new OrbitControls(camera, renderer.domElement);
    
    setupLights();
    createEnvironment();
    createBase();
    loadModel();
    createSnow();
    add3DText();
    setupControls();
    
    window.addEventListener('resize', onWindowResize, false);
}

function createBase() {
    const baseGeometry = new THREE.CylinderGeometry(2, 2, 0.1, 32);
    
    const baseMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.3,
        roughness: 0.7,
        side: THREE.DoubleSide
    });
    
    const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
    baseMesh.position.set(0, -0.05, 0);
    baseMesh.receiveShadow = true;
    baseMesh.castShadow = true;
    
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
        './ao.jpg',
        function(texture) {
            baseMaterial.aoMap = texture;
            baseMaterial.aoMapIntensity = 0.5;
            baseMaterial.needsUpdate = true;
        }
    );
    
    scene.add(baseMesh);
}

function add3DText() {
    const fontLoader = new FontLoader();
    
    fontLoader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function(font) {
        const textGeometry1 = new TextGeometry('Press space bar', {
            font: font,
            size: 0.3,
            height: 0.1,
            curveSegments: 20,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        });
        
        const textMaterial1 = new THREE.MeshPhongMaterial({ 
            color: 0xffffff,
            specular: 0x444444,
            shininess: 30
        });
        
        textMesh = new THREE.Mesh(textGeometry1, textMaterial1);
        
        textGeometry1.computeBoundingBox();
        const textWidth1 = textGeometry1.boundingBox.max.x - textGeometry1.boundingBox.min.x;
        
        textMesh.position.set(-textWidth1/2, 0, 0);
        textMesh.castShadow = true;
        textMesh.receiveShadow = true;
        
        scene.add(textMesh);

        const textGeometry2 = new TextGeometry('Welcome to Montreal', {
            font: font,
            size: 0.3,
            height: 0.1,
            curveSegments: 20,
            bevelEnabled: true,
            bevelThickness: 0.03,
            bevelSize: 0.02,
            bevelOffset: 0,
            bevelSegments: 5
        });
        
        const textMaterial2 = new THREE.MeshPhongMaterial({ 
            color: 0xffffff,
            specular: 0x444444,
            shininess: 30
        });
        
        montrealTextMesh = new THREE.Mesh(textGeometry2, textMaterial2);
        
        textGeometry2.computeBoundingBox();
        const textWidth2 = textGeometry2.boundingBox.max.x - textGeometry2.boundingBox.min.x;
        
        montrealTextMesh.position.set(-textWidth2/2, 1, 0); 
        montrealTextMesh.castShadow = true;
        montrealTextMesh.receiveShadow = true;
        
        scene.add(montrealTextMesh);
    });
}

function setupLights() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.1;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.bias = -0.0001;
    scene.add(directionalLight);
    
    const rimLight = new THREE.DirectionalLight(0xffffff, 0.3);
    rimLight.position.set(-5, 5, -5);
    scene.add(rimLight);
    
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.5);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);
}

function loadModel() {
    const loader = new GLTFLoader();
    
    loader.load(
        './model.glb',
        function(gltf) {
            model = gltf.scene;
            
            model.traverse((node) => {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                    
                    if (node.material) {
                        node.material.needsUpdate = true;
                        node.material.side = THREE.DoubleSide;
                        
                        if (node.material.transparent) {
                            node.material.alphaTest = 0.5;
                        }
                    }
                }
            });
            
            model.position.set(0, GROUND_Y, 0);
            model.scale.set(1, 1, 1);
            model.rotation.set(0, 0, 0);
            
            scene.add(model);
        },
        function(xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function(error) {
            console.error('Error loading model:', error);
        }
    );
}

function createEnvironment() {
    const geometry = new THREE.SphereGeometry(20, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        color: 0x808080,
        side: THREE.BackSide
    });
    
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
        './city.jpg',
        function(texture) {
            texture.colorSpace = THREE.SRGBColorSpace;
            material.map = texture;
            material.needsUpdate = true;
        }
    );
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
}

function createSnow() {
    const snowGeometry = new THREE.BufferGeometry();
    const vertices = [];
    const speeds = [];
    
    for(let i = 0; i < SNOW_COUNT; i++) {
        const x = Math.random() * 40 - 20;
        const y = Math.random() * 40 - 20;
        const z = Math.random() * 40 - 20;
        
        vertices.push(x, y, z);
        speeds.push(0.02 + Math.random() * 0.03);
    }
    
    snowGeometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    
    const snowMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.1,
        transparent: true,
        opacity: 0.8
    });
    
    const snowPoints = new THREE.Points(snowGeometry, snowMaterial);
    scene.add(snowPoints);
    snowflakes.push({ points: snowPoints, speeds: speeds });
}

function updateSnow() {
    snowflakes.forEach(snow => {
        const positions = snow.points.geometry.attributes.position.array;
        const speeds = snow.speeds;
        
        for(let i = 0; i < positions.length; i += 3) {
            positions[i + 1] -= speeds[i/3];
            
            if(positions[i + 1] < -20) {
                positions[i + 1] = 20;
            }
        }
        
        snow.points.geometry.attributes.position.needsUpdate = true;
    });
}

function handleJump() {
    if (model && !isJumping) {
        isJumping = true;
        jumpVelocity = JUMP_FORCE;
    }
}

function setupControls() {
    window.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            event.preventDefault();
            handleJump();
        }
    });
}

function updateJump() {
    if (model && isJumping) {
        jumpVelocity += GRAVITY;
        model.position.y += jumpVelocity;
        
        if (model.position.y <= GROUND_Y) {
            model.position.y = GROUND_Y;
            isJumping = false;
            jumpVelocity = 0;
        }
    }
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    
    updateJump();
    
    if (textMesh && montrealTextMesh) {
        const time = Date.now() * 0.001;
        const radius = 3;
        
        textMesh.position.x = Math.sin(time) * radius;
        textMesh.position.z = Math.cos(time) * radius;
        textMesh.lookAt(0, textMesh.position.y, 0);
        
        montrealTextMesh.position.x = Math.cos(time) * radius;
        montrealTextMesh.position.z = Math.sin(time) * radius;
        montrealTextMesh.lookAt(0, montrealTextMesh.position.y, 0);
    }
    
    updateSnow();
    controls.update();
    renderer.render(scene, camera);
}

init();
animate();