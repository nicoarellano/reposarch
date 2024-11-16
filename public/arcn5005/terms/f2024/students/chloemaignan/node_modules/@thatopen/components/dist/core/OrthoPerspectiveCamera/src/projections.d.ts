import * as THREE from "three";
import { CameraProjection } from "./types";
import { Event } from "../../Types";
import { OrthoPerspectiveCamera } from "../index";
/**
 * Object to control the {@link CameraProjection} of the {@link OrthoPerspectiveCamera}.
 */
export declare class ProjectionManager {
    /**
     * Event that fires when the {@link CameraProjection} changes.
     */
    readonly onChanged: Event<THREE.PerspectiveCamera | THREE.OrthographicCamera>;
    /**
     * Current projection mode of the camera.
     * Default is "Perspective".
     */
    current: CameraProjection;
    /**
     * The camera controlled by this ProjectionManager.
     * It can be either a PerspectiveCamera or an OrthographicCamera.
     */
    camera: THREE.PerspectiveCamera | THREE.OrthographicCamera;
    /** Match Ortho zoom with Perspective distance when changing projection mode */
    matchOrthoDistanceEnabled: boolean;
    private _component;
    private _previousDistance;
    constructor(camera: OrthoPerspectiveCamera);
    /**
     * Sets the {@link CameraProjection} of the {@link OrthoPerspectiveCamera}.
     *
     * @param projection - the new projection to set. If it is the current projection,
     * it will have no effect.
     */
    set(projection: CameraProjection): Promise<void>;
    /**
     * Changes the current {@link CameraProjection} from Ortographic to Perspective
     * and vice versa.
     */
    toggle(): Promise<void>;
    private setOrthoCamera;
    private getPerspectiveDims;
    private setupOrthoCamera;
    private getDistance;
    private setPerspectiveCamera;
}
