/**
 * Represents resizable tokens to hide content that can be applied to Framework Components
 */
export enum DESIGN_RESIZEABLE {
    x = "x",

    y = "y",
}

export const DESIGN_RESIZEABLE_LITERALS = {...DESIGN_RESIZEABLE} as const;

export type DESIGN_RESIZEABLE_ARGUMENT = boolean | keyof typeof DESIGN_RESIZEABLE_LITERALS;
