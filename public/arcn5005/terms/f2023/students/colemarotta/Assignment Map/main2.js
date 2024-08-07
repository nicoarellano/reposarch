const gltfLoader = new THREE.GLTFLoader();

let mesh;

gltfLoader.load(
  "./models/Cole_Marotta_3dModel.gltf",
  function (gltf) {
    mesh = gltf.scene;
    mesh.scale.x = 1.4;
    mesh.scale.y = 1.4;
    mesh.scale.z = 1.4;
    mesh.position.x = 1;
    mesh.position.z = 0;
    scene.add(mesh);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

