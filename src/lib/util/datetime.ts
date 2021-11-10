import {Temporal} from "@js-temporal/polyfill";

import type {PROPERTY_CLOCK_PERIOD} from "../types/datetime";
import {TOKENS_CLOCK_PERIOD} from "../types/datetime";

import {chunk, fill} from "./functional";
import {BROWSER_CALENDAR} from "./locale";
import {wrap} from "./math";

const EXPRESSION_TIMEZONE = /\[[\w/]+\]$/;

function get_calendar_day(date: Temporal.PlainDate): number {
    return wrap(date.dayOfWeek + 1, 1, date.daysInWeek);
}

function to_plain_year(year: string | Temporal.YearMonthLike): Temporal.PlainYearMonth {
    return Temporal.PlainYearMonth.from(year).with({month: 1});
}

export function clamp_day(
    day: string | Temporal.DateLike,
    min?: string | Temporal.DateLike,
    max?: string | Temporal.DateLike
): Temporal.PlainDate {
    if (max && Temporal.PlainDate.compare(day, max) === 1) return Temporal.PlainDate.from(max);
    else if (min && Temporal.PlainDate.compare(day, min) === -1) {
        return Temporal.PlainDate.from(min);
    }

    return Temporal.PlainDate.from(day);
}

export function clamp_month(
    month: string | Temporal.YearMonthLike,
    min?: string | Temporal.YearMonthLike,
    max?: string | Temporal.YearMonthLike
): Temporal.PlainYearMonth {
    if (max && Temporal.PlainYearMonth.compare(month, max) === 1) {
        return Temporal.PlainYearMonth.from(max);
    } else if (min && Temporal.PlainYearMonth.compare(month, min) === -1) {
        return Temporal.PlainYearMonth.from(min);
    }

    return Temporal.PlainYearMonth.from(month);
}

export function clamp_year(
    year: string | Temporal.YearMonthLike,
    min?: string | Temporal.YearMonthLike,
    max?: string | Temporal.YearMonthLike
): Temporal.PlainYearMonth {
    // NOTE: We need to set the `Temporal.PlainYearMonth.month` values to
    // `1` (January) to bypass month checking / normalize months, sticking
    // to only year / calendar
    const _year = Temporal.PlainYearMonth.from(year).with({month: 1});

    if (max) {
        const _max = Temporal.PlainYearMonth.from(max).with({month: 1});
        if (Temporal.PlainYearMonth.compare(_year, _max) === 1) return _max;
    }

    if (min) {
        const _min = Temporal.PlainYearMonth.from(min).with({month: 1});
        if (Temporal.PlainYearMonth.compare(_year, _min) === -1) return _min;
    }

    return _year;
}

export function get_calendar_quaters(
    year: string | Temporal.YearMonthLike
): Temporal.PlainYearMonth[][] {
    const month = Temporal.PlainYearMonth.from(year).with({month: 1});

    return chunk(
        fill((index) => month.add({months: index}), month.monthsInYear),
        month.monthsInYear / 4
    );
}

export function get_calendar_weeks(month: string | Temporal.YearMonthLike): Temporal.PlainDate[][] {
    const date = Temporal.PlainYearMonth.from(month).toPlainDate({day: 1});

    const starting_day = date.subtract({
        days: get_calendar_day(date) - 1,
    });

    let ending_day = date.with({day: date.daysInMonth});
    ending_day = ending_day.add({days: ending_day.daysInWeek - get_calendar_day(ending_day) + 1});

    const duration = starting_day.until(ending_day);

    return chunk(
        fill((index) => starting_day.add({days: index}), duration.total({unit: "day"})),
        date.daysInWeek
    );
}

export function get_clock_ranges(
    value?: string | Temporal.TimeLike,
    hour_12: boolean = false,
    period: PROPERTY_CLOCK_PERIOD = TOKENS_CLOCK_PERIOD.am
): [Temporal.PlainTime[], Temporal.PlainTime[], Temporal.PlainTime[]] {
    const base = value ? Temporal.PlainTime.from(value) : new Temporal.PlainTime();

    return [
        hour_12
            ? fill(
                  (index) =>
                      period === TOKENS_CLOCK_PERIOD.am
                          ? base.with({hour: index})
                          : base.with({hour: index + 12}),
                  12
              )
            : fill((index) => base.with({hour: index}), 24),
        fill((index) => base.with({minute: index}), 60),
        fill((index) => base.with({second: index}), 60),
    ];
}

export function get_daystamp(calendar: string = BROWSER_CALENDAR): string {
    return Temporal.Now.plainDate(calendar).toString({calendarName: "always"});
}

export function get_decade_halves(
    year: string | Temporal.YearMonthLike
): Temporal.PlainYearMonth[][] {
    let decade = Temporal.PlainYearMonth.from(year);
    decade = decade.with({
        year: Math.floor(decade.year / 10) * 10,
        month: 1,
    });

    return chunk(
        fill((index) => decade.add({years: index}), 10),
        5
    );
}

export function get_monthstamp(calendar: string = BROWSER_CALENDAR): string {
    return Temporal.Now.plainDate(calendar).toPlainYearMonth().toString({calendarName: "always"});
}

