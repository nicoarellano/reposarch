import * as flatbuffers from 'flatbuffers';
export declare class Fragment {
    bb: flatbuffers.ByteBuffer | null;
    bb_pos: number;
    __init(i: number, bb: flatbuffers.ByteBuffer): Fragment;
    static getRootAsFragment(bb: flatbuffers.ByteBuffer, obj?: Fragment): Fragment;
    static getSizePrefixedRootAsFragment(bb: flatbuffers.ByteBuffer, obj?: Fragment): Fragment;
    position(index: number): number | null;
    positionLength(): number;
    positionArray(): Float32Array | null;
    normal(index: number): number | null;
    normalLength(): number;
    normalArray(): Float32Array | null;
    index(index: number): number | null;
    indexLength(): number;
    indexArray(): Uint32Array | null;
    groups(index: number): number | null;
    groupsLength(): number;
    groupsArray(): Float32Array | null;
    materials(index: number): number | null;
    materialsLength(): number;
    materialsArray(): Float32Array | null;
    matrices(index: number): number | null;
    matricesLength(): number;
    matricesArray(): Float32Array | null;
    colors(index: number): number | null;
    colorsLength(): number;
    colorsArray(): Float32Array | null;
    itemsSize(index: number): number | null;
    itemsSizeLength(): number;
    itemsSizeArray(): Uint32Array | null;
    ids(index: number): number | null;
    idsLength(): number;
    idsArray(): Uint32Array | null;
    id(): string | null;
    id(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null;
    capacity(): number;
    capacityOffset(): number;
    static startFragment(builder: flatbuffers.Builder): void;
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
    static addGroups(builder: flatbuffers.Builder, groupsOffset: flatbuffers.Offset): void;
    static createGroupsVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createGroupsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startGroupsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMaterials(builder: flatbuffers.Builder, materialsOffset: flatbuffers.Offset): void;
    static createMaterialsVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMaterialsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMaterialsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addMatrices(builder: flatbuffers.Builder, matricesOffset: flatbuffers.Offset): void;
    static createMatricesVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createMatricesVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startMatricesVector(builder: flatbuffers.Builder, numElems: number): void;
    static addColors(builder: flatbuffers.Builder, colorsOffset: flatbuffers.Offset): void;
    static createColorsVector(builder: flatbuffers.Builder, data: number[] | Float32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createColorsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startColorsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addItemsSize(builder: flatbuffers.Builder, itemsSizeOffset: flatbuffers.Offset): void;
    static createItemsSizeVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createItemsSizeVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startItemsSizeVector(builder: flatbuffers.Builder, numElems: number): void;
    static addIds(builder: flatbuffers.Builder, idsOffset: flatbuffers.Offset): void;
    static createIdsVector(builder: flatbuffers.Builder, data: number[] | Uint32Array): flatbuffers.Offset;
    /**
     * @deprecated This Uint8Array overload will be removed in the future.
     */
    static createIdsVector(builder: flatbuffers.Builder, data: number[] | Uint8Array): flatbuffers.Offset;
    static startIdsVector(builder: flatbuffers.Builder, numElems: number): void;
    static addId(builder: flatbuffers.Builder, idOffset: flatbuffers.Offset): void;
    static addCapacity(builder: flatbuffers.Builder, capacity: number): void;
    static addCapacityOffset(builder: flatbuffers.Builder, capacityOffset: number): void;
    static endFragment(builder: flatbuffers.Builder): flatbuffers.Offset;
    static createFragment(builder: flatbuffers.Builder, positionOffset: flatbuffers.Offset, normalOffset: flatbuffers.Offset, indexOffset: flatbuffers.Offset, groupsOffset: flatbuffers.Offset, materialsOffset: flatbuffers.Offset, matricesOffset: flatbuffers.Offset, colorsOffset: flatbuffers.Offset, itemsSizeOffset: flatbuffers.Offset, idsOffset: flatbuffers.Offset, idOffset: flatbuffers.Offset, capacity: number, capacityOffset: number): flatbuffers.Offset;
}
