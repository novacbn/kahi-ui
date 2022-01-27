import {chunk, fill} from "../functional";

import {from_datestamp, to_datestamp} from "./timestamps";

export function get_calendar_quaters(timestamp: string): string[][] {
    const source_date = from_datestamp(timestamp);
    const year_date = source_date.with({day: 1, month: 1});

    const months = fill((index) => {
        if (index === source_date.month - 1) return source_date;

        return year_date.add({months: index});
    }, year_date.monthsInYear).map((target_date, index) => to_datestamp(target_date));

    return chunk(months, year_date.monthsInYear / 4);
}
