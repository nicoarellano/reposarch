const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

//slideshow script

let slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("dot");
              if (n > slides.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
            };

//Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

//Plane Geometry
const planegeometry = new THREE.PlaneGeometry (20,20);
const planematerial = new THREE.MeshBasicMaterial ({color:0X707948, side: THREE.DoubleSide});
const plane = new THREE.Mesh (planegeometry, planematerial)
plane.rotation.x = Math.PI/2;
plane.position.x = 2;
plane.position.z = 4;
plane.position.y = -1;
scene.add(plane);

//Second Plane Geometry
const plane2geometry = new THREE.PlaneGeometry (12,8);
const plane2material = new THREE.MeshBasicMaterial ({color:0XFFFFFF, side: THREE.DoubleSide});
const plane2 = new THREE.Mesh (plane2geometry, plane2material)
plane2.position.x = 10.5;
plane2.position.z = -4;
plane2.position.y = 6.5;
scene.add(plane2);



//Box Geometry
const geometry = new THREE.SphereGeometry(1, 5, 5);

const sphereMaterial = new THREE.MeshLambertMaterial({ color: 0x4b3621 });

const ASphere = new THREE.Mesh(geometry, sphereMaterial);
const BSphere = new THREE.Mesh(geometry, sphereMaterial);
const CSphere = new THREE.Mesh(geometry, sphereMaterial);
const DSphere = new THREE.Mesh(geometry, sphereMaterial);

ASphere.position.x = 2;
ASphere.position.z = 9.5;
BSphere.position.x = -3;
BSphere.position.z = 4;
CSphere.position.x = 7;
CSphere.position.z = 6;
DSphere.position.z = 0.5;
DSphere.position.x = -1;

scene.add(ASphere);
scene.add(BSphere);
scene.add(CSphere);
scene.add(DSphere);

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

loadGLB("./models/volcano.glb",5,2,5)
loadGLB("./models/plant_island.glb", 1, 6, 8);
loadGLB("./models/plant_island.glb", 1, -3, 8);
loadGLB("./models/plant_island.glb", 1, -1, 9);
loadGLB("./models/plant_island.glb", 1, -1, -0.5);
loadGLB("./models/plant_island.glb", 1, 7, 3);
loadGLB("./models/daphnes_lava.glb", 0.4, -1, 9.5);

const loader = new THREE.TextureLoader();
  const texture = loader.load(
    'mapslarge.png',
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

    text.position.x = 6;
    text.position.y = z;
    text.position.z = -4;

    scene.add(text);
  });
}

createText("Daphne Stams", 9, "0X923B65");
createText("From Vancouver, B.C.", 7, "0X707948");
createText("Background in Geography", 6, "0X707948");
createText("Favourite color is olive green", 5, "0X707948");
createText("Big fan of volcanoes", 4, "0X707948");

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

const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 1);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

  ASphere.rotation.x += 0.01;
  ASphere.rotation.y += 0.01;

  BSphere.rotation.x += 0.005;
  BSphere.rotation.y -= 0.01;

  CSphere.rotation.x -= 0.01;
  CSphere.rotation.y -= 0.005;

  DSphere.rotation.x += 0.01;
  DSphere.rotation.y -= 0.005;

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

