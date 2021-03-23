const PACKAGE = require("./package.json");

module.exports = {
    plugins: [
        require("postcss-replace")({commentsOnly: true, data: {VERSION: PACKAGE.version}}),
        require("autoprefixer")(),
    ],
};
