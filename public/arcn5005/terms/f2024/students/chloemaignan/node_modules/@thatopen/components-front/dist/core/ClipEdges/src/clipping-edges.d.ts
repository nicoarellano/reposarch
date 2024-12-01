import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { Edge } from "./types";
/**
 * Type definition for the Edges object. The Edges object is a dictionary where the keys are strings and the values are of type {@link Edge}. It is used to store and manage multiple {@link Edge} instances, each identified by a unique name.
 */
export type Edges = {
    [name: string]: Edge;
};
/**
 * Class representing the ClippingEdges component. This is responsible for managing and rendering the edges of clipped objects.
 */
export declare class ClippingEdges implements OBC.Hideable, OBC.Disposable, OBC.Updateable {
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /** {@link OBC.Updateable.onAfterUpdate} */
    onAfterUpdate: OBC.Event<Edge[]>;
    /** {@link OBC.Updateable.onBeforeUpdate} */
    onBeforeUpdate: OBC.Event<Edge[]>;
    /** Indicates whether the component is enabled. */
    enabled: boolean;
    /** Indicates whether the fill needs to be updated. */
    fillNeedsUpdate: boolean;
    /** Reference to the components manager. */
    components: OBC.Components;
    /** Reference to the world. */
    world: OBC.World;
    protected _edges: Edges;
    protected _visible: boolean;
    protected _inverseMatrix: THREE.Matrix4;
    protected _localPlane: THREE.Plane;
    protected _tempLine: THREE.Line3;
    protected _tempVector: THREE.Vector3;
    protected _plane: THREE.Plane;
    /** {@link OBC.Hideable.visible} */
    get visible(): boolean;
    /** {@link OBC.Hideable.visible} */
    set visible(visible: boolean);
    /**
     * Getter that returns an array of THREE.Mesh instances representing the fills of the edges.
     *
     * @returns An array of THREE.Mesh instances representing the fills of the edges.
     */
    get fillMeshes(): THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>[];
    constructor(components: OBC.Components, world: OBC.World, plane: THREE.Plane);
    /** {@link OBC.Updateable.update} */
    update(): void;
    get(): Edges;
    /** {@link OBC.Disposable.dispose} */
    dispose(): void;
    private newEdgesMesh;
    private newFillMesh;
    private newFillOutline;
    private drawEdges;
    private initializeStyle;
    private shapecast;
    private updateDeletedEdges;
    private disposeOutline;
    private disposeEdge;
}
