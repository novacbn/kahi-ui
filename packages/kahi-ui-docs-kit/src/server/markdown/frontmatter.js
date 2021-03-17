import matter from "gray-matter";
import json5 from "json5";
import toml from "toml";

const GRAYMATTER_OPTIONS = {
    engines: {
        json5: json5.parse.bind(json5),
        toml: toml.parse.bind(toml),
    },
};

function FrontmatterOptions(options = {}) {
    const {fence = ["---", "---"], syntax = "yaml"} = options;

    return {fence, syntax};
}

export function extract_frontmatter(text, options = {}) {
    options = FrontmatterOptions(options);

    const graymatter_options = {
        ...GRAYMATTER_OPTIONS,
        delims: options.fence,
        language: options.syntax,
    };

    const {content, data} = matter(text, graymatter_options);

    return {
        frontmatter: data,
        content,
    };
}
