<script context="module">
    import {browser} from "$app/env";

    import {is_mounted, mount} from "../client/storage";

    export const prerender = true;

    export async function load({fetch}) {
        const response = await fetch("/api/v1/meta/omni.json");
        const payload = await response.json();

        if (browser && !is_mounted()) await mount();

        return {
            props: {
                mounted: false,
                omni: payload.data,
            },
        };
    }
</script>

<script>
    import "assets/styles/kahi-ui.css";
    import "assets/styles/kahi-ui.theme.css";

    import "extern/styles/highlightjs.css";

    import {navigating} from "$app/stores";

    import {Heroes, Shell} from "@kahi-ui/docs-kit/shared";

    import {META_BRANDING, META_TITLE} from "../shared/environment";

    export let omni = {center: [], right: []};
</script>

<svelte:head>
    <title>{META_TITLE}</title>
</svelte:head>

<Shell.Container>
    <Shell.Omni branding={META_BRANDING} center={omni.center} right={omni.right} />

    <!--
        NOTE: / TODO: The Application doesn't mount /until/ `load` is resolved for rehydration, meaning
        end-users will be stuck at the "Not Supported" hero until finished. So they wont know that the layout
        is in the background doing things. Like mounting storage...
    -->

    {#if $navigating}
        <Heroes.Loading />
    {:else}
        <Shell.Wrapper>
            <slot />
        </Shell.Wrapper>
    {/if}
</Shell.Container>
