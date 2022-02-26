import {Temporal} from "../../vendor/js-temporal-polyfill";

const DEFAULT_MODIFY: Temporal.PlainTimeLike = {
    // NOTE: We need to reset the smaller units, otherwise
    // they'll be added to output timestamps
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0,
};

export function from_timestamp(
    timestamp: string | Temporal.PlainTimeLike,
    modify: Temporal.PlainTimeLike = {}
): Temporal.PlainTime {
    // @ts-expect-error - HACK: Umm... what? `.with` accepts both of the objects directly
    // fine. However if I do the below spread, suddenly typing error?
    return Temporal.PlainTime.from(timestamp).with({
        ...DEFAULT_MODIFY,
        ...modify,
    });
}

export function to_timestamp(
    time: Temporal.PlainTime,
    modify: Temporal.PlainTimeLike = {}
): string {
    return (
        time
            // @ts-expect-error
            .with({
                ...DEFAULT_MODIFY,
                ...modify,
            })
            .toString()
    );
}
