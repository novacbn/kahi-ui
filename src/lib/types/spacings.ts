import {get_breakpoint_delimited} from "./viewports";

/**
 * Represents the tiers of spacing tokens that can be applied to Framework Components
 */
export enum DESIGN_SPACING {
    none = "none",

    auto = "auto",

    tiny = "tiny",

    small = "small",

    medium = "medium",

    large = "large",

    huge = "huge",
}

export const DESIGN_SPACING_LITERALS = {
    ...DESIGN_SPACING,
    ...get_breakpoint_delimited<DESIGN_SPACING>(DESIGN_SPACING),
} as const;

export type DESIGN_SPACING_ARGUMENT =
    | keyof typeof DESIGN_SPACING_LITERALS
    | (keyof typeof DESIGN_SPACING_LITERALS)[];
