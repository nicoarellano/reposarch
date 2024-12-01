import * as THREE from "three";
import { Components } from "../../Components";
import { Event, World, Disposable } from "../../Types";
import { Mouse } from "./mouse";
/**
 * A simple [raycaster](https://threejs.org/docs/#api/en/core/Raycaster) that allows to easily get items from the scene using the mouse and touch events.
 */
export declare class SimpleRaycaster implements Disposable {
    /** {@link Component.enabled} */
    enabled: boolean;
    /** The components instance to which this Raycaster belongs. */
    components: Components;
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<unknown>;
    /** The position of the mouse in the screen. */
    readonly mouse: Mouse;
    /**
     * A reference to the Three.js Raycaster instance.
     * This is used for raycasting operations.
     */
    readonly three: THREE.Raycaster;
    /**
     * A reference to the world instance to which this Raycaster belongs.
     * This is used to access the camera and meshes.
     */
    world: World;
    constructor(components: Components, world: World);
    /** {@link Disposable.dispose} */
    dispose(): void;
    /**
     * Throws a ray from the camera to the mouse or touch event point and returns
     * the first item found. This also takes into account the clipping planes
     * used by the renderer.
     *
     * @param items - the [meshes](https://threejs.org/docs/#api/en/objects/Mesh)
     * to query. If not provided, it will query all the meshes stored in
     * {@link Components.meshes}.
     */
    castRay(items?: THREE.Object3D[]): THREE.Intersection | null;
    /**
     * Casts a ray from a given origin in a given direction and returns the first item found.
     * This method also takes into account the clipping planes used by the renderer.
     *
     * @param origin - The origin of the ray.
     * @param direction - The direction of the ray.
     * @param items - The meshes to query. If not provided, it will query all the meshes stored in {@link World.meshes}.
     * @returns The first intersection found or `null` if no intersection was found.
     */
    castRayFromVector(origin: THREE.Vector3, direction: THREE.Vector3, items?: THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>[]): THREE.Intersection<THREE.Object3D<THREE.Object3DEventMap>> | null;
    private intersect;
    private filterClippingPlanes;
}
