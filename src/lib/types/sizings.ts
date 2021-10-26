import type {LiteralEnum} from "./util";

/**
 * Represents the tiers of sizing tokens that can be applied to Framework Components
 */
export enum DESIGN_SIZING {
    tiny = "tiny",

    small = "small",

    medium = "medium",

    large = "large",

    huge = "huge",
}

export type PROPERTY_SIZING = LiteralEnum<DESIGN_SIZING>;
