import {Temporal} from "@js-temporal/polyfill";

import {wrap} from "./math";

function get_calendar_day(date: Temporal.PlainDate): number {
    return wrap(date.dayOfWeek + 1, 1, date.daysInWeek);
}

function get_timestamp_date(timestamp: number | string): Temporal.PlainDate {
    if (typeof timestamp === "number") {
        const instant = Temporal.Instant.fromEpochMilliseconds(timestamp);

        return Temporal.PlainDate.from(instant.toString());
    }

    return Temporal.PlainDate.from(timestamp);
}

export function get_calendar_weeks(year: number, month: number): Temporal.PlainDate[][] {
    const date = Temporal.PlainYearMonth.from({
        year,
        month,
    });

    let starting_date = Temporal.PlainDate.from({
        year: date.year,
        month: date.month,
        day: 1,
    });
    starting_date = starting_date.subtract({
        days: get_calendar_day(starting_date) - 1,
    });

    let ending_date = Temporal.PlainDate.from({
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

export function get_calendar_quaters(year: number): Temporal.PlainYearMonth[] {
    const date = Temporal.PlainYearMonth.from({
        year,
        month: 1,
    });

    return new Array(date.monthsInYear)
        .fill(null)
        .map((_, index) => Temporal.PlainYearMonth.from({year: date.year, month: index + 1}));
}
