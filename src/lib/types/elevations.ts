import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the tiers of elevation (box-shadow) tokens that can be applied to Framework Components
 */
export enum TOKENS_ELEVATION {
    none = "none",

    lowest = "lowest",

    lower = "lower",

    low = "low",

    medium = "medium",

    high = "high",

    higher = "higher",

    highest = "highest",
}

export type PROPERTY_ELEVATION = LiteralEnum<TOKENS_ELEVATION>;

export type PROPERTY_ELEVATION_BREAKPOINT = BreakpointEnum<PROPERTY_ELEVATION>;
