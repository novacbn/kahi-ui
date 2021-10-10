<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";

    import FormGroup from "../../interactables/form/FormGroup.svelte";
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

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    let _for: $$Props["for"] = "";
    export {_for as for};

    export let palette: $$Props["palette"] = undefined;
</script>

<MenuItem bind:element {...$$props}>
    <FormGroup logic_id={_for}>
        <FormLabel {active} {disabled} {palette} on:click>
            <slot />
        </FormLabel>
    </FormGroup>
</MenuItem>
