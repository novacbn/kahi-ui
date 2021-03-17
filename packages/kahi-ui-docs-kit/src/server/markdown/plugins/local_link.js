import {basename, extname} from "path";

import {is_url} from "../../../shared/util/url";

export function LocalLinkPlugin(md, options) {
    const {renderer} = md;

    const {links} = options;
    const {indexes, extensions} = links;

    renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        let href = token.attrGet("href");

        if (!is_url(href)) {
            const extension = extname(extensions);
            if (extensions.include(extension)) href = href.slice(0, -extension.length);

            const name = basename(href);
            if (indexes.includes(name)) href = href.slice(0, -name.length);

            token.attrSet("href", href);
        }

        return self.renderToken(tokens, idx, options);
    };
}
