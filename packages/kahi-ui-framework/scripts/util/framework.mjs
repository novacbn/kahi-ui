import {replace_delimiters} from "./stylesheet.mjs";

function to_variables_proxy(variables, parent = "") {
    return new Proxy(variables, {
        get: (target, key, receiver) => {
            const property = parent
                ? `${parent}-${replace_delimiters(key)}`
                : replace_delimiters(key);
            const value = target[key];

            if (value === undefined) {
                throw new ReferenceError(`bad lookup for property '--${property}'`);
            }

            if (typeof value === "object") return to_variables_proxy(value, property);
            return `var(--${property})`;
        },
    });
}

export async function import_framework(import_url) {
    const make = (await import(import_url)).default;

    return (variables) => {
        const proxy = to_variables_proxy(variables);

        return make({VAR: proxy});
    };
}
