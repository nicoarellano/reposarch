import { Base } from "./base";
import { World } from "./world";
import { Event } from "./event";
import { Components } from "../../Components";
/**
 * One of the elements that make a world. It can be either a scene, a camera or a renderer.
 */
export declare abstract class BaseWorldItem extends Base {
    readonly worlds: Map<string, World>;
    /**
     * Event that is triggered when a world is added or removed from the `worlds` map.
     * The event payload contains the world instance and the action ("added" or "removed").
     */
    readonly onWorldChanged: Event<{
        world: World;
        action: "added" | "removed";
    }>;
    /**
     * The current world this item is associated with. It can be null if no world is currently active.
     */
    currentWorld: World | null;
    protected constructor(components: Components);
}
