import * as flatbuffers from "flatbuffers";
import { CivilCurve } from "./civil-curve";
export declare class Alignment {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Alignment;
    static getRootAsAlignment(bb: flatbuffers.ByteBuffer, obj?: Alignment): Alignment;
    static getSizePrefixedRootAsAlignment(bb: flatbuffers.ByteBuffer, obj?: Alignment): Alignment;
    vertical(index: number, obj?: CivilCurve): CivilCurve | null;
    verticalLength(): number;
    horizontal(index: number, obj?: CivilCurve): CivilCurve | null;
    horizontalLength(): number;
    absolute(index: number, obj?: CivilCurve): CivilCurve | null;
    absoluteLength(): number;
    initialPk(): number;
    static startAlignment(builder: flatbuffers.Builder): void;
    static addVertical(builder: flatbuffers.Builder, verticalOffset: flatbuffers.Offset): void;
    static createVerticalVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startVerticalVector(builder: flatbuffers.Builder, numElems: number): void;
    static addHorizontal(builder: flatbuffers.Builder, horizontalOffset: flatbuffers.Offset): void;
    static createHorizontalVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startHorizontalVector(builder: flatbuffers.Builder, numElems: number): void;
    static addAbsolute(builder: flatbuffers.Builder, absoluteOffset: flatbuffers.Offset): void;
    static createAbsoluteVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startAbsoluteVector(builder: flatbuffers.Builder, numElems: number): void;
    static addInitialPk(builder: flatbuffers.Builder, initialPk: number): void;
    static endAlignment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createAlignment(builder: flatbuffers.Builder, verticalOffset: flatbuffers.Offset, horizontalOffset: flatbuffers.Offset, absoluteOffset: flatbuffers.Offset, initialPk: number): flatbuffers.Offset;
}
