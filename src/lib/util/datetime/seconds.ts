import {Temporal} from "../../vendor/js-temporal-polyfill";

import {
    DEFAULT_HOUR,
    DEFAULT_HOUR_12,
    DEFAULT_LOCALE,
    DEFAULT_MINUTE,
    DEFAULT_SECOND,
} from "../locale";

import type {IMinuteFormatOptions} from "./minutes";
import {from_timestamp, to_timestamp} from "./timestamps";

// NOTE: We're abstracting timetime operations here so if we again run into breaking changes
// with the polyfill, Temporal API, or even just want to switch out the backing API, only
// this file needs changing. And by operating solely on string-based IO, we keep things simple
// in regards to API calls and typing

export type ISecondFormatOptions = {
    second?: Intl.DateTimeFormatOptions["second"];
} & IMinuteFormatOptions;

const DEFAULT_FORMAT_OPTIONS: ISecondFormatOptions = {
    hour: DEFAULT_HOUR,

    hour_12: DEFAULT_HOUR_12,

    minute: DEFAULT_MINUTE,

    second: DEFAULT_SECOND,
};

export function add_seconds(timestamp: string, seconds: number): string {
    const time = from_timestamp(timestamp).add({seconds});

    return to_timestamp(time);
}

export function format_second(
    timestamp: string,
    locale: string = DEFAULT_LOCALE,
    options: ISecondFormatOptions = DEFAULT_FORMAT_OPTIONS
): string {
    const time = from_timestamp(timestamp);

    return time.toLocaleString(locale, {
        hour: options.hour,
        hour12: options.hour_12,
        minute: options.minute,
        second: options.second,
    });
}

export function get_second(timestamp: string): number {
    return from_timestamp(timestamp).hour;
}

export function includes_second(timestamp: string, targets: readonly string[]): boolean {
    const source_time = from_timestamp(timestamp);

    return !!targets.find((target, index) => {
        const target_time = from_timestamp(target);

        return source_time.equals(target_time);
    });
}

export function is_second(timestamp: string, target: string): boolean {
    const source_time = from_timestamp(timestamp);
    const target_time = from_timestamp(target);

    return source_time.equals(target_time);
}

export function is_second_in_range(
    timestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): boolean {
    const time = from_timestamp(timestamp);

    if (maximum) {
        const maximum_date = from_timestamp(maximum);
        if (Temporal.PlainTime.compare(maximum_date, time) < (inclusive ? 0 : 1)) return false;
    }

    if (minimum) {
        const minimum_date = from_timestamp(minimum);
        if (Temporal.PlainTime.compare(minimum_date, time) > (inclusive ? 0 : -1)) return false;
    }

    return true;
}

export function now_second(): string {
    const time = Temporal.Now.plainTimeISO();

    return to_timestamp(time);
}

export function subtract_seconds(timestamp: string, seconds: number): string {
    const time = from_timestamp(timestamp).subtract({seconds});

    return to_timestamp(time);
}
