import type {LiteralEnum} from "./util";

/**
 * Represents the tiers of palettes tokens that can be applied to Framework Components
 */
export enum TOKENS_PALETTE {
    auto = "auto",

    inverse = "inverse",

    inherit = "inherit",

    accent = "accent",

    neutral = "neutral",

    off = "off",

    dark = "dark",

    light = "light",

    alert = "alert",

    affirmative = "affirmative",

    informative = "informative",

    negative = "negative",
}

export type PROPERTY_PALETTE = LiteralEnum<TOKENS_PALETTE>;
