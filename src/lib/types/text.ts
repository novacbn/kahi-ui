/**
 * Represents the tiers of text alignment tokens that can be applied to Framework Components
 */
export enum DESIGN_TEXT_ALIGNMENT {
    center = "center",

    justify = "justify",

    left = "left",

    right = "right",
}

export enum DESIGN_TEXT_TRANSFORM {
    capitalize = "capitalize",

    lowercase = "lowercase",

    uppercase = "uppercase",
}

export enum DESIGN_TEXT_VARIATION {
    headline = "headline",

    truncate = "truncate",
}

export const DESIGN_TEXT_ALIGNMENT_LITERALS = {
    ...DESIGN_TEXT_ALIGNMENT,
} as const;

export const DESIGN_TEXT_TRANSFORM_LITERALS = {
    ...DESIGN_TEXT_TRANSFORM,
} as const;

export const DESIGN_TEXT_VARIATION_LITERALS = {
    ...DESIGN_TEXT_VARIATION,
} as const;

export type DESIGN_TEXT_ALIGNMENT_ARGUMENT = keyof typeof DESIGN_TEXT_ALIGNMENT_LITERALS;

export type DESIGN_TEXT_TRANSFORM_ARGUMENT = keyof typeof DESIGN_TEXT_TRANSFORM_LITERALS;

export type DESIGN_TEXT_VARIATION_ARGUMENT =
    | keyof typeof DESIGN_TEXT_VARIATION_LITERALS
    | (keyof typeof DESIGN_TEXT_VARIATION_LITERALS)[];
