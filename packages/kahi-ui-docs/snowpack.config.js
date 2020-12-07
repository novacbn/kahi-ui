const {docs} = require("./plugins/docs");

module.exports = {
    plugins: [
        "@snowpack/plugin-svelte",
        [
            "snowpack-plugin-markdown",
            {
                remark: [docs],
            },
        ],
        "@snowpack/plugin-dotenv",
    ],

    alias: {
        "@content": "../../docs",
        "@dist": "../../dist",
    },

    mount: {
        public: "/",
        src: "/_dist_",
        "../../docs": "/docs",
        "../../dist": "/dist",
    },

    buildOptions: {
        baseUrl: "/kahi-ui",
    },

    devOptions: {
        open: "none",
    },
};
