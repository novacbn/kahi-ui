import MarkdownIt from "markdown-it";

import {CodeRenderPlugin} from "./plugins/code_render";
import {ExternalLinkPlugin} from "./plugins/external_link";
import {LocalLinkPlugin} from "./plugins/local_link";
import {SlugifyPlugin} from "./plugins/slugify";

export function compile(content) {
    const md = new MarkdownIt({
        html: true,
        linkify: true,
    });

    md.use(CodeRenderPlugin).use(LocalLinkPlugin).use(ExternalLinkPlugin).use(SlugifyPlugin);

    return md.render(content);
}
