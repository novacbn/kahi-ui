import MarkdownIt from "markdown-it";

import {extract_frontmatter} from "./frontmatter";

import {DescriptionPlugin} from "./plugins/description";
import {TitlePlugin} from "./plugins/title";
import {SamplesPlugin} from "./plugins/samples";

function SampleOptions(options = {}) {
    const {frontmatter = {}} = options;

    return {frontmatter};
}

export function normalize_metadata(frontmatter, meta) {
    const {description = "N/A", samples = {html: null, svelte: null}, title = "N/A"} = meta;

    return {
        title: frontmatter.title ?? title,
        description: frontmatter.description ?? description,
        samples: frontmatter.samples ?? samples,
    };
}

export function parse_sample(text, options = {}) {
    options = SampleOptions(options);

    const {content, frontmatter} = extract_frontmatter(text, options.frontmatter);

    const md = new MarkdownIt({
        html: true,
        linkify: false,
    });

    const meta = {};
    const plugin_options = {meta};

    md.use(TitlePlugin, plugin_options)
        .use(DescriptionPlugin, plugin_options)
        .use(SamplesPlugin, plugin_options);

    md.render(content);
    return normalize_metadata(frontmatter, meta);
}
