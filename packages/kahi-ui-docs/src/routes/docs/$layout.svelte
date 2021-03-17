<script context="module">
    export const prerender = true;

    export async function load({fetch}) {
        const response = await fetch("/api/v1/meta/aside.json");
        const payload = await response.json();

        return {
            props: {
                aside: payload.data,
            },
        };
    }
</script>

<script>
    import "extern/styles/highlightjs.css";

    import {Shell} from "@kahi-ui/docs-kit/shared";
    import {Container} from "@kahi-ui/svelte";

    export let aside = [];
</script>

<Shell.Container orientation="horizontal">
    <Shell.Aside categories={aside} />

    <Shell.Wrapper>
        <Container as="main" class="documentation-container" viewport="tiny+medium">
            <slot />
        </Container>
    </Shell.Wrapper>
</Shell.Container>

<style>
    :global(.documentation-container .snippet-code) {
        padding: 0;

        max-height: 30ex;

        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    :global(.documentation-container .snippet-code > code) {
        padding: var(--box-padding);
    }

    :global(.documentation-container .snippet-render) {
        margin-bottom: 0;

        border-bottom: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :global(.documentation-container > table code) {
        white-space: nowrap;
    }
</style>
