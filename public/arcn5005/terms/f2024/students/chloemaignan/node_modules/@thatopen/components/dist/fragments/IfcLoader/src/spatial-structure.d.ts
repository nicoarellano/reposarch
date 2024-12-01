import * as WEBIFC from "web-ifc";
import { IfcItemsCategories } from "../../../ifc";
export declare class SpatialStructure {
    itemsByFloor: IfcItemsCategories;
    private _units;
    setUp(webIfc: WEBIFC.IfcAPI): void;
    cleanUp(): void;
}
