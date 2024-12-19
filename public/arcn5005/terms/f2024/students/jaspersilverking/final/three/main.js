
      // Create the scene
      const scene = new THREE.Scene();
      

      const light = new THREE.DirectionalLight(0x33333);
      light.position.set(0, 0.1, 0.1);
      scene.add(light);

      // Create the camera
      const camera = new THREE.PerspectiveCamera(
        50,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      // Create the renderer
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Load the 3D model
      const loader = new THREE.GLTFLoader();
      const modelUrl = "./models/4head.glb";
    
       
      

     
      let model = null;
      loader.load(modelUrl, function (gltf) {
        scene.add(gltf.scene);
        model = gltf.scene;

        
        // Position the camera to view entire model.
        camera.position.z = .38;
        camera.position.y = .59;
      });

      // create environment map for background and reflection
      const envmap = new THREE.RGBELoader()
        
        .load("./models/overcast_soil_puresky_4k.hdr", function (texture) {
          texture.mapping = THREE.EquirectangularReflectionMapping;

          scene.background = texture;
          scene.environment = texture;
        });
// Initialize rotation direction
let rotationDirection = 1;

// Add event listener for click to reverse rotation
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "s":
  }
  rotationDirection *= -1; // Toggle between 1 and -1
});
      // Animate the scene
      function animate() {
        requestAnimationFrame(animate);

        if (model) {
          model.rotation.y += 0.018 * rotationDirection; 
        }

        renderer.render(scene, camera);
      }
      animate();
      const controls = new THREE.OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25; // Smooth camera movement
      controls.screenSpacePanning = true; // Allow panning
      controls.maxDistance = 5; // Limit maximum zoom-out distance
      controls.minDistance = 1; // Limit minimum zoom-in distance
      
      // Listen for resize events to update the camera aspect ratio and renderer size
      window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      });