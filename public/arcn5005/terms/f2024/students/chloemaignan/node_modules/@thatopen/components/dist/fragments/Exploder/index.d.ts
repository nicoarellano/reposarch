import { Component, Disposable, Event, Components } from "../../core";
/**
 * The Exploder component is responsible for managing the explosion of 3D model fragments (generally by floor). 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Core/Exploder). 📘 [API](https://docs.thatopen.com/api/@thatopen/components/classes/Exploder).
 */
export declare class Exploder extends Component implements Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "d260618b-ce88-4c7d-826c-6debb91de3e2";
    /** {@link Disposable.onDisposed} */
    readonly onDisposed: Event<unknown>;
    /** {@link Component.enabled} */
    enabled: boolean;
    /**
     * The height of the explosion animation.
     * This property determines the vertical distance by which fragments are moved during the explosion.
     * Default value is 10.
     */
    height: number;
    /**
     * The group name used for the explosion animation.
     * This property specifies the group of fragments that will be affected by the explosion.
     * Default value is "storeys".
     */
    groupName: string;
    /**
     * A set of strings representing the exploded items.
     * This set is used to keep track of which items have been exploded.
     */
    list: Set<string>;
    constructor(components: Components);
    /** {@link Disposable.dispose} */
    dispose(): void;
    /**
     * Sets the explosion state of the fragments.
     *
     * @param active - A boolean indicating whether to activate or deactivate the explosion.
     *
     * @remarks
     * This method applies a vertical transformation to the fragments based on the `active` parameter.
     * If `active` is true, the fragments are moved upwards by a distance determined by the `height` property.
     * If `active` is false, the fragments are moved back to their original position.
     *
     * The method also keeps track of the exploded items using the `list` set.
     *
     * @throws Will throw an error if the `Classifier` or `FragmentsManager` components are not found in the `components` system.
     */
    set(active: boolean): void;
}
