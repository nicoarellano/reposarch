import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { LineBasicMaterial } from "three";
import { ClipStyle } from "./types";
/**
 * A type representing a dictionary of {@link ClipStyle} objects, where the keys are the names of the styles.
 */
export type LineStyles = {
    [name: string]: ClipStyle;
};
/**
 * A class representing styles for clipping edges in a 3D scene.
 */
export declare class EdgesStyles implements OBC.Disposable, OBC.Updateable {
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /**
     * A boolean indicating whether the styles are enabled.
     * Default value is `true`.
     */
    enabled: boolean;
    /**
     * A dictionary of {@link ClipStyle} objects, where the keys are the names of the styles.
     * Default value is an empty object.
     */
    list: LineStyles;
    protected _defaultLineMaterial: THREE.LineBasicMaterial;
    /** {@link OBC.Updateable.onAfterUpdate} */
    onAfterUpdate: OBC.Event<LineStyles>;
    /** {@link OBC.Updateable.onBeforeUpdate} */
    onBeforeUpdate: OBC.Event<LineStyles>;
    /** {@link OBC.Updateable.update} */
    update(_delta: number): void;
    /**
     * Creates a new style that applies to all clipping edges for generic models.
     *
     * @param name - The name of the style.
     * @param meshes - A set of meshes to apply the style to.
     * @param world - The world where the meshes are located.
     * @param lineMaterial - The material for the lines of the style. If not provided, the default material is used.
     * @param fillMaterial - The material for the fill of the style.
     * @param outlineMaterial - The material for the outline of the style.
     *
     * @returns The newly created style.
     *
     * @throws Will throw an error if the given world doesn't have a renderer.
     */
    create(name: string, meshes: Set<THREE.Mesh>, world: OBC.World, lineMaterial?: LineBasicMaterial, fillMaterial?: THREE.Material, outlineMaterial?: THREE.MeshBasicMaterial): ClipStyle;
    /** {@link OBC.Disposable.dispose} */
    dispose(): void;
    /**
     * Deletes a style from the list and optionally disposes of its materials.
     *
     * @param id - The id of the style to delete.
     * @param disposeMaterials - A boolean indicating whether to dispose of the materials associated with the style.
     *                           Default value is `true`.
     *
     * @throws Will throw an error if the style with the given id doesn't exist in the list.
     */
    deleteStyle(id: string, disposeMaterials?: boolean): void;
}
