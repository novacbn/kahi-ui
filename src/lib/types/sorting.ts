import type {LiteralEnum} from "./util";

/**
 * Represents the sorting modes that can be applied to Framework Components
 */
export enum TOKENS_SORT_BY {
    ascending = "ascending",

    decending = "decending",
}

export type PROPERTY_SORT_BY = LiteralEnum<TOKENS_SORT_BY>;
