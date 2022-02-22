const svelteOptions = require("../svelte.config.cjs");

module.exports = {
    core: {
        builder: "storybook-builder-vite",
    },

    stories: ["../src/**/*.stories.svelte"],
    addons: ["@storybook/addon-essentials", "@storybook/addon-svelte-csf"],
    svelteOptions,
};
