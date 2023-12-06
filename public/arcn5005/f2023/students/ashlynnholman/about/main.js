const scene = new THREE.Scene();

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

const grid = new THREE.GridHelper(50, 30);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

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

loadAndAddModel(
  "./ifc/Hemi/scene.gltf",
  0.05,
  new THREE.Vector3(4, 0, 2),
  "rest"
);
loadAndAddModel(
  "./ifc/Flowers/scene.gltf",
  0.1,
  new THREE.Vector3(-3, 0, 3),
  "spin"
);
loadAndAddModel(
  "./ifc/Bone/scene.gltf",
  0.005,
  new THREE.Vector3(4, 4, 4),
  "spin"
);
loadAndAddModel("./ifc/AshMESH.glb", 3.0, new THREE.Vector3(0, -1, 0), "rest", {
  x: 0,
  y: Math.PI / 2,
  z: 0,
});

document.addEventListener("mousemove", function (event) {
  const mouse = new THREE.Vector2(
    (event.clientX / window.innerWidth) * 2 - 1,
    -(event.clientY / window.innerHeight) * 2 + 1
  );

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);

  const intersects = raycaster.intersectObject(models[0].mesh, true);

  if (intersects.length > 0) {
    models[0].behavior = "rest";
  } else {
    models[0].behavior = "rest";
  }
});

function animate() {
  requestAnimationFrame(animate);

  models.forEach((model, index) => {
    if (model.behavior === "spin") {
      model.mesh.rotation.y += 0.01;
    }

    if (model.behavior !== "rest" && model.behavior !== "spin") {
      model.mesh.position.y -= 0.01;
    }
  });

  renderer.render(scene, camera);
}

animate();

////
camera.position.z = 7;
camera.position.x = 4;
camera.position.y = 6;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Add elements to grid//
///PICTURES//
function createPicture(path, initialPosition, width, height) {
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(path);
  const planeGeometry = new THREE.PlaneGeometry(width, height);
  const planeMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    side: THREE.DoubleSide,
  });
  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.position.copy(initialPosition);
  scene.add(plane);
  return plane;
}
//Picture Position//
const picture1 = createPicture(
  "./ifc/beach.jpg",
  new THREE.Vector3(0, 5, -10),
  10,
  10
);
const picture2 = createPicture(
  "./ifc/fam.jpg",
  new THREE.Vector3(10, 5, -5),
  10,
  10
);
const picture3 = createPicture(
  "./ifc/lighthouse.jpg",
  new THREE.Vector3(-10, 5, -5),
  10,
  10
);

///TEXT//
const fontloader = new THREE.FontLoader();
function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textsize = size;
  fontloader.load(
    "./ifc/Fonts/helvetiker_regular.typeface.json",
    function (font) {
      const textGeo = new THREE.TextGeometry(textValue, {
        font: font,
        size: textsize,
        height: 0.1,
        curveSegments: 4,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.0,
        beveloffset: 0,
        bevelSegments: 5,
      });

      const color = new THREE.Color();
      color.setHex(textColor);
      const textMaterial = new THREE.MeshLambertMaterial({ color: color });
      const text = new THREE.Mesh(textGeo, textMaterial);

      text.position.x = -15;
      text.position.y = elevation;

      scene.add(text);
    }
  );
}

createText("Ashlynn Holman", 12, "0x71797E");
createText("- Hometown: Truro, Nova Scotia", 10, "0x818589");
createText("- I have a Golden Retriever", 9, "0x818589");
createText("- The beach is my happy place", 8, "0x818589");
createText("- Yellow is my favorite color", 7, "0x818589");

/////GRASS//
const groundGeometry = new THREE.PlaneGeometry(50, 50);
const groundTexture = new THREE.TextureLoader().load(
  "./ifc/grass_texture_01.jpg"
);
const groundMaterial = new THREE.MeshStandardMaterial({
  map: groundTexture,
  side: THREE.DoubleSide,
});
const groundPlane = new THREE.Mesh(groundGeometry, groundMaterial);
groundPlane.rotation.x = -Math.PI / 2;
scene.add(groundPlane);

grid.position.y = -0.1;

groundPlane.position.y = -0.2;

renderer.shadowMap.enabled = true;

groundPlane.receiveShadow = true;

camera.position.z = 7;
camera.position.y = 10;

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
