import type {ArrayEnum, LiteralEnum} from "./util";

export enum TOKENS_HEADING_VARIATION {
    block = "block",

    truncate = "truncate",
}

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
    truncate = "truncate",
}

export type PROPERTY_HEADING_VARIATION = ArrayEnum<LiteralEnum<TOKENS_HEADING_VARIATION>>;

export type PROPERTY_TEXT_ALIGNMENT = LiteralEnum<TOKENS_TEXT_ALIGNMENT>;

export type PROPERTY_TEXT_TRANSFORM = LiteralEnum<TOKENS_TEXT_TRANSFORM>;

export type PROPERTY_TEXT_VARIATION = ArrayEnum<LiteralEnum<TOKENS_TEXT_VARIATION>>;
