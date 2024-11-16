import * as OBC from "@thatopen/components";
import { SimpleDimensionLine } from "../SimpleDimensionLine";
/**
 * This component allows users to measure geometry edges in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/EdgeMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/EdgeMeasurement).
 */
export declare class EdgeMeasurement extends OBC.Component implements OBC.Createable, OBC.Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "e7be5749-89df-4514-8d25-83aa38ce12d8";
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /**
     * A reference to the preview dimension line.
     * This line is used to visualize the measurement while creating it.
     */
    preview?: SimpleDimensionLine;
    /**
     * The tolerance value for edge selection.
     * This value determines the maximum distance from the mouse cursor to an edge for it to be selected.
     */
    tolerance: number;
    /**
     * The world in which the measurements are performed.
     */
    world?: OBC.World;
    private _enabled;
    private _lineMaterial;
    /** {@link OBC.Component.enabled} */
    set enabled(value: boolean);
    /** {@link OBC.Component.enabled} */
    get enabled(): boolean;
    constructor(components: OBC.Components);
    /** {@link OBC.Disposable.dispose} */
    dispose(): void;
    /** {@link OBC.Createable.create} */
    create: () => Promise<void>;
    /** {@link OBC.Createable.delete} */
    delete(): void;
    /**
     * Deletes all the measurements created by the EdgeMeasurement component.
     */
    deleteAll(): void;
    /** {@link OBC.Createable.endCreation} */
    endCreation(): void;
    /** {@link OBC.Createable.cancelCreation} */
    cancelCreation(): void;
    /**
     * Retrieves the current state of the measurements created by the EdgeMeasurement component.
     * The state is serialized as an array of arrays, where each inner array represents a line measurement.
     * Each line measurement is represented by six numbers: the x, y, and z coordinates of the start and end points.
     */
    get(): number[][];
    /**
     * Sets the state of the measurements created by the EdgeMeasurement component.
     * The state is serialized as an array of arrays, where each inner array represents a line measurement.
     * Each line measurement is represented by six numbers: the x, y, and z coordinates of the start and end points.
     *
     * @param dimensions - The serialized state of the measurements.
     * Each inner array should contain six numbers representing the x, y, and z coordinates of the start and end points of a line measurement.
     *
     */
    set(dimensions: number[][]): void;
    private setupEvents;
    private onMouseMove;
    private onKeydown;
    private updateSelection;
}
