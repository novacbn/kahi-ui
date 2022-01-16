import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the tiers of radius tokens that can be applied to Framework Components
 */
export enum TOKENS_RADIUS {
    tiny = "tiny",

    small = "small",

    medium = "medium",

    large = "large",

    huge = "huge",
}

/**
 * Represents the preset border radius tokens that can be applied to Framework Components
 */
export enum TOKENS_SHAPE {
    pill = "pill",

    rounded = "rounded",
}

export type PROPERTY_RADIUS = LiteralEnum<TOKENS_RADIUS>;

export type PROPERTY_RADIUS_BREAKPOINT = BreakpointEnum<PROPERTY_SHAPE>;

export type PROPERTY_SHAPE = LiteralEnum<TOKENS_SHAPE>;

export type PROPERTY_SHAPE_BREAKPOINT = BreakpointEnum<PROPERTY_SHAPE>;
