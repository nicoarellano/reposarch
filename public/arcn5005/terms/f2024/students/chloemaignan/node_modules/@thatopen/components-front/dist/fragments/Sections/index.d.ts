import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { EdgesPlane } from "../../core";
/** The data that describes a section view. */
export interface Section {
    /** The human-readable name of this floor plan (e.g. "First floor"). */
    name: string;
    /** The unique identifier for this Section plan (e.g. "0w984V0GL6yR4z75YWgVfX"). */
    id: string;
    /** The clipping plane object that cuts the model. */
    plane: EdgesPlane;
    /** The offset of the camera to the clipping plane. */
    offset: number;
    /** The cached camera data of the view when the user exited it. */
    cached: {
        position: THREE.Vector3;
        target: THREE.Vector3;
        zoom: number;
        size: number;
    };
}
/**
 * A component to create and manage arbitrary sections for BIM models.
 */
export declare class Sections extends OBC.Component implements OBC.Disposable {
    enabled: boolean;
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "45b41ba3-7bb8-4e08-909f-e0fa87973965";
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /** Event that fires after navigating to ta section. */
    readonly onNavigated: OBC.Event<{
        id: string;
    }>;
    /** Event that fires after exiting the section navigation mode. */
    readonly onExited: OBC.Event<void>;
    /** The plane type for the clipping planes created by this component. */
    readonly planeType = "section";
    /** The default offset of the camera to the clipping plane. */
    offset: number;
    /** All the created sections. */
    list: Map<string, Section>;
    /** The current world where the sections are being created. */
    world?: OBC.World;
    /** The current section that is being navigated. */
    current: Section | null;
    private cached3DCamera;
    /**
     * Generates a section with the given data.
     * @param data - The required data to create a section.
     * @param data.id - The unique identifier of the section.
     * @param data.name - The human-readable name of the section.
     * @param data.point - The 3D point where the section plane lies.
     * @param data.normal - The unit vector that describes the orientation of the clipping plane.
     * @param data.type - The type to apply to the created clipping plane.
     * @param data.offset - The offset of the camera to the section.
     */
    create(data: {
        id: string;
        name?: string;
        point: THREE.Vector3;
        normal: THREE.Vector3;
        type?: string;
        offset?: number;
    }): Section;
    /**
     * Deletes the section with the given ID.
     * @param id - The identifier whose section to delete.
     */
    delete(id: string): void;
    /**
     * Goes to the section with the given ID.
     * @param id - The identifier whose section to delete.
     * @param animate - Whether to animate the transition.
     */
    goTo(id: string, animate?: boolean): Promise<void>;
    /**
     * Exits the section view mode.
     * @param animate - Whether to animate the transition.
     */
    exit(animate?: boolean): Promise<void>;
    /** {@link OBC.Disposable.onDisposed} */
    dispose(): void;
    private getWorld;
    private getCamera;
    private cacheCameraPosition;
    private hidePreviousClippingPlane;
}
