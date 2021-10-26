/**
 * @private
 */
export type DelimitEnum<Delimits extends string, Values extends string> =
    | LiteralEnum<Values>
    | `${Delimits}:${Values}`;

/**
 * @private
 */
export type LiteralEnum<T extends string> = `${T}`;