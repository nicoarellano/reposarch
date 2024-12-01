import { FragmentParser } from "./types";
import { FragmentsGroup } from "../index";
/** {@link FragmentParser} */
export declare class ParserV2 implements FragmentParser {
    readonly version = 2;
    private separator;
    /** {@link FragmentParser.import} */
    import(bytes: Uint8Array): FragmentsGroup;
    /**
     * Exports the FragmentsGroup to a flatbuffer binary file.
     *
     * @param group - The FragmentsGroup to be exported.
     * @returns The flatbuffer binary file as a Uint8Array.
     */
    export(group: FragmentsGroup): Uint8Array;
    private setID;
    private setInstances;
    private constructMaterials;
    private constructFragmentGroup;
    private setGroupData;
    private constructGeometry;
    private constructCivilCurves;
    private saveCivilCurves;
}
