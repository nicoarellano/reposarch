"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function Three() {
  return (
    <section className=" h-screen">
      <Canvas className="h-fit">
        <mesh>
          <sphereGeometry args={[0.1]} position={new THREE.Vector3(1, 2, 3)} />
          <meshStandardMaterial />
          <ambientLight intensity={0.1} />
          <directionalLight color="gray" position={[0, 0, 5]} />
          <OrbitControls />
          <axesHelper args={[10]} />
          <gridHelper args={[10]} />
        </mesh>
      </Canvas>
    </section>
  );
}
