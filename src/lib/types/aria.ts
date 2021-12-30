import type {LiteralEnum} from "./util";

/**
 * Represents the acceptable values for `aria-current` that can be applied to Framework Components
 */
export enum TOKENS_ARIA_CURRENT {
    /**
     * Represents the current date within a collection of dates.
     */
    date = "date",

    /**
     * Represents the current location within an environment or context
     */
    location = "location",

    /**
     * Represents the current page within a set of pages
     */
    page = "page",

    /**
     * Represents the current step within a process
     */
    step = "step",

    /**
     * Represents the current time within a set of times
     */
    time = "time",

    /**
     * Represents the current item within a set
     */
    true = "true",
}

export type PROPERTY_ARIA_CURRENT = LiteralEnum<TOKENS_ARIA_CURRENT>;
