export enum DESIGN_TABLE_VARIATION {
    borders = "borders",

    stripes = "stripes",
}

export const DESIGN_TABLE_VARIATION_LITERALS = {...DESIGN_TABLE_VARIATION} as const;

export type DESIGN_TABLE_VARIATION_ARGUMENT =
    | keyof typeof DESIGN_TABLE_VARIATION_LITERALS
    | (keyof typeof DESIGN_TABLE_VARIATION_LITERALS)[];
