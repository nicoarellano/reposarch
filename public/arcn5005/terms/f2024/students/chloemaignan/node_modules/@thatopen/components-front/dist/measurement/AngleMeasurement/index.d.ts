import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { AngleMeasureElement } from "./src";
/**
 * This component allows users to measure angles in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/AngleMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/AngleMeasurement).
 */
export declare class AngleMeasurement extends OBC.Component implements OBC.Createable, OBC.Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "622fb2c9-528c-4b0a-8a0e-6a1375f0a3aa";
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /**
     * The world in which the angle measurements are performed.
     * This property is optional and can be set to null if no world is available.
     */
    world?: OBC.World;
    /**
     * A list of all the angle measurement elements created by this component.
     */
    list: AngleMeasureElement[];
    private _lineMaterial;
    private _enabled;
    private _vertexPicker;
    private _currentAngleElement;
    private _clickCount;
    /** {@link OBC.Component.enabled} */
    get enabled(): boolean;
    /** {@link OBC.Component.enabled} */
    set enabled(value: boolean);
    /**
     * Getter for the line material used for the angle measurement lines.
     */
    get lineMaterial(): LineMaterial;
    /**
     * Setter for the line material used for the angle measurement lines.
     * Disposes the old material and sets the new one.
     * Also updates the resolution of the material to match the window size.
     * @param material - The new line material to use.
     */
    set lineMaterial(material: LineMaterial);
    /**
     * Getter for the working plane for the angle measurement.
     * @returns The current working plane or null if no plane is being used.
     */
    get workingPlane(): THREE.Plane | null;
    /**
     * Setter for the working plane for the angle measurement.
     * Sets the working plane for the vertex picker.
     * @param plane - The new working plane or null if no plane is to be used.
     */
    set workingPlane(plane: THREE.Plane | null);
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
    private onKeyDown;
}
