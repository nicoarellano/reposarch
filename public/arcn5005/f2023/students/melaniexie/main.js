let scene, camera, renderer, directionalLight, controls, loader;
let threeCanvas;
let cube,cube2,Torus,mesh,groundGeometry,mesh2;

function init(){
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
        75,window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set (-40,50,100);
    scene.position.set (0,-30,0)
    

    renderer = new THREE.WebGLRenderer({
        antialias:true,
        canvas: threeCanvas,
        alpha:true});
    renderer.setSize(window.innerWidth, window.innerHeight)
    threeCanvas = document.getElementById("three-canvas");
    
    document.body.appendChild(renderer.domElement);

    //Cube and Mesh
    const geometry = new THREE.BoxGeometry(15,15,15);
    const material = new THREE.MeshNormalMaterial();
    cube = new THREE.Mesh( geometry, material);
    cube.position.set(-50,20,0);
    scene.add( cube);

    const geometry1 = new THREE.IcosahedronGeometry(12,0);
    const material1 = new THREE.MeshNormalMaterial();
    cube2 = new THREE.Mesh(geometry1, material1);
    cube2.position.set (-50, 60,0);
    scene.add(cube2);

    const geometry2 = new THREE.TorusKnotGeometry( 10, 3, 90, 16 );
    const material2 = new THREE.MeshNormalMaterial();
    Torus = new THREE.Mesh(geometry2,material2);
    Torus.position.set (50, 40,40);
    scene.add(Torus);
    


    const gltfLoader = new THREE.GLTFLoader();
    const mesh ='models/Figure2.glb';
    gltfLoader.load(mesh, (gltf) => {
        const root = gltf.scene;
        root.scale.x = 10;
        root.scale.y = 10;
        root.scale.z = 10;
        scene.add(root);

    })
    
    const mesh2 ='models/Donut1.glb';
    gltfLoader.load(mesh2, (gltf) => {
        const root2 = gltf.scene;
        root2.scale.x = 25;
        root2.scale.y = 25;
        root2.scale.z = 25;
        scene.add(root2);
       })




    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    //lighting
    const lightColor = 0xffffff;
    const ambientLight = new THREE.AmbientLight(lightColor, 1.0);
    scene.add(ambientLight);

    directionalLight = new THREE.DirectionalLight(lightColor, 0.8);
    directionalLight.position.set(5, 30, 5);
    directionalLight.target.position.set(0, 20, 0);
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    //background
    loader = new THREE.TextureLoader();
    const texture = loader.load(
    'images/library.jpg',
    () => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.colorSpace = THREE.SRGBColorSpace;
      scene.background = texture;
    });
    
    //ground
    groundGeometry = new THREE.PlaneGeometry( 150,60 );
    const groundMaterial = new THREE.MeshStandardMaterial( { roughness: 0.8, metalness: 0.4 } );
    const ground = new THREE.Mesh( groundGeometry, groundMaterial );
    ground.rotation.x = Math.PI * - 0.5;
    scene.add( ground );

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load( 'textures/concrete.png', function ( map ) {

        map.wrapS = THREE.RepeatWrapping;
        map.wrapT = THREE.RepeatWrapping;
        map.anisotropy = 32;
        map.repeat.set( 8,8);
        map.colorSpace = THREE.SRGBColorSpace;
        groundMaterial.map = map;
        groundMaterial.needsUpdate = true;

    } );

    ////text ///
    const fontLoader = new THREE.FontLoader();

    function createText(text, elevation = 20, textColor = "0000ff", size = 5) {
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

    text.position.x = 20;
    text.position.y = elevation;

    scene.add(text);
  });
}

createText("THREE.JS EXERCISE", 50, "0XFF00FF");
createText("-Blender Model", 40, "0XFF0000");
createText("-Photogrammetry Model", 30, "0XFF0000");
createText("-Three.js geometry", 20, "0XFF0000");
//createText("- Amateur programmer", 0, "0XFF0000");



    
}



function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y -= 0.02;

    cube2.rotation.x += 0.01;
    cube2.rotation.y -= 0.01;
    renderer.render(scene,camera);

    Torus.rotation.x +=0.02;
    Torus.rotation.y -=0.02;

    if (mesh) mesh.rotation.y += 0.1;
    
}

function onWindowResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth,window.innerHeight);
}
window.addEventListener('resize', onWindowResize, false);

init();
animate();

























