import { ByteBuffer } from './byte-buffer.js';
import { Builder } from './builder.js';
export declare type Offset = number;
export declare type Table = {
    bb: ByteBuffer;
    bb_pos: number;
};
export interface IGeneratedObject {
    pack(builder: Builder): Offset;
}
export interface IUnpackableObject<T> {
    unpack(): T;
}
