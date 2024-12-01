import * as THREE from "three";
import { CSS2DRenderer } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import { Components, SimpleRenderer } from "@thatopen/components";
/**
 * A basic renderer capable of rendering 3D and 2D objects ([Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D) and [CSS2DObjects](https://threejs.org/docs/#examples/en/renderers/CSS2DRenderer) respectively).
 */
export declare class RendererWith2D extends SimpleRenderer {
    /**
     * This renderer is used to render 2D objects (CSS2DObjects) in a 3D scene.
     */
    three2D: CSS2DRenderer;
    constructor(components: Components, container: HTMLElement, parameters?: Partial<THREE.WebGLRendererParameters>);
    private setupHtmlRenderer;
}
