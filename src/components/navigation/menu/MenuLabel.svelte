<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";

    import FormLabel from "../../interactables/form/FormLabel.svelte";

    import MenuItem from "./MenuItem.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLLIElement;

        active?: boolean;
        disabled?: boolean;

        for?: string;

        palette?: DESIGN_PALETTE_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties;

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = false;
    export let disabled: $$Props["disabled"] = false;

    let _for: $$Props["for"] = "";
    export {_for as for};

    export let palette: $$Props["palette"] = undefined;
</script>

<MenuItem bind:element {...$$props}>
    <FormLabel for={_for} {active} {disabled} {palette} on:click>
        <slot />
    </FormLabel>
</MenuItem>
