import type SvelteComponentDev from "*.svelte";
import type {SvelteComponent} from "svelte";

import {is_url, normalize_pathname} from "../util/url";

export interface INavigationItem {
    icon?: typeof SvelteComponent;

    text: string;

    on_click?: (event: MouseEvent) => void;
}

export interface INavigationAnchor extends INavigationItem {
    current?: boolean;

    href: string;

    is_external?: boolean;

    no_scroll?: boolean;

    prefetch?: boolean;
}

export interface INavigationSeparator {
    separator: string;
}

export interface INavigationSubMenu extends INavigationSeparator {
    items: INavigationMenu[];
}

export type INavigationBar = INavigationAnchor | INavigationItem;

export type INavigationMenu =
    | INavigationAnchor
    | INavigationItem
    | INavigationSeparator
    | INavigationSubMenu;

export function is_navigation_anchor(item: any): item is INavigationAnchor {
    return typeof item === "object" && "href" in item;
}

export function is_navigation_item(item: any): item is INavigationItem {
    return typeof item === "object" && "text" in item;
}

export function is_navigation_submenu(item: any): item is INavigationSubMenu {
    return typeof item === "object" && "items" in item && "separator" in item;
}

export function map_navigation_items<T extends INavigationBar | INavigationMenu>(
    items: T[],
    path: string,
    default_no_scroll: boolean = false,
    default_prefetch: boolean = false
): T[] {
    return items.map<T>((item) => {
        if (is_navigation_anchor(item)) {
            const {href, text} = item;
            let {
                is_external = false,
                no_scroll = default_no_scroll,
                prefetch = default_prefetch,
            } = item;

            if (!is_external) is_external = is_url(href);

            return {
                ...item,
                is_external,
                current: is_external
                    ? false
                    : normalize_pathname(href) === normalize_pathname(path),
                no_scroll: is_external ? undefined : no_scroll || undefined,
                prefetch: is_external ? undefined : prefetch || undefined,
                text: text ?? "N/A",
            };
        } else if (is_navigation_submenu(item) && item.items.length > 0) {
            const {items: sub_items, separator} = item;

            return {
                ...item,
                items: map_navigation_items<T>(
                    // @ts-expect-error - HACK: ?
                    sub_items,
                    path,
                    default_no_scroll,
                    default_prefetch
                ),
                separator: separator ?? "N/A",
            };
        } else if (is_navigation_item(item)) {
            const {text} = item;

            return {
                ...item,
                text: text ?? "N/A",
            };
        }

        return {...item};
    });
}
