/**
 * Represents the tiers of size tokens that can be applied to Framework Components
 */
export enum DESIGN_SIZE {
    tiny = "tiny",

    small = "small",

    medium = "medium",

    large = "large",

    huge = "huge",
}

export const DESIGN_SIZE_LITERALS = {...DESIGN_SIZE} as const;

export type DESIGN_SIZE_ARGUMENT = keyof typeof DESIGN_SIZE_LITERALS;
