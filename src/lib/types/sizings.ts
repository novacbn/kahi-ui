import {get_breakpoint_delimited} from "./viewports";

/**
 * Represents the tiers of intrinsic sizing tokens that can be applied to Framework Components
 */
export const DESIGN_INTRINSIC_SIZING = {
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

/**
 * Represents the tiers of sizing tokens that can be applied to Framework Components
 */
export enum DESIGN_SIZING {
    tiny = "tiny",

    small = "small",

    medium = "medium",

    large = "large",

    huge = "huge",
}

export const DESIGN_INTRINSIC_SIZING_LITERALS = {
    ...DESIGN_INTRINSIC_SIZING,
    ...get_breakpoint_delimited<keyof typeof DESIGN_INTRINSIC_SIZING>(DESIGN_INTRINSIC_SIZING),
} as const;

export const DESIGN_SIZING_LITERALS = {
    ...DESIGN_SIZING,
    ...get_breakpoint_delimited<keyof typeof DESIGN_SIZING>(DESIGN_SIZING),
} as const;

export type DESIGN_INTRINSIC_SIZING_ARGUMENT =
    | keyof typeof DESIGN_INTRINSIC_SIZING_LITERALS
    | (keyof typeof DESIGN_INTRINSIC_SIZING_LITERALS)[];

export type DESIGN_SIZING_ARGUMENT =
    | keyof typeof DESIGN_SIZING_LITERALS
    | (keyof typeof DESIGN_SIZING_LITERALS)[];

export interface IIntrinsicProperties {
    height?: DESIGN_INTRINSIC_SIZING_ARGUMENT;
    max_height?: DESIGN_INTRINSIC_SIZING_ARGUMENT;
    min_height?: DESIGN_INTRINSIC_SIZING_ARGUMENT;

    width?: DESIGN_INTRINSIC_SIZING_ARGUMENT;
    max_width?: DESIGN_INTRINSIC_SIZING_ARGUMENT;
    min_width?: DESIGN_INTRINSIC_SIZING_ARGUMENT;
}
