'use client';

import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';
import { useEffect, useRef } from 'react';

export default function Three(): JSX.Element {
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene: THREE.Scene = new THREE.Scene();

    const size = {
      width: window.innerWidth,
      height: window.innerHeight * 0.75,
    };

    const aspect = size.width / size.height;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      alpha: true,
    });

    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    document.body.appendChild(renderer.domElement);

    //Creates grids and axes in the scene
    const grid = new THREE.GridHelper(50, 30);
    scene.add(grid);

    const axes = new THREE.AxesHelper();
    if (Array.isArray(axes.material)) {
      axes.material.forEach((material) => (material.depthTest = false));
    } else {
      axes.material.depthTest = false;
    }
    axes.renderOrder = 1;
    scene.add(axes);

    const geometry = new THREE.BoxGeometry(1, 1, 1);

    const yellowMaterial = new THREE.MeshLambertMaterial({ color: 0xffff00 });
    const blueMaterial = new THREE.MeshLambertMaterial({ color: 0x0000ff });
    const redMaterial = new THREE.MeshLambertMaterial({ color: 0xff0000 });
    const greenMaterial = new THREE.MeshLambertMaterial({ color: 0x00ff00 });

    const yellowCube = new THREE.Mesh(geometry, yellowMaterial);
    const blueCube = new THREE.Mesh(geometry, blueMaterial);
    const redCube = new THREE.Mesh(geometry, redMaterial);
    const greenCube = new THREE.Mesh(geometry, greenMaterial);

    const loader = new GLTFLoader();

    let mesh;

    loader.load(
      '/models/justin.glb',
      function (gltf) {
        gltf.scene.scale.x = 3;
        gltf.scene.scale.y = 3;
        gltf.scene.scale.z = 3;

        mesh = gltf.scene;
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    yellowCube.position.z = -3;
    blueCube.position.x = -3;
    redCube.position.x = 3;
    greenCube.position.z = 3;

    scene.add(yellowCube);
    scene.add(blueCube);
    scene.add(redCube);
    scene.add(greenCube);

    camera.position.z = 7;
    camera.position.x = 4;
    camera.position.y = 6;

    const controls = new OrbitControls(camera, renderer.domElement);
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

      yellowCube.rotation.x += 0.01;
      yellowCube.rotation.y += 0.01;

      blueCube.rotation.x += 0.02;
      blueCube.rotation.y -= 0.01;

      redCube.rotation.x -= 0.01;
      redCube.rotation.y -= 0.02;

      greenCube.rotation.x += 0.02;
      greenCube.rotation.y -= 0.01;

      renderer.render(scene, camera);
    }
    animate();
    window.addEventListener('resize', () => {
      size.width = window.innerWidth;
      size.height = window.innerHeight * 0.75;
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();
      renderer.setSize(size.width, size.height);
    });
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
  }, []);
  return <div ref={refContainer}></div>;
}
