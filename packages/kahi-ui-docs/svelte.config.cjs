const PACKAGE = require("./package.json");
const PACKAGE_FRAMEWORK = require("@kahi-ui/framework/package.json");

const {join, resolve} = require("path");
const {cwd, env} = require("process");

const {loadEnv} = require("vite");

const PROCESS_CWD = cwd();

const EXCLUDED_PACKAGES = ["@kahi-ui/docs-kit/server"];

const INCLUDED_PACKAGES = ["@kahi-ui/svelte"];

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
    kit: {
        // By default, `npm run build` will create a standard Node app.
        // You can create optimized builds for different platforms by
        // specifying a different adapter
        adapter: require("@sveltejs/adapter-static")(),

        // hydrate the <div id="svelte"> element in src/app.html
        target: "body",

        paths: {
            base: "/kahi-ui/",
        },

        // Consult https://vitejs.dev/config/ to learn about these options
        vite: () => {
            // HACK: Since removing the `vite.config.js` loading, SvelteKit doesn't
            // pass the environment into the config function

            // HACK: Parsing the dotenv / environment variables twice...
            const ENV = loadEnv(env.NODE_ENV, resolve("./"));

            const PATH_FRAMEWORK = ENV.VITE_PATH_FRAMEWORK;
            const PATH_HIGHLIGHTJS = ENV.VITE_PATH_HIGHLIGHTJS;

            const THEME_CONTENT = ENV.VITE_THEME_CONTENT;
            const THEME_SYNTAX = ENV.VITE_THEME_SYNTAX;

            const path_framework_css = join(PROCESS_CWD, PATH_FRAMEWORK, "kahi-ui.framework.css");
            const path_framework_theme = join(
                PROCESS_CWD,
                PATH_FRAMEWORK,
                "themes",
                `kahi-ui.theme.${THEME_CONTENT}.css`
            );
            const path_syntax = join(PROCESS_CWD, PATH_HIGHLIGHTJS, `${THEME_SYNTAX}.css`);

            /** @type {import('vite').UserConfig} */
            return {
                define: {
                    "import.meta.env.VITE_VERSION_TAG": `"${PACKAGE_FRAMEWORK.version}"`,
                },

                resolve: {
                    alias: {
                        "assets/styles/kahi-ui.css": path_framework_css,
                        "assets/styles/kahi-ui.theme.css": path_framework_theme,
                        "extern/styles/highlightjs.css": path_syntax,
                    },
                },

                optimizeDeps: {
                    exclude: EXCLUDED_PACKAGES,
                    include: INCLUDED_PACKAGES,
                },

                ssr: {
                    exclude: EXCLUDED_PACKAGES,
                    noExternal: Object.keys(PACKAGE.dependencies || {}),
                },
            };
        },
    },
};
