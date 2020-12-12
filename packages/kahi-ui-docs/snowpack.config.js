const highlight = require("remark-highlight.js");

const {code_highlightjs} = require("./plugins/code");
const {docs, docs_pre} = require("./plugins/docs");

module.exports = {
    plugins: [
        "@snowpack/plugin-svelte",
        [
            "snowpack-plugin-markdown",
            {
                remark: [docs, highlight],
                rehype: [code_highlightjs, docs_pre],
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
