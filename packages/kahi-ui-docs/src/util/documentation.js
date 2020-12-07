import DOCUMENTATION_MANIFEST from "../docs.manifest";

const DOCUMENTATION_CATEGORIES = Array.from(
    new Set(
        Object.entries(DOCUMENTATION_MANIFEST).map((entry, index) => {
            const [identifier] = entry;
            const last_index = identifier.indexOf("/");

            return last_index > -1 ? identifier.slice(0, last_index) : identifier;
        })
    )
);

const DOCUMENTATION_PAGES = Object.fromEntries(
    Object.entries(DOCUMENTATION_MANIFEST).map((entry, index) => {
        const [identifier, page] = entry;
        const {FRONTMATTER, HTML} = page;
        const {title = "Unknown Document"} = FRONTMATTER;

        return [
            identifier,
            {
                identifier,
                title,
                html: HTML,
                href:
                    identifier === "framework"
                        ? "#/documentation"
                        : `#/documentation/${identifier}`,
            },
        ];
    })
);

const DOCUMENTATION_CATEGORIZED = (() => {
    const pages = Object.values(DOCUMENTATION_PAGES);

    return DOCUMENTATION_CATEGORIES.map((category, index) => {
        return {
            category,
            pages: pages.filter((page) => page.identifier.startsWith(category)),
        };
    });
})();

export function get_categories() {
    return [...DOCUMENTATION_CATEGORIES];
}

export function get_page(identifier = "") {
    if (identifier === "") identifier = "framework";
    const page = DOCUMENTATION_PAGES[identifier];

    if (!page) {
        throw new Error(
            `bad argument #0 to 'get_page' (documentation page '${identifier}' not found)`
        );
    }

    return page;
}

export function get_pages() {
    return [...DOCUMENTATION_CATEGORIZED];
}
