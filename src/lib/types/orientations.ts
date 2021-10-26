import type {LiteralEnum} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents the modes of horizontal-based orientation tokens that can be applied to Framework Components
 */
export enum TOKENS_ORIENTATION_X {
    vertical = "vertical",
}

/**
 * Represents the modes of vertical-based orientation tokens that can be applied to Framework Components
 */
export enum TOKENS_ORIENTATION_Y {
    horizontal = "horizontal",
}

/**
 * Represents the modes of orientation tokens that can be applied to Framework Components
 */
export const TOKENS_ORIENTATION = {
    ...TOKENS_ORIENTATION_X,
    ...TOKENS_ORIENTATION_Y,
} as const;

export type PROPERTY_ORIENTATION = LiteralEnum<keyof typeof TOKENS_ORIENTATION>;

export type PROPERTY_ORIENTATION_BREAKPOINT = BreakpointEnum<keyof typeof TOKENS_ORIENTATION>;

export type PROPERTY_ORIENTATION_X = LiteralEnum<TOKENS_ORIENTATION_X>;

export type PROPERTY_ORIENTATION_X_BREAKPOINT = BreakpointEnum<TOKENS_ORIENTATION_X>;

export type PROPERTY_ORIENTATION_Y = LiteralEnum<TOKENS_ORIENTATION_Y>;

export type PROPERTY_ORIENTATION_Y_BREAKPOINT = BreakpointEnum<TOKENS_ORIENTATION_Y>;
