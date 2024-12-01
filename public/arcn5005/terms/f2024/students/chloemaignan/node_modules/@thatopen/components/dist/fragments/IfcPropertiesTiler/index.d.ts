import * as WEBIFC from "web-ifc";
import { AsyncEvent, Component, Disposable, Event } from "../../core";
import { PropertiesStreamingSettings } from "./src";
export * from "./src";
/**
 * A component that converts the properties of an IFC file to tiles. It uses the Web-IFC library to read and process the IFC data. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcPropertiesTiler). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcPropertiesTiler).
 */
export declare class IfcPropertiesTiler extends Component implements Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "88d2c89c-ce32-47d7-8cb6-d51e4b311a0b";
    /**
     * An event that is triggered when properties are streamed from the IFC file.
     * The event provides the type of the IFC entity and the corresponding data.
     */
    readonly onPropertiesStreamed: AsyncEvent<{
        type: number;
        data: {
            [id: number]: any;
        };
    }>;
    /**
     * An event that is triggered to indicate the progress of the streaming process.
     * The event provides a number between 0 and 1 representing the progress percentage.
     */
    readonly onProgress: AsyncEvent<number>;
    /**
     * An event that is triggered when indices are streamed from the IFC file.
     * The event provides a map of indices, where the key is the entity type and the value is another map of indices.
     */
    readonly onIndicesStreamed: AsyncEvent<Map<number, Map<number, number[]>>>;
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<string>;
    /** {@link Component.enabled} */
    enabled: boolean;
    /**
     * An instance of the PropertiesStreamingSettings class, which holds the settings for the streaming process.
     */
    settings: PropertiesStreamingSettings;
    /**
     * An instance of the IfcAPI class from the Web-IFC library, which provides methods for reading and processing IFC data.
     */
    webIfc: WEBIFC.IfcAPI;
    /** {@link Disposable.dispose} */
    dispose(): Promise<void>;
    /**
     * This method converts properties from an IFC file to tiles given its data as a Uint8Array.
     *
     * @param data - The Uint8Array containing the IFC file data.
     * @returns A Promise that resolves when the streaming process is complete.
     */
    streamFromBuffer(data: Uint8Array): Promise<void>;
    /**
     * This method converts properties from an IFC file to tiles using a given callback function to read the file.
     *
     * @param loadCallback - A callback function that loads the IFC file data.
     * @returns A Promise that resolves when the streaming process is complete.
     */
    streamFromCallBack(loadCallback: WEBIFC.ModelLoadCallback): Promise<void>;
    private readIfcFile;
    private streamIfcFile;
    private streamAllProperties;
    private cleanUp;
}
