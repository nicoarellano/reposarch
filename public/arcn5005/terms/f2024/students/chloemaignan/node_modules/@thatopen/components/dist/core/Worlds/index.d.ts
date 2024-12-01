import { Component, Disposable, Updateable, World, Event, BaseScene, BaseCamera, BaseRenderer, DataMap } from "../Types";
import { Components } from "../Components";
import { SimpleWorld } from "./src";
export * from "./src";
/**
 * A class representing a collection of worlds within a game engine. It manages the creation, deletion, and update of worlds. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Worlds). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Worlds).
 */
export declare class Worlds extends Component implements Updateable, Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "fdb61dc4-2ec1-4966-b83d-54ea795fad4a";
    /** {@link Updateable.onAfterUpdate} */
    readonly onAfterUpdate: Event<unknown>;
    /** {@link Updateable.onBeforeUpdate} */
    readonly onBeforeUpdate: Event<unknown>;
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<unknown>;
    /**
     * A collection of worlds managed by this component.
     * The key is the unique identifier (UUID) of the world, and the value is the World instance.
     */
    list: DataMap<string, World>;
    /** {@link Component.enabled} */
    enabled: boolean;
    constructor(components: Components);
    /**
     * Creates a new instance of a SimpleWorld and adds it to the list of worlds.
     *
     * @template T - The type of the scene, extending from BaseScene. Defaults to BaseScene.
     * @template U - The type of the camera, extending from BaseCamera. Defaults to BaseCamera.
     * @template S - The type of the renderer, extending from BaseRenderer. Defaults to BaseRenderer.
     *
     * @throws {Error} - Throws an error if a world with the same UUID already exists in the list.
     */
    create<T extends BaseScene = BaseScene, U extends BaseCamera = BaseCamera, S extends BaseRenderer = BaseRenderer>(): SimpleWorld<T, U, S>;
    /**
     * Deletes a world from the list of worlds.
     *
     * @param {World} world - The world to be deleted.
     *
     * @throws {Error} - Throws an error if the provided world is not found in the list.
     */
    delete(world: World): void;
    /**
     * Disposes of the Worlds component and all its managed worlds.
     * This method sets the enabled flag to false, disposes of all worlds, clears the list,
     * and triggers the onDisposed event.
     */
    dispose(): void;
    /** {@link Updateable.update} */
    update(delta?: number): void | Promise<void>;
}
