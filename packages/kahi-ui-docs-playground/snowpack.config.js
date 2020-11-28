module.exports = {
    plugins: ["@snowpack/plugin-svelte", "@snowpack/plugin-dotenv"],

    mount: {
        public: "/kahi-ui/playground",
        src: "/_dist_",
    },
};
