import { FragmentsGroup } from "../fragments-group";
import { FragmentParser } from "../parsers";
/**
 * Serializer class for handling the serialization and deserialization of 3D model data. It uses the [flatbuffers library](https://flatbuffers.dev/) for efficient data serialization and deserialization.
 */
export declare class Serializer implements FragmentParser {
    parsers: FragmentParser[];
    /** {@link FragmentParser.version} */
    version: number | "auto";
    /** {@link FragmentParser.import} */
    import(bytes: Uint8Array): FragmentsGroup;
    /** {@link FragmentParser.export} */
    export(group: FragmentsGroup): Uint8Array;
    private checkCurrentVersionValid;
    private warnVersion;
}
