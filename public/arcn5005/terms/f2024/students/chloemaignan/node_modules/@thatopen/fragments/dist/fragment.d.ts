import * as THREE from "three";
import { Item } from "./base-types";
import { FragmentMesh } from "./fragment-mesh";
import { FragmentsGroup } from "./fragments-group";
/**
 * Class representing a fragment of a 3D model. Fragments are just a simple wrapper around THREE.InstancedMesh. Each fragment can contain Items (identified by ItemID) which are mapped to one or many instances inside this THREE.InstancedMesh. Fragments also implement features like instance buffer resizing and hiding out of the box.
 */
export declare class Fragment {
    /**
     * A set of unique item IDs associated with this fragment.
     */
    ids: Set<number>;
    /**
     * A map of item IDs to sets of instance IDs.
     */
    itemToInstances: Map<number, Set<number>>;
    /**
     * A map of instance IDs to item IDs.
     */
    instanceToItem: Map<number, number>;
    /**
     * A set of item IDs of instances that are currently hidden.
     */
    hiddenItems: Set<number>;
    /**
     * The unique identifier of this fragment.
     */
    id: string;
    /**
     * The mesh associated with this fragment.
     */
    mesh: FragmentMesh;
    /**
     * The amount of instances that this fragment can contain.
     */
    capacity: number;
    /**
     * The amount by which to increase the capacity when necessary.
     */
    capacityOffset: number;
    /**
     * The group of fragments to which this fragment belongs.
     */
    group?: FragmentsGroup;
    /**
     * A getter property that returns the unique vertices of the fragment's geometry.
     * The unique vertices are determined by comparing the vertex positions.
     *
     * @returns An array of unique vertices.
     */
    get uniqueVertices(): THREE.Vector3[];
    private _originalColors;
    private _settingVisibility;
    /**
     * Constructs a new Fragment.
     * @param geometry - The geometry of the fragment.
     * @param material - The material(s) of the fragment.
     * @param count - The initial number of instances in the fragment.
     */
    constructor(geometry: THREE.BufferGeometry, material: THREE.Material | THREE.Material[], count: number);
    /**
     * Disposes of the fragment and its associated resources.
     *
     * @param disposeResources - If true, disposes geometries and materials associated with the fragment. If false, only disposes of the fragment itself.
     */
    dispose(disposeResources?: boolean): void;
    /**
     * Retrieves the transform matrices and colors of instances associated with a given item ID.
     *
     * @param itemID - The unique identifier of the item.
     * @throws Will throw an error if the item is not found.
     * @returns An object containing the item ID, an array of transform matrices, and an optional array of colors.
     * If no colors are found, the colors array will be undefined.
     */
    get(itemID: number): Item;
    /**
     * Retrieves the item ID associated with a given instance ID.
     *
     * @param instanceID - The unique identifier of the instance.
     * @returns The item ID associated with the instance, or null if no association exists.
     */
    getItemID(instanceID: number): number | null;
    /**
     * Retrieves the instance IDs associated with a given item ID.
     *
     * @param itemID - The unique identifier of the item.
     * @returns The set of instance IDs associated with the item, or null if no association exists.
     */
    getInstancesIDs(itemID: number): Set<number> | null;
    /**
     * Updates the instance color and matrix attributes of the fragment's mesh.
     * This method should be called whenever the instance color or matrix attributes
     * need to be updated.
     */
    update(): void;
    /**
     * Adds items to the fragment.
     *
     * @param items - An array of items to be added. Each item contains an ID, an array of transform matrices, and an optional array of colors.
     *
     * If the necessary capacity to accommodate the new items exceeds the current capacity,
     * a new mesh with a larger capacity is created, and the old mesh is disposed.
     *
     * The transform matrices and colors of the items are added to the respective attributes of the mesh.
     *
     * The instance IDs, item IDs, and associations between instance IDs and item IDs are updated accordingly.
     *
     * The instance color and matrix attributes of the mesh are updated.
     */
    add(items: Item[]): void;
    /**
     * Removes items from the fragment.
     *
     * @param itemsIDs - An iterable of item IDs to be removed.
     *
     * The instance IDs, item IDs, and associations between instance IDs and item IDs are updated accordingly.
     *
     * The instance color and matrix attributes of the mesh are updated.
     *
     * @throws Will throw an error if the instances are not found.
     */
    remove(itemsIDs: Iterable<number>): void;
    /**
     * Clears the fragment by resetting the hidden items, item IDs, instance-to-item associations,
     * instance-to-item map, and the count of instances in the fragment's mesh.
     *
     * @remarks
     * This method is used to reset the fragment to its initial state.
     *
     * @example
     * ```typescript
     * fragment.clear();
     * ```
     */
    clear(): void;
    /**
     * Sets the visibility of items in the fragment.
     *
     * @param visible - A boolean indicating whether the items should be visible or hidden.
     * @param itemIDs - An iterable of item IDs to be affected. If not provided, all items in the fragment will be affected.
     *
     * @remarks
     * This method updates the visibility of items in the fragment based on the provided visibility flag.
     *
     *
     * @example
     * ```typescript
     * fragment.setVisibility(true, [1, 2, 3]); // Makes items with IDs 1, 2, and 3 visible.
     * fragment.setVisibility(false); // Makes all items in the fragment hidden.
     * ```
     */
    setVisibility(visible: boolean, itemIDs?: Iterable<number>): void;
    /**
     * Sets the color of items in the fragment.
     *
     * @param color - The color to be set for the items.
     * @param itemIDs - An iterable of item IDs to be affected. If not provided, all items in the fragment will be affected.
     * @param override - A boolean indicating whether the original color should be overridden. If true, the original color will be replaced with the new color.
     *
     *
     * @example
     * ```typescript
     * fragment.setColor(new THREE.Color(0xff0000), [1, 2, 3], true); // Sets the color of items with IDs 1, 2, and 3 to red, overriding their original colors.
     * fragment.setColor(new THREE.Color(0x00ff00)); // Sets the color of all items in the fragment to green.
     * ```
     */
    setColor(color: THREE.Color, itemIDs?: Iterable<number>, override?: boolean): void;
    /**
     * Resets the color of items in the fragment to their original colors.
     *
     * @param itemIDs - An iterable of item IDs to be affected. If not provided, all items in the fragment will be affected.
     *
     *
     * @example
     * ```typescript
     * fragment.resetColor([1, 2, 3]); // Resets the color of items with IDs 1, 2, and 3 to their original colors.
     * fragment.resetColor(); // Resets the color of all items in the fragment to their original colors.
     * ```
     */
    resetColor(itemIDs?: Iterable<number>): void;
    /**
     * Applies a transformation matrix to instances associated with given item IDs.
     *
     * @param itemIDs - An iterable of item IDs to be affected.
     * @param transform - The transformation matrix to be applied.
     *
     * @remarks
     * This method applies the provided transformation matrix to the instances associated with the given item IDs.
     *
     * @example
     * ```typescript
     * fragment.applyTransform([1, 2, 3], new THREE.Matrix4().makeTranslation(1, 0, 0)); // Applies a translation of (1, 0, 0) to instances with IDs 1, 2, and 3.
     * ```
     */
    applyTransform(itemIDs: Iterable<number>, transform: THREE.Matrix4): void;
    /**
     * Exports the fragment's geometry and associated data.
     *
     * @returns An object containing the exported geometry, an array of IDs associated with the fragment, and the fragment's ID.
     *
     * @remarks
     * This method is used to export the fragment's geometry and associated data for further processing or storage.
     *
     * @example
     * ```typescript
     * const exportedData = fragment.exportData();
     * // Use the exportedData object for further processing or storage
     * ```
     */
    exportData(): {
        ids: number[];
        id: string;
        position: Float32Array;
        normal: Float32Array;
        index: number[];
        groups: number[];
        materials: number[];
        matrices: number[];
        colors: number[];
    };
    /**
     * Creates a copy of the whole fragment or a part of it. It shares the geometry with the original fragment, but has its own InstancedMesh data, so it also needs to be disposed.
     *
     * @param itemIDs - An iterable of item IDs to be included in the clone.
     *
     */
    clone(itemIDs?: Iterable<number>): Fragment;
    private putLast;
}
