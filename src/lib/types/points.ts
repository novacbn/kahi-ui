import {get_breakpoint_delimited} from "./viewports";

/**
 * Represents the tiers of grid points tokens that can be applied to Framework Components
 */
export const DESIGN_POINTS = {
    "1": "1",
    "2": "2",
    "3": "3",
    "4": "4",
    "5": "5",
    "6": "6",
    "7": "7",
    "8": "8",
    "9": "9",
    "10": "10",
    "11": "11",
    "12": "12",
};

export const DESIGN_POINTS_LITERALS = {
    ...DESIGN_POINTS,
    ...get_breakpoint_delimited<keyof typeof DESIGN_POINTS>(DESIGN_POINTS),
} as const;

export type DESIGN_POINTS_ARGUMENT =
    | keyof typeof DESIGN_POINTS_LITERALS
    | (keyof typeof DESIGN_POINTS_LITERALS)[];
