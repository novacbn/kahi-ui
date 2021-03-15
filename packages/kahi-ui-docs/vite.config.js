// Consult https://vitejs.dev/config/ to learn about these options
import {join, resolve} from "path";
import {readFileSync} from "fs";
import {cwd} from "process";

import {loadEnv} from "vite";

const PROCESS_CWD = cwd();

const PACKAGE = JSON.parse(readFileSync(join(PROCESS_CWD, "package.json")));

export default ({mode}) => {
    // HACK: Parsing the dotenv / environment variables twice...
    const ENV = loadEnv(mode, resolve("./"));

    const PATH_FRAMEWORK = ENV.VITE_PATH_FRAMEWORK;
    const PATH_HIGHLIGHTJS = ENV.VITE_PATH_HIGHLIGHTJS;

    const THEME_CONTENT = ENV.VITE_THEME_CONTENT;
    const THEME_SYNTAX = ENV.VITE_THEME_SYNTAX;

    const path_framework_css = join(PROCESS_CWD, PATH_FRAMEWORK, "kahi-ui.css");
    const path_framework_theme = join(
        PROCESS_CWD,
        PATH_FRAMEWORK,
        "themes",
        `${THEME_CONTENT}.css`
    );
    const path_syntax = join(PROCESS_CWD, PATH_HIGHLIGHTJS, `${THEME_SYNTAX}.css`);

    /** @type {import('vite').UserConfig} */
    return {
        //base: "/kahi-ui/",

        resolve: {
            alias: {
                "assets/styles/kahi-ui.css": path_framework_css,
                "assets/styles/kahi-ui.theme.css": path_framework_theme,
                "extern/styles/highlightjs.css": path_syntax,
            },
        },

        ssr: {
            noExternal: Object.keys(PACKAGE.dependencies || {}),
        },
    };
};
