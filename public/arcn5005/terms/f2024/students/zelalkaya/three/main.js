import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';

let scene, camera, renderer, controls, composer;

function createEnvironment() {
    // Create a 3D sphere environment
    const sphereGeometry = new THREE.SphereGeometry(100, 64, 64);
    const sphereMaterial = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load('./landscape.jpg'),
        side: THREE.BackSide
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Add some atmospheric fog
    scene.fog = new THREE.FogExp2(0x87ceeb, 0.002);
}

function setupPostProcessing() {
    composer = new EffectComposer(renderer);
    
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);
}

function init() {
    try {
        // Create scene
        scene = new THREE.Scene();

        // Create camera with adjusted position
        camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.set(0, 0, 10);

        // Create renderer
        renderer = new THREE.WebGLRenderer({ 
            antialias: true,
            powerPreference: "high-performance"
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(renderer.domElement);

        // Create environment (must be after scene initialization)
        createEnvironment();

        // Setup post-processing
        setupPostProcessing();

        // Add lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // Add OrbitControls
        controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.05;
        controls.maxDistance = 200;
        controls.minDistance = 10;

        // Load GLB
        const gltfLoader = new GLTFLoader();
        gltfLoader.setPath('./');

        gltfLoader.load(
            'model.glb',
            function(gltf) {
                console.log('GLB loaded successfully');
                
                scene.add(gltf.scene);
            },
            function(xhr) {
                console.log('GLB ' + (xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function(error) {
                displayError('Error loading GLB file: ' + error.message);
                console.error(error);
            }
        );

    } catch (error) {
        displayError('Error initializing scene: ' + error.message);
        console.error(error);
    }

    window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
    if (camera && renderer) {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (composer) {
            composer.setSize(window.innerWidth, window.innerHeight);
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    if (controls) controls.update();
    if (composer && scene && camera) {
        composer.render();
    }
}

// Start the application
init();
animate();