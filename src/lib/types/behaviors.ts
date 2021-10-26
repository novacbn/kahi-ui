import type {LiteralEnum} from "./util";

/**
 * Represents the valid loading behaviors that can be applied to Framework Components
 */
export enum TOKENS_BEHAVIOR_LOADING {
    /**
     * Represents the that Component's content is not loaded until active somehow
     */
    lazy = "lazy",
}

export enum TOKENS_BEHAVIOR_TOGGLE {
    exclusive = "exclusive",

    inclusive = "inclusive",
}

export type PROPERTY_BEHAVIOR_LOADING = LiteralEnum<TOKENS_BEHAVIOR_LOADING>;

export type PROPERTY_BEHAVIOR_TOGGLE = LiteralEnum<TOKENS_BEHAVIOR_TOGGLE>;
