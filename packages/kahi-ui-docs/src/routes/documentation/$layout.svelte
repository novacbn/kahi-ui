<script>
    import {Stack} from "@kahi-ui/svelte";

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

        border: var(--box-border) hsl(var(--box-block-border-color));
        max-height: 30ex;
    }

    .documentation-wrapper :global(.documentation-code-pre *::selection) {
        background-color: hsl(var(--document-root-color));
        color: hsl(var(--document-root-background));
    }
</style>

<Stack orientation="horizontal">
    <Navigation.Documentation />

    <div class="documentation-wrapper">
        <main class="container">
            <slot />
        </main>
    </div>
</Stack>
