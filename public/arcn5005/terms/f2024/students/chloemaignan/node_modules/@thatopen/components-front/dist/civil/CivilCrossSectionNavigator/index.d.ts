import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import { EdgesPlane } from "../../core";
/**
 * This component is used to navigate and visualize cross sections of a 3D model. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/CivilCrossSectionNavigator). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/CivilCrossSectionNavigator).
 */
export declare class CivilCrossSectionNavigator extends OBC.Component {
    /**
     * A unique identifier for the component. This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "96b2c87e-d90b-4639-8257-8f01136fe324";
    /** {@link OBC.Component.enabled} */
    enabled: boolean;
    /**
     * A property representing the world in which the component operates.
     */
    world: OBC.World | null;
    /**
     * A property representing the plane used for cross section visualization.
     */
    plane?: EdgesPlane;
    private _world3D;
    /**
     * A getter for the 3D world.
     * @returns The 3D world.
     */
    get world3D(): OBC.World | null;
    /**
     * A setter for the 3D world.
     * @param world - The new 3D world.
     */
    set world3D(world: OBC.World | null);
    constructor(components: OBC.Components);
    /**
     * Sets the cross section plane based on the given curve mesh and point.
     *
     * @param curveMesh - The curve mesh to create the cross section from.
     * @param point - The point on the curve mesh where the cross section should be created.
     *
     * @throws Will throw an error if the world or plane is not set before calling this method.
     * @throws Will throw an error if the geometry is not indexed.
     *
     * @returns {Promise<void>}
     */
    set(curveMesh: FRAGS.CurveMesh, point: THREE.Vector3): Promise<void>;
}
