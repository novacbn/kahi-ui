import {Temporal} from "../../vendor/js-temporal-polyfill";

import {DEFAULT_HOUR, DEFAULT_HOUR_12, DEFAULT_LOCALE} from "../locale";

import {from_timestamp, to_timestamp} from "./timestamps";

// NOTE: We're abstracting timetime operations here so if we again run into breaking changes
// with the polyfill, Temporal API, or even just want to switch out the backing API, only
// this file needs changing. And by operating solely on string-based IO, we keep things simple
// in regards to API calls and typing

export interface IHourFormatOptions {
    hour?: Intl.DateTimeFormatOptions["hour"];

    hour_12?: Intl.DateTimeFormatOptions["hour12"];
}

const DEFAULT_FORMAT_OPTIONS: IHourFormatOptions = {
    hour: DEFAULT_HOUR,

    hour_12: DEFAULT_HOUR_12,
};

const RESET_UNITS: Temporal.PlainTimeLike = {
    minute: 0,
    second: 0,
};

export function add_hours(timestamp: string, hours: number): string {
    const time = from_timestamp(timestamp).add({hours});

    return to_timestamp(time);
}

export function format_hour(
    timestamp: string,
    locale: string = DEFAULT_LOCALE,
    options: IHourFormatOptions = DEFAULT_FORMAT_OPTIONS
): string {
    const time = from_timestamp(timestamp);

    return time.toLocaleString(locale, {
        hour: options.hour,
        hour12: options.hour_12,
    });
}

export function get_hour(timestamp: string): number {
    return from_timestamp(timestamp).hour;
}

export function includes_hour(timestamp: string, targets: readonly string[]): boolean {
    const source_time = from_timestamp(timestamp, RESET_UNITS);

    return !!targets.find((target, index) => {
        const target_time = from_timestamp(target, RESET_UNITS);

        return source_time.equals(target_time);
    });
}

export function is_hour(timestamp: string, target: string): boolean {
    const source_time = from_timestamp(timestamp, RESET_UNITS);
    const target_time = from_timestamp(target, RESET_UNITS);

    return source_time.equals(target_time);
}

export function is_hour_in_range(
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

export function now_hour(): string {
    const time = Temporal.Now.plainTimeISO();

    return to_timestamp(time, RESET_UNITS);
}

export function subtract_hours(timestamp: string, hours: number): string {
    const time = from_timestamp(timestamp).subtract({hours});

    return to_timestamp(time);
}
