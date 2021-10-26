import type {DelimitEnum, LiteralEnum} from "./util";

/**
 * Represents viewport tokens that can be applied to Framework Components
 */
export enum TOKENS_VIEWPORT {
    mobile = "mobile",

    tablet = "tablet",

    desktop = "desktop",

    widescreen = "widescreen",
}

/**
 * @private
 */
export type BreakpointEnum<Values extends string> = DelimitEnum<TOKENS_VIEWPORT, Values>;

export type PROPERTY_VIEWPORT = LiteralEnum<TOKENS_VIEWPORT>;

export type PROPERTY_VIEWPORT_BREAKPOINT = BreakpointEnum<TOKENS_VIEWPORT>;
