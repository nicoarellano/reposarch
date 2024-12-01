import * as THREE from "three";
export declare function obbFromPoints(vertices: ArrayLike<number>): {
    center: THREE.Vector3;
    halfSizes: THREE.Vector3;
    rotation: THREE.Matrix3;
    transformation: THREE.Matrix4;
};
