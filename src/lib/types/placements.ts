import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents placement tokens to show content at specific x-axis relative locations that can be applied to Framework Components
 */
export enum DESIGN_PLACEMENT_X {
    left = "left",

    right = "right",
}

/**
 * Represents placement tokens to show content at specific y-axis relative locations that can be applied to Framework Components
 */
export enum DESIGN_PLACEMENT_Y {
    top = "top",

    bottom = "bottom",
}

/**
 * Represents placement tokens to show content at specific relative locations that can be applied to Framework Components
 */
export const DESIGN_PLACEMENT = {
    ...DESIGN_PLACEMENT_X,
    ...DESIGN_PLACEMENT_Y,
} as const;

export type PROPERTY_PLACEMENT = LiteralEnum<keyof typeof DESIGN_PLACEMENT>;

export type PROPERTY_PLACEMENT_BREAKPOINT = BreakpointEnum<keyof typeof DESIGN_PLACEMENT>;

export type PROPERTY_PLACEMENT_X = LiteralEnum<DESIGN_PLACEMENT_X>;

export type PROPERTY_PLACEMENT_X_BREAKPOINT = BreakpointEnum<DESIGN_PLACEMENT_X>;

export type PROPERTY_PLACEMENT_Y = LiteralEnum<DESIGN_PLACEMENT_Y>;

export type PROPERTY_PLACEMENT_Y_BREAKPOINT = BreakpointEnum<DESIGN_PLACEMENT_Y>;
