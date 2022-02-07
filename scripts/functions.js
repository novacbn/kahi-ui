import sass from "sass";

import {BUILD_FLAGS} from "./flags.js";

const EXPRESSION_DEQUOTE = /^['"]?([\w_\.\-\%\*]*)['"]?$/;

const EXPRESSION_FILTER_SAFE = /([\^\$\?\.\*\-\+\*\[\]])/g;

const SASS_ENVIRONMENT = {
    ...BUILD_FLAGS,
};

function get_string(value, name) {
    const string = value.assertString(name).toString();
    const match = EXPRESSION_DEQUOTE.exec(string);

    return match ? match[1] : string;
}

function to_regexp_safe(str) {
    return str.replace(EXPRESSION_FILTER_SAFE, (substr) => `\\${substr}`);
}

// NOTE: Most if not all SASS functions created for the Framework SHOULD
// be created within the SASS language! Only absolute minimum should be done
// here, unless it's needed. e.g. CLI arguments

export const SASS_FUNCTIONS = {
    "env($key)": (args) => {
        const key = get_string(args[0], "key");
        const value = SASS_ENVIRONMENT[key];

        switch (typeof value) {
            case "boolean":
                return value ? sass.sassTrue : sass.sassFalse;

            case "number":
                return new sass.SassNumber(parseInt(value) || 0);

            case "null":
                return sass.sassNull;

            case "undefined":
                return sass.sassNull;

            default:
                return new sass.SassString(value.toString());
        }
    },

    "str-endswith($str, $search)": (args) => {
        const str = get_string(args[0], "str");
        const search = get_string(args[1], "search");

        return str.endsWith(search) ? new sass.SassNumber(-search.length) : sass.sassNull;
    },

    "str-filter($str, $search: null)": (args) => {
        if (args[1] === sass.sassNull) return args[0];

        const str = get_string(args[0], "str");
        const search = get_string(args[1], "search");

        if (search.includes("*")) {
            let [first_substr, last_substr] = search.split("*");

            first_substr = to_regexp_safe(first_substr);
            last_substr = to_regexp_safe(last_substr);

            const expression = new RegExp(`^${first_substr}(.*)${last_substr}$`);
            const match = expression.exec(str);

            if (match) return new sass.SassString(match[1]);
        } else {
            if (str.startsWith(search)) return new sass.SassString(str.slice(search.length));
        }

        return sass.sassNull;
    },

    "str-replaceall($str, $search, $replace)": (args) => {
        const str = get_string(args[0], "str");
        const search = get_string(args[1], "search");
        const replace = get_string(args[2], "replace");

        return new sass.SassString(str.replaceAll(search, replace));
    },

    "str-startswith($str, $search)": (args) => {
        const str = get_string(args[0], "str");
        const search = get_string(args[1], "search");

        return str.startsWith(search) ? new sass.SassNumber(search.length) : sass.sassNull;
    },
};
