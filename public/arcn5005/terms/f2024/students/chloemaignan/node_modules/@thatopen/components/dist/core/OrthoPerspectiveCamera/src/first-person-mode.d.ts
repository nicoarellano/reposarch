import { NavigationMode } from "./types";
import { OrthoPerspectiveCamera } from "../index";
/**
 * A {@link NavigationMode} that allows first person navigation, simulating FPS video games.
 */
export declare class FirstPersonMode implements NavigationMode {
    private camera;
    /** {@link NavigationMode.enabled} */
    enabled: boolean;
    /** {@link NavigationMode.id} */
    readonly id = "FirstPerson";
    constructor(camera: OrthoPerspectiveCamera);
    /** {@link NavigationMode.set} */
    set(active: boolean): void;
    private setupFirstPersonCamera;
}
