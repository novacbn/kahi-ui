import {Temporal} from "../../vendor/js-temporal-polyfill";

import {DEFAULT_LOCALE, DEFAULT_MONTH, DEFAULT_YEAR} from "../locale";

import {from_datestamp, to_datestamp} from "./datestamps";

// NOTE: We're abstracting datetime operations here so if we again run into breaking changes
// with the polyfill, Temporal API, or even just want to switch out the backing API, only
// this file needs changing. And by operating solely on string-based IO, we keep things simple
// in regards to API calls and typing

// NOTE: Whenever datestamp strings enter or leave a utility function, they _must_
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

const RESET_UNITS: Temporal.PlainDateLike = {
    day: 1,
};

export function add_months(datestamp: string, months: number): string {
    const date = from_datestamp(datestamp).add({months});

    return to_datestamp(date);
}

export function clamp_month(
    datestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): string {
    // NOTE: Yeah a bit long-winded handling the comparison logic and day manipulation, but
    // we want to preserve the input day instead of resetting it all the time

    const source_date = from_datestamp(datestamp);
    const month_date = source_date.with(RESET_UNITS);

    if (maximum) {
        const maximum_date = from_datestamp(maximum, RESET_UNITS);
        if (Temporal.PlainDate.compare(maximum_date, month_date) < (inclusive ? 0 : 1)) {
            return to_datestamp(maximum_date, {day: source_date.day});
        }
    }

    if (minimum) {
        const minimum_date = from_datestamp(minimum, RESET_UNITS);
        if (Temporal.PlainDate.compare(minimum_date, month_date) > (inclusive ? 0 : -1)) {
            return to_datestamp(minimum_date, {day: source_date.day});
        }
    }

    return to_datestamp(source_date);
}

export function format_month(
    datestamp: string,
    locale: string = DEFAULT_LOCALE,
    options: IMonthFormatOptions = DEFAULT_FORMAT_OPTIONS
): string {
    const date = from_datestamp(datestamp);

    return date.toLocaleString(locale, options);
}

export function get_month(datestamp: string): number {
    return from_datestamp(datestamp).month;
}

export function includes_month(datestamp: string, targets: readonly string[]): boolean {
    const source_date = from_datestamp(datestamp, RESET_UNITS);

    return !!targets.find((target, index) => {
        const target_date = from_datestamp(target, RESET_UNITS);

        return source_date.equals(target_date);
    });
}

export function is_month(datestamp: string, target: string): boolean {
    const source_date = from_datestamp(datestamp, RESET_UNITS);
    const target_date = from_datestamp(target, RESET_UNITS);

    return source_date.equals(target_date);
}

export function is_month_in_range(
    datestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): boolean {
    const date = from_datestamp(datestamp, RESET_UNITS);

    if (maximum) {
        const maximum_date = from_datestamp(maximum, RESET_UNITS);
        if (Temporal.PlainDate.compare(maximum_date, date) < (inclusive ? 0 : 1)) return false;
    }

    if (minimum) {
        const minimum_date = from_datestamp(minimum, RESET_UNITS);
        if (Temporal.PlainDate.compare(minimum_date, date) > (inclusive ? 0 : -1)) return false;
    }

    return true;
}

export function now_month(): string {
    const date = Temporal.Now.plainDateISO();

    return to_datestamp(date, RESET_UNITS);
}

export function set_month(datestamp: string, month: number): string {
    const date = from_datestamp(datestamp).with({month});

    return to_datestamp(date);
}

export function subtract_months(datestamp: string, months: number): string {
    const date = from_datestamp(datestamp).subtract({months});

    return to_datestamp(date);
}
