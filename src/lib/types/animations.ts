import type {LiteralEnum} from "./util";

/**
 * Represents the names of available animations tokens that can be applied to Framework Components
 */
export enum TOKENS_ANIMATION_NAMES {
    pulse = "pulse",
}

export type PROPERTY_ANIMATION_NAMES = LiteralEnum<TOKENS_ANIMATION_NAMES>;
