import * as THREE from "three";
import { CSS2DObject } from "three/examples/jsm/renderers/CSS2DRenderer.js";
import * as OBC from "@thatopen/components";
/**
 * Represents a marker in the 3D world.
 */
export declare class Mark implements OBC.Hideable, OBC.Disposable {
    /**
     * The CSS object representing the marker.
     */
    three: CSS2DObject;
    /**
     * The world in which the marker exists.
     */
    world: OBC.World;
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /** {@link OBC.Hideable.visible} */
    set visible(value: boolean);
    /** {@link OBC.Hideable.visible} */
    get visible(): boolean;
    constructor(world: OBC.World, element?: HTMLElement, parent?: THREE.Object3D);
    /**
     * Toggles the visibility of the marker.
     *
     * This method changes the `visible` property of the marker to its opposite value.
     * If the marker is currently visible, it will be hidden, and vice versa.
     *
     * @returns {void}
     */
    toggleVisibility(): void;
    /** {@link OBC.Disposable.dispose} */
    dispose(): void;
}
