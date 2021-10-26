import type {LiteralEnum} from "./util";

/**
 * Represents the tiers of content positioning tokens that can be applied to Framework Components
 */
export enum TOKENS_POSITION {
    floated = "floated",

    raised = "raised",
}

export type PROPERTY_POSITION = LiteralEnum<TOKENS_POSITION>;
