const AFFIRMATIVE_VALUES = new Set(["yes", "y", "true"]);

const EXPRESSION_SUBSTITUTE = /%s/;

export function is_affirmative(text: string): boolean {
    return AFFIRMATIVE_VALUES.has(text.toLowerCase());
}

export function substitute_value(text: string, value: any): string {
    return text.replace(EXPRESSION_SUBSTITUTE, value.toString());
}

export function split_list(text: string): string[] {
    return text.split(",").map((value) => value.trim());
}
