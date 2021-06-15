<script context="module" lang="ts">
    // HACK: Reset also... resets the CSS! Except when hydration happens...
    import "@kahi-ui/framework/dist/kahi-ui.framework.css";

</script>

<script lang="ts">
    import {htmlpalette} from "@kahi-ui/framework";
    import {preferencetheme} from "@kahi-ui/docs-kit/shared";
    import {onMount} from "svelte";

    let mounted: boolean;

    const _htmlpalette = htmlpalette();
    const _preferencetheme = preferencetheme();

    onMount(() => (mounted = true));

    $: if (mounted) $_htmlpalette = $_preferencetheme || "light";

</script>

<slot />

<style>
    :global(:root) {
        --repl-divider-color: rgb(var(--palette-foreground-text), 0.3);
        --repl-stack-height: 100vh;
    }

    :global(.codejar-linenumbers) {
        height: max-content;
        min-height: 100%;
    }

</style>
