import {Temporal} from "../vendor/js-temporal-polyfill";

import type {PROPERTY_CLOCK_PERIOD} from "../types/datetime";
import {TOKENS_CLOCK_PERIOD} from "../types/datetime";

import {fill} from "./functional";

const EXPRESSION_TIMEZONE = /\[[\w/]+\]$/;

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

export function get_timestamp(): string {
    // NOTE: Temporal API only accepts ISO 8601 for zoned time
    return Temporal.Now.zonedDateTimeISO().toString({calendarName: "always"});
}

export function has_timezone(timestamp: string): boolean {
    return EXPRESSION_TIMEZONE.test(timestamp);
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
