import * as THREE from "three";
import * as FRAGS from "@thatopen/fragments";
import * as OBC from "@thatopen/components";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
type CivilHighlightType = "horizontal" | "absolute" | "vertical";
export declare class CurveHighlighter {
    protected scene: THREE.Object3D;
    static settings: {
        colors: {
            [curve: string]: number[];
        };
    };
    readonly onSelect: OBC.Event<FRAGS.CurveMesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[]>>;
    type: CivilHighlightType;
    selectCurve: Line2;
    selectPoints: THREE.Points;
    hoverCurve: Line2;
    hoverPoints: THREE.Points;
    caster: THREE.Raycaster;
    constructor(scene: THREE.Object3D, type: CivilHighlightType);
    dispose(): void;
    castRay(event: MouseEvent, camera: THREE.Camera, dom: HTMLElement, meshes: FRAGS.CurveMesh[]): THREE.Intersection<THREE.Object3D<THREE.Object3DEventMap>> | null;
    select(mesh: FRAGS.CurveMesh): void;
    unSelect(): void;
    hover(mesh: FRAGS.CurveMesh): void;
    unHover(): void;
    setResolution({ x, y }: THREE.Vector2): void;
    protected highlight(mesh: FRAGS.CurveMesh, curve: Line2, points: THREE.Points, useColors: boolean): void;
    private newCurve;
    private newPoints;
}
export {};
