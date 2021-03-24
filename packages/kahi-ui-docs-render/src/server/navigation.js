import {is_url} from "@kahi-ui/docs-kit/shared";

import {NAVIGATION_ASIDE, NAVIGATION_OMNI} from "./environment";

async function parse_links(links = []) {
    const promises = links.map(async (link) => {
        let {href, text = null} = link;

        let is_external = is_url(href);
        if (!text) text = "N/A";

        return {
            href,
            is_external,
            text,
        };
    });

    return Promise.all(promises);
}

export async function parse_aside() {
    const promises = NAVIGATION_ASIDE.map(async (category) => {
        let {text = "N/A", links = []} = category;

        links = await parse_links(links);

        return {
            text,
            links,
        };
    });

    return Promise.all(promises);
}

export async function parse_omni() {
    let {center = [], right = []} = NAVIGATION_OMNI;

    [center, right] = await Promise.all([parse_links(center), parse_links(right)]);

    return {
        center,
        right,
    };
}
