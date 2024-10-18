"use client";

import "./bim.css";

import {
  ReactElement,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import * as THREE from "three";
import * as OBC from "openbim-components";
import BimSidebar from "./BimSidebar";

interface Props {
  ifc?: string;
  fragment?: string;
}

export default function BimExample({
  ifc = "",
  fragment = "",
}): ReactElement<Props> {
  const [modelCount, setModelCount] = useState(0);

  useEffect(() => {
    const viewer = new OBC.Components();

    const sceneComponent = new OBC.SimpleScene(viewer);
    sceneComponent.setup();
    viewer.scene = sceneComponent;

    const viewerContainer = document.getElementById(
      "viewerContainer"
    ) as HTMLDivElement;
    const rendererComponent = new OBC.PostproductionRenderer(
      viewer,
      viewerContainer
    );
    viewer.renderer = rendererComponent;
    const postproduction = rendererComponent.postproduction;

    const mainToolbar = new OBC.Toolbar(viewer);
    mainToolbar.name = "Main toolbar";

    viewer.init();
    const cameraComponent = new OBC.OrthoPerspectiveCamera(viewer);
    viewer.camera = cameraComponent;

    const raycasterComponent = new OBC.SimpleRaycaster(viewer);
    viewer.raycaster = raycasterComponent;

    viewer.ui.addToolbar(mainToolbar);
    cameraComponent.updateAspect();
    postproduction.enabled = true;

    const grid = new OBC.SimpleGrid(viewer, new THREE.Color(0x666666));
    postproduction.customEffects.excludedMeshes.push(grid.get());

    const fragmentManager = new OBC.FragmentManager(viewer);
    const ifcLoader = new OBC.FragmentIfcLoader(viewer);

    const highlighter = new OBC.FragmentHighlighter(viewer);
    highlighter.setup();

    const propertiesProcessor = new OBC.IfcPropertiesProcessor(viewer);
    highlighter.events.select.onClear.add(() => {
      propertiesProcessor.cleanPropertiesList();
    });

    ifcLoader.settings.wasm = {
      path: "https://unpkg.com/web-ifc@0.0.43/",
      absolute: true,
    };
    ifcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;
    ifcLoader.settings.webIfc.OPTIMIZE_PROFILES = true;

    ifcLoader.onIfcLoaded.add((model) => {
      setIfcModel(model);
    });

    const setIfcModel = (model) => {
      setModelCount(fragmentManager.groups.length);
      propertiesProcessor.process(model);
      highlighter.events.select.onHighlight.add((selection) => {
        const fragmentID = Object.keys(selection)[0];
        const expressID = Number(Array.from(selection[fragmentID])[0]);
        propertiesProcessor.renderProperties(model, expressID);
      });
      highlighter.update();
    };

    const loadInitialIfc = async (ifc) => {
      const file = await fetch(ifc);
      const data = await file.arrayBuffer();
      const buffer = new Uint8Array(data);
      const model = await ifcLoader.load(buffer, "ifc");
      viewer.scene.get().add(model);
      setIfcModel(model);
    };

    if (ifc) loadInitialIfc(ifc);

    async function loadFragments() {
      if (fragmentManager.groups.length) return;
      const file = await fetch(fragment);
      const data = await file.arrayBuffer();
      const buffer = new Uint8Array(data);
      setModelCount(fragmentManager.groups.length + 1);
      fragmentManager.load(buffer);
    }

    if (fragment) loadFragments();

    mainToolbar.addChild(
      ifcLoader.uiElement.get("main"),
      propertiesProcessor.uiElement.get("main")
    );
    viewer.ui.addToolbar(mainToolbar);
  }, []);

  const viewerContainerStyle: CSSProperties = {
    width: "100%",
    height: "100%",
    position: "relative",
    gridArea: "viewer",
  };

  const titleStyle: CSSProperties = {
    position: "absolute",
    top: "15px",
    left: "15px",
    color: "#F3F4F6",
  };

  return (
    <div className="flex flex-row w-full h-full">
      {/* <BimSidebar /> */}
      <div id="viewerContainer" style={viewerContainerStyle}>
        <h4 style={titleStyle}>Models loaded: {modelCount}</h4>
      </div>
    </div>
  );
}
