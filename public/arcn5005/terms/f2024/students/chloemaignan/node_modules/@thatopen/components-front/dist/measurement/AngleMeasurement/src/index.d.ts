import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import { Mark } from "../../../core";
interface Angle {
    points: THREE.Vector3[];
    angle: number;
}
export declare class AngleMeasureElement implements OBC.Hideable, OBC.Disposable {
    enabled: boolean;
    visible: boolean;
    points: THREE.Vector3[];
    world: OBC.World;
    readonly onDisposed: OBC.Event<unknown>;
    private _lineMaterial;
    private _lineGeometry;
    private _line;
    private _labelMarker;
    readonly onAngleComputed: OBC.Event<number>;
    readonly onPointAdded: OBC.Event<unknown>;
    set lineMaterial(material: LineMaterial);
    get lineMaterial(): LineMaterial;
    set labelMarker(marker: Mark);
    get labelMarker(): Mark;
    get angle(): Angle;
    constructor(world: OBC.World, points?: THREE.Vector3[]);
    setPoint(point: THREE.Vector3, index?: 0 | 1 | 2): void;
    toggleLabel(): void;
    computeAngle(): number;
    dispose(): void;
}
export {};
