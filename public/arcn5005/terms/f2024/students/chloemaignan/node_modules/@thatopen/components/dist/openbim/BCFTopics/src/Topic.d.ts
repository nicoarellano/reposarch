import { Components } from "../../../core/Components";
import { Viewpoint } from "../../../core/Viewpoints";
import { Comment } from "./Comment";
import { BCFTopic } from "./types";
import { DataMap, DataSet } from "../../../core/Types";
export declare class Topic implements BCFTopic {
    /**
     * Default values for a BCF Topic, excluding `guid`, `creationDate`, and `creationAuthor`.
     */
    static default: Omit<BCFTopic, "guid" | "creationDate" | "creationAuthor">;
    /**
     * A unique identifier for the topic.
     *
     * @remarks
     * The `guid` is automatically generated upon topic creation and by no means it should change.
     */
    guid: string;
    title: string;
    creationDate: Date;
    creationAuthor: string;
    readonly viewpoints: DataSet<string>;
    readonly relatedTopics: DataSet<string>;
    readonly comments: DataMap<string, Comment>;
    customData: Record<string, any>;
    description?: string;
    serverAssignedId?: string;
    dueDate?: Date;
    modifiedAuthor?: string;
    modifiedDate?: Date;
    index?: number;
    private _type;
    set type(value: string);
    get type(): string;
    private _status;
    set status(value: string);
    get status(): string;
    private _priority?;
    set priority(value: string | undefined);
    get priority(): string | undefined;
    private _stage?;
    set stage(value: string | undefined);
    get stage(): string | undefined;
    private _assignedTo?;
    set assignedTo(value: string | undefined);
    get assignedTo(): string | undefined;
    private _labels;
    set labels(value: Set<string>);
    get labels(): Set<string>;
    private _components;
    private get _managerVersion();
    /**
     * Initializes a new instance of the `Topic` class representing a BCF (BIM Collaboration Format) topic.
     * It provides methods and properties to manage and serialize BCF topics.
     *
     * @remarks
     * The default creationUser is the one set in BCFTopics.config.author
     * It should not be created manually. Better use BCFTopics.create().
     *
     * @param components - The `Components` instance that provides access to other components and services.
     */
    constructor(components: Components);
    /**
     * Sets properties of the BCF Topic based on the provided data.
     *
     * @remarks
     * This method iterates over the provided `data` object and updates the corresponding properties of the BCF Topic.
     * It skips the `guid` property as it should not be modified.
     *
     * @param data - An object containing the properties to be updated.
     * @returns The topic
     *
     * @example
     * ```typescript
     * const topic = new Topic(components);
     * topic.set({
     *   title: "New BCF Topic Title",
     *   description: "This is a new description.",
     *   status: "Resolved",
     * });
     * ```
     */
    set(data: Partial<BCFTopic>): this;
    /**
     * Creates a new comment associated with the current topic.
     *
     * @param text - The text content of the comment.
     * @param viewpoint - (Optional) The viewpoint associated with the comment.
     *
     * @returns The newly created comment.
     *
     * @example
     * ```typescript
     * const viewpoint = viewpoints.create(world); // Created with an instance of Viewpoints
     * const topic = topics.create(); // Created with an instance of BCFTopics
     * topic.viewpoints.add(viewpoint);
     * const comment = topic.createComment("This is a new comment", viewpoint);
     * ```
     */
    createComment(text: string, viewpoint?: Viewpoint): Comment;
    private createLabelTags;
    private createCommentTags;
    private createViewpointTags;
    private createRelatedTopicTags;
    /**
     * Serializes the BCF Topic instance into an XML string representation based on the official schema.
     *
     * @remarks
     * This method constructs an XML string based on the properties of the BCF Topic instance.
     * It includes the topic's guid, type, status, creation date, creation author, priority, index,
     * modified date, modified author, due date, assigned to, description, stage, labels, related topics,
     * comments, and viewpoints.
     *
     * @returns A string representing the XML serialization of the BCF Topic.
     *
     * @example
     * ```typescript
     * const topic = bcfTopics.create(); // Created with an instance of BCFTopics
     * const xml = topic.serialize();
     * console.log(xml);
     * ```
     */
    serialize(): string;
}
