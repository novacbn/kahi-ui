import {is_url} from "../../../shared/util/url";

export function ExternalLinkPlugin(md) {
    const {renderer} = md;

    renderer.rules.link_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        let href = token.attrGet("href");

        if (is_url(href)) {
            token.attrSet("target", "_blank");
            token.attrSet("rel", "noopener noreferrer");
        }

        return self.renderToken(tokens, idx, options);
    };
}
