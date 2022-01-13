import {argv, cwd} from "process";
import {join} from "path";
import {readFileSync} from "fs";

export const ARGUMENT_MINIFY = argv.includes("--minify");

export const ARGUMENT_WATCH = argv.includes("--watch");

export const PATH_CWD = cwd();

export const PATH_PACKAGE = join(PATH_CWD, "package.json");

export const PATH_INPUT_DIRECTORY = join(PATH_CWD, "src");

export const PATH_OUTPUT_DIRECTORY = join(PATH_CWD, "package");

export const PATH_DIST_DIRECTORY = join(PATH_OUTPUT_DIRECTORY, "dist");

export const PATH_DIST_FRAMEWORK_FILE = join(
    PATH_DIST_DIRECTORY,
    ARGUMENT_MINIFY ? "kahi-ui.framework.min.css" : "kahi-ui.framework.css"
);

export const PATH_FRAMEWORK_DIRECTORY = join(PATH_INPUT_DIRECTORY, "framework");

export const PATH_THEMES_DIRECTORY = join(PATH_INPUT_DIRECTORY, "themes");

export const PATH_FRAMEWORK_FILE = join(PATH_FRAMEWORK_DIRECTORY, "framework.scss");

export const PACKAGE = JSON.parse(readFileSync(PATH_PACKAGE).toString());

export const TEMPLATE_THEME_FILE = ({theme}) => join(PATH_THEMES_DIRECTORY, `${theme}.scss`);

export const TEMPLATE_DIST_THEME_FILE = ({theme}) =>
    join(
        PATH_DIST_DIRECTORY,
        ARGUMENT_MINIFY ? `kahi-ui.theme.${theme}.min.css` : `kahi-ui.theme.${theme}.css`
    );
