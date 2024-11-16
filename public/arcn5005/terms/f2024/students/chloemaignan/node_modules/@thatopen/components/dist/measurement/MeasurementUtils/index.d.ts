import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import { Component, Components } from "../../core";
/**
 * Represents an edge measurement result.
 */
export interface MeasureEdge {
    /**
     * The distance between the two points of the edge.
     */
    distance: number;
    /**
     * The two points that define the edge.
     */
    points: THREE.Vector3[];
}
/**
 * Utility component for performing measurements on 3D meshes by providing methods for measuring distances between edges and faces. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/MeasurementUtils). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/MeasurementUtils).
 */
export declare class MeasurementUtils extends Component {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static uuid: string;
    /** {@link Component.enabled} */
    enabled: boolean;
    constructor(components: Components);
    /**
     * Utility method to calculate the distance from a point to a line segment.
     *
     * @param point - The point from which to calculate the distance.
     * @param lineStart - The start point of the line segment.
     * @param lineEnd - The end point of the line segment.
     * @param clamp - If true, the distance will be clamped to the line segment's length.
     * @returns The distance from the point to the line segment.
     */
    static distanceFromPointToLine(point: THREE.Vector3, lineStart: THREE.Vector3, lineEnd: THREE.Vector3, clamp?: boolean): number;
    /**
     * Method to get the face of a mesh that contains a given triangle index.
     * It also returns the edges of the found face and their indices.
     *
     * @param mesh - The mesh to get the face from. It must be indexed.
     * @param triangleIndex - The index of the triangle within the mesh.
     * @param instance - The instance of the mesh (optional).
     * @returns An object containing the edges of the found face and their indices, or null if no face was found.
     */
    getFace(mesh: THREE.InstancedMesh | THREE.Mesh, triangleIndex: number, instance?: number): {
        edges: MeasureEdge[];
        indices: Set<number>;
    } | null;
    /**
     * Method to get the vertices and normal of a mesh face at a given index.
     * It also applies instance transformation if provided.
     *
     * @param mesh - The mesh to get the face from. It must be indexed.
     * @param faceIndex - The index of the face within the mesh.
     * @param instance - The instance of the mesh (optional).
     * @returns An object containing the vertices and normal of the face.
     * @throws Will throw an error if the geometry is not indexed.
     */
    getVerticesAndNormal(mesh: THREE.Mesh | THREE.InstancedMesh, faceIndex: number, instance: number | undefined): {
        p1: THREE.Vector3;
        p2: THREE.Vector3;
        p3: THREE.Vector3;
        faceNormal: THREE.Vector3;
    };
    /**
     * Method to round the vector's components to a specified number of decimal places.
     * This is used to ensure numerical precision in edge detection.
     *
     * @param vector - The vector to round.
     * @returns The vector with rounded components.
     */
    round(vector: THREE.Vector3): void;
    /**
     * Calculates the volume of a set of fragments.
     *
     * @param frags - A map of fragment IDs to their corresponding item IDs.
     * @returns The total volume of the fragments and the bounding sphere.
     *
     * @remarks
     * This method creates a set of instanced meshes from the given fragments and item IDs.
     * It then calculates the volume of each mesh and returns the total volume and its bounding sphere.
     *
     * @throws Will throw an error if the geometry of the meshes is not indexed.
     * @throws Will throw an error if the fragment manager is not available.
     */
    getVolumeFromFragments(frags: FRAGS.FragmentIdMap): number;
    /**
     * Calculates the total volume of a set of meshes.
     *
     * @param meshes - An array of meshes or instanced meshes to calculate the volume from.
     * @returns The total volume of the meshes and the bounding sphere.
     *
     * @remarks
     * This method calculates the volume of each mesh in the provided array and returns the total volume
     * and its bounding sphere.
     *
     */
    getVolumeFromMeshes(meshes: THREE.InstancedMesh[] | THREE.Mesh[]): number;
    private getFaceData;
    private getVolumeOfMesh;
    private getSignedVolumeOfTriangle;
}
