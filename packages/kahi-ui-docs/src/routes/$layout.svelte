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

    import {Shell} from "@kahi-ui/docs-kit/shared";

    import {META_BRANDING, META_TITLE} from "../shared/environment";

    export let omni = {center: [], right: []};
</script>

<svelte:head>
    <title>{META_TITLE}</title>
</svelte:head>

<Shell.Container>
    <Shell.Omni branding={META_BRANDING} center={omni.center} right={omni.right} />

    <slot />
</Shell.Container>
