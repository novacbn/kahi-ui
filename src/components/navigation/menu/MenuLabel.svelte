<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";

    import FormLabel from "../../interactables/form/FormLabel.svelte";

    import MenuItem from "./MenuItem.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLLIElement;

        for?: string;
    } & IHTML5Properties &
        IGlobalProperties;

    export let element: $$Props["element"] = undefined;

    let _for: $$Props["for"] = "";
    export {_for as for};
</script>

<MenuItem bind:element {...$$props}>
    <FormLabel for={_for} on:click>
        <slot />
    </FormLabel>
</MenuItem>
