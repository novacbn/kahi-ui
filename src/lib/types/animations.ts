/**
 * Represents the tiers of animations tokens that can be applied to Framework Components
 */
export enum DESIGN_ANIMATION {
    pulse = "pulse",
}

export const DESIGN_ANIMATION_LITERALS = {...DESIGN_ANIMATION} as const;

export type DESIGN_ANIMATION_ARGUMENT = keyof typeof DESIGN_ANIMATION_LITERALS;
