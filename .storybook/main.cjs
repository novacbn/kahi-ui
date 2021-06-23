const svelteOptions = require("../svelte.config.cjs");

module.exports = {
    core: {
        builder: "storybook-builder-vite",
    },
    features: {
        postcss: false,
    },
    stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx|svelte)"],
    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    svelteOptions,
};
