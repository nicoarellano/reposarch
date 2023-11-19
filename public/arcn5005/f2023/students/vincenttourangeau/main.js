const scene = new THREE.Scene();

const targetHeight = 600;

const size = {
  width: window.innerWidth * 0.7,
  height: targetHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 4000);

const threeCanvas = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

const grid = new THREE.GridHelper(200, 200);
scene.add(grid);

function changeGridScale(newScale) {
  grid.scale.set(newScale, newScale, newScale);
}
changeGridScale(4);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

const yellowCube = new THREE.Mesh(geometry, yellowMaterial);
const blueCube = new THREE.Mesh(geometry, blueMaterial);
const redCube = new THREE.Mesh(geometry, redMaterial);
const greenCube = new THREE.Mesh(geometry, greenMaterial);

yellowCube.position.z = -3;
blueCube.position.x = -3;
redCube.position.x = 3;
greenCube.position.z = 3;
scene.add(yellowCube);
scene.add(blueCube);
scene.add(redCube);
scene.add(greenCube);

const loader = new THREE.GLTFLoader(); 

let mesh;

function loadGLB(path, scale, x, z) {
  loader.load(
    path,
    function (gltf) {
      mesh = gltf.scene;
      mesh.scale.set(scale, scale, scale);
      mesh.position.set(x, 0, z);

      mesh.traverse(function (child) {
        if (child.isMesh) {
          child.material.map.encoding = THREE.sRGBEncoding;
          child.material.map.anisotropy = 16;

          if (child.material.normalMap) {
            child.material.normalMap.encoding = THREE.sRGBEncoding;
            child.material.normalMap.anisotropy = 16;
          }
        }
      });

      scene.add(mesh);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );
}


loadGLB("./models/Vincent_V2.glb", 5, 0, 0);
loadGLB("./models/scene.gltf", 100, 0, 0);

// Text from https://threejs.org/examples/webgl_loader_ttf.html

const fontLoader = new THREE.FontLoader();

const group = new THREE.Group();
scene.add(group);

function createText(text, elevation = 0, textColor = 0xff0000, size = 3) {
  const textValue = text;
  const textSize = size;

  const fontPath = "./fonts/helvetiker_regular.typeface.json";

  fontLoader.load(fontPath, function (font) {
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

    textGeo.computeBoundingBox();
    textGeo.computeVertexNormals();

    const textMaterial = new THREE.MeshLambertMaterial({ color: textColor });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    const centerOffset = -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

    textMesh.position.x = centerOffset;
    textMesh.position.y = elevation;
    textMesh.position.z = 0;

    textMesh.rotation.x = 0;
    textMesh.rotation.y = Math.PI * 2;

    scene.add(textMesh);
  });
}

createText("Space is the Place", 8, 0xff00ff);



camera.position.z = 13;
camera.position.x = 5;
camera.position.y = 2;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 1);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.01;

  yellowCube.rotation.x += 0.01;
  yellowCube.rotation.y += 0.01;

  blueCube.rotation.x += 0.02;
  blueCube.rotation.y -= 0.01;

  redCube.rotation.x -= 0.01;
  redCube.rotation.y -= 0.02;

  greenCube.rotation.x += 0.02;
  greenCube.rotation.y -= 0.01;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  const targetWidth = window.innerWidth;
  const targetHeight = 600;
  size.width = targetWidth;
  size.height = targetHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

// Star particles from https://threejs.org/examples/webgl_camera.html

const geometryStars = new THREE.BufferGeometry();
const verticesStars = [];

for (let i = 0; i < 10000; i++) {
  verticesStars.push(THREE.MathUtils.randFloatSpread(2000)); 
  verticesStars.push(THREE.MathUtils.randFloatSpread(2000)); 
  verticesStars.push(THREE.MathUtils.randFloatSpread(2000)); 
}

geometryStars.setAttribute('position', new THREE.Float32BufferAttribute(verticesStars, 3));

const particlesStars = new THREE.Points(geometryStars, new THREE.PointsMaterial({ color: 0x999999 }));
scene.add(particlesStars);

const geometryOtherParticles = new THREE.BufferGeometry();
const verticesOtherParticles = [];

for (let i = 0; i < 10000; i++) {
  verticesOtherParticles.push(THREE.MathUtils.randFloatSpread(1500)); 
  verticesOtherParticles.push(THREE.MathUtils.randFloatSpread(1500));
  verticesOtherParticles.push(THREE.MathUtils.randFloatSpread(1500)); 
}

geometryOtherParticles.setAttribute('position', new THREE.Float32BufferAttribute(verticesOtherParticles, 3));

const particlesOther = new THREE.Points(geometryOtherParticles, new THREE.PointsMaterial({ color: 0x999999 }));
scene.add(particlesOther);






