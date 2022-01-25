import type {LiteralEnum, LiteralObject} from "./util";

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

/**
 * Represents the valid toggle grouping behaviors that can be applied to Framework Components
 */
export enum TOKENS_BEHAVIOR_TOGGLE {
    /**
     * Represents that toggles in a grouping can only be activated one at a time
     */
    exclusive = "exclusive",

    /**
     * Represents that toggles in a grouping can be activated independently of each other
     */
    inclusive = "inclusive",
}

/**
 * Represents the valid transition behaviors that can be applied to Framework Components
 */
export enum TOKENS_BEHAVIOR_TRANSITION {
    /**
     * Represents that the animation will not play its first iteration until switched between `enter` / `exit` animations
     */
    explicit = "explicit",
}

export type PROPERTY_BEHAVIOR_TRANSITION = LiteralEnum<TOKENS_BEHAVIOR_TRANSITION>;

export type PROPERTY_BEHAVIOR_LOADING = LiteralEnum<TOKENS_BEHAVIOR_LOADING>;

export type PROPERTY_BEHAVIOR_LOADING_EAGER = LiteralObject<typeof TOKENS_BEHAVIOR_LOADING_EAGER>;

export type PROPERTY_BEHAVIOR_LOADING_LAZY = LiteralObject<typeof TOKENS_BEHAVIOR_LOADING_LAZY>;

export type PROPERTY_BEHAVIOR_TOGGLE = LiteralEnum<TOKENS_BEHAVIOR_TOGGLE>;
