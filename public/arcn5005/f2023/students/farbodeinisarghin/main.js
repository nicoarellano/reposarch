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

const rgeometry = new THREE.RingGeometry( 1, 2, 6 );

const yellowMaterial = new THREE.MeshLambertMaterial( { color: 0xffff00, side: THREE.DoubleSide, wireframe: true, wireframelinewidth: 40 } );
const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff, side: THREE.DoubleSide });
const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000, side: THREE.DoubleSide });
const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
const yelllowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00, side: THREE.DoubleSide });

const yellowCube = new THREE.Mesh(rgeometry, yellowMaterial);
const blueCube = new THREE.Mesh(rgeometry, blueMaterial);
const redCube = new THREE.Mesh(rgeometry, redMaterial);
const greenCube = new THREE.Mesh(rgeometry, greenMaterial);
const yelllowCube = new THREE.Mesh(rgeometry, yellowMaterial);

yellowCube.position.z = -3;
blueCube.position.x = -3;
redCube.position.x = 3;
greenCube.position.z = 3;
yelllowCube.position.x = 3;

scene.add(yellowCube);
scene.add(blueCube);
// scene.add(redCube);
scene.add(greenCube);
scene.add(yelllowCube);

const t1geometry = new THREE.TorusGeometry(15, 1, 16, 100); 
const t2geometry = new THREE.TorusGeometry(15, 1, 16, 100);
const t3geometry = new THREE.TorusGeometry(15, 1, 16, 100);
const t4geometry = new THREE.TorusGeometry(15, 1, 16, 100);

const t1material = new THREE.MeshNormalMaterial( { color: 0xffff00 } ); 
const t2material = new THREE.MeshNormalMaterial( { color: 0x00ff00 } );
const t3material = new THREE.MeshNormalMaterial( { color: 0xff0000 } );
const t4material = new THREE.MeshNormalMaterial( { color: 0xff0000 } );

const torus1 = new THREE.Mesh(t1geometry, t1material); 
const torus2 = new THREE.Mesh(t2geometry, t2material);
const torus3 = new THREE.Mesh(t3geometry, t3material);
const torus4 = new THREE.Mesh(t4geometry, t4material);

scene.add(torus1);
scene.add(torus2);
scene.add(torus3);
scene.add(torus4);

const knotgeometry = new THREE.TorusKnotGeometry( 5, 1, 100, 16 ); 
const knotmaterial = new THREE.MeshLambertMaterial( { color: 0xff0000 } ); 
const torusKnot1 = new THREE.Mesh( knotgeometry, knotmaterial ); 
torusKnot1.position.y = 30;
scene.add( torusKnot1 );


const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "/reposarch/public/arcn5005/f2023/students/farbodeinisarghin/models/cats.glb",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 10;
    mesh.scale.y = 10;
    mesh.scale.z = 10;

    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

const loader = new THREE.TextureLoader();
const texture = loader.load(
  'sky.jpg',
  ()=>{
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;
  scene.background = texture;
});

const fontLoader = new THREE.FontLoader();

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

createText("Farbod Eini Sarghin", 5, "0XFF00FF");
createText("- Architecture student at CU", 3, "0XFF0000");
createText("- Cat Lover ", 2, "0XFF0000");
createText("- Playing the piano ", 1, "0XFF0000");
createText("- Favorite colour is yellow", 0, "0XFF0000");

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

  yellowCube.rotation.x += 0.2;
  yellowCube.rotation.y += 0.2;

  yelllowCube.rotation.x += 0.2;
  yelllowCube.rotation.y += 0.2;

  blueCube.rotation.x += 0.2;
  blueCube.rotation.y -= 0.2;

  redCube.rotation.z -= 0.2;
  redCube.rotation.y -= 0.2;

  greenCube.rotation.x += 0.2;
  greenCube.rotation.y -= 0.2;

  torus1.rotation.y += 0.05;

  torus2.rotation.x += 0.05;
  torus2.rotation.y -= 0.05;

  torus3.rotation.x -= 0.05;
  torus3.rotation.y += 0.05;

  torus4.rotation.x -= 0.05;

  torusKnot1.rotation.y -= 0.05;

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
