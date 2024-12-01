import * as THREE from "three";
import * as WEBIFC from "web-ifc";
import * as FRAGS from "@thatopen/fragments";
export declare class CivilReader {
    defLineMat: THREE.LineBasicMaterial;
    read(webIfc: WEBIFC.IfcAPI): {
        alignments: Map<number, FRAGS.Alignment>;
        coordinationMatrix: THREE.Matrix4;
    } | undefined;
    get(civilItems: any): {
        alignments: Map<number, FRAGS.Alignment>;
        coordinationMatrix: THREE.Matrix4;
    } | undefined;
    private getCurves;
}
