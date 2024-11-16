import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import { Section } from "../Sections";
/** The data that describes a plan view. */
export interface PlanView extends Section {
    /** The offset of the clipping plane to the plan height. */
    planOffset: number;
}
/**
 * Component to easily define and navigate 2D floor plans. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Plans). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Plans).
 */
export declare class Plans extends OBC.Component implements OBC.Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "a80874aa-1c93-43a4-80f2-df346da086b1";
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /** The plane type for the clipping planes created by this component. */
    readonly planeType = "floorplan";
    /**
     * Event triggered when the user navigates to a different floor plan.
     * The event provides the id of the floor plan the user navigated to.
     */
    readonly onNavigated: OBC.Event<{
        id: string;
    }>;
    /**
     * Event triggered when the user exits the floor plan view.
     */
    readonly onExited: OBC.Event<unknown>;
    /** {@link OBC.Component.enabled} */
    enabled: boolean;
    /** The floorplan that is currently selected. */
    currentPlan: PlanView | null;
    /** The offset from the clipping planes to their respective floor plan elevation. */
    offset: number;
    /**
     * A list of all the floor plans created.
     * Each floor plan is represented by a {@link PlanView} object.
     */
    list: PlanView[];
    private _cachedPlanCamera;
    /**
     * A reference to the world in which the floor plans are displayed.
     * This is used to access the camera and other relevant components.
     */
    get world(): OBC.World | undefined;
    /**
     * A reference to the world in which the floor plans are displayed.
     * This is used to access the camera and other relevant components.
     */
    set world(world: OBC.World | undefined);
    /** The offset of the 2D camera to the floor plan elevation. */
    get defaultCameraOffset(): number;
    /** The offset of the 2D camera to the floor plan elevation. */
    set defaultCameraOffset(value: number);
    constructor(components: OBC.Components);
    /** {@link OBC.Disposable.dispose} */
    dispose(): void;
    /**
     * Generates floor plans from the provided IFC model.
     * @param model - The IFC model from which to generate floor plans.
     * @throws Will throw an error if the model does not have properties or if floor plans are not found.
     */
    generate(model: FRAGS.FragmentsGroup): Promise<void>;
    /**
     * Creates a new floor plan based on the provided configuration.
     *
     * @param config - The configuration object for the new floor plan.
     */
    create(config: {
        id: string;
        name?: string;
        point: THREE.Vector3;
        normal: THREE.Vector3;
        type?: string;
    }): void;
    /**
     * Navigates to the floor plan with the specified id.
     *
     * @param id - The id of the floor plan to navigate to.
     * @param animate - Whether to animate the camera movement. Default is false.
     */
    goTo(id: string, animate?: boolean): Promise<void>;
    /**
     * Exits the floor plan view and returns to the 3D view.
     *
     * @param animate - Whether to animate the camera movement. Default is false.
     */
    exitPlanView(animate?: boolean): Promise<void>;
    private cachePlanCamera;
    private applyCachedPlanCamera;
    private getAbsoluteFloorHeight;
}
