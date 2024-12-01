import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { Postproduction } from "./src/postproduction";
import { RendererWith2D } from "../Marker";
export * from "./src/postproduction";
/**
 * A class that extends RendererWith2D and adds post-processing capabilities. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/PostproductionRenderer). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/PostproductionRenderer).
 */
export declare class PostproductionRenderer extends RendererWith2D {
    private _postproduction?;
    /**
     * Getter for the postproduction instance.
     * Throws an error if the postproduction instance is not yet initialized.
     *
     * @returns The initialized Postproduction instance.
     */
    get postproduction(): Postproduction;
    constructor(components: OBC.Components, container: HTMLElement, parameters?: Partial<THREE.WebGLRendererParameters>);
    /** {@link Updateable.update} */
    update(): void;
    /** {@link OBC.Disposable.dispose}. */
    dispose(): void;
    private resizePostproduction;
    private setPostproductionSize;
}
