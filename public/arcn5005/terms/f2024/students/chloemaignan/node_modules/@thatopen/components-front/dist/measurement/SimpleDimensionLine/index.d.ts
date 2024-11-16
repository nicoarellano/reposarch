import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { Mark } from "../../core";
/**
 * Interface representing the data required to create a dimension line.
 */
export interface DimensionData {
    /**
     * The starting point of the dimension line in 3D space.
     */
    start: THREE.Vector3;
    /**
     * The ending point of the dimension line in 3D space.
     */
    end: THREE.Vector3;
    /**
     * The material to be used for the line of the dimension.
     */
    lineMaterial: THREE.Material;
    /**
     * The HTML element to be used as the endpoint marker for the dimension line.
     */
    endpointElement: HTMLElement;
}
/**
 * A class representing a simple dimension line in a 3D space.
 */
export declare class SimpleDimensionLine {
    /**
     * The label for the dimension line.
     */
    label: Mark;
    /**
     * The bounding box for the dimension line.
     */
    boundingBox: THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>;
    /**
     * The world in which the dimension line exists.
     */
    world: OBC.World;
    /**
     * The components used by the dimension line.
     */
    components: OBC.Components;
    /**
     * The scale factor for the dimension line.
     */
    static scale: number;
    /**
     * The units used for the dimension line.
     */
    static units: string;
    /**
     * The number of decimals to show in the label.
     */
    static rounding: number;
    private _length;
    private _visible;
    private _start;
    private _end;
    private readonly _root;
    private readonly _endpoints;
    private readonly _line;
    /**
     * Getter for the visibility of the dimension line.
     * @returns {boolean} The current visibility state.
     */
    get visible(): boolean;
    /**
     * Setter for the visibility of the dimension line.
     * @param {boolean} value - The new visibility state.
     */
    set visible(value: boolean);
    /**
     * Getter for the end point of the dimension line.
     * @returns {THREE.Vector3} The current end point.
     */
    get endPoint(): THREE.Vector3;
    /**
     * Setter for the end point of the dimension line.
     * Updates the line geometry and position of the end point marker.
     * @param {THREE.Vector3} point - The new end point.
     */
    set endPoint(point: THREE.Vector3);
    /**
     * Getter for the start point of the dimension line.
     * @returns {THREE.Vector3} The current start point.
     */
    get startPoint(): THREE.Vector3;
    /**
     * Setter for the start point of the dimension line.
     * Updates the line geometry and position of the start point marker.
     * @param {THREE.Vector3} point - The new start point.
     */
    set startPoint(point: THREE.Vector3);
    private get _center();
    constructor(components: OBC.Components, world: OBC.World, data: DimensionData);
    /**
     * Disposes of the dimension line and its associated resources.
     * This method should be called when the dimension line is no longer needed.
     * It removes the dimension line from the world, destroys its components, and frees up memory.
     */
    dispose(): void;
    /**
     * Creates a bounding box for the dimension line.
     * The bounding box is a 3D box that encloses the dimension line.
     * It is used for collision detection and visibility culling.
     * The bounding box is initially invisible and can be toggled using the `toggleBoundingBox` method.
     */
    createBoundingBox(): void;
    /**
     * Toggles the visibility of the dimension line's label.
     * The label is a text element that displays the length of the dimension line.
     * This method is used to show or hide the label when needed.
     */
    toggleLabel(): void;
    private newEndpointElement;
    private updateLabel;
    private createLine;
    private newText;
    private getTextContent;
    private getLength;
}
