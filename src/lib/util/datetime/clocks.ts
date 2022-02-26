import type {PROPERTY_CLOCK_PERIOD} from "../../types/datetime";
import {TOKENS_CLOCK_PERIOD} from "../../types/datetime";

import {from_timestamp, to_timestamp} from "./timestamps";

export function get_clock_hours(
    timestamp: string,
    hour_12: boolean = false,
    period: PROPERTY_CLOCK_PERIOD = TOKENS_CLOCK_PERIOD.am
): string[] {
    const source_time = from_timestamp(timestamp);
    const hours: string[] = [];

    const start_index = hour_12 ? (period === TOKENS_CLOCK_PERIOD.pm ? 12 : 0) : 0;
    const end_index = hour_12 ? (period === TOKENS_CLOCK_PERIOD.pm ? 24 : 12) : 24;

    for (let index = start_index; index < end_index; index++) {
        hours.push(to_timestamp(source_time.with({hour: index})));
    }

    return hours;
}

export function get_clock_minutes(timestamp: string): string[] {
    const source_time = from_timestamp(timestamp);
    const minutes: string[] = [];

    for (let index = 0; index < 60; index++) {
        minutes.push(to_timestamp(source_time.with({minute: index})));
    }

    return minutes;
}

export function get_clock_seconds(timestamp: string): string[] {
    const source_time = from_timestamp(timestamp);
    const seconds: string[] = [];

    for (let index = 0; index < 60; index++) {
        seconds.push(to_timestamp(source_time.with({second: index})));
    }

    return seconds;
}

export function is_am(timestamp: string): boolean {
    return from_timestamp(timestamp).hour < 13;
}

export function is_pm(timestamp: string): boolean {
    return from_timestamp(timestamp).hour > 12;
}
