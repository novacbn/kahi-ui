import {relative} from "path";

import type {INavigationBar, INavigationMenu} from "@kahi-ui/docs-kit/shared";
import {is_navigation_anchor, is_navigation_submenu} from "@kahi-ui/docs-kit/shared";

import {CONTENT_URL} from "../shared/environment";

import {has_content, read_content} from "./content";

export async function parse_navigation<T extends INavigationBar | INavigationMenu>(
    items: T[]
): Promise<T[]> {
    return await Promise.all(
        items.map<T | Promise<T>>(async (item) => {
            if (is_navigation_anchor(item)) {
                const {href} = item;
                let {text} = item;

                if (!text && href.startsWith(CONTENT_URL)) {
                    const path = relative(CONTENT_URL, href);
                    if (await has_content(path)) {
                        const content = await read_content(path);
                        text = content.meta.title;
                    }
                }

                return {
                    ...item,
                    href,
                    text,
                };
            } else if (is_navigation_submenu(item) && item.items.length > 0) {
                const {items: sub_items} = item;

                return {
                    ...item,
                    // @ts-expect-error - HACK: ?
                    items: await parse_navigation<T>(sub_items),
                };
            }

            return {...item};
        })
    );
}
