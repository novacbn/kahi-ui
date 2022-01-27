import {chunk, fill} from "../functional";

import {from_datestamp, to_datestamp} from "./timestamps";

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
