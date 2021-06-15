/**
 * Represents viewport tokens that can be applied to Framework Components
 */
export enum DESIGN_VIEWPORT {
    mobile = "mobile",

    tablet = "tablet",

    desktop = "desktop",

    widescreen = "widescreen",
}

type DelimitBreakpoint<T> = T extends string ? `${DESIGN_VIEWPORT}:${T}` : never;

const DESIGN_VIEWPORT_VALUES = Object.values(DESIGN_VIEWPORT);

export const DESIGN_VIEWPORT_LITERALS = {
    ...DESIGN_VIEWPORT,
    ...get_breakpoint_delimited<DESIGN_VIEWPORT>(DESIGN_VIEWPORT),
} as const;

export type DESIGN_VIEWPORT_ARGUMENT =
    | keyof typeof DESIGN_VIEWPORT_LITERALS
    | (keyof typeof DESIGN_VIEWPORT_LITERALS)[];

// TODO: Figure out the typeof error

export function get_breakpoint_delimited<T>(
    enumeration: typeof T
): Record<DelimitBreakpoint<T>, DelimitBreakpoint<T>> {
    const viewport_entries = Object.values(enumeration)
        .map((value) => {
            return DESIGN_VIEWPORT_VALUES.map((viewport) => {
                const delimited = `${viewport}:${value}`;

                return [delimited, delimited];
            });
        })
        .flat(1);

    return Object.fromEntries(viewport_entries);
}
