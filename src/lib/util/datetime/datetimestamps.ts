import {Temporal} from "../../vendor/js-temporal-polyfill";

const EXPRESSION_INSTANT = /Z$/;

const EXPRESSION_OFFSET = /[\+\-]\d\d:\d\d$/;

const EXPRESSION_TIMEZONE = /\[[\w/]+\]$/;

export function from_datetimestamp(
    datetimestamp: number | string,
    modify?: Temporal.PlainDateTimeLike
): Temporal.PlainDateTime | Temporal.Instant | Temporal.ZonedDateTime {
    if (typeof datetimestamp === "number") {
        return Temporal.Instant.fromEpochMilliseconds(datetimestamp);
    } else if (EXPRESSION_OFFSET.test(datetimestamp) || EXPRESSION_INSTANT.test(datetimestamp)) {
        return Temporal.Instant.from(datetimestamp);
    } else if (EXPRESSION_TIMEZONE.test(datetimestamp)) {
        return modify
            ? Temporal.ZonedDateTime.from(datetimestamp).with(modify)
            : Temporal.ZonedDateTime.from(datetimestamp);
    }

    return modify
        ? Temporal.PlainDateTime.from(datetimestamp).with(modify)
        : Temporal.PlainDateTime.from(datetimestamp);
}

export function to_datetimestamp(
    datetimestamp: Temporal.PlainDateTime | Temporal.Instant | Temporal.ZonedDateTime,
    modify?: Temporal.PlainDateTimeLike
): string {
    if (datetimestamp instanceof Temporal.Instant) return datetimestamp.toString();
    else if (datetimestamp instanceof Temporal.ZonedDateTime)
        return modify
            ? datetimestamp
                  .withCalendar("iso8601")
                  .with(modify)
                  .toString({calendarName: "never", timeZoneName: "never"})
            : datetimestamp
                  .withCalendar("iso8601")
                  .toString({calendarName: "never", timeZoneName: "never"});

    return modify
        ? datetimestamp.withCalendar("iso8601").with(modify).toString({calendarName: "never"})
        : datetimestamp.withCalendar("iso8601").toString({calendarName: "never"});
}
