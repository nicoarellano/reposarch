import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { Mark } from "../core";
/**
 * A class that extends {@link OBC.VertexPicker} to provide a graphical marker for picking vertices in a 3D scene.
 */
export declare class GraphicVertexPicker extends OBC.VertexPicker implements OBC.Disposable {
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /** The marker used to indicate the picked vertex. */
    marker: Mark | null;
    private _className;
    get className(): string;
    set className(name: string);
    constructor(components: OBC.Components, config?: Partial<OBC.VertexPickerConfig>);
    /** {@link OBC.Disposable.onDisposed} */
    dispose(): void;
    /**
     * Retrieves the picked vertex from the world and updates the marker's position.
     * If no vertex is picked, the marker is hidden.
     *
     * @param world - The world in which to pick the vertex.
     * @returns The picked vertex, or null if no vertex was picked.
     */
    get(world: OBC.World): THREE.Vector3 | null;
}
