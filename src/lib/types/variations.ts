import type {LiteralEnum} from "./util";

/**
 * Represents the tiers of filling variation tokens that can be applied to Framework Components
 */
export enum DESIGN_VARIATION_FILL {
    block = "block",

    clear = "clear",

    flush = "flush",

    outline = "outline",
}

export const DESIGN_VARIATION_BUTTON = {
    [DESIGN_VARIATION_FILL.clear]: DESIGN_VARIATION_FILL.clear,
    [DESIGN_VARIATION_FILL.outline]: DESIGN_VARIATION_FILL.outline,
} as const;

/**
 * Represents the tiers of flex variations tokens that can be applied to Framework Components
 */
export enum DESIGN_VARIATION_FLEX {
    wrap = "wrap",
}

export const DESIGN_VARIATION_INPUT = {
    [DESIGN_VARIATION_FILL.block]: DESIGN_VARIATION_FILL.block,
    [DESIGN_VARIATION_FILL.flush]: DESIGN_VARIATION_FILL.flush,
} as const;

/**
 * Represents the tiers of table variations tokens that can be applied to Framework Components
 */
export enum DESIGN_VARIATION_TABLE {
    borders = "borders",

    stripes = "stripes",
}

export const DESIGN_VARIATION_TOGGLE = {
    [DESIGN_VARIATION_FILL.flush]: DESIGN_VARIATION_FILL.flush,
} as const;

export type PROPERTY_VARIATION_BUTTON = LiteralEnum<keyof typeof DESIGN_VARIATION_BUTTON>;

export type PROPERTY_VARIATION_FLEX = LiteralEnum<DESIGN_VARIATION_FLEX>;

export type PROPERTY_VARIATION_INPUT = LiteralEnum<keyof typeof DESIGN_VARIATION_INPUT>;

export type PROPERTY_VARIATION_TABLE = LiteralEnum<DESIGN_VARIATION_TABLE>;

export type PROPERTY_VARIATION_TOGGLE = LiteralEnum<keyof typeof DESIGN_VARIATION_TOGGLE>;
