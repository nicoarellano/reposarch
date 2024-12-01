import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { Mark } from "../../../core";
interface Area {
    points: THREE.Vector3[];
    workingPlane: THREE.Plane | null;
    area: number;
}
export declare class AreaMeasureElement implements OBC.Hideable, OBC.Disposable {
    enabled: boolean;
    points: THREE.Vector3[];
    workingPlane: THREE.Plane | null;
    labelMarker: Mark;
    world: OBC.World;
    components: OBC.Components;
    readonly onDisposed: OBC.Event<unknown>;
    readonly onAreaComputed: OBC.Event<number>;
    readonly onWorkingPlaneComputed: OBC.Event<THREE.Plane>;
    readonly onPointAdded: OBC.Event<THREE.Vector3>;
    readonly onPointRemoved: OBC.Event<THREE.Vector3>;
    private _visible;
    private _rotationMatrix;
    private _dimensionLines;
    private _defaultLineMaterial;
    /** {@link OBC.Hideable.visible} */
    get visible(): boolean;
    /** {@link OBC.Hideable.visible} */
    set visible(value: boolean);
    constructor(components: OBC.Components, world: OBC.World, points?: THREE.Vector3[]);
    setPoint(point: THREE.Vector3, index?: number): void;
    removePoint(index: number): void;
    toggleLabel(): void;
    private addDimensionLine;
    private getLinesBetweenIndex;
    computeWorkingPlane(): void;
    computeArea(): number;
    dispose(): void;
    get(): Area;
}
export {};
