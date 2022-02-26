import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the tiers of radius tokens that can be applied to Framework Components
 */
export enum TOKENS_RADIUS {
    nano = "nano",

    tiny = "tiny",

    small = "small",

    medium = "medium",

    large = "large",

    huge = "huge",

    massive = "massive",
}

/**
 * Represents the preset border radius tokens that can be applied to Framework Components
 */
export enum TOKENS_SHAPE {
    circle = "circle",

    pill = "pill",
}

export type PROPERTY_RADIUS = LiteralEnum<TOKENS_RADIUS>;

export type PROPERTY_RADIUS_BREAKPOINT = BreakpointEnum<PROPERTY_RADIUS>;

export type PROPERTY_SHAPE = LiteralEnum<TOKENS_SHAPE>;

export type PROPERTY_SHAPE_BREAKPOINT = BreakpointEnum<PROPERTY_SHAPE>;
