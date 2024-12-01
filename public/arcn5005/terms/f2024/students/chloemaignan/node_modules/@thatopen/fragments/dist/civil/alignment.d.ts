import * as THREE from "three";
import { CivilCurve } from "./civil-curve";
/**
 * Represents the type of alignment, which can be vertical, horizontal, or absolute.
 */
export type AlignmentType = "vertical" | "horizontal" | "absolute";
/**
 * Represents an alignment in a civil engineering project. An alignment consists of vertical, horizontal, and absolute civil curves.
 */
export declare class Alignment {
    /**
     * Vertical civil curves in the alignment.
     */
    vertical: CivilCurve[];
    /**
     * Horizontal civil curves in the alignment.
     */
    horizontal: CivilCurve[];
    /**
     * Absolute civil curves in the alignment.
     */
    absolute: CivilCurve[];
    /**
     * Initial KP (Kilometer Point) of the alignment.
     */
    initialKP: number;
    /**
     * Returns the total length of the specified alignment type.
     * @param type - The type of alignment (vertical, horizontal, or absolute).
     * @returns The total length of the specified alignment type.
     */
    getLength(type: AlignmentType): number;
    /**
     * Returns the point at the specified percentage along the specified alignment type.
     * @param percentage - The percentage along the alignment type (between zero and one).
     * @param type - The type of alignment (vertical, horizontal, or absolute).
     * @returns The point at the specified percentage along the specified alignment type.
     * @throws Will throw an error if the percentage is out of range or if the point cannot be computed.
     */
    getPointAt(percentage: number, type: AlignmentType): THREE.Vector3;
    getPercentageAt(point: THREE.Vector3, type: AlignmentType, tolerance?: number): number | null;
    /**
     * Returns the curve and the percentage at the specified percentage along the specified alignment type.
     * If the percentage is out of range, it will be clamped to the nearest valid value (0 or 1).
     * If the point cannot be computed, an error will be thrown.
     *
     * @param percentage - The percentage along the alignment type (between zero and one).
     * @param type - The type of alignment (vertical, horizontal, or absolute).
     * @returns An object containing the curve and the percentage along the curve.
     * @throws Will throw an error if the percentage is out of range or if the point cannot be computed.
     */
    getCurveAt(percentage: number, type: AlignmentType): {
        curve: CivilCurve;
        percentage: number;
    };
}
