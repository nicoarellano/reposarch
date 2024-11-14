const scene = new THREE.Scene();

const size = {
  width: window.innerWidth,
  height: window.innerHeight,
};

const aspect = size.width / size.height;
const camera = new THREE.PerspectiveCamera(100, aspect, 1, 2000);

// Sets up the renderer, fetching the canvas of the HTML
const threeCanvas = document.getElementById("three-canvas-shagana");
console.log(threeCanvas);

const renderer = new THREE.WebGLRenderer({
  canvas: threeCanvas,
  alpha: true,
});

renderer.setSize(size.width, size.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// Creates grids and axes in the scene
const grid = new THREE.GridHelper(1, 1);
scene.add(grid);

const axes = new THREE.AxesHelper();
axes.material.depthTest = false;
axes.renderOrder = 1;
scene.add(axes);

// Function to create a puffy 3D heart shape
function createPuffyHeartMesh(color) {
  const x = 0, y = 0;
  const heartShape = new THREE.Shape();
  heartShape.moveTo(x + 0.25, y + 0.25);
  heartShape.bezierCurveTo(x + 0.25, y + 0.25, x + 0.20, y, x, y);
  heartShape.bezierCurveTo(x - 0.30, y, x - 0.30, y + 0.35, x - 0.30, y + 0.35);
  heartShape.bezierCurveTo(x - 0.30, y + 0.55, x - 0.10, y + 0.77, x + 0.25, y + 1.0);
  heartShape.bezierCurveTo(x + 0.6, y + 0.77, x + 0.8, y + 0.55, x + 0.8, y + 0.35);
  heartShape.bezierCurveTo(x + 0.8, y + 0.35, x + 0.8, y, x + 0.5, y);

  const extrudeSettings = {
    depth: 0.4,
    bevelEnabled: true,
    bevelSegments: 10,
    steps: 2,
    bevelSize: 0.1,
    bevelThickness: 0.1,
  };

  const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  const material = new THREE.MeshLambertMaterial({ color: color });
  const heart = new THREE.Mesh(geometry, material);
  heart.scale.set(2, 2, 2);
  return heart;
}

const yellowHeart = createPuffyHeartMesh(0xD63333);
const blueHeart = createPuffyHeartMesh(0xD63333);
const redHeart = createPuffyHeartMesh(0xD63333);
const greenHeart = createPuffyHeartMesh(0xD63333);

yellowHeart.position.set(-6, 3, 6);
yellowHeart.rotation.x = Math.PI; 
blueHeart.position.set(-3, 3, 0);
blueHeart.rotation.x = Math.PI;
redHeart.position.set(3, 1, 9);
redHeart.rotation.x = Math.PI;
greenHeart.position.set(0, 3, 15);
greenHeart.rotation.x = Math.PI;


scene.add(yellowHeart);
scene.add(blueHeart);
scene.add(greenHeart);
scene.add(blueHeart);



const gltfLoader = new THREE.GLTFLoader();
let deerMesh;
const moveSpeed = 0.1; // Speed for WASD movement

// Load the deer model and make it movable with WASD
gltfLoader.load(
  "./models/deer.glb",
  function (gltf) {
    deerMesh = gltf.scene;
    deerMesh.scale.set(1, 1, 1);
    deerMesh.position.set(5, 1, 8);
    scene.add(deerMesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

gltfLoader.load("./models/grass.glb", function (gltf) {
  const grassMesh = gltf.scene;
  grassMesh.scale.set(0.1, 0.1, 0.1);

  // Traverse through the mesh to apply the green color to all materials
  grassMesh.traverse((child) => {
    if (child.isMesh) {
      child.material = new THREE.MeshLambertMaterial({ color: 0x648a5e }); // Set green color
    }
  });

  scene.add(grassMesh);
}, undefined, function (error) {
  console.error(error);
});


gltfLoader.load("./models/shagana3d.glb", function (gltf) {
  const justinMesh = gltf.scene;
  justinMesh.scale.set(3, 3, 3); // Scaling the model
  
  // Moving the mesh
  justinMesh.position.set(0, 0, 0); // Move to (x=5, y=0, z=0)

  // Rotating the mesh
  justinMesh.rotation.set(0, Math.PI / 0.8, 0); // Rotate 90 degrees around the Y-axis (in radians)

  scene.add(justinMesh);
}, undefined, function (error) { console.error(error); });


// Load the clouds model and add an animation on click
gltfLoader.load("./models/clouds.glb", function (gltf) {
  const cloudMesh = gltf.scene;
  const originalScale = new THREE.Vector3(1, 1, 1); // Original scale of the clouds
  const enlargedScale = new THREE.Vector3(1.2, 1.2, 1.2); // Scale factor when enlarged
  let isEnlarged = false; // Track if the cloud is currently enlarged

  cloudMesh.scale.copy(originalScale); // Set to original scale initially
  scene.add(cloudMesh);

  // Function to toggle cloud scale
  function toggleScale() {
    const targetScale = isEnlarged ? originalScale : enlargedScale;
    const duration = 300; // Duration of animation in ms
    const startTime = performance.now();

    function animate() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Lerp the scale to the target scale
      cloudMesh.scale.lerpVectors(isEnlarged ? enlargedScale : originalScale, targetScale, progress);

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue animation if not yet complete
      } else {
        isEnlarged = !isEnlarged; // Toggle the enlargement state
      }
    }
    animate();
  }

  // Add click event listener to trigger the scale toggle
  window.addEventListener("click", (event) => {
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    // Convert mouse position to normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Update the raycaster with camera and mouse position
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(cloudMesh, true);
    
    if (intersects.length > 0) {
      toggleScale(); // Trigger scale toggle if cloud is clicked
    }
  });

}, undefined, function (error) {
  console.error(error);
});


// Load the clouds model and add an animation on click
gltfLoader.load("./models/clouds.glb", function (gltf) {
  const cloudMesh = gltf.scene;
  const originalScale = new THREE.Vector3(1, 1, 1); // Original scale of the clouds
  const enlargedScale = new THREE.Vector3(1.2, 1.2, 1.2); // Scale factor when enlarged
  let isEnlarged = false; // Track if the cloud is currently enlarged

  cloudMesh.scale.set(0.5, 0.5, 0.5); // Set to original scale initially
  scene.add(cloudMesh);

  // Function to toggle cloud scale
  function toggleScale() {
    const targetScale = isEnlarged ? originalScale : enlargedScale;
    const duration = 300; // Duration of animation in ms
    const startTime = performance.now();

    function animate() {
      const elapsed = performance.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Lerp the scale to the target scale
      cloudMesh.scale.lerpVectors(isEnlarged ? enlargedScale : originalScale, targetScale, progress);

      if (progress < 1) {
        requestAnimationFrame(animate); // Continue animation if not yet complete
      } else {
        isEnlarged = !isEnlarged; // Toggle the enlargement state
      }
    }
    animate();
  }

  // Add click event listener to trigger the scale toggle
  window.addEventListener("click", (event) => {
    const mouse = new THREE.Vector2();
    const raycaster = new THREE.Raycaster();

    // Convert mouse position to normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    // Update the raycaster with camera and mouse position
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(cloudMesh, true);
    
    if (intersects.length > 0) {
      toggleScale(); // Trigger scale toggle if cloud is clicked
    }
  });

}, undefined, function (error) {
  console.error(error);
});





// Load the sword model and add click interaction for a wiggle effect
gltfLoader.load("./models/sword.glb", function (gltf) {
  const swordMesh = gltf.scene;
  swordMesh.scale.set(1, 1, 1);
  swordMesh.rotation.set(Math.PI / 2, Math.PI, 0);
  swordMesh.position.set(-1, 3, 8);
  scene.add(swordMesh);

  // Add event listener for the click event
  swordMesh.userData.isAnimating = false; // Flag to track if it's already animating

  // Detect clicks on the sword and trigger the wiggle animation
  document.addEventListener("click", (event) => {
    // Check if sword is clicked
    const mouse = new THREE.Vector2(
      (event.clientX / window.innerWidth) * 2 - 1,
      -(event.clientY / window.innerHeight) * 2 + 1
    );
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(swordMesh);

    if (intersects.length > 0 && !swordMesh.userData.isAnimating) {
      swordMesh.userData.isAnimating = true; // Set animation flag

      // Define wiggle animation
      const wiggleAmount = 0.1; // Rotation in radians
      const wiggleSpeed = 100; // Speed in ms
      let wiggleCount = 0;

      function wiggle() {
        if (wiggleCount < 6) { // Number of wiggles
          swordMesh.rotation.z += (wiggleCount % 2 === 0 ? -wiggleAmount : wiggleAmount);
          wiggleCount++;
          setTimeout(wiggle, wiggleSpeed);
        } else {
          swordMesh.userData.isAnimating = false; // Reset flag when done
          swordMesh.rotation.z = 0; // Reset rotation
        }
      }

      wiggle(); // Start the wiggle animation
    }
  });
}, undefined, function (error) {
  console.error(error);
});


// Keyboard event listener for WASD movement and arrow key rotation
document.addEventListener("keydown", function (event) {
  if (!deerMesh) return; // Ensure deerMesh is loaded before moving it
  
  const rotationSpeed = 0.05; // Adjust rotation speed as needed
  
  switch (event.key) {
    // WASD for movement
    case "w": deerMesh.position.z -= moveSpeed; break;
    case "s": deerMesh.position.z += moveSpeed; break;
    case "a": deerMesh.position.x -= moveSpeed; break;
    case "d": deerMesh.position.x += moveSpeed; break;
    
    // Arrow keys for rotation
    case "ArrowLeft": // Rotate left
      deerMesh.rotation.y += rotationSpeed;
      break;
    case "ArrowRight": // Rotate right
      deerMesh.rotation.y -= rotationSpeed;
      break;
  }
});



const fontLoader = new THREE.FontLoader();

function createText(text, elevation = 0, textColor = "0x957e8f", size = 0.5, angleX = 0, angleY = 0, angleZ = 0) {
  fontLoader.load("./fonts/Choco Bold_Regular.json", function (font) {
    const textGeo = new THREE.TextGeometry(text, {
      font: font,
      size: size,
      height: 0.1,
      curveSegments: 4,
      bevelEnabled: true,
      bevelThickness: 0.1,
      bevelSize: 0.0,
      bevelOffset: 0,
      bevelSegments: 5,
    });

    const textMaterial = new THREE.MeshLambertMaterial({ color: new THREE.Color(textColor) });
    const textMesh = new THREE.Mesh(textGeo, textMaterial);

    // Set the position with elevation
    textMesh.position.set(-25, elevation, 5);

    // Set the rotation with angles in radians (you can adjust these values)
    textMesh.rotation.set(0, 0.8, 0);

    scene.add(textMesh);
  });
}

// Create multiple pieces of text with different positions and rotations
createText("Shagana's To Do's:", 15, 0x6d4194, 2, Math.PI / 4, 0, 0); // Rotate 45 degrees on X-axis
createText("1. Walk the deer (wasd + < > keys).", 13, 0x6d4194, 1, 0, Math.PI / 6, 0); // Rotate 30 degrees on Y-axis
createText("2. Make the clouds dance (click).", 11, 0x6d4194, 1, 0, 0, Math.PI / 8); // Rotate 22.5 degrees on Z-axis
createText("3. Try to pull the sword (click).", 9, 0x6d4194, 1, Math.PI / 8, Math.PI / 8, Math.PI / 8); // Rotate on all axes
createText("4. Find the fourth heart ", 7, 0x6d4194, 1, 0, 0, 0); // No rotation
createText("     (click + drag sky).", 5, 0x6d4194, 1, 0, 0, 0); // No rotation


camera.position.set(6, 9, 25);
scene.position.set(0, -3, 3);

const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const lightColor = 0xffffff;
const ambientLight = new THREE.AmbientLight(lightColor, 0.3);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(lightColor, 0.8);
directionalLight.position.set(5, 10, 5);
directionalLight.target.position.set(0, 3, 0);
scene.add(directionalLight);
scene.add(directionalLight.target);

function animate() {
  requestAnimationFrame(animate);

  yellowHeart.rotation.x += 0.0;
  yellowHeart.rotation.y += 0.01;
  blueHeart.rotation.x += 0.0;
  blueHeart.rotation.y -= 0.01;
  redHeart.rotation.x -= 0.0;
  redHeart.rotation.y -= 0.01;
  greenHeart.rotation.x += 0.0;
  greenHeart.rotation.y -= 0.01;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  size.width = window.innerWidth;
  size.height = window.innerHeight;
  camera.aspect = size.width / size.height;
  camera.updateProjectionMatrix();
  renderer.setSize(size.width, size.height);
});

const gradientMaterial = new THREE.ShaderMaterial({
  uniforms: {
    color1: { type: 'vec3', value: new THREE.Color(0xff9a9e) },
    color2: { type: 'vec3', value: new THREE.Color(0x84c3c3) }
  },
  vertexShader: `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    void main() {
      gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
    }
  `,
  side: THREE.BackSide
});

const gradientBackground = new THREE.Mesh(new THREE.SphereGeometry(1000, 32, 32), gradientMaterial);
scene.add(gradientBackground);

