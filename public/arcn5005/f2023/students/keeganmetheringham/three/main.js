const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

//Creates grids and axes in the scene
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

const geometry = new THREE.SphereGeometry(1, 5, 5);

  const spherematerial = new THREE.MeshLambertMaterial({ color: 0x1F1F1F });


const Asphere = new THREE.Mesh(geometry, spherematerial);
const Bsphere = new THREE.Mesh(geometry, spherematerial);
const Csphere = new THREE.Mesh(geometry, spherematerial);
const Dsphere = new THREE.Mesh(geometry, spherematerial);

Asphere.position.z = -2;
Bsphere.position.x = -1.5;
Csphere.position.x = 1.7;
Dsphere.position.z = 0.5;

scene.add(Asphere);
scene.add(Bsphere);
scene.add(Csphere);
scene.add(Dsphere);

//Adding in Models
const gltfLoader = new THREE.GLTFLoader();
let mesh;
function loadGLB(path,scale,x,z){
  gltfLoader.load(
         path,
            function (gltf) {
              mesh = gltf.scene;
              mesh.scale.x = scale;
              mesh.scale.y = scale;
              mesh.scale.z = scale;
                mesh.position.x = x
                mesh.position.z = z
          scene.add(mesh);
        },
          undefined,
          function (error) {
          console.error(error);
          }
  );
}

 

loadGLB("./keeganmodel.glb",5,2,5)
loadGLB("./hockey_net.glb", .10, 1, 1);


const loader = new THREE.TextureLoader();
  const texture = loader.load(
    'snowfield.jpg',
    () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    });

 

const fontLoader = new THREE.FontLoader();


function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load("./fonts_01/helvetiker_regular.typeface.json", function (font) {
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

    const color = new THREE.Color();
    color.setHex(textColor);
    const textMaterial = new THREE.MeshLambertMaterial({ color: color });
    const text = new THREE.Mesh(textGeo, textMaterial);

    text.position.x = 10;
    text.position.y = elevation;
    text.position.z = 5;

    scene.add(text);
  });
}

createText("He Shoots, He SCORES!!!", 5, "0XFF0000", 2);
createText("Keegan Metheringham", 3, "0X13265C", 1);
createText("M.Arch Grasshopper", 2, "0X577A87", 1);
createText("melomaniac", 1, "0XF9A92F", 1);
createText("Love is not Loving- David Bowie", 0, "0X84A31A", 1);

camera.position.z = 13;
camera.position.x = 5;
camera.position.y = 2;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.01;

  Asphere.rotation.x += 0.01;
  Asphere.rotation.y += 0.01;

  Bsphere.rotation.x += 0.02;
  Bsphere.rotation.y -= 0.01;

  Csphere.rotation.x -= 0.01;
  Csphere.rotation.y -= 0.02;

  Dsphere.rotation.x += 0.02;
  Dsphere.rotation.y -= 0.01;

  renderer.render(scene, camera);
}

animate();

//Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});


