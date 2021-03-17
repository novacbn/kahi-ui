import GithubSlugger from "github-slugger";

export function SectionsPlugin(md, options) {
    const {renderer} = md;
    const {meta} = options;

    const slugger = new GithubSlugger();

    if (!meta.sections) meta.sections = [];
    const {sections} = meta;

    const {heading_open} = renderer.rules;
    renderer.rules.heading_open = (tokens, idx, _options, env, self) => {
        const token = tokens[idx];
        const sibling_token = tokens[idx + 1];

        const level = token.markup.length;

        const {content} = sibling_token;
        const slug = slugger.slug(content);

        token.attrSet("id", slug);
        sections.push({identifier: slug, level, text: content});

        return heading_open
            ? heading_open(tokens, idx, _options, env, self)
            : self.renderToken(tokens, idx, _options);
    };
}
