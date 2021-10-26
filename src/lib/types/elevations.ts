import type {LiteralEnum} from "./util";

/**
 * Represents the tiers of elevation (box-shadow) tokens that can be applied to Framework Components
 */
export enum DESIGN_ELEVATION {
    lowest = "lowest",

    low = "low",

    medium = "medium",

    high = "high",

    highest = "highest",
}

export type PROPERTY_ELEVATION = LiteralEnum<DESIGN_ELEVATION>;
