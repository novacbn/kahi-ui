import MarkdownIt from "markdown-it";

import {extract_frontmatter} from "./frontmatter";

import {ExternalLinkPlugin} from "./plugins/external_link";
import {LocalLinkPlugin} from "./plugins/local_link";
import {SectionsPlugin} from "./plugins/sections";
import {SnippetsPlugin} from "./plugins/snippets";
import {TitlePlugin} from "./plugins/title";

function ArticleOptions(options = {}) {
    const {frontmatter = {}, links = {}} = options;
    const {extensions = [], indexes = []} = links;

    return {
        frontmatter,

        links: {
            extensions,
            indexes,
        },
    };
}

export function normalize_metadata(frontmatter, meta) {
    const {sections = [], snippets = [], title = "N/A"} = meta;

    const btime = frontmatter.btime ? Date.parse(frontmatter.btime) : null;
    const mtime = frontmatter.mtime ? Date.parse(frontmatter.mtime) : null;

    return {
        title: frontmatter.title ?? title,
        btime,
        mtime,
        sections,
        snippets,
    };
}

export function render_article(text, options = {}) {
    options = ArticleOptions(options);

    const {content, frontmatter} = extract_frontmatter(text, options.frontmatter);

    const md = new MarkdownIt({
        html: true,
        linkify: true,
    });

    let meta = {};
    const plugin_options = {meta, links: options.links};

    md.use(TitlePlugin, plugin_options)
        .use(LocalLinkPlugin, plugin_options)
        .use(ExternalLinkPlugin)
        .use(SectionsPlugin, plugin_options)
        .use(SnippetsPlugin, plugin_options);

    const render = md.render(content);
    meta = normalize_metadata(frontmatter, meta);

    return {
        meta,
        render,
    };
}
