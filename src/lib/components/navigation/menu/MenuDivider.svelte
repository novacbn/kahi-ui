<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";

    import Divider from "../../layouts/divider/Divider.svelte";

    import MenuItem from "./MenuItem.svelte";

    type $$Props = {
        element?: HTMLLIElement;
    } & IHTML5Properties &
        IGlobalProperties;

    export let element: $$Props["element"] = undefined;
</script>

<MenuItem bind:element {...$$props}>
    {#if $$slots["default"]}
        <Divider>
            <slot />
        </Divider>
    {:else}
        <Divider />
    {/if}

    <slot name="sub-menu" />
</MenuItem>
