export function TitlePlugin(md, options) {
    const {renderer} = md;
    const {cache, meta} = options;

    renderer.rules.heading_open = (tokens, idx, _options, env, self) => {
        const token = tokens[idx];
        const sibling_token = tokens[idx + 1];

        const level = token.markup.length;
        if (!cache.heading || cache.heading > level) {
            const content = sibling_token.content.trim();

            cache.heading = level;
            meta.title = content;
        }

        return self.renderToken(tokens, idx, _options);
    };
}
