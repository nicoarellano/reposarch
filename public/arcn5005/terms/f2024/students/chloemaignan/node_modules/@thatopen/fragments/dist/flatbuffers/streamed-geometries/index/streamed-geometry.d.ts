import * as flatbuffers from "flatbuffers";
export declare class StreamedGeometry {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): StreamedGeometry;
    static getRootAsStreamedGeometry(bb: flatbuffers.ByteBuffer, obj?: StreamedGeometry): StreamedGeometry;
    static getSizePrefixedRootAsStreamedGeometry(bb: flatbuffers.ByteBuffer, obj?: StreamedGeometry): StreamedGeometry;
    geometryId(): number;
    position(index: number): number | null;
    positionLength(): number;
    positionArray(): Float32Array | null;
    normal(index: number): number | null;
    normalLength(): number;
    normalArray(): Float32Array | null;
    index(index: number): number | null;
    indexLength(): number;
    indexArray(): Uint32Array | null;
    static startStreamedGeometry(builder: flatbuffers.Builder): void;
    static addGeometryId(builder: flatbuffers.Builder, geometryId: number): void;
    static addPosition(builder: flatbuffers.Builder, positionOffset: flatbuffers.Offset): void;
    static createPositionVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createPositionVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startPositionVector(builder: flatbuffers.Builder, numElems: number): void;
    static addNormal(builder: flatbuffers.Builder, normalOffset: flatbuffers.Offset): void;
    static createNormalVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createNormalVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startNormalVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIndex(builder: flatbuffers.Builder, indexOffset: flatbuffers.Offset): void;
    static createIndexVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIndexVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIndexVector(builder: flatbuffers.Builder, numElems: number): void;
    static endStreamedGeometry(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createStreamedGeometry(builder: flatbuffers.Builder, geometryId: number, positionOffset: flatbuffers.Offset, normalOffset: flatbuffers.Offset, indexOffset: flatbuffers.Offset): flatbuffers.Offset;
}
