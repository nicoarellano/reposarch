import { StreamFileDatabase } from "./streamer-db";
export declare class StreamerDbCleaner {
    interval: number;
    maxTime: number;
    list: Map<string, number>;
    private _enabled;
    private _intervalId;
    private _fileCache;
    constructor(fileCache: StreamFileDatabase);
    get enabled(): boolean;
    set enabled(value: boolean);
    update(id: string): void;
    clear(): Promise<void>;
    private clean;
}
