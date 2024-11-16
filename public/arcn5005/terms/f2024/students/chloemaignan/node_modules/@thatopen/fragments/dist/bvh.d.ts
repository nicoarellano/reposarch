import { BufferGeometry } from "three";
/**
 * A static class that manages [Bounding Volume Hierarchy (BVH)](https://github.com/gkjohnson/three-mesh-bvh) operations. It adds necessary methods to BufferGeometry and Mesh prototypes if not already initialized.
 */
export declare class BVH {
    /**
     * A flag indicating whether the BVH has been initialized.
     * Initialized means the necessary methods have been added to BufferGeometry and Mesh prototypes.
     */
    private static initialized;
    /**
     * Applies the Bounding Volume Hierarchy (BVH) to a given BufferGeometry.
     * If the BVH is not already initialized, it adds the necessary methods to the BufferGeometry and Mesh prototypes.
     * If the geometry does not have a boundsTree, it computes one.
     *
     * @param geometry - The BufferGeometry to apply the BVH to.
     */
    static apply(geometry: BufferGeometry): void;
    /**
     * Disposes of the BVH associated with the given BufferGeometry.
     * If the geometry has a boundsTree, it disposes of it.
     *
     * @param geometry - The BufferGeometry to dispose of the BVH from.
     */
    static dispose(geometry: BufferGeometry): void;
}
