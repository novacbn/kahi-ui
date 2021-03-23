import flatten from "flat";

import {PACKAGE} from "./package.mjs";

const TEMPLATE_THEME_EXPANDED = ({theme, variables, framework_variables}) => `/*
 * Kahi UI - \`${theme}\` Theme
 *
 * v${PACKAGE.version} - (AUTO-GENERATED)
 */

:root {
    /** THEME BASE */

${map_css_variables(variables).join("\n")}

    /** THEME FRAMEWORK */

${map_css_variables(framework_variables).join("\n")}
}`;

const TEMPLATE_THEME_MINIFIED = ({theme, variables, framework_variables}) => `/*
 * Kahi UI - \`${theme}\` Theme
 *
 * v${PACKAGE.version} - (AUTO-GENERATED)
 */

:root {${map_css_variables(variables, true).join("")}${map_css_variables(
    framework_variables,
    true
).join("")}}`;

function map_css_variables(entries, minified = false) {
    return entries.map((entry) => {
        const [variable, value] = entry;

        return minified ? `--${variable}:${value};` : `    --${variable}: ${value};`;
    });
}

function sort_variables(variables) {
    variables.sort((entry_a, entry_b) => {
        const [variable_a] = entry_a;
        const [variable_b] = entry_b;

        if (variable_a > variable_b) return 1;
        else if (variable_a < variable_b) return -1;

        return 0;
    });

    return variables;
}

export function replace_delimiters(text) {
    return text.replace(/_/g, "-");
}

export function to_theme_sheet(theme, variables, framework_variables) {
    variables = flatten(variables, {delimiter: "-", transformKey: replace_delimiters});
    framework_variables = flatten(framework_variables, {
        delimiter: "-",
        transformKey: replace_delimiters,
    });

    // NOTE: We need to sort alphabetically for consistent builds
    variables = sort_variables(Object.entries(variables));
    framework_variables = sort_variables(Object.entries(framework_variables));

    return {
        expanded: TEMPLATE_THEME_EXPANDED({theme, variables, framework_variables}),
        minified: TEMPLATE_THEME_MINIFIED({theme, variables, framework_variables}),
    };
}
