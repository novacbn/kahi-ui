import GithubSlugger from "github-slugger";

export function SlugifyPlugin(md) {
    const {renderer} = md;
    const slugger = new GithubSlugger();

    renderer.rules.heading_open = (tokens, idx, options, env, self) => {
        const token = tokens[idx];
        const sibling_token = tokens[idx + 1];

        const {content} = sibling_token;
        const slug = slugger.slug(content);

        token.attrSet("id", slug);
        return self.renderToken(tokens, idx, options);
    };
}
