import type {LiteralEnum} from "./util";

/**
 * Represents clock periods that be applied to Framework Components
 */
export enum TOKENS_CLOCK_PERIOD {
    am = "am",

    pm = "pm",
}

export type PROPERTY_CLOCK_PERIOD = LiteralEnum<TOKENS_CLOCK_PERIOD>;
