import * as WEBIFC from "web-ifc";
import * as FRAG from "@thatopen/fragments";
import { Component, Components } from "../../core";
export * from "./src";
/**
 * Component to export all the properties from an IFC to a JS object. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcJsonExporter). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcJsonExporter).
 */
export declare class IfcJsonExporter extends Component {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "b32c4332-cd67-436e-ba7f-196646c7a635";
    /** {@link Component.enabled} */
    enabled: boolean;
    constructor(components: Components);
    /**
     * Exports all the properties of an IFC into an array of JS objects.
     * @param webIfc The instance of [web-ifc](https://github.com/ThatOpen/engine_web-ifc) to use.
     * @param modelID ID of the IFC model whose properties to extract.
     * @param indirect whether to get the indirect relationships as well.
     * @param recursiveSpatial whether to get the properties of spatial items recursively
     * to make the location data available (e.g. absolute position of building).
     */
    export(webIfc: WEBIFC.IfcAPI, modelID: number, indirect?: boolean, recursiveSpatial?: boolean): Promise<FRAG.IfcProperties>;
}
