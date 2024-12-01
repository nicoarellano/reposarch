import * as WEBIFC from "web-ifc";
import * as FRAGS from "@thatopen/fragments";
import { IfcFragmentSettings } from "./src";
import { Component, Components, Event, Disposable } from "../../core";
export * from "./src/ifc-fragment-settings";
/**
 * The IfcLoader component is responsible for loading and processing IFC files. It utilizes the Web-IFC library to handle the IFC data and the Three.js library for 3D rendering. The class provides methods for setting up, loading, and cleaning up IFC files. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/IfcLoader). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/IfcLoader).
 */
export declare class IfcLoader extends Component implements Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "a659add7-1418-4771-a0d6-7d4d438e4624";
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<string>;
    /**
     * An event triggered when the IFC file starts loading.
     */
    readonly onIfcStartedLoading: Event<void>;
    /**
     * An event triggered when the setup process is completed.
     */
    readonly onSetup: Event<void>;
    /**
     * The settings for the IfcLoader.
     * It includes options for excluding categories, setting WASM paths, and more.
     */
    settings: IfcFragmentSettings;
    /**
     * The instance of the Web-IFC library used for handling IFC data.
     */
    webIfc: WEBIFC.IfcAPI;
    /** {@link Component.enabled} */
    enabled: boolean;
    private _material;
    private _spatialTree;
    private _metaData;
    private _fragmentInstances;
    private _civil;
    private _visitedFragments;
    private _materialT;
    constructor(components: Components);
    /** {@link Disposable.dispose} */
    dispose(): void;
    /**
     * Sets up the IfcLoader component with the provided configuration.
     *
     * @param config - Optional configuration settings for the IfcLoader.
     * If not provided, the existing settings will be used.
     *
     * @returns A Promise that resolves when the setup process is completed.
     *
     * @remarks
     * If the `autoSetWasm` option is enabled in the configuration,
     * the method will automatically set the WASM paths for the Web-IFC library.
     *
     * @example
     * ```typescript
     * const ifcLoader = new IfcLoader(components);
     * await ifcLoader.setup({ autoSetWasm: true });
     * ```
     */
    setup(config?: Partial<IfcFragmentSettings>): Promise<void>;
    /**
     * Loads an IFC file and processes it for 3D visualization.
     *
     * @param data - The Uint8Array containing the IFC file data.
     * @param coordinate - Optional boolean indicating whether to coordinate the loaded IFC data. Default is true.
     *
     * @returns A Promise that resolves to the FragmentsGroup containing the loaded and processed IFC data.
     *
     * @example
     * ```typescript
     * const ifcLoader = components.get(IfcLoader);
     * const group = await ifcLoader.load(ifcData);
     * ```
     */
    load(data: Uint8Array, coordinate?: boolean, name?: string): Promise<FRAGS.FragmentsGroup>;
    /**
     * Reads an IFC file and initializes the Web-IFC library.
     *
     * @param data - The Uint8Array containing the IFC file data.
     *
     * @returns A Promise that resolves when the IFC file is opened and initialized.
     *
     * @remarks
     * This method sets the WASM path and initializes the Web-IFC library based on the provided settings.
     * It also opens the IFC model using the provided data and settings.
     *
     * @example
     * ```typescript
     * const ifcLoader = components.get(IfcLoader);
     * await ifcLoader.readIfcFile(ifcData);
     * ```
     */
    readIfcFile(data: Uint8Array): Promise<number>;
    /**
     * Cleans up the IfcLoader component by resetting the Web-IFC library,
     * clearing the visited fragments and fragment instances maps, and creating a new instance of the Web-IFC library.
     *
     * @remarks
     * This method is called automatically after using the .load() method, so usually you don't need to use it manually.
     *
     * @example
     * ```typescript
     * const ifcLoader = components.get(IfcLoader);
     * ifcLoader.cleanUp();
     * ```
     */
    cleanUp(): void;
    private getAllGeometries;
    private getMesh;
    private getGeometry;
    private autoSetWasm;
}
