/**
 * Represents the `object-fit` configuration tokens that can be applied to Framework Components
 */
export enum DESIGN_FIT {
    contain = "contain",

    cover = "cover",

    fill = "fill",

    none = "none",

    "scale-down" = "scale-down",
}

export const DESIGN_FIT_LITERALS = {...DESIGN_FIT} as const;

export type DESIGN_FIT_ARGUMENT = keyof typeof DESIGN_FIT_LITERALS;
