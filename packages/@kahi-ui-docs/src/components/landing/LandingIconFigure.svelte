<script lang="ts">
    import {Box, Figure} from "@kahi-ui/framework";
    import type {SvelteComponent} from "svelte";
    import type {SvelteComponentDev} from "svelte/internal";

    export let icon: SvelteComponent | SvelteComponentDev;

</script>

<Figure class="landing-icon-figure" variation="icon" shape="pill">
    <Box palette="accent" padding="medium" width="content-max">
        <svelte:component this={icon} size="1.25rem" />
    </Box>
</Figure>

<style>
    :global(figure.landing-icon-figure > .box) {
        display: flex;
        align-items: center;
        justify-content: center;
    }

</style>
