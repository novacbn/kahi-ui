import {get_breakpoint_delimited} from "./viewports";

/**
 * Represents the modes of orientation tokens that can be applied to Framework Components
 */
export enum DESIGN_ORIENTATION {
    horizontal = "horizontal",

    vertical = "vertical",
}

/**
 * Represents the modes of horizontal-based orientation tokens that can be applied to Framework Components
 */
export enum DESIGN_ORIENTATION_HORIZONTAL {
    vertical = "vertical",
}

/**
 * Represents the modes of vertical-based orientation tokens that can be applied to Framework Components
 */
export enum DESIGN_ORIENTATION_VERTICAL {
    horizontal = "horizontal",
}

export const DESIGN_ORIENTATION_LITERALS = {
    ...DESIGN_ORIENTATION,
    ...get_breakpoint_delimited<DESIGN_ORIENTATION>(DESIGN_ORIENTATION),
} as const;

export const DESIGN_ORIENTATION_HORIZONTAL_LITERALS = {
    ...DESIGN_ORIENTATION_HORIZONTAL,
    ...get_breakpoint_delimited<DESIGN_ORIENTATION_HORIZONTAL>(DESIGN_ORIENTATION_HORIZONTAL),
} as const;

export const DESIGN_ORIENTATION_VERTICAL_LITERALS = {
    ...DESIGN_ORIENTATION_VERTICAL,
    ...get_breakpoint_delimited<DESIGN_ORIENTATION_VERTICAL>(DESIGN_ORIENTATION_VERTICAL),
} as const;

export type DESIGN_ORIENTATION_ARGUMENT =
    | keyof typeof DESIGN_ORIENTATION_LITERALS
    | (keyof typeof DESIGN_ORIENTATION_LITERALS)[];

export type DESIGN_ORIENTATION_HORIZONTAL_ARGUMENT =
    | keyof typeof DESIGN_ORIENTATION_HORIZONTAL_LITERALS
    | (keyof typeof DESIGN_ORIENTATION_HORIZONTAL_LITERALS)[];

export type DESIGN_ORIENTATION_VERTICAL_ARGUMENT =
    | keyof typeof DESIGN_ORIENTATION_VERTICAL_LITERALS
    | (keyof typeof DESIGN_ORIENTATION_VERTICAL_LITERALS)[];
