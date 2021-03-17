import {join} from "path";

import {is_url} from "@kahi-ui/docs-kit/shared";

import {CONTENT_INDEX, CONTENT_ROUTE} from "../shared/environment";

import {read_content, resolve_path} from "./content";
import {NAVIGATION_ASIDE, NAVIGATION_OMNI} from "./environment";

async function parse_links(links = []) {
    const promises = links.map(async (link) => {
        let {href, text = null} = link;

        let is_external = is_url(href);

        if (is_external && !text) text = "N/A";
        else if (!is_external && !text) {
            const path = href.startsWith(CONTENT_ROUTE) ? href.slice(5) : href;

            // NOTE: We need to check if it's a direct file link, or
            // a link that needs to be resolved via
            let file_path = await resolve_path(path);
            if (!file_path) file_path = await resolve_path(join(path, CONTENT_INDEX));

            if (file_path) {
                const {meta} = await read_content(file_path);
                text = meta.title;
            } else text = "N/A";
        }

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
