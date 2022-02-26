import {Temporal} from "../../vendor/js-temporal-polyfill";

export function from_datestamp(
    timestamp: string | Temporal.PlainDateLike,
    modify?: Temporal.PlainDateLike
): Temporal.PlainDate {
    if (modify) return Temporal.PlainDate.from(timestamp).withCalendar("iso8601").with(modify);
    return Temporal.PlainDate.from(timestamp).withCalendar("iso8601");
}

export function to_datestamp(date: Temporal.PlainDate, modify?: Temporal.PlainDateLike): string {
    if (modify) {
        return date.withCalendar("iso8601").with(modify).toString({
            calendarName: "never",
        });
    }

    return date.withCalendar("iso8601").toString({
        calendarName: "never",
    });
}
