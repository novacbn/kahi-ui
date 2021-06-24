/**
 * Represents the tiers of filling variation tokens that can be applied to Framework Components
 */
export enum DESIGN_FILL_VARIATION {
    block = "block",

    clear = "clear",

    flush = "flush",

    outline = "outline",
}

/**
 * Represents the tiers of flex variations tokens that can be applied to Framework Components
 */
export enum DESIGN_FLEX_VARIATION {
    wrap = "wrap",
}

/**
 * Represents the tiers of table variations tokens that can be applied to Framework Components
 */
export enum DESIGN_TABLE_VARIATION {
    borders = "borders",

    stripes = "stripes",
}

export const DESIGN_FILL_VARIATION_LITERALS = {...DESIGN_FILL_VARIATION} as const;

export const DESIGN_FLEX_VARIATION_LITERALS = {...DESIGN_FLEX_VARIATION} as const;

export type DESIGN_FILL_VARIATION_ARGUMENT = keyof typeof DESIGN_FILL_VARIATION_LITERALS;

export type DESIGN_FILL_BUTTON_VARIATION_ARGUMENT = Exclude<
    DESIGN_FILL_VARIATION_ARGUMENT,
    "block" | "flush"
>;

export type DESIGN_FILL_INPUT_VARIATION_ARGUMENT = Exclude<
    DESIGN_FILL_VARIATION_ARGUMENT,
    "clear" | "outline"
>;

export const DESIGN_TABLE_VARIATION_LITERALS = {...DESIGN_TABLE_VARIATION} as const;

export type DESIGN_FLEX_VARIATION_ARGUMENT =
    | keyof typeof DESIGN_FLEX_VARIATION_LITERALS
    | (keyof typeof DESIGN_FLEX_VARIATION_LITERALS)[];

export type DESIGN_TABLE_VARIATION_ARGUMENT =
    | keyof typeof DESIGN_TABLE_VARIATION_LITERALS
    | (keyof typeof DESIGN_TABLE_VARIATION_LITERALS)[];
