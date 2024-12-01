import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import { CurveHighlighter } from "../CivilNavigator/src/curve-highlighter";
import { CivilMarkerType } from "../CivilNavigator";
import { Mark } from "../../core";
/**
 * This component provides functionality for navigating and interacting with civil engineering data in a 3D environment. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Civil3DNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Civil3DNavigator).
 *
 */
export declare class Civil3DNavigator extends OBC.Component {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "0a59c09e-2b49-474a-9320-99f51f40f182";
    /**
     * Event triggered when a curve is highlighted.
     * Provides information about the highlighted curve, point, and index.
     */
    readonly onHighlight: OBC.Event<{
        curve: FRAGS.CurveMesh;
        point: THREE.Vector3;
        index: number;
    }>;
    /**
     * Event triggered when a marker (point) on a curve changes.
     * Provides information about the alignment, percentage, type of marker, and the curve.
     */
    readonly onMarkerChange: OBC.Event<{
        alignment: FRAGS.Alignment;
        percentage: number;
        type: CivilMarkerType;
        curve: FRAGS.CivilCurve;
    }>;
    /**
     * Event triggered when a marker (point) on a curve is hidden.
     * Provides information about the type of marker.
     */
    readonly onMarkerHidden: OBC.Event<{
        type: CivilMarkerType;
    }>;
    /** {@link OBC.Component.enabled} */
    enabled: boolean;
    mouseMarkers?: {
        hover: Mark;
        select: Mark;
    };
    private _highlighter?;
    private _curves;
    private _world;
    /**
     * Getter for the world property.
     * Returns the current world instance.
     * @returns {OBC.World | null} The current world instance or null if not set.
     */
    get world(): OBC.World | null;
    /**
     * Setter for the world property.
     * Sets the world instance and initializes the component.
     * @param {OBC.World | null} world - The new world instance or null to clear the current world.
     */
    set world(world: OBC.World | null);
    /**
     * Getter for the highlighter property.
     * Returns the curve highlighter instance.
     * @returns {CurveHighlighter} The curve highlighter instance.
     * @throws {Error} If the navigator is not initialized.
     */
    get highlighter(): CurveHighlighter;
    constructor(components: OBC.Components);
    /**
     * Draws the civil engineering data onto the 3D scene.
     *
     * @param model - The FragmentsGroup containing the civil data to be drawn.
     * @throws Will throw an error if the model does not have civil data or if the world is not set.
     */
    draw(model: FRAGS.FragmentsGroup): void;
    /**
     * Sets a marker at a specific percentage along the given alignment.
     *
     * @param alignment - The alignment on which to place the marker.
     * @param percentage - The percentage along the alignment where the marker should be placed.
     * @param type - The type of marker to be set.
     *
     * @throws Will throw an error if the mouse markers have not been initialized.
     *         This can happen if the world has not been set before using this method.
     *
     * @remarks
     * This method calculates the 3D point at the given percentage along the alignment,
     * sets the marker at that point, and makes the marker visible.
     *
     * @example
     * ```typescript
     * const navigator = new Civil3DNavigator(components);
     * navigator.world = world; // Initialize the world
     * const alignment = model.civilData.alignments.get(alignmentId);
     * if (alignment) {
     *   navigator.setMarker(alignment, 0.5, "select");
     * }
     * ```
     */
    setMarker(alignment: FRAGS.Alignment, percentage: number, type: CivilMarkerType): void;
    /**
     * Hides the marker of the specified type.
     *
     * @param type - The type of marker to hide.
     *
     * @throws Will throw an error if the mouse markers have not been initialized.
     *         This can happen if the world has not been set before using this method.
     *
     * @remarks
     * This method hides the marker of the specified type by setting its visibility to false.
     *
     * @example
     * ```typescript
     * const navigator = new Civil3DNavigator(components);
     * navigator.world = world; // Initialize the world
     * navigator.hideMarker("select");
     * ```
     */
    hideMarker(type: CivilMarkerType): void;
    private newMouseMarker;
    private setupEvents;
    private updateLinesResolution;
    private onClick;
    private onMouseMove;
    private updateMarker;
}
