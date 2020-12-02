<script>
    import {Stack} from "@kahi-ui/svelte";

    import {REPL_ROTATION, REPL_VIEWS} from "../../util/constants";

    import * as Navigation from "../../components/navigation";

    export let error = null;
    export let rotation = REPL_ROTATION.horizontal;
    export let title = "N/A";
    export let view = REPL_VIEWS.split;
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
