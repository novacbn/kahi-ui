/**
 * Represents the tiers of content positioning tokens that can be applied to Framework Components
 */
export enum DESIGN_POSITION {
    floated = "floated",

    raised = "raised",
}

export const DESIGN_POSITION_LITERALS = {...DESIGN_POSITION} as const;

export type DESIGN_POSITION_ARGUMENT = keyof typeof DESIGN_POSITION_LITERALS;
