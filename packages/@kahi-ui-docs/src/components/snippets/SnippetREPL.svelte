<script lang="ts">
    export let documentation: string;
    export let snippet: string;
    export let rotation: "horizontal" | "vertical" = "vertical";
</script>

<iframe
    class="snippet-repl"
    src="/repl/{documentation}/{snippet}?rotation={rotation}"
    loading="lazy"
/>
<!-- HACK: Needed for `adapter-static` to catch the embed and prerender -->
<a href="/repl/{documentation}/{snippet}?rotation={rotation}" hidden sveltekit:prefetch />

<style>
    :global(.snippet-repl) {
        width: 100%;
        height: min(80ex, 75vh);

        border: 1px solid rgb(var(--palette-foreground-text), 0.3);
        border-radius: 0.375rem;
    }
</style>
