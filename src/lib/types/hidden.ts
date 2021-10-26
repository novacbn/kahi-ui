import type {LiteralEnum} from "./util";
import {TOKENS_VIEWPORT} from "./viewports";

/**
 * Represents viewport tokens to hide content that can be applied to Framework Components
 */
export const TOKENS_HIDDEN = {
    ...TOKENS_VIEWPORT,
} as const;

export type PROPERTY_HIDDEN = LiteralEnum<keyof typeof TOKENS_HIDDEN>;
