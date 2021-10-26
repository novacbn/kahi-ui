import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the tiers of alignment tokens that can be applied to Framework Components
 */
export enum DESIGN_ALIGNMENT {
    center = "center",

    stretch = "stretch",
}

/**
 * Represents the tiers of alignment x-axis tokens that can be applied to Framework Components
 */
export enum DESIGN_ALIGNMENT_X {
    left = "left",

    center = "center",

    right = "right",

    stretch = "stretch",
}

/**
 * Represents the tiers of alignment y-axis tokens that can be applied to Framework Components
 */
export enum DESIGN_ALIGNMENT_Y {
    top = "top",

    center = "center",

    bottom = "bottom",

    stretch = "stretch",
}

export type PROPERTY_ALIGNMENT = LiteralEnum<DESIGN_ALIGNMENT>;

export type PROPERTY_ALIGNMENT_BREAKPOINT = BreakpointEnum<DESIGN_ALIGNMENT>;

export type PROPERTY_ALIGNMENT_X = LiteralEnum<DESIGN_ALIGNMENT_X>;

export type PROPERTY_ALIGNMENT_X_BREAKPOINT = BreakpointEnum<DESIGN_ALIGNMENT_X>;

export type PROPERTY_ALIGNMENT_Y = LiteralEnum<DESIGN_ALIGNMENT_Y>;

export type PROPERTY_ALIGNMENT_Y_BREAKPOINT = BreakpointEnum<DESIGN_ALIGNMENT_Y>;
