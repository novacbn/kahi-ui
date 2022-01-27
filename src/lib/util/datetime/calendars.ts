import type {Temporal} from "../../vendor/js-temporal-polyfill";

import {chunk, fill} from "../functional";
import {wrap} from "../math";

import {from_datestamp, to_datestamp} from "./timestamps";

function get_calendar_day(date: Temporal.PlainDate): number {
    return wrap(date.dayOfWeek + 1, 1, date.daysInWeek);
}

export function get_month_quaters(timestamp: string): string[][] {
    const source_date = from_datestamp(timestamp);
    const year_date = source_date.with({day: 1, month: 1});

    const months = fill((index) => {
        if (index === source_date.month - 1) return source_date;

        return year_date.add({months: index});
    }, year_date.monthsInYear).map((target_date, index) => to_datestamp(target_date));

    return chunk(months, year_date.monthsInYear / 4);
}

export function get_year_halves(timestamp: string): string[][] {
    const source_date = from_datestamp(timestamp);
    const year_date = source_date.with({
        day: 1,
        month: 1,
        year: Math.floor(source_date.year / 10) * 10,
    });

    const years = fill((index) => {
        const target_date = year_date.add({years: index});

        return source_date.year === target_date.year ? source_date : target_date;
    }, 10).map((target_date, index) => to_datestamp(target_date));

    return chunk(years, 5);
}

export function get_week_days(timestamp: string): string[][] {
    const source_date = from_datestamp(timestamp, {day: 1});

    const starting_date = source_date.subtract({
        days: get_calendar_day(source_date) - 1,
    });

    let ending_date = source_date.with({day: source_date.daysInMonth});
    ending_date = ending_date.add({
        days: ending_date.daysInWeek - get_calendar_day(ending_date) + 1,
    });

    const duration = starting_date.until(ending_date).total({unit: "day"});
    const days = fill((index) => starting_date.add({days: index}), duration).map(
        (target_date, index) => to_datestamp(target_date)
    );

    return chunk(days, source_date.daysInWeek);
}
