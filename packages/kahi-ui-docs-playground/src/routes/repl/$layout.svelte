<script>
    import {Stack} from "@kahi-ui/svelte";

    import {PLAYGROUND_ROTATION, PLAYGROUND_VIEWS} from "../../util/constants";

    import * as Navigation from "../../components/navigation";

    export let error = null;
    export let rotation = PLAYGROUND_ROTATION.horizontal;
    export let title = "N/A";
    export let view = PLAYGROUND_VIEWS.split;
</script>

<style>
    :global(.repl-layout-stack) {
        height: 100vh;
    }
</style>

<Stack class="repl-layout-stack" alignment-x="stretch">
    <Navigation.Application />
    <Navigation.Playground bind:rotation bind:title bind:view on:change {error} />

    <slot />
</Stack>
