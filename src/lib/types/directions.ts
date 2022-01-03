import type {LiteralEnum} from "./util";

/**
 * Represents the preset geometric directions that can be applied to Framework Components
 */
export enum TOKENS_DIRECTIONS {
    bottom = "bottom",

    left = "left",

    right = "right",

    top = "top",
}

export type PROPERTY_DIRECTIONS = LiteralEnum<TOKENS_DIRECTIONS>;
