import * as THREE from "three";
import * as OBC from "@thatopen/components";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { CustomEffectsPass } from "./custom-effects-pass";
/**
 * Interface defining the settings for the post-processing effects.
 */
export interface PostproductionSettings {
    /**
     * Flag indicating whether to apply gamma correction.
     * Default: true
     */
    gamma?: boolean;
    /**
     * Flag indicating whether to apply custom effects.
     * Default: true
     */
    custom?: boolean;
    /**
     * Flag indicating whether to apply Ambient Occlusion (AO) effect.
     * Default: false
     */
    ao?: boolean;
}
/**
 * Class representing a post-processing effect manager for a 3D scene. It uses the EffectComposer from three.js to apply various post-processing effects. Thanks to [this](https://discourse.threejs.org/t/how-to-render-full-outlines-as-a-post-process-tutorial/22674).
 */
export declare class Postproduction {
    /**
     * The EffectComposer instance used for managing the post-processing effects.
     */
    readonly composer: EffectComposer;
    /**
     * Flag indicating whether to override the clipping planes of the renderer.
     * Default: false
     */
    overrideClippingPlanes: boolean;
    private readonly _components;
    private readonly _world;
    private readonly _renderTarget;
    private _enabled;
    private _initialized;
    private _n8ao?;
    private _customEffects?;
    private _basePass?;
    private _gammaPass?;
    private _depthTexture?;
    private _renderer;
    private _settings;
    /**
     * Getter for the base pass. Throws an error if the custom effects are not initialized.
     */
    get basePass(): RenderPass;
    /**
     * Getter for the gamma pass. Throws an error if the custom effects are not initialized.
     */
    get gammaPass(): ShaderPass;
    /**
     * Getter for the custom effects pass. Throws an error if the custom effects are not initialized.
     */
    get customEffects(): CustomEffectsPass;
    /**
     * Getter for the N8AO pass. Throws an error if the custom effects are not initialized.
     */
    get n8ao(): any;
    /**
     * Getter for the enabled state of the post-processing effects.
     */
    get enabled(): boolean;
    /**
     * Setter for the enabled state of the post-processing effects.
     * If the custom effects are not initialized, it calls the initialize method.
     * @param {boolean} active - The new enabled state.
     */
    set enabled(active: boolean);
    /**
     * Getter for the current post-processing settings.
     */
    get settings(): {
        /**
         * Flag indicating whether to apply gamma correction.
         * Default: true
         */
        gamma?: boolean | undefined;
        /**
         * Flag indicating whether to apply custom effects.
         * Default: true
         */
        custom?: boolean | undefined;
        /**
         * Flag indicating whether to apply Ambient Occlusion (AO) effect.
         * Default: false
         */
        ao?: boolean | undefined;
    };
    constructor(components: OBC.Components, renderer: THREE.WebGLRenderer, world: OBC.World);
    /**
     * Disposes of the resources held by the post-processing manager.
     * This method should be called when the post-processing manager is no longer needed.
     * It releases the memory occupied by the render target, depth texture, custom effects pass, gamma pass, and N8AO pass.
     */
    dispose(): void;
    /**
     * Sets the post-processing settings and updates the passes accordingly.
     * This method checks if the settings have changed before updating the passes.
     *
     * @param settings - The new post-processing settings.
     * @returns {void}
     */
    setPasses(settings: PostproductionSettings): void;
    /**
     * Sets the size of the render target and all related passes.
     * This method should be called when the window size changes to ensure that the post-processing effects are rendered correctly.
     *
     * @param width - The new width of the render target.
     * @param height - The new height of the render target.
     * @returns {void}
     */
    setSize(width: number, height: number): void;
    /**
     * Updates the post-processing effects.
     * This method checks if the post-processing effects are enabled before rendering.
     * If the effects are enabled, it calls the `composer.render()` method to apply the effects.
     */
    update(): void;
    /**
     * Updates the camera settings for the post-processing effects.
     * This method is called whenever the camera settings change.
     * It updates the camera settings for the N8AO pass, custom effects pass, and base pass.
     */
    updateCamera(): void;
    /**
     * Updates the projection of the camera for the post-processing effects.
     * This method iterates over all passes in the EffectComposer and updates the camera property of each pass.
     * After updating the camera, it calls the update method to apply the changes.
     *
     * @param camera - The new camera to use for the post-processing effects.
     * @returns {void}
     */
    updateProjection(camera: THREE.Camera): void;
    private initialize;
    private updatePasses;
    private newCustomPass;
    private newGammaPass;
    private newSaoPass;
    private newBasePass;
}
