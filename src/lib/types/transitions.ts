import type {LiteralEnum} from "./util";

/**
 * Represents the preset transition names that can be applied to Framework Components
 */
export enum TOKENS_TRANSITION_NAMES {
    clip = "clip",

    fade = "fade",

    scale = "scale",

    slide = "slide",
}

export type PROPERTY_TRANSITION_NAMES = LiteralEnum<TOKENS_TRANSITION_NAMES>;
