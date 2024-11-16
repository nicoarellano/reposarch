import * as WEBIFC from "web-ifc";
export declare class IfcMetadataReader {
    getNameInfo(webIfc: WEBIFC.IfcAPI): Record<string, any>;
    getDescriptionInfo(webIfc: WEBIFC.IfcAPI): Record<string, any>;
}
