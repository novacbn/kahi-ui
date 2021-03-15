import MarkdownIt from "markdown-it";

import matter from "gray-matter";
import json5 from "json5";
import toml from "toml";

import {FRONTMATTER_FENCE, FRONTMATTER_LANGUAGE} from "../environment";

import {CodeRenderPlugin} from "./plugins/code_render";
import {ExternalLinkPlugin} from "./plugins/external_link";
import {LocalLinkPlugin} from "./plugins/local_link";
import {SlugifyPlugin} from "./plugins/slugify";
import {TitlePlugin} from "./plugins/title";

const MATTER_OPTIONS = {
    delims: FRONTMATTER_FENCE,
    language: FRONTMATTER_LANGUAGE,
    engines: {
        json5: json5.parse.bind(json5),
        toml: toml.parse.bind(toml),
    },
};

export function extract_frontmatter(text) {
    const {content, data} = matter(text, MATTER_OPTIONS);

    return {
        content,
        frontmatter: data,
    };
}

export function normalize_metadata(frontmatter, meta) {
    const {title = "N/A"} = meta;

    const btime = frontmatter.btime ? Date.parse(frontmatter.btime) : null;
    const mtime = frontmatter.mtime ? Date.parse(frontmatter.mtime) : null;

    return {
        title: frontmatter.title ?? title,
        btime,
        mtime,
    };
}

export function compile(text) {
    const {content, frontmatter} = extract_frontmatter(text);
    const md = new MarkdownIt({
        html: true,
        linkify: true,
    });

    const options = {
        cache: {
            heading: null,
        },

        meta: {
            title: null,
        },
    };

    md.use(CodeRenderPlugin)
        .use(LocalLinkPlugin)
        .use(ExternalLinkPlugin)
        .use(SlugifyPlugin)
        .use(TitlePlugin, options);

    const render = md.render(content);
    const meta = normalize_metadata(frontmatter, options.meta);

    return {
        meta,
        render,
    };
}
