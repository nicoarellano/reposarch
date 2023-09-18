"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";

export default function MyThree(): JSX.Element {
  const refContainer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // === THREE.JS CODE START ===
    const scene: THREE.Scene = new THREE.Scene();
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);
    const geometry: THREE.BoxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial({
      color: 0xffff00,
    });
    const cube: THREE.Mesh = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    const animate = function (): void {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return <div ref={refContainer}></div>;
}
