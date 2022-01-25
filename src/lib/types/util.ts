/**
 * @private
 */
export type ArrayEnum<T extends String> = T | T[];

/**
 * @private
 */
export type DelimitEnum<Delimits extends string, Values extends string> = ArrayEnum<
    LiteralEnum<Values> | `${Delimits}:${Values}`
>;

/**
 * @private
 */
export type LiteralEnum<T extends string> = `${T}`;

/**
 * @private
 */
export type LiteralObject<T extends Record<string, boolean | number | string>> = `${T[keyof T]}`;
