import type {LiteralEnum} from "./util";

/**
 * Represents the preset border radius tokens that can be applied to Framework Components
 */
export enum TOKENS_SHAPE {
    pill = "pill",

    rounded = "rounded",
}

export type PROPERTY_SHAPE = LiteralEnum<TOKENS_SHAPE>;
