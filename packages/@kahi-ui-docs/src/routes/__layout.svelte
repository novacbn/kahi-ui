<script context="module" lang="ts">
    import {browser} from "$app/env";
    import {htmlpalette} from "@kahi-ui/framework";
    import {get} from "svelte/store";

    import {preferencetheme} from "@kahi-ui/docs-kit/shared";

    const _htmlpalette = htmlpalette();
    const _preferencetheme = preferencetheme();

    if (browser) {
        const theme = get(_preferencetheme);
        if (theme) document.documentElement.setAttribute("data-palette", theme);

        _htmlpalette.subscribe((value) => {
            _preferencetheme.set(value as any);
        });
    }

</script>

<script lang="ts">
    import {Book} from "svelte-feather/components/Book";
    import {Github} from "svelte-feather/components/Github";
    import {Package} from "svelte-feather/components/Package";

    import type {INavigationBar} from "@kahi-ui/docs-kit/shared";
    import {Shell, append_pathname} from "@kahi-ui/docs-kit/shared";

    import {
        CONTENT_INITIAL,
        CONTENT_TEXT,
        CONTENT_URL,
        META_BRANDING,
        META_TITLE,
        NAVIGATION_OMNI,
        RELEASES_ENABLED,
        RELEASES_URL,
        REPOSITORY_ENABLED,
        REPOSITORY_URL,
    } from "../shared/environment";

    let _center_items: INavigationBar[];
    $: {
        _center_items = [
            ...NAVIGATION_OMNI.center,
            {
                href: append_pathname(CONTENT_URL, CONTENT_INITIAL),
                icon: Book,
                text: CONTENT_TEXT,
            },
        ];
    }

    let _right_items: INavigationBar[];
    $: {
        _right_items = [...NAVIGATION_OMNI.right];

        if (REPOSITORY_ENABLED) {
            _right_items.push({
                href: REPOSITORY_URL,
                icon: Github,
                text: "GitHub",
            });
        }

        if (RELEASES_ENABLED) {
            _right_items.push({
                href: RELEASES_URL,
                icon: Package,
                text: "Releases",
            });
        }
    }

</script>

<svelte:head>
    <title>{META_TITLE}</title>
</svelte:head>

<Shell.Omni branding={META_BRANDING} center_items={_center_items} right_items={_right_items}>
    <slot />
</Shell.Omni>
