// TODO: Change to proper runtime detection. Some runtimes like Deno have
// `window` polyfilled, so this would throw a false positive

export const IS_BROWSER: boolean = typeof window !== "undefined";

export const IS_SERVER: boolean = !IS_BROWSER;
