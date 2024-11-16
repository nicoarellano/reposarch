import * as flatbuffers from "flatbuffers";
import { Alignment } from "./alignment";
export declare class CivilData {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): CivilData;
    static getRootAsCivilData(bb: flatbuffers.ByteBuffer, obj?: CivilData): CivilData;
    static getSizePrefixedRootAsCivilData(bb: flatbuffers.ByteBuffer, obj?: CivilData): CivilData;
    alignments(index: number, obj?: Alignment): Alignment | null;
    alignmentsLength(): number;
    coordinationMatrix(index: number): number | null;
    coordinationMatrixLength(): number;
    coordinationMatrixArray(): Float32Array | null;
    static startCivilData(builder: flatbuffers.Builder): void;
    static addAlignments(builder: flatbuffers.Builder, alignmentsOffset: flatbuffers.Offset): void;
    static createAlignmentsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAlignmentsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCoordinationMatrix(builder: flatbuffers.Builder, coordinationMatrixOffset: flatbuffers.Offset): void;
    static createCoordinationMatrixVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoordinationMatrixVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoordinationMatrixVector(builder: flatbuffers.Builder, numElems: number): void;
    static endCivilData(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createCivilData(builder: flatbuffers.Builder, alignmentsOffset: flatbuffers.Offset, coordinationMatrixOffset: flatbuffers.Offset): flatbuffers.Offset;
}
