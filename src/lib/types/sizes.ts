import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the tiers of intrinsic sizes tokens that can be applied to Framework Components
 */
export const TOKENS_SIZE = {
    auto: "auto",
    "content-fit": "content-fit",
    "content-max": "content-max",
    "content-min": "content-min",
    prose: "prose",
    stretch: "stretch",

    "25": "25",
    "viewport-25": "viewport-25",
    "33": "33",
    "viewport-33": "viewport-33",
    "50": "50",
    "viewport-50": "viewport-50",
    "66": "66",
    "viewport-66": "viewport-66",
    "75": "75",
    "viewport-75": "viewport-75",
    "100": "100",
    "viewport-100": "viewport-100",
} as const;

export type PROPERTY_SIZE = LiteralEnum<keyof typeof TOKENS_SIZE>;

export type PROPERTY_SIZE_BREAKPOINT = BreakpointEnum<keyof typeof TOKENS_SIZE>;

export interface ISizeProperties {
    height?: PROPERTY_SIZE_BREAKPOINT;
    max_height?: PROPERTY_SIZE_BREAKPOINT;
    min_height?: PROPERTY_SIZE_BREAKPOINT;

    width?: PROPERTY_SIZE_BREAKPOINT;
    max_width?: PROPERTY_SIZE_BREAKPOINT;
    min_width?: PROPERTY_SIZE_BREAKPOINT;
}
