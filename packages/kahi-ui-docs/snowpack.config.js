module.exports = {
    plugins: ["@snowpack/plugin-svelte", "snowpack-plugin-mdsvex", "@snowpack/plugin-dotenv"],

    mount: {
        public: "/",
        src: "/_dist_",
    },
};
