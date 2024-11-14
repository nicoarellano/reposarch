"use client";

import { ReactElement, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import * as OBC from "openbim-components";

interface Props {
  ifc?: string;
  fragment?: string;
}

export default function BimExample({
  ifc = "",
  fragment = "",
}): ReactElement<Props> {
  const containerRef = useRef<HTMLDivElement>(null);

  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    setContainer(containerRef.current);
  }, [containerRef.current]);

  useEffect(() => {
    const components = new OBC.Components();

    components.scene = new OBC.SimpleScene(components);
    if (container) {
      const renderer = new OBC.PostproductionRenderer(components, container);
      components.renderer = renderer;
      components.camera = new OBC.SimpleCamera(components);
      components.raycaster = new OBC.SimpleRaycaster(components);

      components.init();

      const { postproduction } = renderer;
      postproduction.enabled = true;

      const fragments = new OBC.FragmentManager(components);

      const highlighter = new OBC.FragmentHighlighter(components);

      const toolbar = new OBC.Toolbar(components);
      components.ui.addToolbar(toolbar);
      toolbar.addChild(fragments.uiElement.get("main"));

      const loadButton = new OBC.Button(components);
      loadButton.materialIcon = "download";
      loadButton.tooltip = "Load model";
      toolbar.addChild(loadButton);
      loadButton.onClick.add(() => loadFragments(fragments));

      const disposeButton = new OBC.Button(components);
      disposeButton.materialIcon = "delete";
      disposeButton.tooltip = "Delete model";
      toolbar.addChild(disposeButton);
      disposeButton.onClick.add(() => disposeFragments(fragments));

      const scene = components.scene.get();

      const grid = new OBC.SimpleGrid(components);
      components.tools.add("grid", grid);

      const culler = new OBC.ScreenCuller(components);
      container.addEventListener("mouseup", () => (culler.needsUpdate = true));
      container.addEventListener("wheel", () => (culler.needsUpdate = true));

      const selectionMaterial = new THREE.MeshStandardMaterial({
        color: "#6528D7",
      });

      const highlightMaterial = new THREE.MeshBasicMaterial({
        color: "#BCF124",
        depthTest: false,
        opacity: 0.8,
        transparent: true,
      });

      highlighter.add("default", [highlightMaterial]);
      highlighter.outlineMaterial.color.set(0xf0ff7a);

      let lastSelection;

      let singleSelection = {
        value: true,
      };

      container.addEventListener("click", (event) =>
        highlightOnClick(event, highlighter, singleSelection, lastSelection)
      );

      highlightOnID(highlighter, lastSelection);

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

      if (ifc) loadIfcAsFragments(scene, fragmentIfcLoader, models);
      if (fragment) loadFragments(fragments);

      let previousSelection;
      window.onmousemove = () => {
        const result = components.raycaster.castRay(models);
        if (previousSelection) {
          previousSelection.material = selectionMaterial;
        }
        if (!result) {
          return;
        }
        previousSelection = result.object;
      };
    }

    async function loadFragments(fragments) {
      if (fragments.groups.length) return;
      const file = await fetch(fragment);
      const data = await file.arrayBuffer();
      const buffer = new Uint8Array(data);
      fragments.load(buffer);
    }

    function disposeFragments(fragments) {
      fragments.dispose();
    }

    async function loadIfcAsFragments(scene, fragmentIfcLoader, models) {
      const file = await fetch(ifc);
      const data = await file.arrayBuffer();
      const buffer = new Uint8Array(data);
      const model = await fragmentIfcLoader.load(buffer);
      models.push(model);
      scene.add(model);
    }
  }, [container]);

  async function highlightOnClick(
    event,
    highlighter,
    singleSelection,
    lastSelection
  ) {
    const result = await highlighter.highlight(
      "default",
      singleSelection.value
    );
    if (result) {
      lastSelection = {};
      for (const fragment of result.fragments) {
        const fragmentID = fragment.id;
        lastSelection[fragmentID] = [result.id];
      }
    }
  }

  function highlightOnID(highlighter, lastSelection) {
    if (lastSelection !== undefined) {
      highlighter.highlightByID("default", lastSelection);
    }
  }

  return (
    <>
      <div className="bim-container w-full h-full" ref={containerRef}></div>
    </>
  );
}
