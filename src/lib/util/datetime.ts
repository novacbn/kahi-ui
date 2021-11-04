import {Temporal} from "@js-temporal/polyfill";

function get_timestamp_date(timestamp: number | string): Temporal.PlainDate {
    if (typeof timestamp === "number") {
        const instant = Temporal.Instant.fromEpochMilliseconds(timestamp);

        return Temporal.PlainDate.from(instant.toString());
    }

    return Temporal.PlainDate.from(timestamp);
}

export function get_calendar_days(timestamp: number | string): Temporal.PlainDate[] {
    const date = get_timestamp_date(timestamp);

    let starting_date = Temporal.PlainDate.from({year: date.year, month: date.month, day: 1});
    starting_date = starting_date.subtract({days: starting_date.dayOfWeek});

    let ending_date = Temporal.PlainDate.from({
        year: date.year,
        month: date.month,
        day: date.daysInMonth,
    });
    ending_date = ending_date.add({days: ending_date.daysInWeek - (date.dayOfWeek - 1)});

    const duration = starting_date.until(ending_date);

    return new Array(duration.total({unit: "day"}))
        .fill(null)
        .map((_, index) => starting_date.add({days: index}));
}

export function get_calendar_months(timestamp: number | string): Temporal.PlainYearMonth[] {
    const date = get_timestamp_date(timestamp);

    return new Array(date.monthsInYear)
        .fill(null)
        .map((_, index) => Temporal.PlainYearMonth.from({year: date.year, month: index + 1}));
}
