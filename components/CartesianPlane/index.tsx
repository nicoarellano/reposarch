"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Slider } from "@mui/material";
import { useState } from "react";

export default function CartesianPlane() {
  const [xPosition, setXPosition] = useState<number>(0);
  const [yPosition, setYPosition] = useState(0);
  const [zPosition, setZPosition] = useState(0);

  const handleXSliderChange = (e: Event, value: number | number[]) => {
    setXPosition(value as number);
  };

  const handleYSliderChange = (event: Event, value: number | number[]) => {
    setYPosition(value as number);
  };

  const handleZSliderChange = (event: Event, value: number | number[]) => {
    setZPosition(value as number);
  };

  return (
    <section className="w-screen overflow-hidden grow flex flex-col">
      <div className="flex flex-col absolute right-10 border-2 p-7 z-20">
        X:
        <Slider
          sx={{ width: "200px", color: "red" }}
          min={0}
          max={10}
          aria-label="X"
          defaultValue={0}
          marks
          onChange={handleXSliderChange}
        />
        Y:
        <Slider
          sx={{ width: "200px", color: "green" }}
          aria-label="Y"
          defaultValue={0}
          min={0}
          max={10}
          marks
          onChange={handleYSliderChange}
        />
        Z:
        <Slider
          sx={{ width: "200px", color: "blue" }}
          aria-label="Z"
          defaultValue={0}
          min={0}
          max={10}
          marks
          onChange={handleZSliderChange}
        />
      </div>
      <section className="grow">
        <Canvas className="grow">
          <ambientLight intensity={0.1} />
          <directionalLight color="white" position={[2, 2, 5]} />
          <ambientLight color="white" intensity={0.1} />
          <OrbitControls />
          <axesHelper args={[10]} />
          <gridHelper args={[10]} />
          <mesh position={[xPosition, zPosition, yPosition]}>
            <meshStandardMaterial color="gray" />
            <sphereGeometry args={[0.1]} />
          </mesh>
        </Canvas>
      </section>
    </section>
  );
}
