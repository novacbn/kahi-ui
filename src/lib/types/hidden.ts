import type {LiteralEnum} from "./util";
import {DESIGN_VIEWPORT} from "./viewports";

/**
 * Represents viewport tokens to hide content that can be applied to Framework Components
 */
export const DESIGN_HIDDEN = {
    ...DESIGN_VIEWPORT,
} as const;

export type PROPERTY_HIDDEN = LiteralEnum<keyof typeof DESIGN_HIDDEN>;
