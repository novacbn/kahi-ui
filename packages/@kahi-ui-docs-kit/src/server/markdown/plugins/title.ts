import type MarkdownIt from "markdown-it";

import type {IArticleOptions} from "../article";

export function TitlePlugin(md: MarkdownIt, options: IArticleOptions) {
    const {renderer} = md;
    const {meta} = options;

    let current_level: number | null = null;

    const {heading_open} = renderer.rules;
    renderer.rules.heading_open = (tokens, idx, _options, env, self) => {
        const token = tokens[idx];
        const sibling_token = tokens[idx + 1];

        const level = token.markup.length;
        if (!current_level || current_level > level) {
            const content = sibling_token.content.trim();

            current_level = level;
            meta.title = content;
        }

        return heading_open
            ? heading_open(tokens, idx, _options, env, self)
            : self.renderToken(tokens, idx, _options);
    };
}
