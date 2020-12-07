const visit = require("unist-util-visit");

const NODE_TYPE_BLOCK_QUOTE = "blockquote";

const NODE_TYPE_CODE_BLOCK = "code";

const NODE_TYPE_HEADING = "heading";

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
