<script lang="ts">
    // TODO: Stories (?)

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";

    import FormGroup from "../form/FormGroup.svelte";

    type $$Props = {
        element?: HTMLDivElement;

        logic_id?: string;
        logic_name?: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let logic_id: $$Props["logic_id"] = undefined;
    export let logic_name: $$Props["logic_name"] = undefined;
</script>

<div bind:this={element} {...map_global_attributes($$props)} class="form-control {_class}">
    <FormGroup {logic_id} {logic_name}>
        <slot />
    </FormGroup>
</div>
