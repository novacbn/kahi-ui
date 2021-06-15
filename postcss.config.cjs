const PACKAGE = require("./package.json");

module.exports = {
    plugins: [
        require("postcss-import"),
        require("postcss-replace")({commentsOnly: true, data: {VERSION: PACKAGE.version}}),
        require("postcss-nesting"),
        require("postcss-windicss")({
            config: "./windi.config.cjs",
        }),
    ],
};
