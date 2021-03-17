const AFFIRMATIVE_VALUES = new Set(["yes", "y", "true"]);

const EXPRESSION_SUBSTITUTE = /%s/;

export function is_affirmative(text) {
    return AFFIRMATIVE_VALUES.has(text.toLowerCase());
}

export function substitute_value(text, value) {
    return text.replace(EXPRESSION_SUBSTITUTE, value);
}

export function split_list(text) {
    return text.split(",").map((value) => value.trim());
}
