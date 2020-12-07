import DOCUMENTATION_MANIFEST from "../docs.manifest";

const DOCUMENTATION_PAGES = Object.entries(DOCUMENTATION_MANIFEST).map((entry) => {
    const [identifier, document] = entry;
    const {frontmatter, html} = document;
    const {title} = frontmatter;

    return {
        html,
        title,
        identifier: identifier.slice(1),
        href: `#/documentation${identifier}`,
    };
});

export function get_page(identifier) {
    const page = DOCUMENTATION_PAGES.find((_page) => _page.identifier === identifier);
    if (!page) {
        throw new Error(
            `bad argument #0 to 'get_page' (documentation page '${identifier}' not found)`
        );
    }

    return page;
}

export function get_pages()
