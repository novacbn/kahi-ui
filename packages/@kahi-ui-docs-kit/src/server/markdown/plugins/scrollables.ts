import type MarkdownIt from "markdown-it";
import "prismjs/components/prism-bash.js";

import type {IArticleOptions} from "../article";

export function ScrollablesPlugin(md: MarkdownIt, options: IArticleOptions) {
    const {renderer} = md;

    renderer.rules.table_close = (tokens, idx, options, env, self) => {
        const markup = self.renderToken(tokens, idx, options);

        return `${markup}</div>`;
    };

    renderer.rules.table_open = (tokens, idx, options, env, self) => {
        const markup = self.renderToken(tokens, idx, options);

        return `<div class="scrollable">${markup}`;
    };
}
