const visit = require("unist-util-visit");

const HIGHLIGHTJS_CLASS_TAG = "hljs";

const NODE_TYPE_HEADING = "heading";

const NODE_TYPE_PRE = "pre";

const NODE_TYPE_TEXT = "text";

function child_visit(tree, parent, child, callback) {
    visit(tree, parent, (node) => {
        visit(node, child, callback);
    });
}

module.exports.docs = function docs(options = {}) {
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

            parentClassName.push("documentation-code-pre");
            node.properties.className = parentClassName;
        });
    };
};
