import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { Mark } from "./src";
export * from "./src";
/**
 * Interface representing a marker object.
 */
export interface IMarker {
    /**
     * Unique identifier for the marker.
     */
    key: string;
    /**
     * Label of the marker.
     */
    label: Mark;
    /**
     * Optional type of the marker.
     */
    type?: string;
    /**
     * Indicates whether the marker is merged with other markers.
     */
    merged: boolean;
    /**
     * Indicates whether the marker is static and should not be clustered.
     */
    static: boolean;
}
/**
 * Interface representing a group of markers.
 */
export interface IGroupedMarkers {
    /**
     * Unique identifier for the group of markers.
     */
    key: string;
    /**
     * Array of keys of markers that belong to this group.
     */
    markerKeys: string[];
    /**
     * Label of the group of markers.
     */
    label: Mark;
}
/**
 * Component for Managing Markers along with creating different types of markers. Every marker is a Simple2DMarker. For every marker that needs to be added, you can use the Manager to add the marker and change its look and feel. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/Marker). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/Marker).
 */
export declare class Marker extends OBC.Component implements OBC.Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "4079eb91-79b0-4ede-bcf2-15b837129236";
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /** {@link OBC.Component.enabled} */
    enabled: boolean;
    /**
     * The distance threshold for clustering markers.
     * Markers within this distance will be considered for clustering.
     * Default value is 50.
     */
    threshold: number;
    /**
     * Indicates whether markers should be automatically clustered.
     * If true, markers will be clustered based on the threshold value.
     * Default value is true.
     */
    autoCluster: boolean;
    /**
     * A Map containing the markers grouped by world UUID.
     * Each world can have its own set of markers.
     */
    list: Map<string, Map<string, IMarker>>;
    protected clusterLabels: Set<IGroupedMarkers>;
    protected currentKeys: Set<string>;
    protected _color: string;
    protected _markerKey: number;
    protected _clusterKey: number;
    private _worldEvents;
    private _setupWorlds;
    /**
     * Getter for the color property.
     * Returns the current color of the markers.
     *
     * @returns {string} The current color of the markers.
     */
    get color(): string;
    /**
     * Setter for the color property.
     * Updates the color of all the markers to the new value.
     *
     * @param {string} value - The new color value for the markers.
     */
    set color(value: string);
    constructor(components: OBC.Components);
    /**
     * Creates a new marker at the specified point in the world.
     *
     * @param world - The world where the marker will be created.
     * @param text - The text content of the marker.
     * @param point - The 3D position where the marker will be placed.
     * @param isStatic - Indicates whether the marker should be static and not clustered.
     * @returns The unique key of the created marker.
     */
    create(world: OBC.World, text: string, point: THREE.Vector3, isStatic?: boolean): string | undefined;
    /**
     * Deletes a marker with the specified ID from all worlds.
     *
     * @param id - The unique identifier of the marker to be deleted.
     *
     * @remarks
     * This method iterates through all the worlds and their respective markers.
     * If a marker with the specified ID is found, it disposes of the marker's label
     * and removes the marker from the world's marker list.
     *
     */
    delete(id: string): void;
    /**
     * Retrieves the list of markers associated with a specific world.
     * If the list does not exist for the given world, it creates a new one.
     *
     * @param world - The world for which the marker list is to be retrieved.
     * @returns A Map containing the markers associated with the given world.
     *
     * @remarks
     * This method is used to manage markers per world. It ensures that each world has its own set of markers.
     * If a marker list for the given world does not exist, it creates a new one and associates it with the world.
     */
    getWorldMarkerList(world: OBC.World): Map<string, IMarker>;
    /** {@link OBC.Disposable.dispose} */
    dispose(type?: string): void;
    /**
     * Sets up event listeners for clustering markers in the given world.
     *
     * @param world - The world where the event listeners will be set up.
     * @param enabled - Indicates whether the event listeners should be enabled or disabled.
     *
     * @remarks
     * This method checks if the event listeners are already set up for the given world.
     * If the event listeners are already set up and the `enabled` parameter is true, the method returns without doing anything.
     * If the world does not have camera controls, the method returns without doing anything.
     *
     * The method then retrieves the event listener for the given world using the `getWorldEvent` method.
     * It removes the existing event listeners for the "sleep" and "rest" events from the world's camera controls.
     *
     * If the `enabled` parameter is true, the method adds the event listener for the "sleep" and "rest" events to the world's camera controls.
     */
    setupEvents(world: OBC.World, enabled: boolean): void;
    /**
     * Performs clustering of markers in the given world.
     *
     * @param world - The world where clustering will be performed.
     *
     */
    cluster(world: OBC.World): void;
    private getWorldEvent;
    private resetMarkers;
    private removeMergeMarkers;
    private getAveragePositionFromLabels;
    private createClusterElement;
    private getScreenPosition;
    private distance;
    private navigateToCluster;
}
