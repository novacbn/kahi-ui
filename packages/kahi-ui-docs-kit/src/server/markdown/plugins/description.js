export function DescriptionPlugin(md, options) {
    const {renderer} = md;
    const {meta} = options;

    renderer.rules.blockquote_open = (tokens, idx) => {
        const sibling_token = tokens[idx + 2];

        if (!meta.description) meta.description = sibling_token.content.trim();
    };
}
