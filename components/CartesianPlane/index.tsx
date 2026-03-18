'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html, Line } from '@react-three/drei';
import * as THREE from 'three';
import { Slider } from '@mui/material';
import { useContext, useState } from 'react';
import { ThemeContext } from '../../middleware/Theme/context';

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

  const [cursor, setCursor] = useState<'grab' | 'grabbing'>('grab');

  const { mode } = useContext(ThemeContext)['state']['theme'];

  return (
    <section className="w-full overflow-hidden grow flex flex-col">
      <h4 className="absolute m-8">Cartesian Plane:</h4>
      <div className="flex flex-col absolute right-10 border-2 p-5 z-20 rounded-md shadow-md">
        <h5>
          pt1: ({xPosition}, {yPosition}, {zPosition})
        </h5>
        X
        <Slider
          sx={{ width: '200px', color: 'red' }}
          min={0}
          max={10}
          aria-label="X"
          defaultValue={0}
          marks
          onChange={handleXSliderChange}
        />
        Y
        <Slider
          sx={{ width: '200px', color: 'green' }}
          aria-label="Y"
          defaultValue={0}
          min={0}
          max={10}
          marks
          onChange={handleYSliderChange}
        />
        Z
        <Slider
          sx={{ width: '200px', color: 'blue' }}
          aria-label="Z"
          defaultValue={0}
          min={0}
          max={10}
          marks
          onChange={handleZSliderChange}
        />
      </div>
      <section className="grow" style={{ cursor }}
        onMouseDown={() => setCursor('grabbing')}
        onMouseUp={() => setCursor('grab')}
        onMouseLeave={() => setCursor('grab')}
      >
        <Canvas
          orthographic
          camera={{ zoom: 60, position: [10, 15, 10] }}
          className="grow"
        >
          <OrbitControls target={[0, 2, 0]} />
          <ambientLight intensity={0.1} />
          <directionalLight
            color="#ffffff"
            intensity={1.2}
            position={[5, 8, 5]}
          />
          <ambientLight
            intensity={0.35}
          />

          <axesHelper args={[10]} />
          <gridHelper args={[10]} />
          {/* Axis labels using Html from drei */}
          <Html position={[10.2, 0, 0]} center style={{ pointerEvents: 'none' }}>
            <div
              style={{
                fontSize: '1.2rem',
                fontFamily: 'monospace',
                color: mode === 'light' ? '#b91c1c' : '#ffb4b4',
                background: 'transparent',
                padding: '0 4px',
              }}
            >
              X
            </div>
          </Html>
          <Html position={[0, 10.2, 0]} center style={{ pointerEvents: 'none' }}>
            <div
              style={{
                fontSize: '1.2rem',
                fontFamily: 'monospace',
                color: mode === 'light' ? '#047857' : '#9ff3c9',
                background: 'transparent',
                padding: '0 4px',
              }}
            >
              Y
            </div>
          </Html>
          <Html position={[0, 0, 10.2]} center style={{ pointerEvents: 'none' }}>
            <div
              style={{
                fontSize: '1.2rem',
                fontFamily: 'monospace',
                color: mode === 'light' ? '#1e3a8a' : '#bcd9ff',
                background: 'transparent',
                padding: '0 4px',
              }}
            >
              Z
            </div>
          </Html>
          {/* Dotted projection lines perpendicular to each coordinate plane */}
          <Line points={[[xPosition, yPosition, zPosition], [0, yPosition, zPosition]]} color="red" lineWidth={1} dashed dashSize={0.15} gapSize={0.1} />
          <Line points={[[xPosition, yPosition, zPosition], [xPosition, 0, zPosition]]} color="green" lineWidth={1} dashed dashSize={0.15} gapSize={0.1} />
          <Line points={[[xPosition, yPosition, zPosition], [xPosition, yPosition, 0]]} color="blue" lineWidth={1} dashed dashSize={0.15} gapSize={0.1} />
          {/* Semi-transparent projection surfaces on each coordinate plane */}
          {/* Red: YZ plane (x=0) */}
          <mesh position={[0, yPosition / 2, zPosition / 2]} rotation={[0, Math.PI / 2, 0]}>
            <planeGeometry args={[zPosition, yPosition]} />
            <meshBasicMaterial color="red" transparent opacity={0.04} side={THREE.DoubleSide} />
          </mesh>
          {/* Green: XZ plane (y=0) */}
          <mesh position={[xPosition / 2, 0, zPosition / 2]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[xPosition, zPosition]} />
            <meshBasicMaterial color="green" transparent opacity={0.04} side={THREE.DoubleSide} />
          </mesh>
          {/* Blue: XY plane (z=0) */}
          <mesh position={[xPosition / 2, yPosition / 2, 0]}>
            <planeGeometry args={[xPosition, yPosition]} />
            <meshBasicMaterial color="blue" transparent opacity={0.04} side={THREE.DoubleSide} />
          </mesh>
          <mesh position={[xPosition, yPosition, zPosition]}>
            <meshPhongMaterial
              color={mode === 'light' ? '#1a1a1a' : '#e0e0e0'}
              specular={mode === 'light' ? '#888888' : '#ffffff'}
              shininess={80}
            />
            <sphereGeometry args={[0.15]} />
            <Html
              position={[0.4, 0.1, 0]}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'monospace',
                color: mode === 'light' ? '#0e0e0e' : '#f1f1f1',
                background: mode === 'light' ? 'rgba(255,255,255,0.75)' : 'rgba(0,0,0,0.55)',
                padding: '2px 6px',
                borderRadius: '4px',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              }}
            >
              ({xPosition}, {yPosition}, {zPosition})
            </Html>
          </mesh>
        </Canvas>
      </section>
    </section>
  );
}
