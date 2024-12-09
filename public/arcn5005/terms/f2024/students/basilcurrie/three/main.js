import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const aud = document.getElementById('aud');

const cubecount = document.getElementById('cubecount');
const youcount = document.getElementById('youcount');

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.shadowMap.enabled = true;
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
let material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);
cube.position.set(5, 0.5, 0);
cube.position.set(5, 0.5, 0);
cube.scale.y = 0.3;
cube.scale.x = 0.3;
cube.scale.z = 0.3;
cube.castShadow = true;
scene.add(cube);

let light1 = new THREE.PointLight(0xffeeff, 1, 100);
light1.position.set(0, 5, 3);
light1.castShadow = true;
scene.add(light1);

let light2 = new THREE.PointLight(0xffeeee, 1, 100);
light2.position.set(0, 5, -3);
light2.castShadow = true;
scene.add(light2);

let root;

const loader = new GLTFLoader();
loader.load('models/testGLTF.glb', function (glb) {
  root = glb.scene;
  root.scale.x = 0.2;
  root.scale.y = 0.2;
  root.scale.z = 0.2;
  root.position.x = -3;

  root.traverse(function (child) {
    if (child.isMesh) {
      child.castShadow = true;
    }
  });

  scene.add(root);
});

const basebox = new THREE.BoxGeometry(10, 2, 3);
const baseboxmaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
const ground = new THREE.Mesh(basebox, baseboxmaterial);
ground.position.set(0, -1.2, 0);
ground.receiveShadow = true;
scene.add(ground);

camera.position.z = 5;

const fontLoader = new FontLoader();

function createText(text, elevation = 0, textColor = '0x000000', size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load('./fonts/helvetiker_regular.typeface.json', function (font) {
    const textGeo = new TextGeometry(textValue, {
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

    text.position.y = elevation;
    text.position.z = 1.31;
    text.position.x = -2;

    scene.add(text);
  });
}

createText('JUMP!', -1.5, '0XFF0000', 0.5);

let cubevelocity = 0.03;
let rootrotation = 0;
let rootvel = 0;
let ztranslation = 0;
const gravity = 0.0005;

let increment = 0;
let cubescore = 0;
let youscore = 0;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  cubecount.innerText = 'Cube: ' + cubescore;
  youcount.innerText = 'You: ' + youscore;

  increment += 0.001;

  if (cube.position.y > 0) {
    cube.position.y += cubevelocity;
    cubevelocity -= gravity;
  }

  if (cube.position.x > -4) {
    cube.position.x -= 0.02;
  } else {
    cube.position.set(5, 0.5, 0);
    cubevelocity = 0.03;
    if (rootrotation == 0) {
      youscore++;
    } else {
      cubescore++;
    }
  }

  window.addEventListener('click', () => {
    if (root.position.y <= 0) {
      rootvel = 0.03;
    }
    if (aud.muted == true) {
      aud.muted = false;
    }
  });

  window.addEventListener('keydown', () => {
    if (root.position.y <= 0) {
      rootvel = 0.03;
    }
    if (aud.muted == true) {
      aud.muted = false;
    }
  });

  root.position.y += rootvel;

  if (root.position.y >= 0) {
    rootvel -= gravity;
  } else {
    root.position.y = 0;
  }

  if (cube.position.x < -2.5 && root.position.y == 0) {
    rootrotation = 0.1;
    ztranslation = 0.1;
  }

  if (root.position.z > 10) {
    ztranslation = 0;
    rootrotation = 0;
    root.position.z = 0;
    root.rotation.x = 0;
  }

  root.rotation.x += rootrotation;
  root.position.z += ztranslation;
  camera.position.x = Math.sin(increment) * 5;
  camera.position.z = Math.cos(increment) * 5;
  camera.position.y = 0.5 - [0.5 * Math.cos(2 * increment)];
  camera.rotation.y = increment;
}
animate();
