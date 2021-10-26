import type {LiteralEnum} from "./util";

/**
 * Represents the tiers of flex variations tokens that can be applied to Framework Components
 */
export enum TOKENS_VARIATION_FLEX {
    wrap = "wrap",
}

/**
 * Represents the tiers of filling variation tokens that can be applied to Framework Components
 */
export enum TOKENS_VARIATION_FILL {
    block = "block",

    clear = "clear",

    flush = "flush",

    outline = "outline",
}

export const TOKENS_VARIATION_BUTTON = {
    [TOKENS_VARIATION_FILL.clear]: TOKENS_VARIATION_FILL.clear,
    [TOKENS_VARIATION_FILL.outline]: TOKENS_VARIATION_FILL.outline,
} as const;

export const TOKENS_VARIATION_INPUT = {
    [TOKENS_VARIATION_FILL.block]: TOKENS_VARIATION_FILL.block,
    [TOKENS_VARIATION_FILL.flush]: TOKENS_VARIATION_FILL.flush,
} as const;

export const TOKENS_VARIATION_SURFACE = {
    [TOKENS_VARIATION_FILL.flush]: TOKENS_VARIATION_FILL.flush,
} as const;

/**
 * Represents the tiers of table variations tokens that can be applied to Framework Components
 */
export enum TOKENS_VARIATION_TABLE {
    borders = "borders",

    stripes = "stripes",
}

export const TOKENS_VARIATION_TOGGLE = {
    [TOKENS_VARIATION_FILL.flush]: TOKENS_VARIATION_FILL.flush,
} as const;

export type PROPERTY_VARIATION_BUTTON = LiteralEnum<keyof typeof TOKENS_VARIATION_BUTTON>;

export type PROPERTY_VARIATION_FLEX = LiteralEnum<TOKENS_VARIATION_FLEX>;

export type PROPERTY_VARIATION_INPUT = LiteralEnum<keyof typeof TOKENS_VARIATION_INPUT>;

export type PROPERTY_VARIATION_SURFACE = LiteralEnum<keyof typeof TOKENS_VARIATION_SURFACE>;

export type PROPERTY_VARIATION_TABLE = LiteralEnum<TOKENS_VARIATION_TABLE>;

export type PROPERTY_VARIATION_TOGGLE = LiteralEnum<keyof typeof TOKENS_VARIATION_TOGGLE>;