export function get_timestamp(): string {
    // NOTE: Temporal API only accepts ISO 8601 for zoned time
    return Temporal.Now.zonedDateTimeISO().toString({calendarName: "always"});
}

export function get_yearstamp(calendar: string = BROWSER_CALENDAR): string {
    // NOTE: There isn't anything like a `Temporal.PlainYear`, so we're just returning
    // a `Temporal.PlainYearMonth` that is always January of the current year
    return Temporal.Now.plainDate(calendar).with({month: 1}).toString({calendarName: "always"});
}

export function has_day(
    days: readonly (string | Temporal.DateLike)[],
    day: string | Temporal.DateLike
): boolean {
    const _day = Temporal.PlainDate.from(day);

    return !!days.find((entry) => _day.equals(entry));
}

export function has_month(
    months: readonly (string | Temporal.YearMonthLike)[],
    month: string | Temporal.YearMonthLike
): boolean {
    const _month = Temporal.PlainYearMonth.from(month);

    return !!months.find((entry) => _month.equals(entry));
}

export function has_timezone(timestamp: string): boolean {
    return EXPRESSION_TIMEZONE.test(timestamp);
}

export function has_year(
    years: readonly (string | Temporal.YearMonthLike)[],
    year: string | Temporal.YearMonthLike
): boolean {
    // NOTE: We need to set the `Temporal.PlainYearMonth.month` values to
    // `1` (January) to bypass month checking, sticking to only year / calendar
    const _year = Temporal.PlainYearMonth.from(year).with({month: 1});

    return !!years.find((entry) => {
        const _entry = Temporal.PlainYearMonth.from(entry).with({month: 1});

        return _year.equals(_entry);
    });
}

export function is_current_day(
    day: string | Temporal.DateLike,
    calendar: string = BROWSER_CALENDAR
): boolean {
    return Temporal.Now.plainDate(calendar).equals(day);
}

export function is_current_month(
    month: string | Temporal.YearMonthLike,
    calendar: string = BROWSER_CALENDAR
): boolean {
    return Temporal.Now.plainDate(calendar).toPlainYearMonth().equals(month);
}

export function is_current_time(timestamp: string | Temporal.TimeLike): boolean {
    return Temporal.Now.plainTimeISO().equals(timestamp);
}

export function is_current_year(
    year: string | Temporal.YearMonthLike,
    calendar: string = BROWSER_CALENDAR
): boolean {
    // NOTE: This is slightly more complicated due to there being no concept
    // of a `Temporal.PlainYear` API

    return Temporal.Now.plainDate(calendar)
        .toPlainYearMonth()
        .with({month: 1})
        .equals(to_plain_year(year));
}

export function is_day_in_range(
    month: string | Temporal.DateLike,
    max?: string | Temporal.DateLike,
    min?: string | Temporal.DateLike,
    inclusive: boolean = false
): boolean {
    if (max) {
        const _max = inclusive ? Temporal.PlainDate.from(max).add({days: 1}) : max;
        if (Temporal.PlainDate.compare(_max, month) < 1) return false;
    }

    if (min) {
        const _min = inclusive ? Temporal.PlainDate.from(min).subtract({days: 1}) : min;
        if (Temporal.PlainDate.compare(_min, month) > -1) return false;
    }

    return true;
}

export function is_month_in_range(
    month: string | Temporal.YearMonthLike,
    max?: string | Temporal.YearMonthLike,
    min?: string | Temporal.YearMonthLike,
    inclusive: boolean = false
): boolean {
    if (max) {
        const _max = inclusive ? Temporal.PlainYearMonth.from(max).add({months: 1}) : max;
        if (Temporal.PlainYearMonth.compare(_max, month) < 1) return false;
    }

    if (min) {
        const _min = inclusive ? Temporal.PlainYearMonth.from(min).subtract({months: 1}) : min;
        if (Temporal.PlainYearMonth.compare(_min, month) > -1) return false;
    }

    return true;
}

export function is_time_in_range(
    timestamp: string | Temporal.TimeLike,
    max?: string | Temporal.TimeLike,
    min?: string | Temporal.TimeLike
): boolean {
    if (max && Temporal.PlainTime.compare(max, timestamp) < 1) return false;
    else if (min && Temporal.PlainTime.compare(min, timestamp) > -1) return false;

    return true;
}

export function is_year_in_range(
    year: string | Temporal.YearMonthLike,
    max?: string | Temporal.YearMonthLike,
    min?: string | Temporal.YearMonthLike,
    inclusive: boolean = false
): boolean {
    // NOTE: This is slightly more complicated due to there being no concept
    // of a `Temporal.PlainYear` API
    const _year = to_plain_year(year);

    if (max) {
        const _max = inclusive ? to_plain_year(max).add({years: 1}) : to_plain_year(max);
        if (Temporal.PlainYearMonth.compare(_max, _year) < 1) return false;
    }

    if (min) {
        const _min = inclusive ? to_plain_year(min).subtract({years: 1}) : to_plain_year(min);
        if (Temporal.PlainYearMonth.compare(_min, _year) > -1) return false;
    }

    return true;
}
