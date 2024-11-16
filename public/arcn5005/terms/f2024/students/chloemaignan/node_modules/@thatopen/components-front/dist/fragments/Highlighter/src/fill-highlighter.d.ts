import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
/**
 * A class to manage and highlight edges fill meshes based on selected fragments. Useful for highlighting sectioned elements in floorplan and section views.
 */
export declare class FillHighlighter {
    private _meshes;
    /**
     * Highlights edges fill meshes based on selected fragments.
     */
    highlight(name: string, mesh: THREE.Mesh, color: THREE.Color, selection: FRAGS.FragmentIdMap): void;
    /**
     * Clears the highlighted meshes for a specific style or all styles.
     *
     * @param name - The name of the style to clear. If not provided, clears all styles.
     *
     */
    clear(name?: string): void;
    dispose(): void;
}
