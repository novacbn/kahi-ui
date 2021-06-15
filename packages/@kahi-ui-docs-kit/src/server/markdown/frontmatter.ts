import matter from "gray-matter";
import toml from "@iarna/toml";

export interface IFrontmatterOptions {
    fence: string[];

    syntax: string;
}

const GRAYMATTER_OPTIONS = {
    engines: {
        toml: toml.parse.bind(toml),
    },
};

export function FrontmatterOptions(
    options: Partial<IFrontmatterOptions> = {}
): IFrontmatterOptions {
    const {fence = ["+++", "+++"], syntax = "toml"} = options;

    return {fence, syntax};
}

export function extract_frontmatter(text: string, options: IFrontmatterOptions) {
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
