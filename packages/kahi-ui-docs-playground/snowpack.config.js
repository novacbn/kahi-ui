const {samples} = require("./plugins/samples");

module.exports = {
    plugins: [
        "@snowpack/plugin-svelte",
        [
            "snowpack-plugin-markdown",
            {
                remark: [samples],
            },
        ],
        "@snowpack/plugin-dotenv",
    ],

    alias: {
        "@content": "../../samples",
        "@dist": "../../dist",
    },

    mount: {
        public: "/",
        src: "/_dist_",
        "../../dist": "/dist",
        "../../samples": "/samples",
    },

    buildOptions: {
        baseUrl: "/kahi-ui/playground",
    },

    devOptions: {
        open: "none",
    },
};
