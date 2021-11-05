import {Temporal} from "@js-temporal/polyfill";

import {BROWSER_CALENDAR} from "./locale";
import {wrap} from "./math";

function get_calendar_day(date: Temporal.PlainDate): number {
    return wrap(date.dayOfWeek + 1, 1, date.daysInWeek);
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

export function get_calendar_quaters(
    year: number,
    calendar: string = BROWSER_CALENDAR
): Temporal.PlainYearMonth[][] {
    const date = Temporal.PlainYearMonth.from({
        calendar,
        year,
        month: 1,
    });

    return new Array(date.monthsInYear)
        .fill(null)
        .map((_, index) =>
            Temporal.PlainYearMonth.from({
                calendar: BROWSER_CALENDAR,
                year: date.year,
                month: index + 1,
            })
        )
        .reduce<Temporal.PlainYearMonth[][]>((accum, date, index) => {
            const quater_index = Math.floor(index / (date.monthsInYear / 4));
            if (!accum[quater_index]) accum[quater_index] = [];

            accum[quater_index].push(date);
            return accum;
        }, []);
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

    return new Array(duration.total({unit: "day"}))
        .fill(null)
        .map((_, index) => starting_date.add({days: index}))
        .reduce<Temporal.PlainDate[][]>((accum, date, index) => {
            const week_index = Math.floor(index / date.daysInWeek);
            if (!accum[week_index]) accum[week_index] = [];

            accum[week_index].push(date);
            return accum;
        }, []);
}

export function get_monthstamp(calendar: string = BROWSER_CALENDAR): string {
    const date = Temporal.Now.plainDate(calendar);

    return Temporal.PlainYearMonth.from({calendar, year: date.year, month: 1}).toString();
}

export function get_timestamp(calendar: string = BROWSER_CALENDAR): string {
    return Temporal.Now.zonedDateTime(calendar).toString();
}
