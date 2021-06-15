<script context="module" lang="ts">
    // HACK: Reset also... resets the CSS! Except when hydration happens...
    import "@kahi-ui/framework/dist/kahi-ui.framework.css";
    import "prismjs/themes/prism-tomorrow.css";

    import type {Load} from "@sveltejs/kit";

    import type {IAsideGet} from "../../shared/types/api";

    export const load: Load = async ({fetch}) => {
        const response = await fetch("/api/v1/meta/aside.json");
        const data = (await response.json()) as IAsideGet;

        return {
            props: {
                items: data.data,
            },
        };
    };

</script>

<script lang="ts">
    import {Text} from "@kahi-ui/framework";

    import type {INavigationMenu} from "@kahi-ui/docs-kit/shared";
    import {Shell} from "@kahi-ui/docs-kit/shared";

    import {META_BRANDING, VERSION_TAG} from "../../shared/environment";

    export let items: INavigationMenu[] = [];

</script>

<Shell.Aside branding={META_BRANDING} {items}>
    <svelte:fragment slot="footer">
        <Text is="small">
            v{VERSION_TAG}
        </Text>
    </svelte:fragment>

    <slot />
</Shell.Aside>

<style>
    :global(.shell-aside span[role="separator"]) {
        text-transform: uppercase;
    }

    :global(.shell-aside + .container > :is(h1, h2, h3, h4, h5, h6)) {
        margin-top: 1em;
        margin-bottom: 0.25em;
    }

    :global(.shell-aside + .container > blockquote),
    :global(.shell-aside + .container > p) {
        margin-top: 1em;
    }

    :global(.shell-aside + .container .snippet-highlight) {
        max-height: 35ex;
    }

    :global(.shell-aside + .container .snippet-repl) {
        width: 100%;
        height: min(60ex, 65vh);
    }

    :global(.shell-aside + .container .snippet-highlight),
    :global(.shell-aside + .container .snippet-repl) {
        margin: 1rem 0 0 0;

        border: 1px solid rgb(var(--palette-foreground-text), 0.3);
        border-radius: 0.375rem;
    }

</style>
