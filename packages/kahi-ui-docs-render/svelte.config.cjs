const PACKAGE = require("./package.json");

const {join, resolve} = require("path");
const {cwd, env} = require("process");

const {loadEnv} = require("vite");

const PROCESS_CWD = cwd();

const INCLUDE_CLIENT = ["@kahi-ui/svelte"];

const EXCLUDE_CLIENT = ["@kahi-ui/docs-kit/server"];

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
    kit: {
        // By default, `npm run build` will create a standard Node app.
        // You can create optimized builds for different platforms by
        // specifying a different adapter
        adapter: require("@sveltejs/adapter-static")(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "body",

        // Consult https://vitejs.dev/config/ to learn about these options
        vite: () => {
            // HACK: Since removing the `vite.config.js` loading, SvelteKit doesn't
            // pass the environment into the config function

            // HACK: Parsing the dotenv / environment variables twice...
            const ENV = loadEnv(env.NODE_ENV, resolve("./"));

            const PATH_FRAMEWORK = ENV.VITE_PATH_FRAMEWORK;

            const THEME_CONTENT = ENV.VITE_THEME_CONTENT;

            const path_framework_css = join(PROCESS_CWD, PATH_FRAMEWORK, "kahi-ui.framework.css");
            const path_framework_theme = join(
                PROCESS_CWD,
                PATH_FRAMEWORK,
                "themes",
                `kahi-ui.theme.${THEME_CONTENT}.css`
            );

            /** @type {import('vite').UserConfig} */
            return {
                resolve: {
                    alias: {
                        "assets/styles/kahi-ui.framework.css": path_framework_css,
                        "assets/styles/kahi-ui.theme.css": path_framework_theme,
                    },
                },

                optimizeDeps: {
                    exclude: EXCLUDE_CLIENT,
                    include: INCLUDE_CLIENT,
                },

                ssr: {
                    exclude: EXCLUDE_CLIENT,
                    noExternal: Object.keys(PACKAGE.dependencies || {}),
                },
            };
        },
    },
};
