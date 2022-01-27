import {Temporal} from "../../vendor/js-temporal-polyfill";

import {DEFAULT_LOCALE, DEFAULT_MONTH, DEFAULT_YEAR} from "../locale";

import {from_datestamp, to_datestamp} from "./timestamps";

// NOTE: We're abstracting datetime operations here so if we again run into breaking changes
// with the polyfill, Temporal API, or even just want to switch out the backing API, only
// this file needs changing. And by operating solely on string-based IO, we keep things simple
// in regards to API calls and typing

// NOTE: Whenever timestamp strings enter or leave a utility function, they _must_
// be parsed and converted into ISO-8601 calendars. Otherwise conditionals and arithmetic
// will fail due to potential mismatch. And we want to align with Browsers where
// they **ONLY** accept ISO-8601 strings for `<input />` elements

export interface IMonthFormatOptions {
    month?: Intl.DateTimeFormatOptions["month"];

    year?: Intl.DateTimeFormatOptions["year"];
}

const DEFAULT_FORMAT_OPTIONS: IMonthFormatOptions = {
    month: DEFAULT_MONTH,

    year: DEFAULT_YEAR,
};

export function add_months(timestamp: string, months: number): string {
    const date = from_datestamp(timestamp).add({months});

    return to_datestamp(date);
}

export function clamp_month(
    timestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): string {
    // NOTE: Yeah a bit long-winded handling the comparison logic and day manipulation, but
    // we want to preserve the input day instead of resetting it all the time

    const source_date = from_datestamp(timestamp);
    const month_date = source_date.with({day: 1});

    if (maximum) {
        const maximum_date = from_datestamp(maximum, {day: 1});
        if (Temporal.PlainDate.compare(maximum_date, month_date) < (inclusive ? 0 : 1)) {
            return to_datestamp(maximum_date, {day: source_date.day});
        }
    }

    if (minimum) {
        const minimum_date = from_datestamp(minimum, {day: 1});
        if (Temporal.PlainDate.compare(minimum_date, month_date) > (inclusive ? 0 : -1)) {
            return to_datestamp(minimum_date, {day: source_date.day});
        }
    }

    return to_datestamp(source_date);
}

export function format_month(
    timestamp: string,
    locale: string = DEFAULT_LOCALE,
    options: IMonthFormatOptions = DEFAULT_FORMAT_OPTIONS
): string {
    const date = from_datestamp(timestamp);

    return date.toLocaleString(locale, options);
}

export function get_month(timestamp: string): number {
    return from_datestamp(timestamp).month;
}

export function includes_month(timestamp: string, targets: readonly string[]): boolean {
    const source_date = from_datestamp(timestamp, {day: 1});

    return !!targets.find((target, index) => {
        const target_date = from_datestamp(target, {day: 1});

        return source_date.equals(target_date);
    });
}

export function is_month(timestamp: string, target: string): boolean {
    const source_date = from_datestamp(timestamp, {day: 1});
    const target_date = from_datestamp(target, {day: 1});

    return source_date.equals(target_date);
}

export function is_month_in_range(
    timestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): boolean {
    const date = from_datestamp(timestamp, {day: 1});

    if (maximum) {
        const maximum_date = from_datestamp(maximum, {day: 1});
        if (Temporal.PlainDate.compare(maximum_date, date) < (inclusive ? 0 : 1)) return false;
    }

    if (minimum) {
        const minimum_date = from_datestamp(minimum, {day: 1});
        if (Temporal.PlainDate.compare(minimum_date, date) > (inclusive ? 0 : -1)) return false;
    }

    return true;
}

export function now_month(): string {
    return Temporal.Now.plainDate("iso8601").with({day: 1}).toString({calendarName: "never"});
}

export function set_month(timestamp: string, month: number): string {
    const date = from_datestamp(timestamp).with({month});

    return to_datestamp(date);
}

export function subtract_months(timestamp: string, months: number): string {
    const date = from_datestamp(timestamp).subtract({months});

    return to_datestamp(date);
}
