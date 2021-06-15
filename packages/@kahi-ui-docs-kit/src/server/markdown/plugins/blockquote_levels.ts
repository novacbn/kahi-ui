import type MarkdownIt from "markdown-it";

enum BLOCKQUOTE_PALETTES {
    important = "negative",

    note = "accent",

    warning = "alert",
}

enum BLOCKQUOTE_PREFIXES {
    important = "**important**:",

    note = "**note**:",

    warning = "**warning**:",
}

export function BlockquoteLevels(md: MarkdownIt) {
    const {renderer} = md;

    renderer.rules.blockquote_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const sibling_token = tokens[idx + 2];

        const text = sibling_token.content.trim().toLowerCase();

        // TODO: Was lazy, should extract with Regex to simplify lookup
        if (text.startsWith(BLOCKQUOTE_PREFIXES.important)) {
            token.attrSet("data-palette", BLOCKQUOTE_PALETTES.important);
        } else if (text.startsWith(BLOCKQUOTE_PREFIXES.note)) {
            token.attrSet("data-palette", BLOCKQUOTE_PALETTES.note);
        } else if (text.startsWith(BLOCKQUOTE_PREFIXES.warning)) {
            token.attrSet("data-palette", BLOCKQUOTE_PALETTES.warning);
        }

        return self.renderToken(tokens, idx, options);
    };
}
