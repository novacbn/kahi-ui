/**
 * Represents the tiers of flex variations tokens that can be applied to Framework Components
 */
export enum DESIGN_FLEX_VARIATIONS {
    wrap = "wrap",
}

export const DESIGN_FLEX_VARIATIONS_LITERALS = {...DESIGN_FLEX_VARIATIONS} as const;

export type DESIGN_FLEX_VARIATIONS_ARGUMENT =
    | keyof typeof DESIGN_FLEX_VARIATIONS_LITERALS
    | (keyof typeof DESIGN_FLEX_VARIATIONS_LITERALS)[];
