import * as OBC from "@thatopen/components";
import { EdgesStyles } from "./src/edges-styles";
export * from "./src";
/**
 * A component that can add fills and outlines to the Clipper. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ClipEdges). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/ClipEdges).
 */
export declare class ClipEdges extends OBC.Component implements OBC.Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "24dfc306-a3c4-410f-8071-babc4afa5e4d";
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /** {@link OBC.Component.enabled} */
    enabled: boolean;
    /**
     * The styling properties for the edges.
     */
    styles: EdgesStyles;
    /**
     * A flag indicating whether the fills need to be updated.
     */
    fillsNeedUpdate: boolean;
    private _visible;
    /**
     * Gets the visibility state of the edges.
     * @returns {boolean} The current visibility state.
     */
    get visible(): boolean;
    /**
     * Sets the visibility state of the edges.
     * Updates the visibility of the associated {@link EdgesPlane} instances.
     * @param {boolean} active - The new visibility state.
     */
    set visible(active: boolean);
    constructor(components: OBC.Components);
    /** {@link OBC.Disposable.dispose} */
    dispose(): void;
    /**
     * Updates all the lines of the component.
     *
     * @param {boolean} [updateFills=false] - If true, the fills will be updated regardless of the `fillsNeedUpdate` flag.
     * @returns {Promise<void>} - A promise that resolves when the update is complete.
     *
     * @remarks
     * This method iterates through all the {@link EdgesPlane} instances associated with the {@link Clipper} component.
     */
    update(updateFills?: boolean): Promise<void>;
}
