/**
 * Represents placement tokens to show content at specific relative locations that can be applied to Framework Components
 */
export enum DESIGN_PLACEMENT {
    top = "top",

    left = "left",

    bottom = "bottom",

    right = "right",
}

/**
 * Represents placement tokens to show content at specific relative locations that can be applied to Framework Components
 */
export enum DESIGN_PLACEMENT_ALIGNMENT {
    start = "start",

    center = "center",

    end = "end",
}

export const DESIGN_PLACEMENT_LITERALS = {...DESIGN_PLACEMENT} as const;

export type DESIGN_PLACEMENT_ARGUMENT = keyof typeof DESIGN_PLACEMENT_LITERALS;

export type DESIGN_PLACEMENT_ALIGNMENT_ARGUMENT = keyof typeof DESIGN_PLACEMENT_LITERALS;
