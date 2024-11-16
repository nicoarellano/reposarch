export declare class UUID {
    private static _pattern;
    private static _lut;
    static create(): string;
    static validate(uuid: string): void;
}
