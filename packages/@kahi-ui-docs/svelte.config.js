import {readFileSync} from "fs";
import {resolve} from "path";
import {env} from "process";

import adapter from "@sveltejs/adapter-static";
import sveltePreprocess from "svelte-preprocess";

const PACKAGE_FRAMEWORK = JSON.parse(readFileSync(resolve("../../package.json")).toString());

/** @type {import('@sveltejs/kit').Config} */
export default {
    preprocess: sveltePreprocess(),

    kit: {
        adapter: adapter(),
        target: "body",

        // Consult https://vitejs.dev/config/ to learn about these options
        vite: () => {
            /** @type {import('vite').UserConfig} */
            const {NODE_ENV} = env;

            return {
                define: {
                    "import.meta.env.VITE_VERSION_TAG": `"${PACKAGE_FRAMEWORK.version}"`,

                    // HACK: Really /shouldn't/ be needed at all. Especially since I dynamically
                    // import `svelte-codejar`. But SvelteKit or Vite kept picking it up anyway
                    ...(NODE_ENV === "development"
                        ? {}
                        : {
                              "const globalWindow = window":
                                  "const globalWindow = typeof window !== 'undefined' ? window : undefined",
                          }),
                },
            };
        },
    },
};
