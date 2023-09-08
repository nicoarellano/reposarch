"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Slider } from "@mui/material";
import { useContext, useState } from "react";
import { ThemeContext } from "../../middleware/Theme/context";

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

  const { mode } = useContext(ThemeContext)["state"]["theme"];

  return (
    <section className="w-screen overflow-hidden grow flex flex-col">
      <h4 className="absolute m-8">Cartesian Plane:</h4>
      <div className="flex flex-col absolute right-10 border-2 p-5 z-20 rounded-md shadow-md">
        <h5>
          pt1: ({xPosition}, {yPosition}, {zPosition})
        </h5>
        X
        <Slider
          sx={{ width: "200px", color: "red" }}
          min={0}
          max={10}
          aria-label="X"
          defaultValue={0}
          marks
          onChange={handleXSliderChange}
        />
        Y
        <Slider
          sx={{ width: "200px", color: "green" }}
          aria-label="Y"
          defaultValue={0}
          min={0}
          max={10}
          marks
          onChange={handleYSliderChange}
        />
        Z
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
        <Canvas
          orthographic
          camera={{ zoom: 60, position: [10, 10, 10] }}
          className="grow"
        >
          <OrbitControls />
          <ambientLight intensity={0.1} />
          <directionalLight
            color={mode === "light" ? "#0e0e0e" : "#f1f1f1"}
            position={[2, 2, 5]}
          />
          <ambientLight
            color={mode === "light" ? "#0e0e0e" : "#f1f1f1"}
            intensity={0.1}
          />

          <axesHelper args={[10]} />
          <gridHelper args={[10]} />
          <mesh position={[xPosition, yPosition, zPosition]}>
            <meshStandardMaterial
              color={mode === "light" ? "#0e0e0e" : "#f1f1f1"}
            />
            <sphereGeometry args={[0.1]} />
          </mesh>
        </Canvas>
      </section>
    </section>
  );
}
