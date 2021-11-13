const SYSTEM_DATE_OPTIONS = new Intl.DateTimeFormat().resolvedOptions();

const SYSTEM_TIME_OPTIONS = new Intl.DateTimeFormat(undefined, {
    // @ts-expect-error - HACK: Just not typed yet
    timeStyle: "full",
}).resolvedOptions();

export const DEFAULT_CALENDAR = SYSTEM_DATE_OPTIONS.calendar ?? "gregory";

export const DEFAULT_LOCALE = SYSTEM_DATE_OPTIONS.locale ?? "en-US";

export const DEFAULT_TIMEZONE = SYSTEM_DATE_OPTIONS.timeZone ?? "Etc/UTC";

export const DEFAULT_DAY = SYSTEM_DATE_OPTIONS.day as Intl.DateTimeFormatOptions["day"];

export const DEFAULT_MONTH = SYSTEM_DATE_OPTIONS.month as Intl.DateTimeFormatOptions["month"];

export const DEFAULT_WEEKDAY = SYSTEM_DATE_OPTIONS.weekday as Intl.DateTimeFormatOptions["weekday"];

export const DEFAULT_YEAR = SYSTEM_DATE_OPTIONS.year as Intl.DateTimeFormatOptions["year"];

export const DEFAULT_HOUR = SYSTEM_TIME_OPTIONS.hour as Intl.DateTimeFormatOptions["hour"];

export const DEFAULT_HOUR_12 = SYSTEM_TIME_OPTIONS.hour12 as Intl.DateTimeFormatOptions["hour12"];

export const DEFAULT_MINUTE = SYSTEM_TIME_OPTIONS.minute as Intl.DateTimeFormatOptions["minute"];

export const DEFAULT_SECOND = SYSTEM_TIME_OPTIONS.second as Intl.DateTimeFormatOptions["second"];

export const DEFAULT_FORMAT_DATE = {
    day: DEFAULT_DAY,
    month: DEFAULT_MONTH,
    weekday: DEFAULT_WEEKDAY,
    year: DEFAULT_YEAR,
};

export const DEFAULT_FORMAT_TIME = {
    hour: DEFAULT_HOUR,
    hour_12: DEFAULT_HOUR_12,
    minute: DEFAULT_MINUTE,
    second: DEFAULT_SECOND,
};

export const DEFAULT_FORMAT_DATETIME = {
    ...DEFAULT_FORMAT_DATE,
    ...DEFAULT_FORMAT_TIME,
};
