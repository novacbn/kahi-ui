const sveltePreprocess = require("svelte-preprocess");

// HACK: Vite expects ES Module, and Storybook expects CommonJS. So...
// duplicate files

module.exports = {
    preprocess: [sveltePreprocess()],
};
