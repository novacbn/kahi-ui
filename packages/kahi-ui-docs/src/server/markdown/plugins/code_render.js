import highlightjs from "highlight.js";

const SYNTAX_HTML = "html";

function CodeRender(text, syntax) {
    const {value: rendered} = highlightjs.highlight(syntax, text);

    return `<pre class="box documentation-code-pre"><code class="hljs language-${syntax}">${rendered}</code></pre>`;
}

function SampleRender(code) {
    return `<div class="box documentation-code-sample">${code}</div>`;
}

/*function escape_html(text) {
    return text.replace(/</g, "&lt;");
    // .replace(/>/g, "&gt;");
}*/

export function CodeRenderPlugin(md) {
    const {renderer} = md;

    renderer.rules.fence = (tokens, idx) => {
        const token = tokens[idx];

        const code = token.content.trim();
        const syntax = token.info.trim().toLowerCase();

        const rendered = CodeRender(code, syntax);

        if (syntax === SYNTAX_HTML) {
            return SampleRender(code) + "\n" + rendered;
        }

        return rendered;
    };
}
