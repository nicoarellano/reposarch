const scene = new THREE.Scene();

const targetHeight = 600;

document.addEventListener("DOMContentLoaded", function () {
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

  const grid = new THREE.GridHelper(1000, 1000);
  grid.material.color.set(0xffffff);
  grid.material.transparent = true;
  grid.material.opacity = 0.35;
  scene.add(grid);

  function changeGridScale(newScale) {
    grid.scale.set(newScale, newScale, newScale);
  }
  changeGridScale(2);

  const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);

  const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xff9f9f });
  const blueMaterial = new THREE.MeshLambertMaterial({ color: 0xfffcdc });
  const redMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff });
  const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x94efff });

  const yellowCube = new THREE.Mesh(geometry, yellowMaterial);
  const blueCube = new THREE.Mesh(geometry, blueMaterial);
  const redCube = new THREE.Mesh(geometry, redMaterial);
  const greenCube = new THREE.Mesh(geometry, greenMaterial);

  yellowCube.position.z = -25;
  blueCube.position.x = -25;
  redCube.position.x = 25;
  greenCube.position.z = 25;
  scene.add(yellowCube);
  scene.add(blueCube);
  scene.add(redCube);
  scene.add(greenCube);

  const loader = new THREE.GLTFLoader();

  let mesh;
  let mixer;

  function loadGLB(path, scale, x, z) {
    loader.load(
      path,
      function (gltf) {
        mesh = gltf.scene;
        mesh.scale.set(scale, scale, scale);
        mesh.position.set(x, 0, z);

        mesh.traverse(function (child) {
          if (child.isMesh && child.material && child.material.map) {
            child.material.map.encoding = THREE.sRGBEncoding;
            child.material.map.anisotropy = 16;

            if (child.material.normalMap) {
              child.material.normalMap.encoding = THREE.sRGBEncoding;
              child.material.normalMap.anisotropy = 16;
            }
          }
        });

        mixer = new THREE.AnimationMixer(mesh);
        const animations = gltf.animations;

        if (animations && animations.length) {
          const animationAction = mixer.clipAction(animations[0]);
          animationAction.play();
        }

        scene.add(mesh);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  }

  loadGLB("../three/models/Vincent_V2.glb", 10, 0, 0);
  loadGLB("../three/models/scene.gltf", 0.5, 0, 0);

  // Text from https://threejs.org/examples/webgl_loader_ttf.html

  const fontLoader = new THREE.FontLoader();

  const group = new THREE.Group();
  scene.add(group);

  let textMesh;

  const textGroup = new THREE.Group();
  scene.add(textGroup);

  function createText(text, elevation = 0, textColor = 0xff0000, size = 3) {
    const textValue = text;
    const textSize = size;

    const fontPath = "../three/fonts/Roboto_Regular.json";

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

      const centerOffset =
        -0.5 * (textGeo.boundingBox.max.x - textGeo.boundingBox.min.x);

      textMesh.position.x = centerOffset;
      textMesh.position.y = elevation;
      textMesh.position.z = 0;

      textMesh.rotation.x = 0;
      textMesh.rotation.y = Math.PI * 2;

      textGroup.add(textMesh);
    });
  }

  createText("Space is the Place", 8, 0xffffff);

  camera.position.z = 30;
  camera.position.x = 15;
  camera.position.y = 15
;

  scene.position.x = 0;
  scene.position.z = 0;
  scene.position.y = 0;

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

    if (mixer) {
      mixer.update(0.016); // Pass the delta time (time since the last frame)
    }

    if (mesh) mesh.rotation.y += 0.01;

    yellowCube.rotation.x += 0.01;
    yellowCube.rotation.y += 0.01;
    blueCube.rotation.x += 0.02;
    blueCube.rotation.y -= 0.01;

    redCube.rotation.x -= 0.01;
    redCube.rotation.y -= 0.02;

    greenCube.rotation.x += 0.02;
    greenCube.rotation.y -= 0.01;

    if (textGroup) {
      textGroup.rotation.y += 0.01;
    }

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

for (let i = 0; i < 40000; i++) {
  verticesStars.push(THREE.MathUtils.randFloatSpread(2000)); 
  verticesStars.push(THREE.MathUtils.randFloatSpread(2000)); 
  verticesStars.push(THREE.MathUtils.randFloatSpread(2000)); 
}

geometryStars.setAttribute('position', new THREE.Float32BufferAttribute(verticesStars, 3));

const particlesStars = new THREE.Points(geometryStars, new THREE.PointsMaterial({ color: 0x94EFFF }));
scene.add(particlesStars);

const geometryOtherParticles = new THREE.BufferGeometry();
const verticesOtherParticles = [];

for (let i = 0; i < 40000; i++) {
  verticesOtherParticles.push(THREE.MathUtils.randFloatSpread(1500)); 
  verticesOtherParticles.push(THREE.MathUtils.randFloatSpread(1500));
  verticesOtherParticles.push(THREE.MathUtils.randFloatSpread(1500)); 
}

geometryOtherParticles.setAttribute('position', new THREE.Float32BufferAttribute(verticesOtherParticles, 3));

const particlesOther = new THREE.Points(geometryOtherParticles, new THREE.PointsMaterial({ color: 0xFF9F9F }));
scene.add(particlesOther);


const geometryMidParticles = new THREE.BufferGeometry();
const verticesMidParticles = [];

for (let i = 0; i < 5000; i++) {
  verticesMidParticles.push(THREE.MathUtils.randFloatSpread(800)); 
  verticesMidParticles.push(THREE.MathUtils.randFloatSpread(800));
  verticesMidParticles.push(THREE.MathUtils.randFloatSpread(800)); 
}

geometryMidParticles.setAttribute('position', new THREE.Float32BufferAttribute(verticesMidParticles, 3));

const particlesMid = new THREE.Points(geometryMidParticles, new THREE.PointsMaterial({ color: 0xFFFCDC }));
scene.add(particlesMid);

const geometryCloseParticles = new THREE.BufferGeometry();
const verticesCloseParticles = [];

for (let i = 0; i < 5000; i++) {
  verticesCloseParticles.push(THREE.MathUtils.randFloatSpread(600)); 
  verticesCloseParticles.push(THREE.MathUtils.randFloatSpread(600));
  verticesCloseParticles.push(THREE.MathUtils.randFloatSpread(600)); 
}

geometryCloseParticles.setAttribute('position', new THREE.Float32BufferAttribute(verticesCloseParticles, 3));

const particlesClose = new THREE.Points(geometryCloseParticles, new THREE.PointsMaterial({ color: 0xFFFFFF }));
scene.add(particlesClose);




});