import esbuild from "esbuild";
import {sassPlugin} from "esbuild-sass-plugin";

import {
    ARGUMENT_MINIFY,
    ARGUMENT_WATCH,
    PACKAGE,
    PATH_DIST_FRAMEWORK_FILE,
    PATH_FRAMEWORK_FILE,
    TEMPLATE_DIST_THEME_FILE,
    TEMPLATE_THEME_FILE,
} from "./constants.js";
import {SASS_FUNCTIONS} from "./functions.js";

const ESBUILD_DEFAULT_OPTIONS = {
    sourcemap: ARGUMENT_MINIFY ? undefined : "external",
    watch: ARGUMENT_WATCH,

    minify: ARGUMENT_MINIFY,
    minifyIdentifiers: ARGUMENT_MINIFY,
    minifySyntax: ARGUMENT_MINIFY,
    minifyWhitespace: ARGUMENT_MINIFY,

    banner: {
        css: `/*!
* ${PACKAGE.name} v${PACKAGE.version}
*
* ${PACKAGE.repository.url}
*/`,
    },

    plugins: [
        sassPlugin({
            functions: SASS_FUNCTIONS,
        }),
    ],
};

export function build_framework(options = {}) {
    return esbuild.build({
        ...ESBUILD_DEFAULT_OPTIONS,

        entryPoints: [PATH_FRAMEWORK_FILE],
        outfile: PATH_DIST_FRAMEWORK_FILE,

        ...options,
    });
}

export function build_theme(theme, options = {}) {
    return esbuild.build({
        ...ESBUILD_DEFAULT_OPTIONS,

        entryPoints: [TEMPLATE_THEME_FILE({theme})],
        outfile: TEMPLATE_DIST_THEME_FILE({theme}),

        ...options,
    });
}
