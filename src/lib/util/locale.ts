export const BROWSER_CALENDAR = new Intl.DateTimeFormat().resolvedOptions().calendar;

export const BROWSER_LOCALE = typeof navigator !== "undefined" ? navigator.language : "en-US";
