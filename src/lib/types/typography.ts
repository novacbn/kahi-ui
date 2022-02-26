import type {ArrayEnum, LiteralEnum} from "./util";

/**
 * Represents the tiers of text alignment tokens that can be applied to Framework Components
 */
export enum TOKENS_TEXT_ALIGNMENT {
    center = "center",

    justify = "justify",

    left = "left",

    right = "right",
}

export enum TOKENS_TEXT_TRANSFORM {
    capitalize = "capitalize",

    lowercase = "lowercase",

    uppercase = "uppercase",
}

export enum TOKENS_TEXT_VARIATION {
    block = "block",

    truncate = "truncate",
}

export type PROPERTY_TEXT_ALIGNMENT = LiteralEnum<TOKENS_TEXT_ALIGNMENT>;

export type PROPERTY_TEXT_TRANSFORM = LiteralEnum<TOKENS_TEXT_TRANSFORM>;

export type PROPERTY_TEXT_VARIATION = ArrayEnum<LiteralEnum<TOKENS_TEXT_VARIATION>>;
