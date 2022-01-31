const EXPRESSION_TIMEZONE = /\[[\w/]+\]$/;

export function has_timezone(timestamp: string): boolean {
    return EXPRESSION_TIMEZONE.test(timestamp);
}
