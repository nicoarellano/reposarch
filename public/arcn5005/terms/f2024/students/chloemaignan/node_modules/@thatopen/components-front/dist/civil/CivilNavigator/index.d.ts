import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import { Alignment, FragmentsGroup } from "@thatopen/fragments";
import { CurveHighlighter } from "./src/curve-highlighter";
import { Mark } from "../../core";
/**
 * Represents the type of markers used in the CivilMarkerType class.
 */
export type CivilMarkerType = "hover" | "select";
/**
 * Abstract class representing a Civil Navigator. It provides functionality to navigate and interact with civil engineering data.
 */
export declare abstract class CivilNavigator extends OBC.Component implements OBC.Disposable {
    /**
     * The view mode for the navigator.
     * Can be either "horizontal" or "vertical".
     */
    abstract view: "horizontal" | "vertical";
    /**
     * Event triggered when a curve is highlighted.
     * Provides the point of intersection and the corresponding curve mesh.
     */
    readonly onHighlight: OBC.Event<{
        point: THREE.Vector3;
        mesh: FRAGS.CurveMesh;
    }>;
    /**
     * Event triggered when a marker (hover or select) is placed on a curve.
     * Provides the alignment, percentage, type of marker, and the corresponding curve.
     */
    readonly onMarkerChange: OBC.Event<{
        alignment: FRAGS.Alignment;
        percentage: number;
        type: CivilMarkerType;
        curve: FRAGS.CivilCurve;
    }>;
    /**
     * Event triggered when a marker (hover or select) is hidden.
     * Provides the type of marker.
     */
    readonly onMarkerHidden: OBC.Event<{
        type: CivilMarkerType;
    }>;
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /** {@link OBC.Component.enabled} */
    enabled: boolean;
    /**
     * Mouse markers for hover and select actions.
     * They are of type Mark and are optional.
     */
    mouseMarkers?: {
        hover: Mark;
        select: Mark;
    };
    private _curves;
    private _previousAlignment;
    protected _highlighter?: CurveHighlighter;
    protected _world: OBC.World | null;
    /**
     * Getter for the highlighter instance.
     * Throws an error if the highlighter is not initialized.
     *
     * @returns {CurveHighlighter} The initialized highlighter instance.
     */
    get highlighter(): CurveHighlighter;
    /**
     * Getter for the world instance.
     *
     * @returns {OBC.World | null} The current world instance or null if not set.
     */
    get world(): OBC.World | null;
    /**
     * Setter for the world instance.
     * If the new world is the same as the current one, it does nothing.
     * If the current world is set, it removes the event listeners.
     * If the new world is not set, it does nothing.
     *
     * @param {OBC.World | null} world - The new world instance or null to unset.
     */
    set world(world: OBC.World | null);
    protected constructor(components: OBC.Components);
    /**
     * Draws the civil curves from the provided model onto the scene.
     *
     * @param model - The FragmentsGroup containing the civil data to be drawn.
     * @param filter - An optional Iterable of alignments to filter the curves to be drawn.
     *
     * @throws Will throw an error if the provided model doesn't have civil data or if no world was given for this navigator.
     *
     * @returns {Promise<void>} - A promise that resolves when the curves have been drawn onto the scene.
     */
    draw(model: FragmentsGroup, filter?: Iterable<FRAGS.Alignment>): Promise<void>;
    /** {@link OBC.Disposable.dispose} */
    dispose(): Promise<void>;
    /**
     * Clears the civil curves from the scene.
     * Removes all the curve meshes from the scene and clears the internal array of curve meshes.
     * Also unselects and unhovers the highlighter.
     */
    clear(): void;
    /**
     * Sets a marker on a specific curve at a given percentage.
     *
     * @param alignment - The alignment where the marker should be placed.
     * @param percentage - The percentage along the alignment where the marker should be placed.
     * @param type - The type of marker to be placed (hover or select).
     *
     * @throws Will throw an error if there are no curves to place the marker on.
     */
    setMarker(alignment: Alignment, percentage: number, type: CivilMarkerType): void;
    /**
     * Sets the definition segments and slope from the provided segments array.
     *
     * @param segmentsArray - An array of segments, where each segment is an array of numbers representing points.
     *
     * @returns An object containing the definition segments and slope.
     *
     * @throws Will throw an error if the segments array is empty or if the points in the segments array are not in the expected format.
     */
    setDefSegments(segmentsArray: any[]): {
        defSegments: any;
        slope: any;
    };
    /**
     * Hides the marker of the specified type.
     *
     * @param type - The type of marker to hide. It can be either "hover" or "select".
     *
     * @throws Will throw an error if the mouse markers are not initialized.
     */
    hideMarker(type: CivilMarkerType): void;
    private setupEvents;
    private updateLinesResolution;
    private newMouseMarker;
    private setMouseMarker;
    private updateMarker;
    private onMouseMove;
    private onClick;
    private onControlsUpdated;
    private getScaledBox;
}
