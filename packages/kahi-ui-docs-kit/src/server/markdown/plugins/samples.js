import {escape_html} from "../../../shared/util/html";

export function SamplesPlugin(md, options) {
    const {renderer} = md;
    const {meta} = options;

    if (!meta.samples) meta.samples = {};
    const {samples} = meta;

    renderer.rules.fence = (tokens, idx) => {
        const token = tokens[idx];

        const code = token.content.trim();
        const syntax = token.info.trim().toLowerCase();

        samples[syntax] = escape_html(code);
    };
}
