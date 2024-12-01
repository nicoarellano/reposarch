import * as THREE from "three";
import * as OBC from "@thatopen/components";
/**
 * Represents a shadow object used in the application.
 */
export interface Shadow {
    /**
     * The root group of the shadow.
     */
    root: THREE.Group;
    /**
     * The render target for the shadow texture.
     */
    rt: THREE.WebGLRenderTarget;
    /**
     * The render target for the blurred shadow texture.
     */
    rtBlur: THREE.WebGLRenderTarget;
    /**
     * The mesh used for blurring the shadow.
     */
    blurPlane: THREE.Mesh;
    /**
     * The camera used to render the shadow.
     */
    camera: THREE.Camera;
    /**
     * The world in which the shadow is rendered.
     */
    world: OBC.World;
}
/**
 * Represents a collection of shadows, where each shadow is identified by a unique ID. The keys of the object are the IDs, and the values are the corresponding {@link Shadow} objects.
 */
export interface Shadows {
    [id: string]: Shadow;
}
/**
 * This component drops shadows on meshes in a 3D scene. 📕 [Tutorial](https://docs.thatopen.com/Tutorials/Components/Front/ShadowDropper). 📘 [API](https://docs.thatopen.com/api/@thatopen/components-front/classes/ShadowDropper).
 */
export declare class ShadowDropper extends OBC.Component implements OBC.Disposable {
    /**
     * A unique identifier for the component.
     * This UUID is used to register the component within the Components system.
     */
    static readonly uuid: "f833a09a-a3ab-4c58-b03e-da5298c7a1b6";
    /** {@link OBC.Disposable.onDisposed} */
    readonly onDisposed: OBC.Event<unknown>;
    /** {@link OBC.Component.enabled} */
    enabled: boolean;
    /**
     * Controls how far away the shadow is computed
     */
    cameraHeight: number;
    /**
     * The darkness of the shadow.
     * A higher value makes the shadow darker.
     */
    darkness: number;
    /**
     * The opacity of the shadow.
     * A higher value makes the shadow more opaque.
     */
    opacity: number;
    /**
     * The resolution of the shadow texture.
     * A higher value results in a higher-quality shadow.
     */
    resolution: number;
    /**
     * The amount of blur applied to the shadow.
     * A higher value makes the shadow more blurred.
     */
    amount: number;
    /**
     * The color of the shadow plane.
     * This color is used when the ground color plane is enabled.
     */
    planeColor: number;
    /**
     * The offset of the shadow from the ground.
     * A positive value moves the shadow upwards.
     */
    shadowOffset: number;
    /**
     * The extra scale factor applied to the shadow size.
     * A higher value makes the shadow larger.
     */
    shadowExtraScaleFactor: number;
    /**
     * A collection of shadows, where each shadow is identified by a unique ID.
     */
    list: Shadows;
    private tempMaterial;
    private depthMaterial;
    constructor(components: OBC.Components);
    /** {@link OBC.Disposable.dispose} */
    dispose(): void;
    /**
     * Creates a blurred dropped shadow of the given mesh.
     *
     * @param model - the mesh whose shadow to generate.
     * @param id - the name of this shadow.
     */
    create(model: THREE.Mesh[], id: string, world: OBC.World): THREE.Group<THREE.Object3DEventMap>;
    /**
     * Deletes the specified shadow (if it exists).
     *
     * @param id - the name of this shadow.
     */
    deleteShadow(id: string): void;
    private createPlanes;
    private initializeShadow;
    private bakeShadow;
    private static initializeCamera;
    private static initializeRenderTargets;
    private initializeRoot;
    private createBasePlane;
    private static createBlurPlane;
    private createPlaneMaterial;
    private initializeDepthMaterial;
    private createShadow;
    private createCamera;
    private getSizeCenterMin;
    private blurShadow;
}
