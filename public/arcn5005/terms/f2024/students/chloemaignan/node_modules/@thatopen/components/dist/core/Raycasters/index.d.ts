import { Component, Disposable, World, Event } from "../Types";
import { SimpleRaycaster } from "./src";
import { Components } from "../Components";
export * from "./src";
/**
 * A component that manages a raycaster for each world and automatically disposes it when its corresponding world is disposed. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Raycasters). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Raycasters).
 */
export declare class Raycasters extends Component implements Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "d5d8bdf0-db25-4952-b951-b643af207ace";
    /** {@link Component.enabled} */
    enabled: boolean;
    /**
     * A Map that stores raycasters for each world.
     * The key is the world's UUID, and the value is the corresponding SimpleRaycaster instance.
     */
    list: Map<string, SimpleRaycaster>;
    /** {@link Disposable.onDisposed} */
    onDisposed: Event<unknown>;
    constructor(components: Components);
    /**
     * Retrieves a SimpleRaycaster instance for the given world.
     * If a SimpleRaycaster instance already exists for the world, it will be returned.
     * Otherwise, a new SimpleRaycaster instance will be created and added to the list.
     *
     * @param world - The world for which to retrieve or create a SimpleRaycaster instance.
     * @returns The SimpleRaycaster instance for the given world.
     */
    get(world: World): SimpleRaycaster;
    /**
     * Deletes the SimpleRaycaster instance associated with the given world.
     * If a SimpleRaycaster instance exists for the given world, it will be disposed and removed from the list.
     *
     * @param world - The world for which to delete the SimpleRaycaster instance.
     * @returns {void}
     */
    delete(world: World): void;
    /** {@link Disposable.dispose} */
    dispose(): void;
}
