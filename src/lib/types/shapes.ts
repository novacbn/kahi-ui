/**
 * Represents the preset border radius tokens that can be applied to Framework Components
 */
export enum DESIGN_SHAPE {
    pill = "pill",

    rounded = "rounded",
}

export const DESIGN_SHAPE_LITERALS = {...DESIGN_SHAPE} as const;

export type DESIGN_SHAPE_ARGUMENT = keyof typeof DESIGN_SHAPE_LITERALS;
