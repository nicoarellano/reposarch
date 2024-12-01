import { IfcRelName } from "./types";
type IfcRelAttributePosition = {
    related: number;
    relating: number;
};
export declare const ifcRelAttrsPosition: Record<IfcRelName, IfcRelAttributePosition>;
export {};
