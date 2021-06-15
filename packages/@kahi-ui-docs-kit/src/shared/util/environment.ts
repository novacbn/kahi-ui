import ms from "ms";

import {is_affirmative, split_list} from "./string";

export type IEnvironment = Record<string, string | undefined>;

export function get_affirmative(
    environment: IEnvironment,
    variable: string,
    default_value?: boolean
): boolean {
    const value = environment[variable];
    if (!value) {
        if (default_value === undefined) {
            throw new Error(
                `bad argument #0 to 'get_affirmative' (missing environment variable '${variable}')`
            );
        }

        return default_value;
    }

    return is_affirmative(value);
}

export function get_float(
    environment: IEnvironment,
    variable: string,
    default_value?: number
): number {
    const value = environment[variable];
    if (!value) {
        if (default_value === undefined) {
            throw new Error(
                `bad argument #0 to 'get_float' (missing environment variable '${variable}')`
            );
        }

        return default_value;
    }

    const number = parseFloat(value);
    if (isNaN(number)) {
        throw new Error(
            `bad argument #0 to 'get_float' (environment variable '${variable}' — '${value}', is not a number)`
        );
    }

    return number;
}

export function get_integer(
    environment: IEnvironment,
    variable: string,
    default_value?: number
): number {
    const value = environment[variable];
    if (!value) {
        if (default_value === undefined) {
            throw new Error(
                `bad argument #0 to 'get_integer' (missing environment variable '${variable}')`
            );
        }

        // @ts-expect-error - HACK: We need to make sure the default is actually an integer
        return parseInt(default_value);
    }

    const number = parseInt(value);
    if (isNaN(number)) {
        throw new Error(
            `bad argument #0 to 'get_integer' (environment variable '${variable}' — '${value}', is not a number)`
        );
    }

    return number;
}

export function get_list(
    environment: IEnvironment,
    variable: string,
    default_value?: string[]
): string[] {
    const value = environment[variable];
    if (!value) {
        if (default_value === undefined) {
            throw new Error(
                `bad argument #0 to 'get_string' (missing environment variable '${variable}')`
            );
        }

        return default_value;
    }

    return split_list(value);
}

export function get_milliseconds(
    environment: IEnvironment,
    variable: string,
    default_value?: string
): number {
    let value = environment[variable];
    if (!value) {
        if (default_value === undefined) {
            throw new Error(
                `bad argument #0 to 'get_milliseconds' (missing environment variable '${variable}')`
            );
        }

        value = default_value;
    }

    return ms(value);
}

export function get_string(
    environment: IEnvironment,
    variable: string,
    default_value?: string
): string {
    const value = environment[variable];
    if (value === undefined) {
        if (default_value === undefined) {
            throw new Error(
                `bad argument #0 to 'get_string' (missing environment variable '${variable}')`
            );
        }

        return default_value;
    }

    return value;
}
