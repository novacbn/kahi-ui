const PACKAGE = require("../package.json");

const {dirname} = require("path");

const {startService} = require("esbuild");
const glob = require("glob");

const OPTIONS_DEFAULT = {
    sourcemap: true,
};

const OPTIONS_BROWSER = {
    ...OPTIONS_DEFAULT,

    platform: "browser",
    entryPoints: ["./src/index.ts"],
    external: ["buffer", "fs", "path", "stream"],

    bundle: true,
    globalName: PACKAGE.global,
};

const OPTIONS_NODE = {
    ...OPTIONS_DEFAULT,

    platform: "node",
    entryPoints: glob.sync("./src/**/*.ts"),
};

(async () => {
    const service = await startService();

    try {
        let x = await Promise.all([
            service.build({
                ...OPTIONS_NODE,
                format: "cjs",
                outdir: dirname(PACKAGE.main),
            }),
            service.build({
                ...OPTIONS_NODE,
                format: "esm",
                outdir: dirname(PACKAGE.module),
            }),

            service.build({
                ...OPTIONS_BROWSER,
                format: "iife",
                outfile: `./dist/${PACKAGE.name}.umd.js`,
            }),

            service.build({
                ...OPTIONS_BROWSER,
                format: "iife",
                minify: true,
                outfile: `./dist/${PACKAGE.name}.umd.min.js`,
            }),
        ]);
    } catch (err) {
        console.error(err);
        process.exit(1);
    } finally {
        service.stop();
    }
})();
