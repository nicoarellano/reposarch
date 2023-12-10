"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as OBC from "openbim-components";

export default function BimExample() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setContainer(containerRef.current);
  }, [containerRef.current]);

  useEffect(() => {
    const components = new OBC.Components();
    components.scene = new OBC.SimpleScene(components);
    if (container) {
      components.renderer = new OBC.SimpleRenderer(components, container);
      components.camera = new OBC.SimpleCamera(components);
      components.raycaster = new OBC.SimpleRaycaster(components);

      components.init();

      const scene = components.scene.get();

      const grid = new OBC.SimpleGrid(components);
      components.tools.add("grid", grid);

      const cubeMaterial = new THREE.MeshStandardMaterial({ color: "#6528D7" });
      const greenMaterial = new THREE.MeshStandardMaterial({
        color: "#BCF124",
      });

      const models = [];

      //Creates the lights of the scene
      const lightColor = 0xffffff;

      const ambientLight = new THREE.AmbientLight(lightColor, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(lightColor, 1);
      directionalLight.position.set(5, 10, 5);
      directionalLight.target.position.set(0, 3, 0);
      scene.add(directionalLight);
      scene.add(directionalLight.target);

      let fragmentIfcLoader = new OBC.FragmentIfcLoader(components);

      fragmentIfcLoader.settings.wasm = {
        path: "https://unpkg.com/web-ifc@0.0.43/",
        absolute: true,
      };
      fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
      fragmentIfcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;

      loadIfcAsFragments(scene, fragmentIfcLoader, models);

      let previousSelection;
      window.onmousemove = () => {
        const result = components.raycaster.castRay(models);
        if (previousSelection) {
          previousSelection.material = cubeMaterial;
        }
        if (!result) {
          return;
        }
        result.object.material = greenMaterial;
        previousSelection = result.object;
      };
    }
    async function loadIfcAsFragments(scene, fragmentIfcLoader, models) {
      const file = await fetch(
        "/arcn5005/f2023/students/nicolasarellanorisop/ifc/parking.ifc"
      );
      const data = await file.arrayBuffer();
      const buffer = new Uint8Array(data);
      const model = await fragmentIfcLoader.load(buffer);
      models.push(model);
      scene.add(model);
    }
  }, [container]);

  return (
    <>
      <div className="bim-container w-full h-full" ref={containerRef}></div>
    </>
  );
}
