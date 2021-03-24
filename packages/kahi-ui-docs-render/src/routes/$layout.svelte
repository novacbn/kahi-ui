<script context="module">
    import {parse_aside, parse_omni} from "../server/navigation";

    export async function load() {
        const [payload_aside, payload_omni] = await Promise.all([parse_aside(), parse_omni()]);

        return {
            props: {
                aside: payload_aside,
                omni: payload_omni,
            },
        };
    }
</script>

<script>
    import "assets/styles/kahi-ui.framework.css";
    import "assets/styles/kahi-ui.theme.css";

    import {Shell} from "@kahi-ui/docs-kit/shared";

    import {META_BRANDING, META_TITLE} from "../shared/environment";

    export let aside = [];
    export let omni = {center: [], right: []};
</script>

<svelte:head>
    <title>{META_TITLE}</title>
</svelte:head>

<Shell.Container>
    <Shell.Omni branding={META_BRANDING} center={omni.center} right={omni.right} />

    <Shell.Container orientation="horizontal">
        <Shell.Aside categories={aside} />

        <Shell.Wrapper>
            <slot />
        </Shell.Wrapper>
    </Shell.Container>
</Shell.Container>
