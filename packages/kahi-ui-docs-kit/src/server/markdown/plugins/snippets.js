import hljs from "highlight.js/lib/core";
import css from "highlight.js/lib/languages/css";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";

hljs.registerLanguage("css", css);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("svelte", xml);

import {escape_html} from "../../../shared/util/html";

const SYNTAX_HTML = "html";

function CodeRender(text, syntax) {
    const {value: rendered} = hljs.highlight(syntax, text);

    return `<pre class="box snippet-code"><code class="hljs language-${syntax}">${rendered}</code></pre>`;
}

function SnippetRender(code) {
    return `<div class="box snippet-render">${code}</div>`;
}

export function SnippetsPlugin(md, options) {
    const {renderer} = md;
    const {meta} = options;

    if (!meta.snippets) meta.snippets = [];

    const {snippets} = meta;
    let count = 0;

    renderer.rules.fence = (tokens, idx) => {
        // TODO: Allow snippets to define lookup-able names somehow, in
        // place of indexing when defined
        //
        // e.g.
        //
        // ```html my-identifier
        // <b>Hello World</b>
        // ```

        const token = tokens[idx];

        const code = token.content.trim();
        const syntax = token.info.trim().toLowerCase();
        const rendered = CodeRender(code, syntax);

        snippets.push({identifier: count, script: escape_html(code)});
        count += 1;

        if (syntax === SYNTAX_HTML) {
            return SnippetRender(code) + "\n" + rendered;
        }

        return rendered;
    };
}
