import * as FRAGS from "@thatopen/fragments";
export declare class IfcPropertiesUtils {
    static getUnits(group: FRAGS.FragmentsGroup): Promise<number>;
    static findItemByGuid(model: FRAGS.FragmentsGroup, guid: string): Promise<{
        [attribute: string]: any;
    } | null>;
    static getRelationMap(model: FRAGS.FragmentsGroup, relationType: number, onElementsFound?: (relatingID: number, relatedIDs: number[]) => Promise<void>): Promise<{
        [relatingID: number]: number[];
    }>;
    static getQsetQuantities(model: FRAGS.FragmentsGroup, expressID: number, onQuantityFound?: (expressID: number) => void): Promise<number[] | null>;
    static getPsetProps(model: FRAGS.FragmentsGroup, expressID: number, onPropFound?: (expressID: number) => void): Promise<number[] | null>;
    static getPsetRel(model: FRAGS.FragmentsGroup, psetID: number): Promise<number | null>;
    static getQsetRel(model: FRAGS.FragmentsGroup, qsetID: number): Promise<number | null>;
    static getEntityName(model: FRAGS.FragmentsGroup, entityID: number): Promise<{
        key: string | null;
        name: string | null;
    }>;
    static getQuantityValue(model: FRAGS.FragmentsGroup, quantityID: number): Promise<{
        key: string | null;
        value: number | null;
    }>;
    static isRel(expressID: number): boolean;
    static attributeExists(model: FRAGS.FragmentsGroup, expressID: number, attribute: string): Promise<boolean>;
    static groupEntitiesByType(model: FRAGS.FragmentsGroup, expressIDs: Set<number> | number[]): Promise<Map<number, Set<number>>>;
}
