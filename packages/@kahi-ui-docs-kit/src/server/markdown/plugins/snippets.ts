import GithubSlugger from "github-slugger";
import type MarkdownIt from "markdown-it";
import Prism from "prismjs";

import {escape_html} from "../../../shared/util/html";
import {hash_sha256} from "../../util/crypto";

import "../syntaxes/prism-bash";
import "../syntaxes/prism-svelte";

import type {IArticleOptions} from "../article";

enum SNIPPET_MODES {
    default = "default",

    repl = "repl",
}

function HighlightSnippet(
    text: string,
    syntax: string,
    identifier: string,
    document_identifier: string
) {
    const rendered = Prism.highlight(text, Prism.languages[syntax], syntax);

    return `<pre class="language-${syntax} snippet-highlight" data-document=${document_identifier} data-identifier="${identifier}"><code class="language-${syntax}">${rendered}</code></pre>`;
}

function REPLSnippet(identifier: string, document_identifier: string): string {
    // HACK: Hidden anchor is needed for `adapter-static` to catch the embed and prerender

    return `<iframe class="snippet-repl" data-document=${document_identifier} data-identifier="${identifier}" src="/repl/${document_identifier}/${identifier}?rotation=horizontal" loading="lazy"></iframe>
    <a href="/repl/${document_identifier}/${identifier}?rotation=horizontal" hidden sveltekit:prefetch></a>`;
}

function ProcessSnippet(
    text: string,
    syntax: string,
    mode: SNIPPET_MODES,
    identifier: string,
    document_identifier: string
): string {
    if (mode === SNIPPET_MODES.repl) return REPLSnippet(identifier, document_identifier);
    return HighlightSnippet(text, syntax, identifier, document_identifier);
}

export function SnippetsPlugin(md: MarkdownIt, options: IArticleOptions) {
    const {renderer} = md;
    const {identifier: document_identifier} = options;
    const {snippets} = options.meta;

    // HACK: It's more of a convention that that Markdown documentation's file name
    // is the same as slugged title. So this /can/ error out if not aligned properly.
    const slugger = new GithubSlugger();

    renderer.rules.fence = (tokens, idx) => {
        const token = tokens[idx];

        const code = (token.content as string).trim();
        const info = (token.info as string).trim().split(" ");
        const hash = hash_sha256(code);

        const [syntax, mode = SNIPPET_MODES.default, ...rest] = info;
        const title = rest.length > 0 ? rest.join(" ") : hash;
        const identifier = slugger.slug(title);

        snippets.push({
            identifier,
            script: escape_html(code),
            syntax,
            title,
        });

        return ProcessSnippet(code, syntax, mode as SNIPPET_MODES, identifier, document_identifier);
    };
}
