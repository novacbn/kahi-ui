/**
 * Represents the tiers of variation tokens that can be applied to Framework Components
 */
export enum DESIGN_VARIATION {
    block = "block",

    clear = "clear",

    outline = "outline",
}

export const DESIGN_VARIATION_LITERALS = {...DESIGN_VARIATION} as const;

export type DESIGN_VARIATION_ARGUMENT = keyof typeof DESIGN_VARIATION_LITERALS;

export type DESIGN_VARIATION_CONTENT_ARGUMENT = Exclude<
    DESIGN_VARIATION_ARGUMENT,
    "block" | "clear"
>;

export type DESIGN_VARIATION_INTERACTIVE_ARGUMENT = Exclude<DESIGN_VARIATION_ARGUMENT, "block">;
