import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the tiers of sizing tokens that can be applied to Framework Components
 */
export enum TOKENS_SIZING {
    tiny = "tiny",

    small = "small",

    medium = "medium",

    large = "large",

    huge = "huge",
}

export type PROPERTY_SIZING = LiteralEnum<TOKENS_SIZING>;

export type PROPERTY_SIZING_BREAKPOINT = BreakpointEnum<TOKENS_SIZING>;
