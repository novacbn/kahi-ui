import sass from "sass";

import {BUILD_FLAGS} from "./flags.js";

const EXPRESSION_DEQUOTE = /^['"]?([\w_]*)['"]?$/;

const SASS_ENVIRONMENT = {
    ...BUILD_FLAGS,
};

function get_string(value, name) {
    const string = value.assertString(name).toString();

    return EXPRESSION_DEQUOTE.exec(string)[1];
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
};
