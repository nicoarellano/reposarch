import * as flatbuffers from "flatbuffers";
import { CivilData } from "./civil-data";
import { Fragment } from "./fragment";
export declare class FragmentsGroup {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): FragmentsGroup;
    static getRootAsFragmentsGroup(bb: flatbuffers.ByteBuffer, obj?: FragmentsGroup): FragmentsGroup;
    static getSizePrefixedRootAsFragmentsGroup(bb: flatbuffers.ByteBuffer, obj?: FragmentsGroup): FragmentsGroup;
    items(index: number, obj?: Fragment): Fragment | null;
    itemsLength(): number;
    civil(obj?: CivilData): CivilData | null;
    coordinationMatrix(index: number): number | null;
    coordinationMatrixLength(): number;
    coordinationMatrixArray(): Float32Array | null;
    ids(index: number): number | null;
    idsLength(): number;
    idsArray(): Uint32Array | null;
    itemsKeys(index: number): number | null;
    itemsKeysLength(): number;
    itemsKeysArray(): Uint32Array | null;
    itemsKeysIndices(index: number): number | null;
    itemsKeysIndicesLength(): number;
    itemsKeysIndicesArray(): Uint32Array | null;
    itemsRels(index: number): number | null;
    itemsRelsLength(): number;
    itemsRelsArray(): Uint32Array | null;
    itemsRelsIndices(index: number): number | null;
    itemsRelsIndicesLength(): number;
    itemsRelsIndicesArray(): Uint32Array | null;
    fragmentKeys(): string | null;
    fragmentKeys(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    globalIds(): string | null;
    globalIds(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    id(): string | null;
    id(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    name(): string | null;
    name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ifcName(): string | null;
    ifcName(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ifcDescription(): string | null;
    ifcDescription(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    ifcSchema(): string | null;
    ifcSchema(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    maxExpressId(): number;
    boundingBox(index: number): number | null;
    boundingBoxLength(): number;
    boundingBoxArray(): Float32Array | null;
    opaqueGeometriesIds(index: number): number | null;
    opaqueGeometriesIdsLength(): number;
    opaqueGeometriesIdsArray(): Int32Array | null;
    transparentGeometriesIds(index: number): number | null;
    transparentGeometriesIdsLength(): number;
    transparentGeometriesIdsArray(): Int32Array | null;
    static startFragmentsGroup(builder: flatbuffers.Builder): void;
    static addItems(builder: flatbuffers.Builder, itemsOffset: flatbuffers.Offset): void;
    static createItemsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset;
    static startItemsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addCivil(builder: flatbuffers.Builder, civilOffset: flatbuffers.Offset): void;
    static addCoordinationMatrix(builder: flatbuffers.Builder, coordinationMatrixOffset: flatbuffers.Offset): void;
    static createCoordinationMatrixVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createCoordinationMatrixVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startCoordinationMatrixVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIds(builder: flatbuffers.Builder, idsOffset: flatbuffers.Offset): void;
    static createIdsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addItemsKeys(builder: flatbuffers.Builder, itemsKeysOffset: flatbuffers.Offset): void;
    static createItemsKeysVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createItemsKeysVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startItemsKeysVector(builder: flatbuffers.Builder, numElems: number): void;
    static addItemsKeysIndices(builder: flatbuffers.Builder, itemsKeysIndicesOffset: flatbuffers.Offset): void;
    static createItemsKeysIndicesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createItemsKeysIndicesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startItemsKeysIndicesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addItemsRels(builder: flatbuffers.Builder, itemsRelsOffset: flatbuffers.Offset): void;
    static createItemsRelsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createItemsRelsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startItemsRelsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addItemsRelsIndices(builder: flatbuffers.Builder, itemsRelsIndicesOffset: flatbuffers.Offset): void;
    static createItemsRelsIndicesVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createItemsRelsIndicesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startItemsRelsIndicesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addFragmentKeys(builder: flatbuffers.Builder, fragmentKeysOffset: flatbuffers.Offset): void;
    static addGlobalIds(builder: flatbuffers.Builder, globalIdsOffset: flatbuffers.Offset): void;
    static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset): void;
    static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset): void;
    static addIfcName(builder: flatbuffers.Builder, ifcNameOffset: flatbuffers.Offset): void;
    static addIfcDescription(builder: flatbuffers.Builder, ifcDescriptionOffset: flatbuffers.Offset): void;
    static addIfcSchema(builder: flatbuffers.Builder, ifcSchemaOffset: flatbuffers.Offset): void;
    static addMaxExpressId(builder: flatbuffers.Builder, maxExpressId: number): void;
    static addBoundingBox(builder: flatbuffers.Builder, boundingBoxOffset: flatbuffers.Offset): void;
    static createBoundingBoxVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createBoundingBoxVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startBoundingBoxVector(builder: flatbuffers.Builder, numElems: number): void;
    static addOpaqueGeometriesIds(builder: flatbuffers.Builder, opaqueGeometriesIdsOffset: flatbuffers.Offset): void;
    static createOpaqueGeometriesIdsVector(builder: flatbuffers.Builder, data: number[] | Int32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createOpaqueGeometriesIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startOpaqueGeometriesIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addTransparentGeometriesIds(builder: flatbuffers.Builder, transparentGeometriesIdsOffset: flatbuffers.Offset): void;
    static createTransparentGeometriesIdsVector(builder: flatbuffers.Builder, data: number[] | Int32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createTransparentGeometriesIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startTransparentGeometriesIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static endFragmentsGroup(builder: flatbuffers.Builder): flatbuffers.Offset;
    static finishFragmentsGroupBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
    static finishSizePrefixedFragmentsGroupBuffer(builder: flatbuffers.Builder, offset: flatbuffers.Offset): void;
}
