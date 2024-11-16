import * as THREE from "three";
import { Event, World } from "../../Types";
import { Components } from "../../Components";
/**
 * A base renderer to determine visibility on screen.
 */
export declare class DistanceRenderer {
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<string>;
    /**
     * Fires after making the visibility check to the meshes. It lists the
     * meshes that are currently visible, and the ones that were visible
     * just before but not anymore.
     */
    readonly onDistanceComputed: Event<number>;
    /**
     * Objects that won't be taken into account in the distance check.
     */
    excludedObjects: Set<THREE.Object3D<THREE.Object3DEventMap>>;
    /**
     * Whether this renderer is active or not. If not, it won't render anything.
     */
    enabled: boolean;
    /**
     * Render the internal scene used to determine the object visibility. Used
     * for debugging purposes.
     */
    renderDebugFrame: boolean;
    /** The components instance to which this renderer belongs. */
    components: Components;
    /**
     * The scene where the distance is computed.
     */
    scene: THREE.Scene;
    /**
     * The camera used to compute the distance.
     */
    camera: THREE.OrthographicCamera;
    /**
     * The material used to compute the distance.
     */
    depthMaterial: THREE.ShaderMaterial;
    /** The world instance to which this renderer belongs. */
    readonly world: World;
    /** The THREE.js renderer used to make the visibility test. */
    readonly renderer: THREE.WebGLRenderer;
    protected readonly worker: Worker;
    private _width;
    private _height;
    private readonly _postQuad;
    private readonly tempRT;
    private readonly resultRT;
    private readonly bufferSize;
    private readonly _buffer;
    protected _isWorkerBusy: boolean;
    constructor(components: Components, world: World);
    /** {@link Disposable.dispose} */
    dispose(): void;
    /**
     * The function that the culler uses to reprocess the scene. Generally it's
     * better to call needsUpdate, but you can also call this to force it.
     * @param force if true, it will refresh the scene even if needsUpdate is
     * not true.
     */
    compute: () => Promise<void>;
    private handleWorkerMessage;
}
