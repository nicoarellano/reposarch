const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas-gawlina");
console.log(threeCanvas);

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

loadGLB("./pink flower.glb",5,-5,-10)
loadGLB("./pink flower.glb",5,-10,-1)
loadGLB("./pink flower.glb",5,-17,-1)
loadGLB("./pink flower.glb",5,7,1)
loadGLB("./pink flower.glb",5,14,8)
loadGLB("./pink flower.glb",5,14,11)
loadGLB("./pink flower.glb",5,-0.5,-0.2)
loadGLB("./blender model_smaller.glb",4,2,5)
loadGLB("./quick_treeit_tree.glb",0.5,-10,-10)
loadGLB("./free_tree_1.glb",0.09,10,4)


const fontLoader = new THREE.FontLoader();

//BACKGROUND
const loader = new THREE.TextureLoader();
  const texture = loader.load(
    'background p2.jpg',
    () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    });

//FONT
function createText(text, elevation = 0, textColor = "0x000000", size = 0.5) {
  const textValue = text;
  const textSize = size;
  fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (font) {
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

    text.position.x = 2;
    text.position.y = elevation;

    scene.add(text);
  });
}

createText("Alexis Gawlina", 18, "0X9D2235F");
createText("- I love nature", 16, "0XFBDB65");
createText("- My favourite flower is a tulip", 14, "0XFBDB65");

//Camera Position
camera.position.z = 13;
camera.position.x = 5;
camera.position.y = 2;

scene.position.x = -5;
scene.position.z = 5;
scene.position.y = -3;

console.log(camera);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

//Creates the lights of the scene
const lightColor = 0xffffff;

const ambientLight = new THREE.AmbientLight(lightColor, 0.9);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 0.5);
directionalLight.position.set(10, 15, 5);
directionalLight.target.position.set(5, 5, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

  if (mesh) mesh.rotation.y += 0.02;

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
