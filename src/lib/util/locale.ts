export const BROWSER_LOCALE = typeof navigator !== "undefined" ? navigator.language : "en-US";

export const BROWSER_CALENDAR = new Intl.DateTimeFormat(BROWSER_LOCALE).resolvedOptions().calendar;
