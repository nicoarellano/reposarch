import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
export declare class PlanHighlighter {
    components: OBC.Components;
    private _scene;
    private _world;
    private offset;
    private markupLines;
    private currentCurveMesh?;
    private readonly markupMaterial;
    constructor(components: OBC.Components, scene: THREE.Object3D, world: OBC.World);
    showCurveInfo(curveMesh: FRAGS.CurveMesh): void;
    updateOffset(screenSize: {
        height: number;
        width: number;
    }, _zoom: number, _triggerRedraw: boolean): void;
    dispose(): void;
    private disposeMarkups;
    unSelect(): void;
    private calculateTangent;
    private calculateParallelCurve;
    private calculateDimensionLines;
    private offsetDimensionLine;
    private showLineInfo;
    private showClothoidInfo;
    private showCircularArcInfo;
}
