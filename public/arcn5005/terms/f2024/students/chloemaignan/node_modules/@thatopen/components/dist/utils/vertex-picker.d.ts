import * as THREE from "three";
import { Component, Components, Disposable, Event, World } from "../core";
/**
 * Configuration interface for the VertexPicker component.
 */
export interface VertexPickerConfig {
    /**
     * If true, only vertices will be picked, not the closest point on the face.
     */
    showOnlyVertex: boolean;
    /**
     * The maximum distance for snapping to a vertex.
     */
    snapDistance: number;
    /**
     * The HTML element to use for previewing the picked vertex.
     */
    previewElement: HTMLElement;
}
/**
 * A class that provides functionality for picking vertices in a 3D scene.
 */
export declare class VertexPicker extends Component implements Disposable {
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<unknown>;
    /**
     * An event that is triggered when a vertex is found.
     * The event passes a THREE.Vector3 representing the position of the found vertex.
     */
    readonly onVertexFound: Event<THREE.Vector3>;
    /**
     * An event that is triggered when a vertex is lost.
     * The event passes a THREE.Vector3 representing the position of the lost vertex.
     */
    readonly onVertexLost: Event<THREE.Vector3>;
    /**
     * An event that is triggered when the picker is enabled or disabled
     */
    readonly onEnabled: Event<boolean>;
    /**
     * A reference to the Components instance associated with this VertexPicker.
     */
    components: Components;
    /**
     * A reference to the working plane used for vertex picking.
     * This plane is used to determine which vertices are considered valid for picking.
     * If this value is null, all vertices are considered valid.
     */
    workingPlane: THREE.Plane | null;
    private _pickedPoint;
    private _config;
    private _enabled;
    /**
     * Sets the enabled state of the VertexPicker.
     * When enabled, the VertexPicker will actively search for vertices in the 3D scene.
     * When disabled, the VertexPicker will stop searching for vertices and reset the picked point.
     *
     * @param value - The new enabled state.
     */
    set enabled(value: boolean);
    /**
     * Gets the current enabled state of the VertexPicker.
     *
     * @returns The current enabled state.
     */
    get enabled(): boolean;
    /**
     * Sets the configuration for the VertexPicker component.
     *
     * @param value - A Partial object containing the configuration properties to update.
     * The properties not provided in the value object will retain their current values.
     *
     * @example
     * ```typescript
     * vertexPicker.config = {
     *   snapDistance: 0.5,
     *   showOnlyVertex: true,
     * };
     * ```
     */
    set config(value: Partial<VertexPickerConfig>);
    /**
     * Gets the current configuration for the VertexPicker component.
     *
     * @returns A copy of the current VertexPickerConfig object.
     *
     * @example
     * ```typescript
     * const currentConfig = vertexPicker.config;
     * console.log(currentConfig.snapDistance); // Output: 0.25
     * ```
     */
    get config(): Partial<VertexPickerConfig>;
    constructor(components: Components, config?: Partial<VertexPickerConfig>);
    /** {@link Disposable.dispose} */
    dispose(): void;
    /**
     * Performs the vertex picking operation based on the current state of the VertexPicker.
     *
     * @param world - The World instance to use for raycasting.
     *
     * @returns The current picked point, or null if no point is picked.
     *
     * @remarks
     * This method checks if the VertexPicker is enabled. If not, it returns the current picked point.
     * If enabled, it performs raycasting to find the closest intersecting object.
     * It then determines the closest vertex or point on the face, based on the configuration settings.
     * If the picked point is on the working plane (if defined), it triggers the `onVertexFound` event and updates the `pickedPoint`.
     * If the picked point is not on the working plane, it resets the `pickedPoint`.
     * If no intersecting object is found, it triggers the `onVertexLost` event and resets the `pickedPoint`.
     */
    get(world: World): THREE.Vector3 | null;
    private getClosestVertex;
    private getVertices;
    private getVertex;
}
