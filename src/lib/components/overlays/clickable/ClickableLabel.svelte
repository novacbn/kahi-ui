<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";

    import {
        map_aria_attributes,
        map_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import FormGroup from "../../interactables/form/FormGroup.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;

        for?: string;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = undefined;
    export {_class as class};

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    let _for: $$Props["for"] = undefined;
    export {_for as for};
</script>

<label
    bind:this={element}
    {...map_global_attributes($$props)}
    class="clickable-item {_class}"
    {...map_attributes({for: _for})}
    {...map_aria_attributes({disabled, pressed: active})}
    on:click
>
    <FormGroup logic_id={_for}>
        <slot />
    </FormGroup>
</label>
