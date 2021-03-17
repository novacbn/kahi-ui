<script>
    import {Stack} from "@kahi-ui/svelte";

    export let orientation = null;
</script>

<svelte:head>
    <style>
        body {
            overflow: hidden;
        }
    </style>
</svelte:head>

{#if orientation == "horizontal"}
    <Stack class="shell-container" orientation="horizontal" alignment-y="stretch">
        <slot />
    </Stack>
{:else}
    <Stack class="shell-container" alignment-x="stretch">
        <slot />
    </Stack>
{/if}

<style>
    :global(.shell-container:not([data-orientation])) {
        height: 100vh;
    }

    :global(.shell-container[data-orientation]) {
        overflow: hidden;
    }
</style>
