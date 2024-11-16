import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { IndexFragmentMap } from "./types";
/**
 * Class for managing and rendering the fills of a clipping plane.
 */
export declare class ClippingFills {
    /**
     * The THREE.js mesh representing the fills.
     */
    mesh: THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>;
    /**
     * The components instance associated with the clipping fills.
     */
    components: OBC.Components;
    /**
     * The world in which the clipping plane and fills exist.
     */
    world: OBC.World;
    /**
     * The name of the style associated with this clipping fills.
     */
    styleName?: string;
    private _precission;
    private _tempVector;
    private _plane;
    private _geometry;
    private _outlinedMesh;
    private _plane2DCoordinateSystem;
    private _planeAxis?;
    /**
     * Gets the visibility of the clipping fills mesh.
     * @returns {boolean} Returns true if the mesh is visible, false otherwise.
     */
    get visible(): boolean;
    /**
     * Sets the visibility of the clipping fills mesh.
     * @param {boolean} value - The new visibility state. If true, the mesh will be added to the scene and the style's meshes set. If false, the mesh will be removed from the scene and the style's meshes set.
     */
    set visible(value: boolean);
    /**
     * Sets the geometry of the clipping fills mesh.
     * @param {THREE.BufferGeometry} geometry - The new geometry for the mesh. The position attribute of the geometry will be assigned to the mesh's geometry.
     */
    set geometry(geometry: THREE.BufferGeometry);
    constructor(components: OBC.Components, world: OBC.World, plane: THREE.Plane, geometry: THREE.BufferGeometry, material: THREE.Material);
    /**
     * Disposes of the clipping fills mesh and its associated resources.
     * This method should be called when the clipping fills are no longer needed to free up memory.
     */
    dispose(): void;
    /**
     * Updates the clipping fills mesh with new indices.
     *
     * @param trianglesIndices - An array of indices representing triangles in the geometry.
     * @param indexFragMap - A map that allows to trace back the original fragment and id from each triangle of the fill mesh.
     *
     */
    update(trianglesIndices: number[], indexFragMap: IndexFragmentMap): void;
    private computeFill;
    private updatePlane2DCoordinateSystem;
    private getStyleAndScene;
}
