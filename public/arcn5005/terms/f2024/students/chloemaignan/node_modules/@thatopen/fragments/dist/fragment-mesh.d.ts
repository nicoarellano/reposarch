import * as THREE from "three";
import { Fragment } from "./fragment";
import { IndexedGeometry } from "./base-types";
/**
 * A class representing a THREE.InstancedMesh with additional properties for fragment data.
 *
 * @extends THREE.InstancedMesh
 */
export declare class FragmentMesh extends THREE.InstancedMesh {
    /**
     * The fragment associated with this mesh.
     */
    fragment: Fragment;
    /**
     * The materials used by this mesh.
     * If a single material is provided, it will be wrapped in an array.
     */
    material: THREE.Material[];
    /**
     * The geometry used by this mesh.
     * It must be an IndexedGeometry.
     */
    geometry: IndexedGeometry;
    /**
     * Constructs a new FragmentMesh.
     *
     * @param geometry - The geometry for the mesh. Must be indexed.
     * @param material - The material(s) for the mesh. If a single material is provided, it will be wrapped in an array.
     * @param count - The number of instances to create.
     * @param fragment - The fragment associated with this mesh.
     */
    constructor(geometry: THREE.BufferGeometry, material: THREE.Material | THREE.Material[], count: number, fragment: Fragment);
    /**
     * Exports the data of the fragment mesh to a serializable format.
     *
     * @returns An object containing the position, normal, index, groups, materials, matrices, and colors of the fragment mesh.
     */
    exportData(): {
        position: Float32Array;
        normal: Float32Array;
        index: number[];
        groups: number[];
        materials: number[];
        matrices: number[];
        colors: number[];
    };
    clone(_recursive?: boolean): any;
}
