import {extname} from "path";

import type MarkdownIt from "markdown-it";

import {is_url} from "../../../shared/util/url";
import type {IArticleOptions} from "../article";

export interface ILocalLinkOptions {
    extensions: string[];
}

export function LocalLinkPlugin(md: MarkdownIt, options: IArticleOptions) {
    const {renderer} = md;
    const {link_open} = renderer.rules;

    const {links} = options;
    const {extensions} = links;

    renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        let href = token.attrGet("href") ?? "";

        if (!is_url(href)) {
            const extension = extname(href);
            if (extensions.includes(extension)) {
                href = href.slice(0, -extension.length);
                //if (href.startsWith("./")) href = "." + href;
            }

            token.attrSet("href", href);
        }

        return link_open
            ? link_open(tokens, idx, options, env, self)
            : self.renderToken(tokens, idx, options);
    };
}
