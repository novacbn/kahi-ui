import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the tiers of alignment tokens that can be applied to Framework Components
 */
export enum TOKENS_ALIGNMENT {
    center = "center",

    stretch = "stretch",
}

/**
 * Represents the tiers of alignment x-axis tokens that can be applied to Framework Components
 */
export enum TOKENS_ALIGNMENT_X {
    left = "left",

    center = "center",

    right = "right",

    stretch = "stretch",
}

/**
 * Represents the tiers of alignment y-axis tokens that can be applied to Framework Components
 */
export enum TOKENS_ALIGNMENT_Y {
    top = "top",

    center = "center",

    bottom = "bottom",

    stretch = "stretch",
}

export type PROPERTY_ALIGNMENT = LiteralEnum<TOKENS_ALIGNMENT>;

export type PROPERTY_ALIGNMENT_BREAKPOINT = BreakpointEnum<TOKENS_ALIGNMENT>;

export type PROPERTY_ALIGNMENT_X = LiteralEnum<TOKENS_ALIGNMENT_X>;

export type PROPERTY_ALIGNMENT_X_BREAKPOINT = BreakpointEnum<TOKENS_ALIGNMENT_X>;

export type PROPERTY_ALIGNMENT_Y = LiteralEnum<TOKENS_ALIGNMENT_Y>;

export type PROPERTY_ALIGNMENT_Y_BREAKPOINT = BreakpointEnum<TOKENS_ALIGNMENT_Y>;
