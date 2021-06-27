import {get_breakpoint_delimited} from "./viewports";

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

export const DESIGN_ALIGNMENT_LITERALS = {
    ...DESIGN_ALIGNMENT,
    ...get_breakpoint_delimited<DESIGN_ALIGNMENT>(DESIGN_ALIGNMENT),
} as const;

export const DESIGN_ALIGNMENT_X_LITERALS = {
    ...DESIGN_ALIGNMENT_X,
    ...get_breakpoint_delimited<DESIGN_ALIGNMENT_X>(DESIGN_ALIGNMENT_X),
} as const;

export const DESIGN_ALIGNMENT_X_SINGULAR_LITERALS = {
    ...DESIGN_ALIGNMENT_X,
} as const;

export const DESIGN_ALIGNMENT_Y_LITERALS = {
    ...DESIGN_ALIGNMENT_Y,
    ...get_breakpoint_delimited<DESIGN_ALIGNMENT_Y>(DESIGN_ALIGNMENT_Y),
} as const;

export const DESIGN_ALIGNMENT_Y_SINGULAR_LITERALS = {
    ...DESIGN_ALIGNMENT_Y,
} as const;

export type DESIGN_ALIGNMENT_ARGUMENT =
    | keyof typeof DESIGN_ALIGNMENT_LITERALS
    | (keyof typeof DESIGN_ALIGNMENT_LITERALS)[];

export type DESIGN_ALIGNMENT_X_ARGUMENT =
    | keyof typeof DESIGN_ALIGNMENT_X_LITERALS
    | (keyof typeof DESIGN_ALIGNMENT_X_LITERALS)[];

export type DESIGN_ALIGNMENT_X_SINGULAR_ARGUMENT =
    keyof typeof DESIGN_ALIGNMENT_X_SINGULAR_LITERALS;

export type DESIGN_ALIGNMENT_Y_ARGUMENT =
    | keyof typeof DESIGN_ALIGNMENT_Y_LITERALS
    | (keyof typeof DESIGN_ALIGNMENT_Y_LITERALS)[];

export type DESIGN_ALIGNMENT_Y_SINGULAR_ARGUMENT =
    keyof typeof DESIGN_ALIGNMENT_Y_SINGULAR_LITERALS;
