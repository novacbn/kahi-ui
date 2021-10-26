import type {LiteralEnum} from "./util";

export enum DESIGN_HEADING_VARIATION {
    headline = "headline",

    truncate = "truncate",
}

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
    truncate = "truncate",
}

export type PROPERTY_HEADING_VARIATION = LiteralEnum<DESIGN_HEADING_VARIATION>;

export type PROPERTY_TEXT_ALIGNMENT = LiteralEnum<DESIGN_TEXT_ALIGNMENT>;

export type PROPERTY_TEXT_TRANSFORM = LiteralEnum<DESIGN_TEXT_TRANSFORM>;

export type PROPERTY_TEXT_VARIATION = LiteralEnum<DESIGN_TEXT_VARIATION>;
