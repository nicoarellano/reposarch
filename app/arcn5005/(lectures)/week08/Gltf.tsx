"use client";

import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";
import { OrbitControls } from "three-stdlib";
import { useEffect, useRef } from "react";

export default function Gltf(): JSX.Element {
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene: THREE.Scene = new THREE.Scene();

    console.log(refContainer);
    const size = {
      width: window.innerWidth,
      height: window.innerHeight * 0.75,
    };

    const aspect = size.width / size.height;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      container: refContainer,
      alpha: true,
    });

    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    document.body.appendChild(renderer.domElement);

    //Creates grids and axes in the scene
    // const grid = new THREE.GridHelper(50, 30);
    // scene.add(grid);

    const axes = new THREE.AxesHelper();
    axes.material.depthTest = false;
    axes.renderOrder = 1;
    scene.add(axes);

    const loader = new GLTFLoader();

    let mesh;

    loader.load(
      "/images/three/gltf_logo.glb",
      function (gltf) {
        gltf.scene.scale.x = 8;
        gltf.scene.scale.y = 8;
        gltf.scene.scale.z = 8;

        mesh = gltf.scene;
        scene.add(gltf.scene);
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );

    camera.position.z = 10;
    camera.position.x = 5;
    camera.position.y = 0;

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

      renderer.render(scene, camera);
    }
    animate();
    window.addEventListener("resize", () => {
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
