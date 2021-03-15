<script context="module">
    export const prerender = true;

    export async function load({fetch}) {
        const response = await fetch("/api/v1/meta/omni.json");
        const payload = await response.json();

        return {
            props: {
                omni: payload.data,
            },
        };
    }
</script>

<script>
    import "assets/styles/kahi-ui.css";
    import "assets/styles/kahi-ui.theme.css";

    import {Stack} from "@kahi-ui/svelte";

    import {META_TITLE} from "../shared/environment";

    import * as Navigation from "../components/navigation";

    export let omni = {center: [], right: []};
</script>

<svelte:head>
    <title>{META_TITLE}</title>
</svelte:head>

<Stack class="shell-wrapper" alignment-x="stretch" alignment-y="stretch">
    <Navigation.Landing center={omni.center} right={omni.right} />

    <slot />
</Stack>

<style>
    :global(body) {
        overflow: hidden;
    }

    :global(.shell-wrapper) {
        height: 100vh;
    }
</style>
