const svelteOptions = require("../svelte.config.cjs");

module.exports = {
    core: {
        builder: "storybook-builder-vite",
    },

    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
    addons: ["@storybook/addon-essentials", "@storybook/addon-svelte-csf"],
    svelteOptions,
};
