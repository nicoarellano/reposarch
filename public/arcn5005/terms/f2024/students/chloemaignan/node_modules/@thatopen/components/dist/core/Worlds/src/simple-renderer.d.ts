import * as THREE from "three";
import { BaseRenderer, Event } from "../../Types";
import { Components } from "../../Components";
/**
 * A basic renderer capable of rendering [Objec3Ds](https://threejs.org/docs/#api/en/core/Object3D).
 */
export declare class SimpleRenderer extends BaseRenderer {
    /**
     * Indicates whether the renderer is enabled. If it's not, it won't be updated.
     * Default is `true`.
     */
    enabled: boolean;
    /**
     * The HTML container of the THREE.js canvas where the scene is rendered.
     */
    container: HTMLElement;
    /**
     * The THREE.js WebGLRenderer instance.
     */
    three: THREE.WebGLRenderer;
    protected _canvas: HTMLCanvasElement;
    protected _parameters?: Partial<THREE.WebGLRendererParameters>;
    protected _resizeObserver: ResizeObserver | null;
    protected onContainerUpdated: Event<unknown>;
    private _resizing;
    /**
     * Constructor for the SimpleRenderer class.
     *
     * @param components - The components instance.
     * @param container - The HTML container where the THREE.js canvas will be rendered.
     * @param parameters - Optional parameters for the THREE.js WebGLRenderer.
     */
    constructor(components: Components, container: HTMLElement, parameters?: Partial<THREE.WebGLRendererParameters>);
    /** {@link Updateable.update} */
    update(): void;
    /** {@link Disposable.dispose} */
    dispose(): void;
    /** {@link Resizeable.getSize}. */
    getSize(): THREE.Vector2;
    /** {@link Resizeable.resize} */
    resize: (size?: THREE.Vector2) => void;
    /**
     * Sets up and manages the event listeners for the renderer.
     *
     * @param active - A boolean indicating whether to activate or deactivate the event listeners.
     *
     * @throws Will throw an error if the renderer does not have an HTML container.
     */
    setupEvents(active: boolean): void;
    private resizeEvent;
    private setupRenderer;
    private onContextLost;
    private onContextBack;
}
