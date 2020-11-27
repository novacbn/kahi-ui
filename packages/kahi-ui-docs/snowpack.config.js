module.exports = {
    plugins: ["@snowpack/plugin-svelte", "snowpack-plugin-mdsvex", "@snowpack/plugin-dotenv"],

    mount: {
        public: "/kahi-ui",
        src: "/_dist_",
    },
};
