import * as THREE from "three";
import { Components } from "../Components";
import { SimpleCamera } from "..";
import { NavigationMode, NavModeID, ProjectionManager } from "./src";
export * from "./src";
/**
 * A flexible camera that uses [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to control the camera in 2D and 3D. It supports multiple navigation modes, such as 2D floor plan navigation, first person and 3D orbit. This class extends the SimpleCamera class and adds additional functionality for managing different camera projections and navigation modes. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/OrthoPerspectiveCamera). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/OrthoPerspectiveCamera).
 */
export declare class OrthoPerspectiveCamera extends SimpleCamera {
    /**
     * A ProjectionManager instance that manages the projection modes of the camera.
     */
    readonly projection: ProjectionManager;
    /**
     * A THREE.OrthographicCamera instance that represents the orthographic camera.
     * This camera is used when the projection mode is set to orthographic.
     */
    readonly threeOrtho: THREE.OrthographicCamera;
    /**
     * A THREE.PerspectiveCamera instance that represents the perspective camera.
     * This camera is used when the projection mode is set to perspective.
     */
    readonly threePersp: THREE.PerspectiveCamera;
    protected readonly _userInputButtons: any;
    protected readonly _frustumSize = 50;
    protected readonly _navigationModes: Map<NavModeID, NavigationMode>;
    protected _mode: NavigationMode | null;
    private previousSize;
    /**
     * Getter for the current navigation mode.
     * Throws an error if the mode is not found or the camera is not initialized.
     *
     * @returns {NavigationMode} The current navigation mode.
     *
     * @throws {Error} Throws an error if the mode is not found or the camera is not initialized.
     */
    get mode(): NavigationMode;
    constructor(components: Components);
    /** {@link Disposable.dispose} */
    dispose(): void;
    /**
     * Sets a new {@link NavigationMode} and disables the previous one.
     *
     * @param mode - The {@link NavigationMode} to set.
     */
    set(mode: NavModeID): void;
    /**
     * Make the camera view fit all the specified meshes.
     *
     * @param meshes the meshes to fit. If it is not defined, it will
     * evaluate {@link Components.meshes}.
     * @param offset the distance to the fit object
     */
    fit(meshes: Iterable<THREE.Mesh>, offset?: number): Promise<void>;
    /**
     * Allows or prevents all user input.
     *
     * @param active - whether to enable or disable user inputs.
     */
    setUserInput(active: boolean): void;
    private disableUserInput;
    private enableUserInput;
    private newOrthoCamera;
    private setOrthoPerspCameraAspect;
}
