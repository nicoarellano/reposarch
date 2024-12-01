import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { Mark } from "../../core";
/**
 * Represents a selection made by the user, containing area, perimeter, mesh, and label.
 */
export interface AreaSelection {
    /**
     * The calculated area of the selection.
     */
    area: number;
    /**
     * The calculated perimeter of the selection.
     */
    perimeter: number;
    /**
     * The 3D mesh representing the selection.
     */
    mesh: THREE.Mesh;
    /**
     * The label associated with the selection.
     */
    label: Mark;
}
/**
 * Represents a serialized version of an AreaSelection, used for saving and loading measurements.
 */
export interface SerializedAreaMeasure {
    /**
     * The position of the vertices in the selection.
     */
    position: Float32Array;
    /**
     * The calculated perimeter of the selection.
     */
    perimeter: number;
    /**
     * The calculated area of the selection.
     */
    area: number;
}
/**
 * This component allows users to measure geometry faces in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/FaceMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/FaceMeasurement).
 */
export declare class FaceMeasurement extends OBC.Component implements OBC.Createable, OBC.Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "30279548-1309-44f6-aa97-ce26eed73522";
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /**
     * An array of AreaSelection objects representing the user's selections.
     * This array is used to store the selected areas, their meshes, and labels.
     */
    selection: AreaSelection[];
    /**
     * A reference to the preview dimension face.
     * This line is used to visualize the measurement while creating it.
     */
    preview: THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.MeshBasicMaterial, THREE.Object3DEventMap>;
    /**
     * Represents the material used for the selected area in the FaceMeasurement component.
     * This material is applied to the 3D mesh representing the selected area.
     */
    selectionMaterial: THREE.MeshBasicMaterial;
    /**
     * The world in which the measurements are performed.
     */
    world?: OBC.World;
    private _enabled;
    private _currentSelelection;
    /** {@link OBC.Component.enabled} */
    set enabled(value: boolean);
    /** {@link OBC.Component.enabled} */
    get enabled(): boolean;
    constructor(components: OBC.Components);
    /** {@link OBC.Disposable.dispose} */
    dispose(): void;
    /** {@link OBC.Createable.create} */
    create: () => void;
    /** {@link OBC.Createable.delete} */
    delete(): void;
    /**
     * Deletes all the selections made by the user.
     * It iterates over the `selection` array, removes each mesh and label from the scene,
     * disposes the geometry and material of the mesh, and finally clears the `selection` array.
     */
    deleteAll(): void;
    /** {@link OBC.Createable.endCreation} */
    endCreation(): void;
    /** {@link OBC.Createable.cancelCreation} */
    cancelCreation(): void;
    /**
     * Retrieves the current state of the AreaMeasurement component in a serialized format.
     * This method is used for saving measurements.
     *
     * @returns {SerializedAreaMeasure[]} An array of SerializedAreaMeasure objects,
     * each representing a single selection made by the user.
     */
    get(): SerializedAreaMeasure[];
    /**
     * Sets the state of the AreaMeasurement component from a serialized format.
     * This method is used for loading measurements.
     *
     * @param serialized - An array of SerializedAreaMeasure objects,
     * each representing a single selection made by the user.
     *
     * @throws Will throw an error if no world is given to the face measurement.
     */
    set(serialized: SerializedAreaMeasure[]): void;
    private setupEvents;
    private setVisibility;
    private onMouseMove;
    private onKeydown;
    private unselect;
    private updateSelection;
    private newLabel;
    private regenerateHighlight;
}
