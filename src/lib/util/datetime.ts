import {Temporal} from "@js-temporal/polyfill";

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

export function has_day(
    days: readonly (string | Temporal.DateLike)[],
    day: Temporal.PlainDate
): boolean {
    return !!days.find((entry) => day.equals(entry));
}

export function has_month(
    months: readonly (string | Temporal.YearMonthLike)[],
    month: Temporal.PlainYearMonth
): boolean {
    return !!months.find((entry) => month.equals(entry));
}

export function has_timezone(timestamp: string): boolean {
    return EXPRESSION_TIMEZONE.test(timestamp);
}

export function has_year(
    years: readonly (string | Temporal.YearMonthLike)[],
    year: Temporal.PlainYearMonth
): boolean {
    return !!years.find((entry) => {
        // NOTE: We're basically reimplementing `Temporal.PlainYearMonth.equals` to bypass month checking
        const _year = typeof entry === "string" ? Temporal.PlainYearMonth.from(entry) : entry;

        return year.calendar.toString() === _year.calendar?.toString() && _year.year === year.year;
    });
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

export function get_timestamp(calendar: string = BROWSER_CALENDAR): string {
    return Temporal.Now.zonedDateTime(calendar).toString({calendarName: "always"});
}

export function get_yearstamp(calendar: string = BROWSER_CALENDAR): string {
    // NOTE: There isn't anything like a `Temporal.PlainYear`, so we're just returning
    // a `Temporal.PlainYearMonth` that is always January of the current year
    return Temporal.Now.plainDate(calendar).with({month: 1}).toString({calendarName: "always"});
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
