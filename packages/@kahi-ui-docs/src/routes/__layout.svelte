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
    import "@kahi-ui/framework/dist/kahi-ui.framework.css";
    import "prismjs/themes/prism-tomorrow.css";

    import {Shell} from "@kahi-ui/docs-kit/shared";

    import {META_BRANDING, META_TITLE, NAVIGATION_OMNI} from "../shared/environment";

</script>

<svelte:head>
    <title>{META_TITLE}</title>
</svelte:head>

<Shell.Omni
    branding={META_BRANDING}
    center_items={NAVIGATION_OMNI.center}
    right_items={NAVIGATION_OMNI.right}
>
    <slot />
</Shell.Omni>
