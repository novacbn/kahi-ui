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

export interface IFormatOptions {
    year?: Intl.DateTimeFormatOptions["year"];
}

const DEFAULT_FORMAT_OPTIONS: IFormatOptions = {
    year: DEFAULT_YEAR,
};

export function add_years(timestamp: string, years: number): string {
    const date = from_datestamp(timestamp).add({years});

    return to_datestamp(date);
}

export function clamp_year(
    timestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): string {
    // NOTE: Yeah a bit long-winded handling the comparison logic and day manipulation, but
    // we want to preserve the input day instead of resetting it all the time

    const source_date = from_datestamp(timestamp);
    const adjusted_date = from_datestamp(timestamp, {day: 1, month: 1});

    if (maximum) {
        const maximum_date = from_datestamp(maximum, {day: 1, month: 1});
        if (Temporal.PlainDate.compare(maximum_date, adjusted_date) < (inclusive ? 0 : 1)) {
            return to_datestamp(maximum_date, {day: source_date.day, month: source_date.month});
        }
    }

    if (minimum) {
        const minimum_date = from_datestamp(minimum, {day: 1, month: 1});
        if (Temporal.PlainDate.compare(minimum_date, adjusted_date) > (inclusive ? 0 : -1)) {
            return to_datestamp(minimum_date, {day: source_date.day, month: source_date.month});
        }
    }

    return to_datestamp(source_date);
}

export function format_year(
    timestamp: string,
    locale: string = DEFAULT_LOCALE,
    options: IFormatOptions = DEFAULT_FORMAT_OPTIONS
): string {
    const date = from_datestamp(timestamp);

    return date.toLocaleString(locale, options);
}

export function get_year(timestamp: string): number {
    return from_datestamp(timestamp).year;
}

export function includes_year(timestamp: string, targets: string[]): boolean {
    const source_date = from_datestamp(timestamp, {day: 1, month: 1});

    return (
        targets.find((target, index) => {
            const target_date = from_datestamp(target, {day: 1, month: 1});

            return source_date.equals(target_date);
        }) !== null
    );
}

export function is_year(timestamp: string, target: string): boolean {
    const source_date = from_datestamp(timestamp, {day: 1, month: 1});
    const target_date = from_datestamp(target, {day: 1, month: 1});

    return source_date.equals(target_date);
}

export function is_year_in_range(
    timestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): boolean {
    const date = from_datestamp(timestamp, {day: 1, month: 1});

    if (maximum) {
        const maximum_date = from_datestamp(maximum, {day: 1, month: 1});
        if (Temporal.PlainDate.compare(maximum_date, date) < (inclusive ? 0 : 1)) return false;
    }

    if (minimum) {
        const minimum_date = from_datestamp(minimum, {day: 1, month: 1});
        if (Temporal.PlainDate.compare(minimum_date, date) > (inclusive ? 0 : -1)) return false;
    }

    return true;
}

export function now_year(): string {
    return Temporal.Now.plainDate("iso8601")
        .with({day: 1, month: 1})
        .toString({calendarName: "never"});
}

export function set_year(timestamp: string, year: number): string {
    const date = from_datestamp(timestamp).with({year});

    return to_datestamp(date);
}

export function subtract_years(timestamp: string, years: number): string {
    const date = from_datestamp(timestamp).subtract({years});

    return to_datestamp(date);
}
