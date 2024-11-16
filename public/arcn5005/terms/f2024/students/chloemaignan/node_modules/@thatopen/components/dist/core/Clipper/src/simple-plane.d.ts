import * as THREE from "three";
import { Hideable, Disposable, Event, World } from "../../Types";
import { Components } from "../../Components";
/**
 * Each of the clipping planes created by the clipper.
 */
export declare class SimplePlane implements Disposable, Hideable {
    /** Event that fires when the user starts dragging a clipping plane. */
    readonly onDraggingStarted: Event<unknown>;
    /** Event that fires when the user stops dragging a clipping plane. */
    readonly onDraggingEnded: Event<unknown>;
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<unknown>;
    /**
     * The normal vector of the clipping plane.
     */
    readonly normal: THREE.Vector3;
    /**
     * The origin point of the clipping plane.
     */
    readonly origin: THREE.Vector3;
    /**
     * The THREE.js Plane object representing the clipping plane.
     */
    readonly three: THREE.Plane;
    /** The components instance to which this plane belongs. */
    components: Components;
    /** The world instance to which this plane belongs. */
    world: World;
    /** A custom string to identify what this plane is used for. */
    type: string;
    protected readonly _helper: THREE.Object3D;
    protected _visible: boolean;
    protected _enabled: boolean;
    private _controlsActive;
    private readonly _arrowBoundBox;
    private readonly _planeMesh;
    private readonly _controls;
    private readonly _hiddenMaterial;
    /**
     * Getter for the enabled state of the clipping plane.
     * @returns {boolean} The current enabled state.
     */
    get enabled(): boolean;
    /**
     * Setter for the enabled state of the clipping plane.
     * Updates the clipping plane state in the renderer and throws an error if no renderer is found.
     * @param {boolean} state - The new enabled state.
     */
    set enabled(state: boolean);
    /** {@link Hideable.visible } */
    get visible(): boolean;
    /** {@link Hideable.visible } */
    set visible(state: boolean);
    /** The meshes used for raycasting */
    get meshes(): THREE.Mesh[];
    /** The material of the clipping plane representation. */
    get planeMaterial(): THREE.Material | THREE.Material[];
    /** The material of the clipping plane representation. */
    set planeMaterial(material: THREE.Material | THREE.Material[]);
    /** The size of the clipping plane representation. */
    get size(): number;
    /** Sets the size of the clipping plane representation. */
    set size(size: number);
    /**
     * Getter for the helper object of the clipping plane.
     * The helper object is a THREE.Object3D that contains the clipping plane mesh and other related objects.
     * It is used for positioning, rotating, and scaling the clipping plane in the 3D scene.
     *
     * @returns {THREE.Object3D} The helper object of the clipping plane.
     */
    get helper(): THREE.Object3D<THREE.Object3DEventMap>;
    constructor(components: Components, world: World, origin: THREE.Vector3, normal: THREE.Vector3, material: THREE.Material, size?: number, activateControls?: boolean);
    /**
     * Sets the clipping plane's normal and origin from the given normal and point.
     * This method resets the clipping plane's state, updates the normal and origin,
     * and positions the helper object accordingly.
     *
     * @param normal - The new normal vector for the clipping plane.
     * @param point - The new origin point for the clipping plane.
     *
     * @returns {void}
     */
    setFromNormalAndCoplanarPoint(normal: THREE.Vector3, point: THREE.Vector3): void;
    /** {@link Updateable.update} */
    update: () => void;
    /** {@link Disposable.dispose} */
    dispose(): void;
    private reset;
    protected toggleControls(state: boolean): void;
    private newTransformControls;
    private initializeControls;
    private createArrowBoundingBox;
    private changeDrag;
    private notifyDraggingChanged;
    private preventCameraMovement;
    private newHelper;
    private static newPlaneMesh;
}
