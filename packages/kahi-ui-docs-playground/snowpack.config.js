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
        "@samples": "../../samples",
    },

    mount: {
        public: "/",
        src: "/_dist_",
        "../../samples": "/samples",
    },

    buildOptions: {
        baseUrl: "/kahi-ui/playground",
    },

    devOptions: {
        open: "none",
    },
};
