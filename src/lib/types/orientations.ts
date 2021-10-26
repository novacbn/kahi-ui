import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the modes of horizontal-based orientation tokens that can be applied to Framework Components
 */
export enum DESIGN_ORIENTATION_X {
    vertical = "vertical",
}

/**
 * Represents the modes of vertical-based orientation tokens that can be applied to Framework Components
 */
export enum DESIGN_ORIENTATION_Y {
    horizontal = "horizontal",
}

/**
 * Represents the modes of orientation tokens that can be applied to Framework Components
 */
export const DESIGN_ORIENTATION = {
    ...DESIGN_ORIENTATION_X,
    ...DESIGN_ORIENTATION_Y,
} as const;

export type PROPERTY_ORIENTATION = LiteralEnum<keyof typeof DESIGN_ORIENTATION>;

export type PROPERTY_ORIENTATION_BREAKPOINT = BreakpointEnum<keyof typeof DESIGN_ORIENTATION>;

export type PROPERTY_ORIENTATION_X = LiteralEnum<DESIGN_ORIENTATION_X>;

export type PROPERTY_ORIENTATION_X_BREAKPOINT = BreakpointEnum<DESIGN_ORIENTATION_X>;

export type PROPERTY_ORIENTATION_Y = LiteralEnum<DESIGN_ORIENTATION_Y>;

export type PROPERTY_ORIENTATION_Y_BREAKPOINT = BreakpointEnum<DESIGN_ORIENTATION_Y>;
