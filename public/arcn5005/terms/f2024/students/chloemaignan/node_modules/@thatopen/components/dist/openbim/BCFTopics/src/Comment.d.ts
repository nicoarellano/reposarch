import { Topic } from "..";
import { Viewpoint } from "../../../core/Viewpoints";
import { Components } from "../../../core/Components";
/**
 * Represents a comment in a BCF Topic.
 */
export declare class Comment {
    date: Date;
    author: string;
    guid: string;
    viewpoint?: Viewpoint;
    modifiedAuthor?: string;
    modifiedDate?: Date;
    topic?: Topic;
    private _components;
    private _comment;
    /**
     * Sets the comment text and updates the modified date and author.
     * The author will be the one defined in BCFTopics.config.author
     * @param value - The new comment text.
     */
    set comment(value: string);
    /**
     * Gets the comment text.
     * @returns The comment text.
     */
    get comment(): string;
    /**
     * Constructs a new BCF Topic Comment instance.
     * @param components - The Components instance.
     * @param text - The initial comment text.
     */
    constructor(components: Components, text: string);
    /**
     * Serializes the Comment instance into a BCF compliant XML string.
     *
     * @returns A string representing the Comment in BCFv2 XML format.
     */
    serialize(): string;
}
