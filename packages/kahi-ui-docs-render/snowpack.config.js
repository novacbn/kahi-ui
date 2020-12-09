module.exports = {
    plugins: ["@snowpack/plugin-svelte"],

    alias: {
        "@dist": "../../dist",
    },

    mount: {
        public: "/kahi-ui/render",
        src: "/_dist_",
        "../../dist": "/dist",
    },

    buildOptions: {
        baseUrl: "/kahi-ui/render",
    },

    devOptions: {
        open: "none",
    },
};
