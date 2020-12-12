const visit = require("unist-util-visit");

const HIGHLIGHTJS_CLASS_TAG = "hljs-tag";

const NODE_TYPE_CODE_BLOCK = "code";

const NODE_TYPE_CODE_INLINE = "inlineCode";

const NODE_TYPE_TEXT = "text";

const TAG_NAME_SPAN = "span";

function escape_code(node, replacements) {
    for (const replacement of replacements) {
        const [expression, sub] = replacement;

        node.value = node.value.replace(expression, sub);
    }
}

function CodeOptions(options = {}) {
    let {block = false, inline = true, replacements = []} = options;

    replacements = [
        [/</g, "&lt;"],
        //[/>/g, "&gt;"],
        ...replacements,
    ];

    return {block, inline, replacements};
}

exports.code = function code(options = {}) {
    const {block, inline, replacements} = CodeOptions(options);

    return (tree) => {
        if (block) {
            visit(tree, NODE_TYPE_CODE_BLOCK, (node) => escape_code(node, replacements));
        }

        if (inline) {
            visit(tree, NODE_TYPE_CODE_INLINE, (node) => escape_code(node, replacements));
        }
    };
};

exports.code_highlightjs = function code_highlightjs(options = {}) {
    const {replacements} = CodeOptions(options);

    return (tree) => {
        visit(tree, (node) => {
            const {properties = {}, tagName} = node;
            const {className = []} = properties;
            if (tagName !== TAG_NAME_SPAN || !className.includes(HIGHLIGHTJS_CLASS_TAG)) return;

            visit(node, NODE_TYPE_TEXT, (child) => escape_code(child, replacements));
        });
    };
};
