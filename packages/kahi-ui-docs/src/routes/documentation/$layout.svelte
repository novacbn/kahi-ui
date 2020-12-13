<script>
    import {Container, Stack} from "@kahi-ui/svelte";

    import * as Navigation from "../../components/navigation";
</script>

<style>
    .documentation-wrapper {
        flex-grow: 1;
        height: 100vh;

        overflow-x: hidden;
        overflow-y: auto;
    }

    .documentation-wrapper :global(.documentation-code-pre) {
        padding: 0;

        max-height: 30ex;

        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .documentation-wrapper :global(.documentation-code-pre > code) {
        padding: var(--box-padding);

        background: transparent;
    }

    .documentation-wrapper :global(.documentation-code-sample) {
        margin-bottom: 0;

        border-bottom: none;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
    }

    .documentation-wrapper > :global(.container > table code) {
        white-space: nowrap;
    }
</style>

<Stack orientation="horizontal">
    <Navigation.Documentation />

    <div class="documentation-wrapper">
        <Container as="main" viewport="tiny+medium">
            <slot />
        </Container>
    </div>
</Stack>
