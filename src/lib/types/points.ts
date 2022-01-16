import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the tiers of grid points tokens that can be applied to Framework Components
 */
export const TOKENS_POINTS = {
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
} as const;

export type PROPERTY_POINTS = LiteralEnum<keyof typeof TOKENS_POINTS>;

export type PROPERTY_POINTS_BREAKPOINT = BreakpointEnum<PROPERTY_POINTS>;
