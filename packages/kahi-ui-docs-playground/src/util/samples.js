import SAMPLES_MANIFEST from "../samples.manifest";

export const SAMPLE_SYNTAXES = {
    html: "html",
    svelte: "svelte",
};

export function get_default_sample() {
    const sample = SAMPLES_MANIFEST[0];
    const {FRONTMATTER} = sample[SAMPLE_SYNTAXES.html];
    const {description, script, title} = FRONTMATTER;

    return {
        description,
        script,
        title,
        syntax: SAMPLE_SYNTAXES.html,
    };
}

export function get_samples(syntax) {
    const samples = SAMPLES_MANIFEST.filter((sample) => sample[syntax]);

    return samples.map((sample) => {
        const {FRONTMATTER} = sample[syntax];
        const {description, script, title} = FRONTMATTER;

        return {
            description,
            script,
            syntax,
            title,
        };
    });
}
