import {Temporal} from "../../vendor/js-temporal-polyfill";

import {DEFAULT_DAY, DEFAULT_LOCALE, DEFAULT_MONTH, DEFAULT_WEEKDAY, DEFAULT_YEAR} from "../locale";

import {from_datestamp, to_datestamp} from "./datestamps";
import type {IMonthFormatOptions} from "./months";

// NOTE: We're abstracting datetime operations here so if we again run into breaking changes
// with the polyfill, Temporal API, or even just want to switch out the backing API, only
// this file needs changing. And by operating solely on string-based IO, we keep things simple
// in regards to API calls and typing

// NOTE: Whenever datestamp strings enter or leave a utility function, they _must_
// be parsed and converted into ISO-8601 calendars. Otherwise conditionals and arithmetic
// will fail due to potential mismatch. And we want to align with Browsers where
// they **ONLY** accept ISO-8601 strings for `<input />` elements

export type IDayFormatOptions = {
    day?: Intl.DateTimeFormatOptions["day"];

    weekday?: Intl.DateTimeFormatOptions["weekday"];
} & IMonthFormatOptions;

const DEFAULT_FORMAT_OPTIONS: IDayFormatOptions = {
    day: DEFAULT_DAY,

    month: DEFAULT_MONTH,

    weekday: DEFAULT_WEEKDAY,

    year: DEFAULT_YEAR,
};

export function add_days(datestamp: string, days: number): string {
    const date = from_datestamp(datestamp).add({days});

    return to_datestamp(date);
}

export function clamp_day(
    datestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): string {
    const date = from_datestamp(datestamp);

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
    datestamp: string,
    locale: string = DEFAULT_LOCALE,
    options: IDayFormatOptions = DEFAULT_FORMAT_OPTIONS
): string {
    const date = from_datestamp(datestamp);

    return date.toLocaleString(locale, options);
}

export function get_day(datestamp: string): number {
    return from_datestamp(datestamp).day;
}

export function includes_day(datestamp: string, targets: readonly string[]): boolean {
    const source_date = from_datestamp(datestamp);

    return !!targets.find((target, index) => {
        const target_date = from_datestamp(target);

        return source_date.equals(target_date);
    });
}

export function is_day(datestamp: string, target: string): boolean {
    const source_date = from_datestamp(datestamp);
    const target_date = from_datestamp(target);

    return source_date.equals(target_date);
}

export function is_day_in_range(
    datestamp: string,
    minimum?: string,
    maximum?: string,
    inclusive: boolean = false
): boolean {
    const date = from_datestamp(datestamp);

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

export function set_day(datestamp: string, day: number): string {
    const date = from_datestamp(datestamp).with({day});

    return to_datestamp(date);
}

export function now_day(): string {
    const date = Temporal.Now.plainDateISO();

    return to_datestamp(date);
}

export function subtract_days(datestamp: string, days: number): string {
    const date = from_datestamp(datestamp).subtract({days});

    return to_datestamp(date);
}
