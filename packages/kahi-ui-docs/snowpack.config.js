module.exports = {
    plugins: ["@snowpack/plugin-svelte", "@snowpack/plugin-dotenv"],

    mount: {
        public: "/kahi-ui",
        src: "/_dist_",
    },
};
