import * as OBC from "@thatopen/components";
import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
/**
 * This component allows adding a colored outline with thickness to fragments in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Highlighter). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Outliner).
 */
export declare class Outliner extends OBC.Component implements OBC.Disposable {
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /**
     * The world where the outliner operates.
     */
    world?: OBC.World;
    /** {@link OBC.Component.enabled} */
    get enabled(): boolean;
    /** {@link OBC.Component.enabled} */
    set enabled(value: boolean);
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "2fd3bcc5-b3b6-4ded-9f64-f47a02854a10";
    /**
     * Creates a new outlining style.
     *
     * @param name - The name of the style.
     * @param material - The material to use for the style. The color controls the line color and the opacity controls the line thickness.
     *
     */
    create(name: string, material: THREE.MeshBasicMaterial): void;
    /**
     * Adds fragments to the specified outlining style.
     *
     * @param name - The name of the style.
     * @param items - The fragments to add to the style.
     *
     */
    add(name: string, items: FRAGS.FragmentIdMap): void;
    /**
     * Clears the specified style. If no style is specified, clear all styles.
     *
     * @param name - Optional: the style to clear.
     *
     */
    clear(name?: string): void;
    /** {@link OBC.Disposable.dispose} */
    dispose(): void;
    private clearStyle;
    private getStyles;
    private getRenderer;
}
