import * as FRAGS from "@thatopen/fragments";
import { Components, Component } from "../../core";
/**
 * A component that hides or isolates fragments within a 3D scene. It extends the base Component class and provides methods to control fragment visibility and isolation. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Hider). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Hider).
 */
export declare class Hider extends Component {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "dd9ccf2d-8a21-4821-b7f6-2949add16a29";
    /** {@link Component.enabled} */
    enabled: boolean;
    constructor(components: Components);
    /**
     * Sets the visibility of fragments within the 3D scene.
     * If no `items` parameter is provided, all fragments will be set to the specified visibility.
     * If `items` is provided, only the specified fragments will be affected.
     *
     * @param visible - The visibility state to set for the fragments.
     * @param items - An optional map of fragment IDs and their corresponding sub-fragment IDs to be affected.
     * If not provided, all fragments will be affected.
     *
     * @returns {void}
     */
    set(visible: boolean, items?: FRAGS.FragmentIdMap): void;
    /**
     * Isolates fragments within the 3D scene by hiding all other fragments and showing only the specified ones.
     * It calls the `set` method twice: first to hide all fragments, and then to show only the specified ones.
     *
     * @param items - A map of fragment IDs and their corresponding sub-fragment IDs to be isolated.
     * If not provided, all fragments will be isolated.
     *
     * @returns {void}
     */
    isolate(items: FRAGS.FragmentIdMap): void;
    private updateCulledVisibility;
}
