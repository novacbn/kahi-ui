<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";

    import Button from "../../interactables/button/Button.svelte";

    import MenuItem from "./MenuItem.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLLIElement;

        active?: boolean;
        disabled?: boolean;
    } & IHTML5Properties &
        IGlobalProperties;

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = false;
    export let disabled: $$Props["disabled"] = false;
</script>

<MenuItem bind:element {...$$props}>
    <Button {active} {disabled} on:click>
        <slot />
    </Button>
</MenuItem>
