import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the tiers of spacing tokens that can be applied to Framework Components
 */
export enum TOKENS_SPACING {
    none = "none",

    auto = "auto",

    nano = "nano",

    tiny = "tiny",

    small = "small",

    medium = "medium",

    large = "large",

    huge = "huge",

    massive = "massive",
}

export type PROPERTY_SPACING = LiteralEnum<TOKENS_SPACING>;

export type PROPERTY_SPACING_BREAKPOINT = BreakpointEnum<TOKENS_SPACING>;

export interface IMarginProperties {
    margin?: PROPERTY_SPACING_BREAKPOINT;

    margin_x?: PROPERTY_SPACING_BREAKPOINT;
    margin_y?: PROPERTY_SPACING_BREAKPOINT;

    margin_top?: PROPERTY_SPACING_BREAKPOINT;
    margin_left?: PROPERTY_SPACING_BREAKPOINT;
    margin_bottom?: PROPERTY_SPACING_BREAKPOINT;
    margin_right?: PROPERTY_SPACING_BREAKPOINT;
}

export interface IPaddingProperties {
    padding?: PROPERTY_SPACING_BREAKPOINT;

    padding_x?: PROPERTY_SPACING_BREAKPOINT;
    padding_y?: PROPERTY_SPACING_BREAKPOINT;

    padding_top?: PROPERTY_SPACING_BREAKPOINT;
    padding_left?: PROPERTY_SPACING_BREAKPOINT;
    padding_bottom?: PROPERTY_SPACING_BREAKPOINT;
    padding_right?: PROPERTY_SPACING_BREAKPOINT;
}
