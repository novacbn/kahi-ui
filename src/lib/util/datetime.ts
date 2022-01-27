import {Temporal} from "../vendor/js-temporal-polyfill";

import type {PROPERTY_CLOCK_PERIOD} from "../types/datetime";
import {TOKENS_CLOCK_PERIOD} from "../types/datetime";

import {chunk, fill} from "./functional";
import {DEFAULT_CALENDAR} from "./locale";
import {wrap} from "./math";

const EXPRESSION_TIMEZONE = /\[[\w/]+\]$/;

function get_calendar_day(date: Temporal.PlainDate): number {
    return wrap(date.dayOfWeek + 1, 1, date.daysInWeek);
}

function to_plain_year(year: string | Temporal.PlainYearMonthLike): Temporal.PlainYearMonth {
    // NOTE: We need to set the `Temporal.PlainYearMonth.month` values to
    // `1` (January) to bypass month checking, sticking to only year / calendar

    return Temporal.PlainYearMonth.from(year).with({month: 1});
}

export function get_calendar_weeks(
    month: string | Temporal.PlainYearMonthLike
): Temporal.PlainDate[][] {
    const _month = Temporal.PlainYearMonth.from(month).toPlainDate({day: 1});

    const starting_day = _month.subtract({
        days: get_calendar_day(_month) - 1,
    });

    let ending_day = _month.with({day: _month.daysInMonth});
    ending_day = ending_day.add({days: ending_day.daysInWeek - get_calendar_day(ending_day) + 1});

    const duration = starting_day.until(ending_day);

    return chunk(
        fill((index) => starting_day.add({days: index}), duration.total({unit: "day"})),
        _month.daysInWeek
    );
}

export function get_clock_ranges(
    value?: string | Temporal.PlainTimeLike,
    hour_12: boolean = false,
    period: PROPERTY_CLOCK_PERIOD = TOKENS_CLOCK_PERIOD.am
): [Temporal.PlainTime[], Temporal.PlainTime[], Temporal.PlainTime[]] {
    const base = (value ? Temporal.PlainTime.from(value) : new Temporal.PlainTime()).with({
        millisecond: 0,
        microsecond: 0,
        nanosecond: 0,
    });

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

export function get_daystamp(calendar: string = DEFAULT_CALENDAR): string {
    return Temporal.Now.plainDate(calendar).toString({calendarName: "always"});
}

export function get_monthstamp(calendar: string = DEFAULT_CALENDAR): string {
    return Temporal.Now.plainDate(calendar).toPlainYearMonth().toString({calendarName: "always"});
}

export function get_timestamp(): string {
    // NOTE: Temporal API only accepts ISO 8601 for zoned time
    return Temporal.Now.zonedDateTimeISO().toString({calendarName: "always"});
}

export function has_day(
    days: readonly (string | Temporal.PlainDateLike)[],
    day: string | Temporal.PlainDateLike
): boolean {
    const _day = Temporal.PlainDate.from(day);

    return !!days.find((entry) => _day.equals(entry));
}

export function has_timezone(timestamp: string): boolean {
    return EXPRESSION_TIMEZONE.test(timestamp);
}

export function is_day_in_range(
    month: string | Temporal.PlainDateLike,
    max?: string | Temporal.PlainDateLike,
    min?: string | Temporal.PlainDateLike,
    inclusive: boolean = false
): boolean {
    if (max && Temporal.PlainDate.compare(max, month) < (inclusive ? 0 : 1)) return false;
    else if (min && Temporal.PlainDate.compare(min, month) > (inclusive ? 0 : -1)) return false;

    return true;
}

export function is_time_in_range(
    timestamp: string | Temporal.PlainTimeLike,
    max?: string | Temporal.PlainTimeLike,
    min?: string | Temporal.PlainTimeLike,
    inclusive: boolean = false
): boolean {
    if (max && Temporal.PlainTime.compare(max, timestamp) < (inclusive ? 0 : 1)) return false;
    else if (min && Temporal.PlainTime.compare(min, timestamp) > (inclusive ? 0 : -1)) return false;

    return true;
}
