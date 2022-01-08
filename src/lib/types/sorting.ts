import type {LiteralEnum} from "./util";

/**
 * Represents the sorting modes that can be applied to Framework Components
 */
export enum TOKENS_SORTING_MODE {
    ascending = "ascending",

    descending = "descending",
}

export type PROPERTY_SORTING_MODE = LiteralEnum<TOKENS_SORTING_MODE>;
