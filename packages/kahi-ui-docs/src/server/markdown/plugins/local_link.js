import {basename, extname} from "path";

import {CONTENT_INDEX} from "../../../shared/environment";

import {CONTENT_EXTENSION} from "../../environment";
import {is_url} from "../../util/url";

export function LocalLinkPlugin(md) {
    const {renderer} = md;

    renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        let href = token.attrGet("href");

        if (!is_url(href)) {
            if (extname(href) === CONTENT_EXTENSION) {
                href = href.slice(0, -CONTENT_EXTENSION.length);
            }

            if (basename(href) === CONTENT_INDEX) href = href.slice(0, -CONTENT_INDEX.length);

            token.attrSet("href", href);
        }

        return self.renderToken(tokens, idx, options);
    };
}
