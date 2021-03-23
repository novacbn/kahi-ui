import {promises} from "fs";
import {basename, dirname, join, resolve} from "path";
import {argv, cwd, exit} from "process";
const {writeFile} = promises;

import fg from "fast-glob";

import {import_framework} from "./util/framework.mjs";
import {import_theme} from "./util/theme.mjs";
import {to_theme_sheet} from "./util/stylesheet.mjs";

const [, , mode, theme_pattern, framework_pattern, out_dir] = argv;

async function build() {
    let themes = await fg(theme_pattern);
    let framework = await fg(framework_pattern);

    themes = await Promise.all(
        themes.map(async (file_path) => {
            const identifier = basename(file_path, ".theme.mjs");
            console.log(`[Kahi UI :: Themes] Initializing Theme '${identifier}' variables...`);

            const make = await import_theme(resolve(file_path));

            return {
                identifier,
                variables: make(),
            };
        })
    );

    framework = await Promise.all(
        framework.map(async (file_path) => {
            const identifier = basename(dirname(file_path));
            console.log(`[Kahi UI :: Themes] Initializing Framework '${identifier}' variables...`);

            const make = await import_framework(resolve(file_path));

            return {
                identifier,
                make,
            };
        })
    );

    const stylesheets = await Promise.all(
        themes.map(async (theme) => {
            const {identifier, variables} = theme;
            console.log(`[Kahi UI :: Themes] Building stylesheet for Theme '${identifier}'...`);

            const framework_variables = {};
            for (const component of framework) {
                const {identifier, make} = component;

                framework_variables[identifier] = make(variables);
            }

            const content = to_theme_sheet(identifier, variables, framework_variables);

            return {
                identifier,
                content,
            };
        })
    );

    await Promise.all(
        stylesheets.map(async (stylesheet) => {
            const {identifier, content} = stylesheet;
            const {expanded, minified} = content;

            const expanded_path = join(out_dir, `kahi-ui.theme.${identifier}.css`);
            const minified_path = join(out_dir, `kahi-ui.theme.${identifier}.min.css`);

            console.log(`[Kahi UI :: Themes] Writing stylesheet for Theme '${identifier}'...`);

            await Promise.all([
                writeFile(expanded_path, expanded),
                writeFile(minified_path, minified),
            ]);
        })
    );
}

switch (mode.toLowerCase()) {
    case "build":
        await build();
        exit(0);
}

console.error(`Invalid mode '${mode}' supplied to command.`);
exit(1);
