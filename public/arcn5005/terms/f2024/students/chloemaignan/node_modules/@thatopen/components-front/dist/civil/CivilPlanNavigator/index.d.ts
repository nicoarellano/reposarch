import * as OBC from "@thatopen/components";
import { CivilNavigator } from "../CivilNavigator";
/**
 * This component is responsible for navigating and visualizing plan data of infra/civil models (horizontal alignments). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilPlanNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/CivilPlanNavigator).
 */
export declare class CivilPlanNavigator extends CivilNavigator {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "3096dea0-5bc2-41c7-abce-9089b6c9431b";
    /**
     * The view mode of the component.
     * In this case, the view mode is set to "horizontal".
     */
    readonly view = "horizontal";
    private planHighlighter?;
    /**
     * Getter for the world property.
     * Returns the world associated with the CivilPlanNavigator instance.
     */
    get world(): OBC.World | null;
    /**
     * Setter for the world property.
     * Sets the world associated with the CivilPlanNavigator instance.
     * If a new world is provided, the existing PlanHighlighter instance is disposed and a new one is created.
     * @param world - The new world to be associated with the CivilPlanNavigator instance.
     */
    set world(world: OBC.World | null);
    constructor(components: OBC.Components);
}
