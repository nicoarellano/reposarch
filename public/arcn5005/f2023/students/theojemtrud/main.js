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
//const grid = new THREE.GridHelper(50, 30);
//scene.add(grid);

//const axes = new THREE.AxesHelper();
//axes.material.depthTest = false;
//axes.renderOrder = 1;
//scene.add(axes);

const geometry = new THREE.SphereGeometry(0.5, 32, 16);

const yellowMaterial = new THREE.MeshBasicMaterial({ color: 0xffd97d });
const blueMaterial = new THREE.MeshBasicMaterial({ color: 0xfb4242 });
const redMaterial = new THREE.MeshBasicMaterial({ color: 0x63250e });
const greenMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
const AMaterial = new THREE.MeshBasicMaterial({ color: 0xffd97d });
const BMaterial = new THREE.MeshBasicMaterial({ color: 0xfb4242 });
const CMaterial = new THREE.MeshBasicMaterial({ color: 0x63250e });
const DMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });

const yellowSphere = new THREE.Mesh(geometry, yellowMaterial);
const blueSphere = new THREE.Mesh(geometry, blueMaterial);
const redSphere = new THREE.Mesh(geometry, redMaterial);
const greenSphere = new THREE.Mesh(geometry, greenMaterial);
const ASphere = new THREE.Mesh(geometry, yellowMaterial);
const BSphere = new THREE.Mesh(geometry, blueMaterial);
const CSphere = new THREE.Mesh(geometry, redMaterial);
const DSphere = new THREE.Mesh(geometry, greenMaterial);

yellowSphere.position.z = -3;
blueSphere.position.x = -3;
redSphere.position.x = 3;
greenSphere.position.z = 3;
yellowSphere.position.y = -3;
blueSphere.position.y = -3;
redSphere.position.y = -3;
greenSphere.position.y = -3;
ASphere.position.z = 3;
BSphere.position.x = 3;
CSphere.position.x = -3;
DSphere.position.z = -3;
ASphere.position.y = 5;
BSphere.position.y = 5;
CSphere.position.y = 5;
DSphere.position.y = 5;

scene.add(yellowSphere);
scene.add(blueSphere);
scene.add(redSphere);
scene.add(greenSphere);
scene.add(ASphere);
scene.add(BSphere);
scene.add(CSphere);
scene.add(DSphere);


//const loader = new THREE.GLTFLoader();

//let mesh;

//loader.load(
 // "./arcn5005/f2023/students/theojemtrud/Model/cupcake.glb",
  //function (gltf) {
    //gltf.scene.scale.x = 3;
    //gltf.scene.scale.y = 3;
    //gltf.scene.scale.z = 3;

    //mesh = gltf.scene;
    //scene.add(gltf.scene);
 // },
  //undefined,
  //function (error) {
    //console.error(error);
  //}
//);

const GLTFLoader = new THREE.GLTFLoader();

let mesh;

function loadGLB(path,scale,x,z){
  GLTFLoader.load(
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

loadGLB("./Model/cupcake.glb", 1, 0, 0);

camera.position.z = 6;
camera.position.x = 4;
camera.position.y = 6;

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

  if (mesh) mesh.rotation.y += 0.005;

  yellowSphere.rotation.x += 0.001;
  yellowSphere.rotation.y += 0.001;

  blueSphere.rotation.x += 0.001;
  blueSphere.rotation.y -= 0.001;

  redSphere.rotation.x -= 0.001;
  redSphere.rotation.y -= 0.001;

  greenSphere.rotation.x += 0.001;
  greenSphere.rotation.y -= 0.001;

  renderer.render(scene, camera);
}

animate();

const loader = new THREE.TextureLoader();

  const texture = loader.load(
    'sky.jpg',
    () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;

    });

    const fontLoader = new THREE.FontLoader();

    function createText(text, z = 0, textColor = "0x000000", size = 0.5) {
      const textValue = text;
      const textSize = size;
      fontLoader.load("./fonts/helvetiker_regular.typeface.json", function (font) {
    
        const textGeo = new THREE.TextGeometry(textValue, {
          font: font,
          size: textSize,
          height: 0.1,
          curveSegments: 4,
          bevelEnabled: true,
          bevelThickness: 0.05,
          bevelSize: 0.0,
          bevelOffset: 0,
          bevelSegments: 5,
    
        });
    
        const color = new THREE.Color();

        color.setHex(textColor);
        const textMaterial = new THREE.MeshBasicMaterial({ color: color });
        const text = new THREE.Mesh(textGeo, textMaterial);
    
        text.position.x = 7;
        text.position.y = z;
        text.position.z = 0;
      
        scene.add(text);
    
      });
    
    }
    
    createText("Theo Jemtrud", 5, "0X1f400a");
    createText("- From Montreal, Qc", 3, "0X000000");
    createText("- Favourite movie: The Big Lebowski", 2, "0X000000");
    createText("- Favourite color is blue", 1, "0X000000");
    createText("- Favourite drink Negroni", 0, "0X000000");

//Adjust the viewport to the size of the browser
window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});
