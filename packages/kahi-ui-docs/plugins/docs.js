const visit = require("unist-util-visit");

const HIGHLIGHTJS_CLASS_TAG = "hljs";

const NODE_TYPE_CODE_BLOCK = "code";

const NODE_TYPE_HEADING = "heading";

const NODE_TYPE_PRE = "pre";

const NODE_TYPE_TEXT = "text";

function RenderedSample(code) {
    return {
        type: "html",
        value: `<div class="box documentation-code-sample">
${code}
</div>`,
    };
}

function child_visit(tree, parent, child, callback) {
    visit(tree, parent, (node) => {
        visit(node, child, callback);
    });
}

module.exports.docs_frontmatter = function docs(options = {}) {
    const processor = this;
    const frontmatter = processor.data("frontmatter");

    return (tree) => {
        child_visit(tree, NODE_TYPE_HEADING, NODE_TYPE_TEXT, (node) => {
            if (!frontmatter.has("title")) frontmatter.set("title", node.value);
        });
    };
};

module.exports.docs_pre = function docs_pre(options = {}) {
    return (tree) => {
        visit(tree, (node) => {
            const {children = [], tagName} = node;
            const [child] = children;
            if (tagName !== NODE_TYPE_PRE || !child) return;

            const {properties = {}} = child;
            const {className = []} = properties;
            if (!className.includes(HIGHLIGHTJS_CLASS_TAG)) return;

            const {className: parentClassName = []} = node;

            parentClassName.push("box", "documentation-code-pre");
            node.properties.className = parentClassName;
        });
    };
};

module.exports.docs_samples = function docs_sample(options = {}) {
    return (tree) => {
        const {children} = tree;
        const renders = new Map();

        visit(tree, NODE_TYPE_CODE_BLOCK, (node, index) => {
            const {lang, value} = node;
            if (lang !== "html") return;

            const sample = RenderedSample(value);
            renders.set(node, sample);
        });

        for (const render of renders) {
            const [node, sample] = render;
            const index = children.indexOf(node);

            children.splice(index, 0, sample);
        }
    };
};
