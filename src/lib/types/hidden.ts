/**
 * Represents viewport tokens to hide content that can be applied to Framework Components
 */
export enum DESIGN_HIDDEN {
    mobile = "mobile",

    tablet = "tablet",

    desktop = "desktop",

    widescreen = "widescreen",
}

export const DESIGN_HIDDEN_LITERALS = {...DESIGN_HIDDEN} as const;

export type DESIGN_HIDDEN_ARGUMENT =
    | (boolean | keyof typeof DESIGN_HIDDEN_LITERALS)
    | (keyof typeof DESIGN_HIDDEN_LITERALS)[];
