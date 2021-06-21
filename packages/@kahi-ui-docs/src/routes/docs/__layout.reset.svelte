<script context="module" lang="ts">
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
    import {Anchor, Container, Spacer, Text} from "@kahi-ui/framework";

    import type {INavigationMenu} from "@kahi-ui/docs-kit/shared";
    import {Shell, substitute_value} from "@kahi-ui/docs-kit/shared";

    import {
        META_BRANDING,
        VERSION_ENABLED,
        VERSION_TAG,
        VERSION_URL,
    } from "../../shared/environment";

    import LandingFooter from "../../components/landing/LandingFooter.svelte";

    export let items: INavigationMenu[] = [];

    $: _version_url = VERSION_ENABLED ? substitute_value(VERSION_URL, VERSION_TAG) : null;

</script>

<Shell.Aside branding={META_BRANDING} {items}>
    <svelte:fragment slot="footer">
        {#if _version_url}
            <Anchor href={_version_url} rel="noopener noreferrer" target="_blank">
                <Text is="small">
                    v{VERSION_TAG}
                </Text>
            </Anchor>
        {:else}
            <Text is="small">
                v{VERSION_TAG}
            </Text>
        {/if}
    </svelte:fragment>

    <main>
        <Container
            class="documentation-container"
            viewport={["mobile", "widescreen:desktop"]}
            margin_x="auto"
            padding_bottom="large"
        >
            <slot />
        </Container>

        <Spacer />
        <LandingFooter />
    </main>
</Shell.Aside>

<style>
    main {
        display: flex;

        flex-direction: column;
        flex-grow: 1;
    }

    :global(.shell-aside span[role="separator"]) {
        text-transform: uppercase;
    }

    :global(.documentation-container > :is(h1, h2, h3, h4, h5, h6)) {
        margin-top: 1em;
        margin-bottom: 0.25em;
    }

    :global(.documentation-container > blockquote),
    :global(.documentation-container > p) {
        margin-top: 1em;
    }

    :global(.documentation-container > table) {
        margin-top: 1rem;
    }

    :global(.documentation-container > .snippet-highlight) {
        max-height: 35ex;
    }

    :global(.documentation-container > .snippet-repl) {
        width: 100%;
        height: min(60ex, 65vh);
    }

    :global(.documentation-container > .snippet-highlight),
    :global(.documentation-container > .snippet-repl) {
        margin: 1rem 0 0 0;

        border: 1px solid rgb(var(--palette-foreground-text), 0.3);
        border-radius: 0.375rem;
    }

</style>
