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

export const DESIGN_ELEVATION_LITERALS = {...DESIGN_ELEVATION} as const;

export type DESIGN_ELEVATION_ARGUMENT = keyof typeof DESIGN_ELEVATION_LITERALS;
