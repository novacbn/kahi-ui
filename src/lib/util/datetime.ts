import {Temporal} from "@js-temporal/polyfill";

import {chunk, fill} from "./functional";
import {BROWSER_CALENDAR} from "./locale";
import {wrap} from "./math";

function get_calendar_day(date: Temporal.PlainDate): number {
    return wrap(date.dayOfWeek + 1, 1, date.daysInWeek);
}

function to_plain_year(year: string | Temporal.YearMonthLike): Temporal.PlainYearMonth {
    let _year = Temporal.PlainYearMonth.from(year);

    return Temporal.PlainYearMonth.from({year: _year.year, month: 1});
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
    year: number,
    calendar: string = BROWSER_CALENDAR
): Temporal.PlainYearMonth[][] {
    const date = Temporal.PlainYearMonth.from({
        calendar,
        year,
        month: 1,
    });

    return chunk(
        fill(
            (index) =>
                Temporal.PlainYearMonth.from({
                    calendar: BROWSER_CALENDAR,
                    year: date.year,
                    month: index + 1,
                }),
            date.monthsInYear
        ),
        date.monthsInYear / 4
    );
}

export function get_calendar_weeks(
    year: number,
    month: number,
    calendar: string = BROWSER_CALENDAR
): Temporal.PlainDate[][] {
    const date = Temporal.PlainYearMonth.from({
        calendar,
        year,
        month,
    });

    let starting_date = Temporal.PlainDate.from({
        calendar,
        year: date.year,
        month: date.month,
        day: 1,
    });
    starting_date = starting_date.subtract({
        days: get_calendar_day(starting_date) - 1,
    });

    let ending_date = Temporal.PlainDate.from({
        calendar,
        year: date.year,
        month: date.month,
        day: date.daysInMonth,
    });
    ending_date = ending_date.add({
        days: ending_date.daysInWeek - get_calendar_day(ending_date) + 1,
    });

    const duration = starting_date.until(ending_date);

    return chunk(
        fill((index) => starting_date.add({days: index}), duration.total({unit: "day"})),
        starting_date.daysInWeek
    );
}

export function get_decade_halves(
    year: number,
    calendar: string = BROWSER_CALENDAR
): Temporal.PlainYearMonth[][] {
    const decade = Math.floor(year / 10) * 10;

    return chunk(
        fill(
            (index) => Temporal.PlainYearMonth.from({calendar, year: decade + index, month: 1}),
            10
        ),
        5
    );
}

export function get_monthstamp(calendar: string = BROWSER_CALENDAR): string {
    // NOTE: There isn't a `Temporal.Now.plainYearMonth` API, so we basically have
    // to emulate that here
    const date = Temporal.Now.plainDate(calendar);

    return date.toPlainYearMonth().toString();
}

export function get_timestamp(calendar: string = BROWSER_CALENDAR): string {
    return Temporal.Now.zonedDateTime(calendar).toString();
}

export function get_yearstamp(calendar: string = BROWSER_CALENDAR): string {
    const date = Temporal.Now.plainDate(calendar);

    // NOTE: There isn't anything like a `Temporal.PlainYear`, so we're just returning
    // a `Temporal.PlainYearMonth` that is always January of the current year
    return Temporal.PlainYearMonth.from({calendar, year: date.year, month: 1}).toString();
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
