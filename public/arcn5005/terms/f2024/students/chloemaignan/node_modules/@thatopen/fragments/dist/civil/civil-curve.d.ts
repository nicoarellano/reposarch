import * as THREE from "three";
import { Alignment } from "./alignment";
import { CurveMesh } from "./curve-mesh";
/**
 * Represents an alignment curve of a civil engineering model.
 */
export declare class CivilCurve {
    /**
     * The index of the curve. An alignment is a sequence of ordered curves, and this is the index of this curve in that sequence.
     */
    index: number;
    /**
     * The THREE.js mesh containing the vertices of the curve.
     */
    mesh: CurveMesh;
    /**
     * Additional data associated with the curve.
     */
    data: {
        [name: string]: any;
    };
    /**
     * The alignment to which this curve belongs.
     */
    alignment: Alignment;
    private get _index();
    private get _pos();
    /**
     * Constructs a new instance of CivilCurve.
     * @param index - The index of the curve.
     * @param mesh - The mesh associated with the curve.
     * @param data - Additional data associated with the curve.
     * @param alignment - The alignment of the curve.
     */
    constructor(index: number, mesh: CurveMesh, data: {
        [name: string]: any;
    }, alignment: Alignment);
    /**
     * Calculates the total length of the curve by summing up the lengths of all segments.
     * @returns The total length of the curve.
     */
    getLength(): number;
    /**
     * Calculates a point on the curve based on the given percentage.
     *
     * @param percentage - The percentage along the curve (between zero and one).
     * @returns A new THREE.Vector3 representing the point on the curve.
     *
     * @remarks
     * The method works by first finding the segment that corresponds to the given percentage.
     * It then normalizes the direction of the segment, multiplies it by the distance to the start of the segment,
     * and adds it to the start point of the segment.
     *
     * @throws Will throw an error if the percentage is outside the range [0, 1].
     */
    getPointAt(percentage: number): THREE.Vector3;
    /**
     * Calculates a segment of the curve based on the given percentage.
     *
     * @param percentage - The percentage along the curve (between zero and one).
     * @returns An object containing the distance to the start of the segment, the index of the segment, and the start and end points of the segment.
     *
     * @remarks
     * The method works by first finding the segment that corresponds to the given percentage.
     * It then returns an object containing the distance to the start of the segment, the index of the segment, and the start and end points of the segment.
     *
     * @throws Will throw an error if the percentage is outside the range [0, 1].
     */
    getSegmentAt(percentage: number): {
        distanceToStart: number;
        index: number;
        startPoint: THREE.Vector3;
        endPoint: THREE.Vector3;
    };
    /**
     * Calculates the percentage of the curve that corresponds to the given point.
     *
     * @param point - The point for which to calculate the percentage.
     * @param tolerance - The tolerance for determining if a point is on the curve. Default is 0.01.
     * @returns The percentage of the curve that corresponds to the given point, or null if the point is not contained in this curve.
     *
     * @remarks
     * The method works by iterating over each segment of the curve and checking if the given point is within the tolerance of the segment.
     * If a point is found, it calculates the percentage of the curve that corresponds to the point.
     * If no point is found, it returns null.
     */
    getPercentageAt(point: THREE.Vector3, tolerance?: number): number | null;
    /**
     * Retrieves a segment of the curve based on the given index.
     *
     * @param index - The index of the segment.
     * @returns An object containing the start and end points of the segment.
     *
     * @remarks
     * The method calculates the start and end points of the segment based on the given index.
     * It uses the index array and position attribute of the curve's geometry to determine the start and end points.
     *
     * @throws Will throw an error if the index is out of range.
     */
    getSegment(index: number): {
        startPoint: THREE.Vector3;
        endPoint: THREE.Vector3;
    };
}
