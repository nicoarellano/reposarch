import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import { FragmentsGroup } from "@thatopen/fragments";
import { Component, Components, Disposable, Event } from "../../core";
/**
 * A simple implementation of bounding box that works for fragments. The resulting bbox is not 100% precise, but it's fast, and should suffice for general use cases such as camera zooming or general boundary determination. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/BoundingBoxer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/BoundingBoxer).
 */
export declare class BoundingBoxer extends Component implements Disposable {
    static readonly uuid: "d1444724-dba6-4cdd-a0c7-68ee1450d166";
    /** {@link Component.enabled} */
    enabled: boolean;
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<unknown>;
    private _absoluteMin;
    private _absoluteMax;
    private _meshes;
    constructor(components: Components);
    /**
     * A static method to calculate the dimensions of a given bounding box.
     *
     * @param bbox - The bounding box to calculate the dimensions for.
     * @returns An object containing the width, height, depth, and center of the bounding box.
     */
    static getDimensions(bbox: THREE.Box3): {
        width: number;
        height: number;
        depth: number;
        center: THREE.Vector3;
    };
    /**
     * A static method to create a new bounding box boundary.
     *
     * @param positive - A boolean indicating whether to create a boundary for positive or negative values.
     * @returns A new THREE.Vector3 representing the boundary.
     *
     * @remarks
     * This method is used to create a new boundary for calculating bounding boxes.
     * It sets the x, y, and z components of the returned vector to positive or negative infinity,
     * depending on the value of the `positive` parameter.
     *
     * @example
     * ```typescript
     * const positiveBound = BoundingBoxer.newBound(true);
     * console.log(positiveBound); // Output: Vector3 { x: Infinity, y: Infinity, z: Infinity }
     *
     * const negativeBound = BoundingBoxer.newBound(false);
     * console.log(negativeBound); // Output: Vector3 { x: -Infinity, y: -Infinity, z: -Infinity }
     * ```
     */
    static newBound(positive: boolean): THREE.Vector3;
    /**
     * A static method to calculate the bounding box of a set of points.
     *
     * @param points - An array of THREE.Vector3 representing the points.
     * @param min - An optional THREE.Vector3 representing the minimum bounds. If not provided, it will be calculated.
     * @param max - An optional THREE.Vector3 representing the maximum bounds. If not provided, it will be calculated.
     * @returns A THREE.Box3 representing the bounding box of the given points.
     *
     * @remarks
     * This method calculates the bounding box of a set of points by iterating through each point and updating the minimum and maximum bounds accordingly.
     * If the `min` or `max` parameters are provided, they will be used as the initial bounds. Otherwise, the initial bounds will be set to positive and negative infinity.
     *
     * @example
     * ```typescript
     * const points = [
     *   new THREE.Vector3(1, 2, 3),
     *   new THREE.Vector3(4, 5, 6),
     *   new THREE.Vector3(7, 8, 9),
     * ];
     *
     * const bbox = BoundingBoxer.getBounds(points);
     * console.log(bbox); // Output: Box3 { min: Vector3 { x: 1, y: 2, z: 3 }, max: Vector3 { x: 7, y: 8, z: 9 } }
     * ```
     */
    static getBounds(points: THREE.Vector3[], min?: THREE.Vector3, max?: THREE.Vector3): THREE.Box3;
    /** {@link Disposable.dispose} */
    dispose(): void;
    /**
     * Returns the bounding box of the calculated fragments.
     *
     * @returns A new THREE.Box3 instance representing the bounding box.
     *
     * @remarks
     * This method clones the internal minimum and maximum vectors and returns a new THREE.Box3 instance.
     * The returned box represents the bounding box of the calculated fragments.
     *
     * @example
     * ```typescript
     * const boundingBox = boundingBoxer.get();
     * console.log(boundingBox); // Output: Box3 { min: Vector3 { x: -10, y: -10, z: -10 }, max: Vector3 { x: 10, y: 10, z: 10 } }
     * ```
     */
    get(): THREE.Box3;
    /**
     * Calculates and returns a sphere that encompasses the entire bounding box.
     *
     * @returns A new THREE.Sphere instance representing the calculated sphere.
     *
     * @remarks
     * This method calculates the center and radius of a sphere that encompasses the entire bounding box.
     * The center is calculated as the midpoint between the minimum and maximum bounds of the bounding box.
     * The radius is calculated as the distance from the center to the minimum bound.
     *
     * @example
     * ```typescript
     * const boundingBoxer = components.get(BoundingBoxer);
     * boundingBoxer.add(fragmentsGroup);
     * const boundingSphere = boundingBoxer.getSphere();
     * console.log(boundingSphere); // Output: Sphere { center: Vector3 { x: 0, y: 0, z: 0 }, radius: 10 }
     * ```
     */
    getSphere(): THREE.Sphere;
    /**
     * Returns a THREE.Mesh instance representing the bounding box.
     *
     * @returns A new THREE.Mesh instance representing the bounding box.
     *
     * @remarks
     * This method calculates the dimensions of the bounding box using the `getDimensions` method.
     * It then creates a new THREE.BoxGeometry with the calculated dimensions.
     * A new THREE.Mesh is created using the box geometry, and it is added to the `_meshes` array.
     * The position of the mesh is set to the center of the bounding box.
     *
     * @example
     * ```typescript
     * const boundingBoxer = components.get(BoundingBoxer);
     * boundingBoxer.add(fragmentsGroup);
     * const boundingBoxMesh = boundingBoxer.getMesh();
     * scene.add(boundingBoxMesh);
     * ```
     */
    getMesh(): THREE.Mesh<THREE.BoxGeometry, THREE.Material | THREE.Material[], THREE.Object3DEventMap>;
    /**
     * Resets the internal minimum and maximum vectors to positive and negative infinity, respectively.
     * This method is used to prepare the BoundingBoxer for a new set of fragments.
     *
     * @remarks
     * This method is called when a new set of fragments is added to the BoundingBoxer.
     * It ensures that the bounding box calculations are accurate and up-to-date.
     *
     * @example
     * ```typescript
     * const boundingBoxer = components.get(BoundingBoxer);
     * boundingBoxer.add(fragmentsGroup);
     * // ...
     * boundingBoxer.reset();
     * ```
     */
    reset(): void;
    /**
     * Adds a FragmentsGroup to the BoundingBoxer.
     *
     * @param group - The FragmentsGroup to add.
     *
     * @remarks
     * This method iterates through each fragment in the provided FragmentsGroup,
     * and calls the `addMesh` method for each fragment's mesh.
     *
     * @example
     * ```typescript
     * const boundingBoxer = components.get(BoundingBoxer);
     * boundingBoxer.add(fragmentsGroup);
     * ```
     */
    add(group: FragmentsGroup): void;
    /**
     * Adds a mesh to the BoundingBoxer and calculates the bounding box.
     *
     * @param mesh - The mesh to add. It can be an instance of THREE.InstancedMesh, THREE.Mesh, or FRAGS.CurveMesh.
     * @param itemIDs - An optional iterable of numbers representing the item IDs.
     *
     * @remarks
     * This method calculates the bounding box of the provided mesh and updates the internal minimum and maximum vectors.
     * If the mesh is an instance of THREE.InstancedMesh, it calculates the bounding box for each instance.
     * If the mesh is an instance of FRAGS.FragmentMesh and itemIDs are provided, it calculates the bounding box for the specified item IDs.
     *
     * @example
     * ```typescript
     * const boundingBoxer = components.get(BoundingBoxer);
     * boundingBoxer.addMesh(mesh);
     * ```
     */
    addMesh(mesh: THREE.InstancedMesh | THREE.Mesh | FRAGS.CurveMesh, itemIDs?: Iterable<number>): void;
    /**
     * Uses a FragmentIdMap to add its meshes to the bb calculation.
     *
     * This method iterates through the provided `fragmentIdMap`, retrieves the corresponding fragment from the `FragmentsManager`,
     * and then calls the `addMesh` method for each fragment's mesh, passing the expression IDs as the second parameter.
     *
     * @param fragmentIdMap - A mapping of fragment IDs to their corresponding expression IDs.
     *
     * @remarks
     * This method is used to add a mapping of fragment IDs to their corresponding expression IDs.
     * It ensures that the bounding box calculations are accurate and up-to-date by updating the internal minimum and maximum vectors.
     *
     * @example
     * ```typescript
     * const boundingBoxer = components.get(BoundingBoxer);
     * const fragmentIdMap: FRAGS.FragmentIdMap = {
     *   '5991fa75-2eef-4825-90b3-85177f51a9c9': [123, 245, 389],
     *   '3469077e-39bf-4fc9-b3e6-4a1d78ad52b0': [454, 587, 612],
     * };
     * boundingBoxer.addFragmentIdMap(fragmentIdMap);
     * ```
     */
    addFragmentIdMap(fragmentIdMap: FRAGS.FragmentIdMap): void;
    private static getFragmentBounds;
}
