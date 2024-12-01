import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import { Mark } from "../../core";
/**
 * This component allows users to measure geometry volumes in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/VolumeMeasurement). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/VolumeMeasurement).
 */
export declare class VolumeMeasurement extends OBC.Component implements OBC.Createable, OBC.Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "811da532-7af3-4635-b592-1c06ae494af5";
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /**
     * Event triggered when a volume is found.
     * The event passes the calculated volume as a parameter.
     */
    readonly onVolumeFound: OBC.Event<number>;
    /**
     * Label used to display the calculated volume.
     * It is initially set to null and will be created when needed.
     */
    label: Mark | null;
    /**
     * The world in which the measurements are performed.
     */
    world?: OBC.World;
    private _enabled;
    /** {@link OBC.Component.enabled} */
    set enabled(value: boolean);
    /** {@link OBC.Component.enabled} */
    get enabled(): boolean;
    constructor(components: OBC.Components);
    /** {@link OBC.Disposable.dispose} */
    dispose(): Promise<void>;
    /** {@link OBC.Createable.create} */
    create: () => void;
    /** {@link OBC.Createable.delete} */
    delete(): void;
    /**
     * Deletes all the measurements created by this component.
     */
    deleteAll(): Promise<void>;
    /** {@link OBC.Createable.endCreation} */
    endCreation(): void;
    /** {@link OBC.Createable.cancelCreation} */
    cancelCreation(): void;
    /**
     * Calculates the volume of a set of fragments.
     *
     * @param frags - A map of fragment IDs to their corresponding item IDs.
     * @returns The total volume of the fragments.
     *
     * @remarks
     * This method creates a set of instanced meshes from the given fragments and item IDs.
     * It then calculates the volume of each mesh and returns the total volume.
     *
     * @throws Will throw an error if the world is not set.
     * @throws Will throw an error if the label is not created.
     * @throws Will throw an error if the world's renderer is not set.
     * @throws Will throw an error if the geometry of the meshes is not indexed.
     * @throws Will throw an error if the fragment manager is not available.
     */
    getVolumeFromFragments(frags: FRAGS.FragmentIdMap): number;
    /**
     * Calculates the total volume of a set of meshes.
     *
     * @param meshes - An array of meshes or instanced meshes to calculate the volume from.
     * @returns The total volume of the meshes.
     *
     * @throws Will throw an error if the world is not set.
     * @throws Will throw an error if the label is not created.
     *
     * @remarks
     * This method calculates the volume of each mesh in the provided array and returns the total volume.
     * It also handles the creation of a label if it doesn't exist, adds the label to the world's scene,
     * and positions the label at the center of the bounding sphere of the meshes.
     *
     */
    getVolumeFromMeshes(meshes: THREE.InstancedMesh[] | THREE.Mesh[]): number;
    /**
     * Clears the label associated with the volume measurement.
     *
     * @remarks
     * This method is used to hide the label when the volume measurement is no longer needed.
     * If the label exists, it sets its visibility to false.
     *
     */
    clear(): void;
    private newLabel;
    private setupEvents;
    private setLabel;
    private onMouseMove;
    private onKeydown;
}
