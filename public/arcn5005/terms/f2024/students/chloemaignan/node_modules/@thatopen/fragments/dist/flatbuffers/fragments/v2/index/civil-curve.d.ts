import * as flatbuffers from 'flatbuffers';
export declare class CivilCurve {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CivilCurve;
    static getRootAsCivilCurve(bb: flatbuffers.ByteBuffer, obj?: CivilCurve): CivilCurve;
    static getSizePrefixedRootAsCivilCurve(bb: flatbuffers.ByteBuffer, obj?: CivilCurve): CivilCurve;
    points(index: number): number | null;
    pointsLength(): number;
    pointsArray(): Float32Array | null;
    data(): string | null;
    data(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    static startCivilCurve(builder: flatbuffers.Builder): void;
    static addPoints(builder: flatbuffers.Builder, pointsOffset: flatbuffers.Offset): void;
    static createPointsVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPointsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPointsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addData(builder: flatbuffers.Builder, dataOffset: flatbuffers.Offset): void;
    static endCivilCurve(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCivilCurve(builder: flatbuffers.Builder, pointsOffset: flatbuffers.Offset, dataOffset: flatbuffers.Offset): flatbuffers.Offset;
}
