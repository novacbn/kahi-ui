import type {LiteralEnum} from "./util";

/**
 * Represents the preset border radius tokens that can be applied to Framework Components
 */
export enum DESIGN_SHAPE {
    pill = "pill",

    rounded = "rounded",
}

export type PROPERTY_SHAPE = LiteralEnum<DESIGN_SHAPE>;
