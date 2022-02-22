const svelteOptions = require("../svelte.config.cjs");

module.exports = {
    core: {
        builder: "storybook-builder-vite",
    },

    stories: ["../src/**/*.stories.svelte"],
    addons: ["@storybook/addon-essentials", "@storybook/addon-svelte-csf"],
    svelteOptions,

    async viteFinal(config, {configType}) {
        // HACK: This fixes Out-Of-Memory (OOM) errors that happen during
        // due to Storybook's massive dependency graph. Sourcemaps aren't
        // really needed during non-development /anyway/ so it should be fine
        if (configType === "PRODUCTION") config.build.sourcemap = false;

        return config;
    },
};
