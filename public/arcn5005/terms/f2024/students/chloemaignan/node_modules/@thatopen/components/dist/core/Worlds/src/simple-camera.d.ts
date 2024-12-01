import * as THREE from "three";
import CameraControls from "camera-controls";
import { Disposable, Updateable, Event, BaseCamera } from "../../Types";
import { Components } from "../../Components";
/**
 * A basic camera that uses [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to control the camera in 2D and 3D. Check out it's API to find out what features it offers.
 */
export declare class SimpleCamera extends BaseCamera implements Updateable, Disposable {
    /** {@link Updateable.onBeforeUpdate} */
    readonly onBeforeUpdate: Event<SimpleCamera>;
    /** {@link Updateable.onAfterUpdate} */
    readonly onAfterUpdate: Event<SimpleCamera>;
    /**
     * Event that is triggered when the aspect of the camera has been updated.
     * This event is useful when you need to perform actions after the aspect of the camera has been changed.
     */
    readonly onAspectUpdated: Event<unknown>;
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<string>;
    /**
     * A three.js PerspectiveCamera or OrthographicCamera instance.
     * This camera is used for rendering the scene.
     */
    three: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    private _allControls;
    /**
     * The object that controls the camera. An instance of
     * [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls).
     * Transforming the camera directly will have no effect: you need to use this
     * object to move, rotate, look at objects, etc.
     */
    get controls(): CameraControls;
    /**
     * Getter for the enabled state of the camera controls.
     * If the current world is null, it returns false.
     * Otherwise, it returns the enabled state of the camera controls.
     *
     * @returns {boolean} The enabled state of the camera controls.
     */
    get enabled(): boolean;
    /**
     * Setter for the enabled state of the camera controls.
     * If the current world is not null, it sets the enabled state of the camera controls to the provided value.
     *
     * @param {boolean} enabled - The new enabled state of the camera controls.
     */
    set enabled(enabled: boolean);
    constructor(components: Components);
    /** {@link Disposable.dispose} */
    dispose(): void;
    /** {@link Updateable.update} */
    update(_delta: number): void;
    /**
     * Updates the aspect of the camera to match the size of the
     * {@link Components.renderer}.
     */
    updateAspect: () => void;
    private setupCamera;
    private newCameraControls;
    private setupEvents;
    private static getSubsetOfThree;
}
