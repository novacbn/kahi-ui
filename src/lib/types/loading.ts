import type {LiteralEnum} from "./util";

/**
 * Represents the valid loading behaviors that can be applied to Framework Components
 */
export enum LOADING_BEHAVIORS {
    /**
     * Represents the that Component's content is not loaded until active somehow
     */
    lazy = "lazy",
}

export type PROPERTY_LOADING_BEHAVIOR = LiteralEnum<LOADING_BEHAVIORS>;
