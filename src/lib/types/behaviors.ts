import type {LiteralEnum} from "./util";

/**
 * Represents the valid loading behaviors that can be applied to Framework Components
 */
export enum TOKENS_BEHAVIOR_LOADING {
    /**
     * Represents that the Component's content is not loaded until active and will unload on inactivity
     */
    eager = "eager",

    /**
     * Represents that the Component's content is not loaded until active
     */
    lazy = "lazy",
}

export const TOKENS_BEHAVIOR_LOADING_EAGER = {
    [TOKENS_BEHAVIOR_LOADING.eager]: TOKENS_BEHAVIOR_LOADING.eager,
} as const;

export const TOKENS_BEHAVIOR_LOADING_LAZY = {
    [TOKENS_BEHAVIOR_LOADING.lazy]: TOKENS_BEHAVIOR_LOADING.lazy,
} as const;

export enum TOKENS_BEHAVIOR_TOGGLE {
    exclusive = "exclusive",

    inclusive = "inclusive",
}

export type PROPERTY_BEHAVIOR_LOADING = LiteralEnum<TOKENS_BEHAVIOR_LOADING>;

export type PROPERTY_BEHAVIOR_LOADING_EAGER = LiteralEnum<
    keyof typeof TOKENS_BEHAVIOR_LOADING_EAGER
>;

export type PROPERTY_BEHAVIOR_LOADING_LAZY = LiteralEnum<keyof typeof TOKENS_BEHAVIOR_LOADING_LAZY>;

export type PROPERTY_BEHAVIOR_TOGGLE = LiteralEnum<TOKENS_BEHAVIOR_TOGGLE>;
