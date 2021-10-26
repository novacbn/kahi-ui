import type {LiteralEnum} from "./util";

/**
 * Represents the tiers of animations tokens that can be applied to Framework Components
 */
export enum DESIGN_ANIMATION_FEEDBACK {
    pulse = "pulse",
}

export type PROPERTY_ANIMATION_FEEDBACK = LiteralEnum<DESIGN_ANIMATION_FEEDBACK>;
