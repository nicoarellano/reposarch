import * as THREE from "three";
import { Event, Base, World, BaseScene, BaseCamera, BaseRenderer, Disposable, Updateable } from "../../Types";
/**
 * A class representing a simple world in a 3D environment. It extends the Base class and implements the World interface.
 *
 * @template T - The type of the scene. Default is BaseScene.
 * @template U - The type of the camera. Default is BaseCamera.
 * @template S - The type of the renderer. Default is BaseRenderer.
 */
export declare class SimpleWorld<T extends BaseScene = BaseScene, U extends BaseCamera = BaseCamera, S extends BaseRenderer = BaseRenderer> extends Base implements World, Disposable, Updateable {
    /**
     * All the loaded [meshes](https://threejs.org/docs/#api/en/objects/Mesh). These meshes will be taken into account in operations like raycasting.
     */
    readonly meshes: Set<THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>>;
    /** {@link Updateable.onAfterUpdate} */
    readonly onAfterUpdate: Event<unknown>;
    /** {@link Updateable.onBeforeUpdate} */
    readonly onBeforeUpdate: Event<unknown>;
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<unknown>;
    /**
     * Indicates whether the world is currently being disposed. This is useful to prevent trying to access world's elements when it's being disposed, which could cause errors when you dispose a world.
     */
    isDisposing: boolean;
    /**
     * Indicates whether the world is currently enabled.
     * When disabled, the world will not be updated.
     */
    enabled: boolean;
    /**
     * A unique identifier for the world. Is not meant to be changed at any moment.
     */
    readonly uuid: string;
    /**
     * An optional name for the world.
     */
    name?: string;
    private _scene?;
    private _camera?;
    private _renderer;
    /**
     * Getter for the scene. If no scene is initialized, it throws an error.
     * @returns The current scene.
     */
    get scene(): T;
    /**
     * Setter for the scene. It sets the current scene, adds the world to the scene's worlds set,
     * sets the current world in the scene, and triggers the scene's onWorldChanged event with the added action.
     * @param scene - The new scene to be set.
     */
    set scene(scene: T);
    /**
     * Getter for the camera. If no camera is initialized, it throws an error.
     * @returns The current camera.
     */
    get camera(): U;
    /**
     * Setter for the camera. It sets the current camera, adds the world to the camera's worlds set,
     * sets the current world in the camera, and triggers the camera's onWorldChanged event with the added action.
     * @param camera - The new camera to be set.
     */
    set camera(camera: U);
    /**
     * Getter for the renderer.
     * @returns The current renderer or null if no renderer is set. Some worlds don't need a renderer to work (when your mail goal is not to display a 3D viewport to the user).
     */
    get renderer(): S | null;
    /**
     * Setter for the renderer. It sets the current renderer, adds the world to the renderer's worlds set,
     * sets the current world in the renderer, and triggers the renderer's onWorldChanged event with the added action.
     * If a new renderer is set, it also triggers the onWorldChanged event with the removed action for the old renderer.
     * @param renderer - The new renderer to be set or null to remove the current renderer.
     */
    set renderer(renderer: S | null);
    /** {@link Updateable.update} */
    update(delta?: number): void;
    /** {@link Disposable.dispose} */
    dispose(disposeResources?: boolean): void;
}
