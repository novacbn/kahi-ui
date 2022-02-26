import type {ArrayEnum, LiteralObject} from "./util";
import {TOKENS_VIEWPORT} from "./viewports";

/**
 * Represents viewport tokens to hide content that can be applied to Framework Components
 */
export const TOKENS_HIDDEN = {
    ...TOKENS_VIEWPORT,
} as const;

export type PROPERTY_HIDDEN = boolean | ArrayEnum<LiteralObject<typeof TOKENS_HIDDEN>>;
