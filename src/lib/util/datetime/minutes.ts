import {Temporal} from "../../vendor/js-temporal-polyfill";

import {DEFAULT_HOUR, DEFAULT_HOUR_12, DEFAULT_LOCALE, DEFAULT_MINUTE} from "../locale";

import type {IHourFormatOptions} from "./hours";
import {from_timestamp, to_timestamp} from "./timestamps";

// NOTE: We're abstracting timetime operations here so if we again run into breaking changes
// with the polyfill, Temporal API, or even just want to switch out the backing API, only
// this file needs changing. And by operating solely on string-based IO, we keep things simple
// in regards to API calls and typing

export type IMinuteFormatOptions = {
    minute?: Intl.DateTimeFormatOptions["minute"];
} & IHourFormatOptions;

const DEFAULT_FORMAT_OPTIONS: IMinuteFormatOptions = {
    hour: DEFAULT_HOUR,

    hour_12: DEFAULT_HOUR_12,

    minute: DEFAULT_MINUTE,
};

const RESET_UNITS: Temporal.PlainTimeLike = {
    second: 0,
};

export function add_minutes(timestamp: string, minutes: number): string {
    const time = from_timestamp(timestamp).add({minutes});

    return to_timestamp(time);
}

export function format_minute(
    timestamp: string,
    locale: string = DEFAULT_LOCALE,
    options: IMinuteFormatOptions = DEFAULT_FORMAT_OPTIONS
): string {
    const time = from_timestamp(timestamp);

    return time.toLocaleString(locale, {
        hour: options.hour,
        hour12: options.hour_12,
        minute: options.minute,
    });
}

export function get_minute(timestamp: string): number {
    return from_timestamp(timestamp).hour;
}

export function includes_minute(timestamp: string, targets: readonly string[]): boolean {
    const source_time = from_timestamp(timestamp, RESET_UNITS);

    return !!targets.find((target, index) => {
        const target_time = from_timestamp(target, RESET_UNITS);

        return source_time.equals(target_time);
    });
}

export function is_minute(timestamp: string, target: string): boolean {
    const source_time = from_timestamp(timestamp, RESET_UNITS);
    const target_time = from_timestamp(target, RESET_UNITS);

    return source_time.equals(target_time);
}

export function is_minute_in_range(
    timestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): boolean {
    const time = from_timestamp(timestamp, RESET_UNITS);

    if (maximum) {
        const maximum_date = from_timestamp(maximum, RESET_UNITS);
        if (Temporal.PlainTime.compare(maximum_date, time) < (inclusive ? 0 : 1)) return false;
    }

    if (minimum) {
        const minimum_date = from_timestamp(minimum, RESET_UNITS);
        if (Temporal.PlainTime.compare(minimum_date, time) > (inclusive ? 0 : -1)) return false;
    }

    return true;
}

export function now_minute(): string {
    const time = Temporal.Now.plainTimeISO();

    return to_timestamp(time, RESET_UNITS);
}

export function subtract_minutes(timestamp: string, minutes: number): string {
    const time = from_timestamp(timestamp).subtract({minutes});

    return to_timestamp(time);
}
