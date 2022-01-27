import {Temporal} from "../../vendor/js-temporal-polyfill";

import {DEFAULT_DAY, DEFAULT_LOCALE, DEFAULT_MONTH, DEFAULT_WEEKDAY, DEFAULT_YEAR} from "../locale";

import {from_datestamp, to_datestamp} from "./timestamps";

// NOTE: We're abstracting datetime operations here so if we again run into breaking changes
// with the polyfill, Temporal API, or even just want to switch out the backing API, only
// this file needs changing. And by operating solely on string-based IO, we keep things simple
// in regards to API calls and typing

// NOTE: Whenever timestamp strings enter or leave a utility function, they _must_
// be parsed and converted into ISO-8601 calendars. Otherwise conditionals and arithmetic
// will fail due to potential mismatch. And we want to align with Browsers where
// they **ONLY** accept ISO-8601 strings for `<input />` elements

export interface IDayFormatOptions {
    day?: Intl.DateTimeFormatOptions["day"];

    month?: Intl.DateTimeFormatOptions["month"];

    weekday?: Intl.DateTimeFormatOptions["weekday"];

    year?: Intl.DateTimeFormatOptions["year"];
}

const DEFAULT_FORMAT_OPTIONS: IDayFormatOptions = {
    day: DEFAULT_DAY,

    month: DEFAULT_MONTH,

    weekday: DEFAULT_WEEKDAY,

    year: DEFAULT_YEAR,
};

export function add_days(timestamp: string, days: number): string {
    const date = from_datestamp(timestamp).add({days});

    return to_datestamp(date);
}

export function clamp_day(
    timestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): string {
    const date = from_datestamp(timestamp);

    if (maximum) {
        const maximum_date = from_datestamp(maximum);
        if (Temporal.PlainDate.compare(maximum_date, date) < (inclusive ? 0 : 1)) {
            return to_datestamp(maximum_date);
        }
    }

    if (minimum) {
        const minimum_date = from_datestamp(minimum);
        if (Temporal.PlainDate.compare(minimum_date, date) > (inclusive ? 0 : -1)) {
            return to_datestamp(minimum_date);
        }
    }

    return to_datestamp(date);
}

export function format_day(
    timestamp: string,
    locale: string = DEFAULT_LOCALE,
    options: IDayFormatOptions = DEFAULT_FORMAT_OPTIONS
): string {
    const date = from_datestamp(timestamp);

    return date.toLocaleString(locale, options);
}

export function get_day(timestamp: string): number {
    return from_datestamp(timestamp).day;
}

export function includes_day(timestamp: string, targets: string[]): boolean {
    const source_date = from_datestamp(timestamp);

    return (
        targets.find((target, index) => {
            const target_date = from_datestamp(target);

            return source_date.equals(target_date);
        }) !== null
    );
}

export function is_day(timestamp: string, target: string): boolean {
    const source_date = from_datestamp(timestamp);
    const target_date = from_datestamp(target);

    return source_date.equals(target_date);
}

export function is_day_in_range(
    timestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): boolean {
    const date = from_datestamp(timestamp);

    if (maximum) {
        const maximum_date = from_datestamp(maximum);
        if (Temporal.PlainDate.compare(maximum_date, date) < (inclusive ? 0 : 1)) return false;
    }

    if (minimum) {
        const minimum_date = from_datestamp(minimum);
        if (Temporal.PlainDate.compare(minimum_date, date) > (inclusive ? 0 : -1)) return false;
    }

    return true;
}

export function set_day(timestamp: string, day: number): string {
    const date = from_datestamp(timestamp).with({day});

    return to_datestamp(date);
}

export function now_day(): string {
    return Temporal.Now.plainDate("iso8601").toString({calendarName: "never"});
}

export function subtract_days(timestamp: string, days: number): string {
    const date = from_datestamp(timestamp).subtract({days});

    return to_datestamp(date);
}