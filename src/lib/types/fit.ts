import type {LiteralEnum} from "./util";

/**
 * Represents the `object-fit` configuration tokens that can be applied to Framework Components
 */
export enum TOKENS_FIT {
    contain = "contain",

    cover = "cover",

    fill = "fill",

    none = "none",

    "scale-down" = "scale-down",
}

export type PROPERTY_FIT = LiteralEnum<TOKENS_FIT>;
