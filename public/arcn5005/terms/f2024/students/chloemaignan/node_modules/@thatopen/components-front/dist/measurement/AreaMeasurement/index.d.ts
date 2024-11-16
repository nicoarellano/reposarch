import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { AreaMeasureElement } from "./src";
/**
 * This component allows users to measure areas in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/AreaMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/AreaMeasurement).
 */
export declare class AreaMeasurement extends OBC.Component implements OBC.Createable, OBC.Disposable, OBC.Hideable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "c453a99e-f054-4781-9060-33df617db4a5";
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /**
     * A list of all the area measurement elements created by this component.
     */
    list: AreaMeasureElement[];
    /**
     * The world in which the area measurements are performed.
     * This property is optional and can be set to null if no world is available.
     */
    world?: OBC.World;
    private _enabled;
    private _visible;
    private _vertexPicker;
    private _currentAreaElement;
    private _clickCount;
    /** {@link OBC.Component.enabled} */
    set enabled(value: boolean);
    /** {@link OBC.Component.enabled} */
    get enabled(): boolean;
    /**
     * Setter for the working plane for the area measurement.
     * Sets the working plane for the vertex picker.
     * @param plane - The new working plane or null if no plane is to be used.
     */
    set workingPlane(plane: THREE.Plane | null);
    /**
     * Getter for the working plane for the area measurement.
     * @returns The current working plane or null if no plane is being used.
     */
    get workingPlane(): THREE.Plane | null;
    /** {@link OBC.Hideable.visible} */
    get visible(): boolean;
    /** {@link OBC.Hideable.visible} */
    set visible(value: boolean);
    constructor(components: OBC.Components);
    /** {@link OBC.Disposable.dispose} */
    dispose(): void;
    /** {@link OBC.Createable.create} */
    create: () => void;
    /** {@link OBC.Createable.delete} */
    delete(): void;
    /** Deletes all the dimensions that have been previously created. */
    deleteAll(): void;
    /** {@link OBC.Createable.endCreation} */
    endCreation(): void;
    /** {@link OBC.Createable.cancelCreation} */
    cancelCreation(): void;
    private setupEvents;
    private onMouseMove;
    private onKeydown;
}
