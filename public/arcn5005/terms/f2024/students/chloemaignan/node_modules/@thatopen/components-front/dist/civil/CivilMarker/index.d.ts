import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import { Mark } from "../../core";
declare const CivilLabelArray: readonly ["Station", "Radius", "Length", "InitialKP", "FinalKP", "KP", "Slope", "Height", "InitialKPV", "FinalKPV"];
type CivilLabel = (typeof CivilLabelArray)[number];
/**
 * A component for displaying civil engineering markers in a 3D scene.
 */
export declare class CivilMarker extends OBC.Component {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "0af12c32-81ee-4100-a030-e9ae546f6170";
    /** {@link OBC.Component.enabled} */
    enabled: boolean;
    /**
     * A reference to the 3D world in which the markers will be displayed.
     * This property should be set before using any methods of this component.
     */
    world: OBC.World | null;
    protected _markerKey: number;
    private _list;
    private type;
    private divisionLength;
    constructor(components: OBC.Components);
    /**
     * Adds a KP station marker to the world.
     *
     * @param world - The world to add the marker to.
     * @param text - The text to display on the marker.
     * @param mesh - The line representing the KP station.
     *
     * @returns {void}
     */
    addKPStation(world: OBC.World, text: string, mesh: THREE.Line): void;
    /**
     * Adds a vertical marker to the 3D world based on the given parameters.
     *
     * @param world - The 3D world where the marker will be added.
     * @param text - The text to be displayed on the marker.
     * @param mesh - The mesh data related to the marker.
     * @param type - The type of the marker.
     * @param root - The root object for the marker.
     *
     * @returns The created and added marker.
     */
    addVerticalMarker(world: OBC.World, text: string, mesh: FRAGS.CurveMesh, type: CivilLabel, root: THREE.Object3D): Mark;
    /**
     * Adds a civil engineering marker to the world based on the given type.
     *
     * @param world - The world to add the marker to.
     * @param text - The text to display on the marker.
     * @param mesh - The mesh related to the marker.
     * @param type - The type of the marker.
     *
     * @returns The created marker.
     */
    addCivilMarker(world: OBC.World, text: string, mesh: FRAGS.CurveMesh, type: CivilLabel): Mark;
    /**
     * Shows the KP stations on the given mesh.
     *
     * @param mesh - The mesh to show the KP stations on.
     * @throws Will throw an error if a world is not set for this component.
     * @throws Will throw an error if the type is not set to "horizontal".
     */
    showKPStations(mesh: FRAGS.CurveMesh): void;
    /**
     * Shows the length of a curve on the world.
     *
     * @param points - The points that make up the curve.
     * @param length - The length of the curve.
     * @throws Will throw an error if a world is not set for this component.
     */
    showCurveLength(points: THREE.Vector3[], length: number): void;
    /**
     * Shows the length of a line on the world.
     *
     * @param line - The line to show the length on.
     * @param length - The length of the line.
     * @throws Will throw an error if a world is not set for this component.
     */
    showLineLength(line: THREE.Line, length: number): void;
    /**
     * Shows the radius of a curve on the world.
     *
     * @param line - The line to show the radius on.
     * @param radius - The radius of the curve.
     * @throws Will throw an error if a world is not set for this component.
     */
    showCurveRadius(line: THREE.Line, radius: number): void;
    /**
     * Deletes civil engineering markers of the specified types from the world.
     *
     * @param types - The types of markers to delete. If not provided, all types will be deleted.
     * @returns {void}
     */
    deleteByType(types?: Iterable<CivilLabel>): void;
    private generateStartAndEndKP;
    private createNormalLine;
    private generateConstantKP;
    private getNormal;
    private getShortendKPValue;
    private save;
}
export {};
