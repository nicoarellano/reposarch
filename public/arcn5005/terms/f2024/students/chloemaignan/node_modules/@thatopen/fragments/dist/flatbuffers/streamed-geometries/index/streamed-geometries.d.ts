import * as flatbuffers from "flatbuffers";
import { StreamedGeometry } from "../../streamed-geometries/index/streamed-geometry.js";
export declare class StreamedGeometries {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): StreamedGeometries;
    static getRootAsStreamedGeometries(bb: flatbuffers.ByteBuffer, obj?: StreamedGeometries): StreamedGeometries;
    static getSizePrefixedRootAsStreamedGeometries(bb: flatbuffers.ByteBuffer, obj?: StreamedGeometries): StreamedGeometries;
    geometries(index: number, obj?: StreamedGeometry): StreamedGeometry | null;
    geometriesLength(): number;
    static startStreamedGeometries(builder: flatbuffers.Builder): void;
    static addGeometries(builder: flatbuffers.Builder, geometriesOffset: flatbuffers.Offset): void;
    static createGeometriesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startGeometriesVector(builder: flatbuffers.Builder, numElems: number): void;
    static endStreamedGeometries(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishStreamedGeometriesBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedStreamedGeometriesBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static createStreamedGeometries(builder: flatbuffers.Builder, geometriesOffset: flatbuffers.Offset): flatbuffers.Offset;
}
