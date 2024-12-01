import { NavigationMode } from "./types";
import { OrthoPerspectiveCamera } from "../index";
/**
 * A {@link NavigationMode} that allows 3D navigation and panning like in many 3D and CAD softwares.
 */
export declare class OrbitMode implements NavigationMode {
    camera: OrthoPerspectiveCamera;
    /** {@link NavigationMode.enabled} */
    enabled: boolean;
    /** {@link NavigationMode.id} */
    readonly id = "Orbit";
    constructor(camera: OrthoPerspectiveCamera);
    /** {@link NavigationMode.set} */
    set(active: boolean): void;
    private activateOrbitControls;
}
