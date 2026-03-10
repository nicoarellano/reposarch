'use client';

import * as THREE from 'three';
import { GLTFLoader } from 'three-stdlib';
import { OrbitControls } from 'three-stdlib';
import { useEffect, useRef, useState } from 'react';

const SPEED_CYCLE = [1, 2, 4, 10];

export default function Three(): JSX.Element {
  const refContainer = useRef<HTMLDivElement>(null);
  const speedIndexRef = useRef(0);
  const [speedLabel, setSpeedLabel] = useState(1);

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

    let mixer: THREE.AnimationMixer | undefined;
    const clock = new THREE.Clock();

    const onDblClick = () => {
      speedIndexRef.current = (speedIndexRef.current + 1) % SPEED_CYCLE.length;
      const nextSpeed = SPEED_CYCLE[speedIndexRef.current];
      if (mixer) mixer.timeScale = nextSpeed;
      setSpeedLabel(nextSpeed);
    };
    renderer.domElement.addEventListener('dblclick', onDblClick);

    renderer.domElement.style.cursor = 'grab';
    const onMouseDown = () => { renderer.domElement.style.cursor = 'grabbing'; };
    const onMouseUp = () => { renderer.domElement.style.cursor = 'grab'; };
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mouseup', onMouseUp);

    loader.load(
      '/models/wind_turbine_small.glb',
      function (gltf) {
        gltf.scene.scale.setScalar(0.15);
        scene.add(gltf.scene);

        // Play all built-in animations
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(gltf.scene);
          gltf.animations.forEach((clip) => mixer!.clipAction(clip).play());
        }

        // Fit camera to the loaded model
        const box = new THREE.Box3().setFromObject(gltf.scene);
        const center = box.getCenter(new THREE.Vector3());
        const sizeVec = box.getSize(new THREE.Vector3());
        const maxDim = Math.max(sizeVec.x, sizeVec.y, sizeVec.z);
        const fovRad = camera.fov * (Math.PI / 180);
        const dist = Math.abs(maxDim / 2 / Math.tan(fovRad / 2)) * 2.0;

        camera.position.set(
          center.x + dist * 0.4,
          center.y + dist * 0.35,
          center.z + dist
        );
        controls.target.copy(center);
        camera.lookAt(center);
        controls.update();
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
    camera.position.y = 5;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    //Creates the lights of the scene
    const lightColor = 0xffffff;

    const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(lightColor, 1);
    directionalLight.position.set(5, 10, 5);
    directionalLight.target.position.set(0, 3, 5);
    scene.add(directionalLight);
    scene.add(directionalLight.target);

    function animate() {
      requestAnimationFrame(animate);

      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);

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

    return () => {
      renderer.domElement.removeEventListener('dblclick', onDblClick);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      <div ref={refContainer} />
      <p
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          background: 'rgba(0,0,0,0.45)',
          padding: '0.3rem 0.8rem',
          borderRadius: '0.4rem',
          fontSize: '0.9rem',
          userSelect: 'none',
          pointerEvents: 'none',
        }}
      >
        Double-click to rotate faster &mdash; current speed: <strong>x{speedLabel}</strong>
      </p>
    </div>
  );
}
