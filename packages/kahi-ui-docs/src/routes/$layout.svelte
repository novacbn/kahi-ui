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

    import {Shell, substitute_value} from "@kahi-ui/docs-kit/shared";

    import {META_BRANDING, META_TITLE, VERSION_TAG, VERSION_URL} from "../shared/environment";

    export let omni = {center: [], right: []};

    const version_url = substitute_value(VERSION_URL, VERSION_TAG);
</script>

<svelte:head>
    <title>{META_TITLE}</title>
</svelte:head>

<Shell.Container>
    <Shell.Omni
        branding={META_BRANDING}
        center={omni.center}
        right={omni.right}
        version={VERSION_TAG}
        version-url={version_url}
    />

    <slot />
</Shell.Container>
