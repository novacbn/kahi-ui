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

    import {Container, Stack} from "@kahi-ui/svelte";

    import * as Navigation from "../../components/navigation";

    export let aside = [];
</script>

<Stack class="documentation-wrapper" alignment-y="stretch" orientation="horizontal">
    <Navigation.Documentation categories={aside} />

    <div>
        <Container as="main" viewport="tiny+medium">
            <slot />
        </Container>
    </div>
</Stack>

<style>
    :global(.documentation-wrapper) {
        overflow: hidden;
    }

    :global(.documentation-wrapper) > div {
        flex-grow: 1;
        overflow: auto;
    }

    :global(.documentation-wrapper) :global(.documentation-code-pre) {
        padding: 0;

        max-height: 30ex;

        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    :global(.documentation-wrapper) :global(.documentation-code-pre > code) {
        padding: var(--box-padding);
    }

    :global(.documentation-wrapper) :global(.documentation-code-sample) {
        margin-bottom: 0;

        border-bottom: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    :global(.documentation-wrapper) > :global(.container > table code) {
        white-space: nowrap;
    }
</style>
