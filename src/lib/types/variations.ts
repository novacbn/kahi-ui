import type {ArrayEnum, LiteralEnum} from "./util";

/**
 * Represents the tiers of flex variations tokens that can be applied to Framework Components
 */
export enum TOKENS_VARIATION_FLEX {
    wrap = "wrap",
}

/**
 * Represents the tiers of filling variation tokens that can be applied to Framework Components
 */
export enum TOKENS_VARIATION_FILL {
    block = "block",

    clear = "clear",

    flush = "flush",

    subtle = "subtle",

    outline = "outline",
}

/**
 * Represents the tiers of filling positional tokens that can be applied to Framework Components
 */
export enum TOKENS_VARIATION_POSITIONAL {
    action = "action",

    container = "container",

    /**
     * @deprecated Use `variation="indicator"` instead of `variation="floated"`.
     */
    floated = "floated",

    indicator = "indicator",

    raised = "raised",

    viewport = "viewport",
}

/**
 * Represents the tiers of transition variation tokens that can be applied to Framework Components
 */
export enum TOKENS_VARIATION_TRANSITION {
    enter = "enter",

    exit = "exit",
}

export const TOKENS_VARIATION_BUTTON = {
    [TOKENS_VARIATION_FILL.clear]: TOKENS_VARIATION_FILL.clear,
    [TOKENS_VARIATION_FILL.outline]: TOKENS_VARIATION_FILL.outline,
} as const;

export const TOKENS_VARIATION_INPUT = {
    [TOKENS_VARIATION_FILL.block]: TOKENS_VARIATION_FILL.block,
    [TOKENS_VARIATION_FILL.flush]: TOKENS_VARIATION_FILL.flush,
} as const;

export const TOKENS_VARIATION_INTERACTIVE = {
    [TOKENS_VARIATION_FILL.outline]: TOKENS_VARIATION_FILL.outline,
} as const;

export const TOKENS_VARIATION_POSITION = {
    [TOKENS_VARIATION_POSITIONAL.action]: TOKENS_VARIATION_POSITIONAL.action,
    [TOKENS_VARIATION_POSITIONAL.floated]: TOKENS_VARIATION_POSITIONAL.floated,
    [TOKENS_VARIATION_POSITIONAL.indicator]: TOKENS_VARIATION_POSITIONAL.indicator,
    [TOKENS_VARIATION_POSITIONAL.raised]: TOKENS_VARIATION_POSITIONAL.raised,
} as const;

export const TOKENS_VARIATION_SURFACE = {
    [TOKENS_VARIATION_FILL.flush]: TOKENS_VARIATION_FILL.flush,
} as const;

/**
 * Represents the tiers of table variations tokens that can be applied to Framework Components
 */
export enum TOKENS_VARIATION_TABLE {
    borders = "borders",

    stripes = "stripes",
}

export const TOKENS_VARIATION_TOGGLE = {
    [TOKENS_VARIATION_FILL.flush]: TOKENS_VARIATION_FILL.flush,
} as const;

export type PROPERTY_VARIATION_BUTTON =
    | TOKENS_VARIATION_FILL.subtle
    | LiteralEnum<keyof typeof TOKENS_VARIATION_BUTTON>
    | [TOKENS_VARIATION_FILL.subtle, LiteralEnum<keyof typeof TOKENS_VARIATION_BUTTON>];

export type PROPERTY_VARIATION_FLEX = ArrayEnum<LiteralEnum<TOKENS_VARIATION_FLEX>>;

export type PROPERTY_VARIATION_INPUT = LiteralEnum<keyof typeof TOKENS_VARIATION_INPUT>;

export type PROPERTY_VARIATION_INTERACTIVE = LiteralEnum<keyof typeof TOKENS_VARIATION_INTERACTIVE>;

export type PROPERTY_VARIATION_SURFACE = LiteralEnum<keyof typeof TOKENS_VARIATION_SURFACE>;

export type PROPERTY_VARIATION_TABLE = ArrayEnum<LiteralEnum<TOKENS_VARIATION_TABLE>>;

export type PROPERTY_VARIATION_POSITION = LiteralEnum<keyof typeof TOKENS_VARIATION_POSITION>;

export type PROPERTY_VARIATION_POSITION_AUGMENT =
    | PROPERTY_VARIATION_POSITION
    | [TOKENS_VARIATION_POSITIONAL.container, PROPERTY_VARIATION_POSITION]
    | [TOKENS_VARIATION_POSITIONAL.viewport, PROPERTY_VARIATION_POSITION];

export type PROPERTY_VARIATION_TRANSITION = LiteralEnum<keyof typeof TOKENS_VARIATION_TRANSITION>;

export type PROPERTY_VARIATION_TOGGLE = LiteralEnum<keyof typeof TOKENS_VARIATION_TOGGLE>;
