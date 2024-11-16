import { StreamedGeometries } from "./base-types";
/**
 * A class for serializing and deserializing geometry data in a streamed format.
 */
export declare class StreamSerializer {
    /**
     * Imports geometry data from a byte array in a streamed format.
     *
     * @param bytes - The byte array containing the serialized geometry data.
     * @returns A Map of geometry IDs to their respective position, normal, and index arrays.
     * @throws Will throw an error if the geometry ID is not found.
     */
    import(bytes: Uint8Array): StreamedGeometries;
    /**
     * Exports geometry data to a byte array in a streamed format.
     *
     * @param geometries - A Map of geometry IDs to their respective position, normal, and index arrays.
     * @returns A Uint8Array containing the serialized geometry data.
     */
    export(geometries: StreamedGeometries): Uint8Array;
}
