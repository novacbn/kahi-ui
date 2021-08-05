/**
 * Represents the tiers of palettes tokens that can be applied to Framework Components
 */
export enum DESIGN_PALETTE {
    auto = "auto",

    inverse = "inverse",

    inherit = "inherit",

    accent = "accent",

    dark = "dark",

    light = "light",

    alert = "alert",

    affirmative = "affirmative",

    negative = "negative",
}

export const DESIGN_PALETTE_LITERALS = {...DESIGN_PALETTE} as const;

export type DESIGN_PALETTE_ARGUMENT = keyof typeof DESIGN_PALETTE_LITERALS;
