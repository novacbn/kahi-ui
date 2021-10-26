import type {LiteralEnum} from "./util";

/**
 * Represents resizable tokens to hide content that can be applied to Framework Components
 */
export enum DESIGN_RESIZEABLE {
    x = "x",

    y = "y",
}

export type PROPERTY_RESIZEABLE = LiteralEnum<DESIGN_RESIZEABLE>;
