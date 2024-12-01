import { NavigationMode } from "./types";
import { OrthoPerspectiveCamera } from "../index";
/**
 * A {@link NavigationMode} that allows to navigate floorplans in 2D, like many BIM tools.
 */
export declare class PlanMode implements NavigationMode {
    private camera;
    /** {@link NavigationMode.enabled} */
    enabled: boolean;
    /** {@link NavigationMode.id} */
    readonly id = "Plan";
    private mouseAction1?;
    private mouseAction2?;
    private mouseInitialized;
    private readonly defaultAzimuthSpeed;
    private readonly defaultPolarSpeed;
    constructor(camera: OrthoPerspectiveCamera);
    /** {@link NavigationMode.set} */
    set(active: boolean): void;
}
