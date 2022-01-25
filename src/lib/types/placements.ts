import type {LiteralEnum, LiteralObject} from "./util";
import type {BreakpointEnum} from "./viewports";

/**
 * Represents placement tokens to show content at specific x-axis relative locations that can be applied to Framework Components
 */
export enum TOKENS_PLACEMENT_X {
    left = "left",

    right = "right",
}

/**
 * Represents placement tokens to show content at specific y-axis relative locations that can be applied to Framework Components
 */
export enum TOKENS_PLACEMENT_Y {
    top = "top",

    bottom = "bottom",
}

/**
 * Represents placement tokens to show content at specific relative locations that can be applied to Framework Components
 */
export const TOKENS_PLACEMENT = {
    ...TOKENS_PLACEMENT_X,
    ...TOKENS_PLACEMENT_Y,
} as const;

export type PROPERTY_PLACEMENT = LiteralObject<typeof TOKENS_PLACEMENT>;

export type PROPERTY_PLACEMENT_BREAKPOINT = BreakpointEnum<keyof typeof TOKENS_PLACEMENT>;

export type PROPERTY_PLACEMENT_X = LiteralEnum<TOKENS_PLACEMENT_X>;

export type PROPERTY_PLACEMENT_X_BREAKPOINT = BreakpointEnum<TOKENS_PLACEMENT_X>;

export type PROPERTY_PLACEMENT_Y = LiteralEnum<TOKENS_PLACEMENT_Y>;

export type PROPERTY_PLACEMENT_Y_BREAKPOINT = BreakpointEnum<TOKENS_PLACEMENT_Y>;
