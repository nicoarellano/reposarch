import { Fragment, FragmentsGroup } from "@thatopen/fragments";
import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import { Component, Components, Event, Disposable, DataMap } from "../../core";
import { RelationsMap } from "../../ifc/IfcRelationsIndexer/src/types";
/**
 * Component to load, delete and manage [fragments](https://github.com/ThatOpen/engine_fragment) efficiently. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/FragmentsManager). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/FragmentsManager).
 */
export declare class FragmentsManager extends Component implements Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "fef46874-46a3-461b-8c44-2922ab77c806";
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<unknown>;
    /**
     * Event triggered when fragments are loaded.
     */
    readonly onFragmentsLoaded: Event<FragmentsGroup>;
    /**
     * Event triggered when fragments are disposed.
     */
    readonly onFragmentsDisposed: Event<{
        groupID: string;
        fragmentIDs: string[];
    }>;
    /**
     * DataMap containing all loaded fragments.
     * The key is the fragment's unique identifier, and the value is the fragment itself.
     */
    readonly list: DataMap<string, Fragment>;
    /**
     * DataMap containing all loaded fragment groups.
     * The key is the group's unique identifier, and the value is the group itself.
     */
    readonly groups: DataMap<string, FragmentsGroup>;
    baseCoordinationModel: string;
    baseCoordinationMatrix: THREE.Matrix4;
    /** {@link Component.enabled} */
    enabled: boolean;
    private _loader;
    /**
     * Getter for the meshes of all fragments in the FragmentsManager.
     * It iterates over the fragments in the list and pushes their meshes into an array.
     * @returns {THREE.Mesh[]} An array of THREE.Mesh objects representing the fragments.
     */
    get meshes(): THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>[];
    constructor(components: Components);
    /** {@link Disposable.dispose} */
    dispose(): void;
    /**
     * Dispose of a specific fragment group.
     * This method removes the group from the groups map, deletes all fragments within the group from the list,
     * disposes of the group, and triggers the onFragmentsDisposed event.
     *
     * @param group - The fragment group to be disposed.
     */
    disposeGroup(group: FragmentsGroup): void;
    /**
     * Loads a binary file that contain fragment geometry.
     * @param data - The binary data to load.
     * @param config - Optional configuration for loading.
     * @param config.isStreamed - Optional setting to determine whether this model is streamed or not.
     * @param config.coordinate - Whether to apply coordinate transformation. Default is true.
     * @param config.properties - Ifc properties to set on the loaded fragments. Not to be used when streaming.
     * @returns The loaded FragmentsGroup.
     */
    load(data: Uint8Array, config?: Partial<{
        coordinate: boolean;
        name: string;
        properties: FRAGS.IfcProperties;
        relationsMap: RelationsMap;
        isStreamed?: boolean;
    }>): FragmentsGroup;
    /**
     * Export the specified fragmentsgroup to binary data.
     * @param group - the fragments group to be exported.
     * @returns the exported data as binary buffer.
     */
    export(group: FragmentsGroup): Uint8Array;
    /**
     * Gets a map of model IDs to sets of express IDs for the given fragment ID map.
     * @param fragmentIdMap - A map of fragment IDs to their corresponding express IDs.
     * @returns A map of model IDs to sets of express IDs.
     */
    getModelIdMap(fragmentIdMap: FRAGS.FragmentIdMap): {
        [modelID: string]: Set<number>;
    };
    /**
     * Converts a map of model IDs to sets of express IDs to a fragment ID map.
     * @param modelIdMap - A map of model IDs to their corresponding express IDs.
     * @returns A fragment ID map.
     * @remarks
     * This method iterates through the provided model ID map, retrieves the corresponding model from the `groups` map,
     * and then calls the `getFragmentMap` method of the model to obtain a fragment ID map for the given express IDs.
     * The fragment ID maps are then merged into a single map and returned.
     * If a model with a given ID is not found in the `groups` map, the method skips that model and continues with the next one.
     */
    modelIdToFragmentIdMap(modelIdMap: {
        [modelID: string]: Set<number>;
    }): FRAGS.FragmentIdMap;
    /**
     * Converts a collection of IFC GUIDs to a fragmentIdMap.
     *
     * @param guids - An iterable collection of global IDs to be converted to a fragment ID map.
     *
     * @returns A fragment ID map, where the keys are fragment IDs and the values are the corresponding express IDs.
     */
    guidToFragmentIdMap(guids: Iterable<string>): FRAGS.FragmentIdMap;
    /**
     * Converts a fragment ID map to a collection of IFC GUIDs.
     *
     * @param fragmentIdMap - A fragment ID map to be converted to a collection of IFC GUIDs.
     *
     * @returns An array of IFC GUIDs.
     */
    fragmentIdMapToGuids(fragmentIdMap: FRAGS.FragmentIdMap): string[];
    /**
     * Applies coordinate transformation to the provided models.
     * If no models are provided, all groups are used.
     * The first model in the list becomes the base model for coordinate transformation.
     * All other models are then transformed to match the base model's coordinate system.
     *
     * @param models - The models to apply coordinate transformation to.
     * If not provided, all models are used.
     */
    coordinate(models?: FragmentsGroup[]): void;
    /**
     * Applies the base coordinate system to the provided object.
     *
     * This function takes an object and its original coordinate system as input.
     * It then inverts the original coordinate system and applies the base coordinate system
     * to the object. This ensures that the object's position, rotation, and scale are
     * transformed to match the base coordinate system (which is taken from the first model loaded).
     *
     * @param object - The object to which the base coordinate system will be applied.
     * This should be an instance of THREE.Object3D.
     *
     * @param originalCoordinateSystem - The original coordinate system of the object.
     * This should be a THREE.Matrix4 representing the object's transformation matrix.
     */
    applyBaseCoordinateSystem(object: THREE.Object3D | THREE.Vector3, originalCoordinateSystem?: THREE.Matrix4): void;
    /**
     * Creates a copy of the whole model or a part of it.
     *
     * @param model - The model to clone.
     * @param items - Optional - The part of the model to be cloned. If not given, the whole group is cloned.
     *
     */
    clone(model: FRAGS.FragmentsGroup, items?: FRAGS.FragmentIdMap): FragmentsGroup;
}
