import sveltePreprocess from "svelte-preprocess";

// HACK: Vite expects ES Module, and Storybook expects CommonJS. So...
// duplicate files

export default {
    preprocess: [sveltePreprocess()],
};
