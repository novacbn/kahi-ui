import {Temporal} from "../../vendor/js-temporal-polyfill";

export function from_datestamp(
    timestamp: string | Temporal.PlainDateLike,
    modify?: Temporal.PlainDateLike
): Temporal.PlainDate {
    return modify
        ? Temporal.PlainDate.from(timestamp).withCalendar("iso8601").with(modify)
        : Temporal.PlainDate.from(timestamp).withCalendar("iso8601");
}

export function to_datestamp(date: Temporal.PlainDate, modify?: Temporal.PlainDateLike): string {
    return modify
        ? date.withCalendar("iso8601").with(modify).toString({
              calendarName: "never",
          })
        : date.withCalendar("iso8601").toString({
              calendarName: "never",
          });
}
