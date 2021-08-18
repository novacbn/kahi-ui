/**
 * Represents the valid loading behaviors that can be applied to Framework Components
 */
export enum LOADING_BEHAVIORS {
    /**
     * Represents the that Component's content is not loaded until active somehow
     */
    lazy = "lazy",
}

export const LOADING_BEHAVIORS_LITERALS = {...LOADING_BEHAVIORS} as const;

export type LOADING_BEHAVIORS_ARGUMENT = keyof typeof LOADING_BEHAVIORS_LITERALS;
