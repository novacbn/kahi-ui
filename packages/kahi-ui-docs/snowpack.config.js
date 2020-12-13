const highlight = require("remark-highlight.js");
const gfm = require("remark-gfm");

const {code, code_highlightjs} = require("./plugins/code");
const {docs_frontmatter, docs_pre, docs_samples} = require("./plugins/docs");

module.exports = {
    plugins: [
        "@snowpack/plugin-svelte",
        [
            "snowpack-plugin-markdown",
            {
                remark: [docs_frontmatter, gfm, docs_samples, code, highlight],
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
