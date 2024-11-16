import * as OBC from "@thatopen/components";
import { CivilNavigator } from "../CivilNavigator";
/**
 * This component is responsible for navigating and visualizing elevation data of infra/civil models (vertical alignments). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilElevationNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/CivilElevationNavigator).
 */
export declare class CivilElevationNavigator extends CivilNavigator {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "097eea29-2d5a-431a-a247-204d44670621";
    /** {@link OBC.Component.enabled} */
    enabled: boolean;
    readonly view = "vertical";
    /**
     * Getter for the world property.
     * This property is used to retrieve the world context for the component.
     *
     * @returns {OBC.World | null} - The current world context for the component.
     * If null, it means the world has not been set yet.
     */
    get world(): OBC.World | null;
    /**
     * Sets the world for the CivilElevationNavigator.
     * This property is used to manage the world context for the component.
     * When the world is set, it triggers the addition of elevation markers to the scene.
     *
     * @param world - The world to set for the component. If null, it will not update the world.
     */
    set world(world: OBC.World | null);
    constructor(components: OBC.Components);
}
