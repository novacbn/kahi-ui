<script lang="ts">
    import {afterUpdate} from "svelte";

    import type {DESIGN_ALIGNMENT_X_SINGULAR_ARGUMENT} from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_SIZING_ARGUMENT} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IFormStateValue} from "../../../stores/formstate";
    import {make_formstate_context} from "../../../stores/formstate";
    import {CONTEXT_FORM_NAME, make_id_context} from "../../../stores/id";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        logic_name?: string;
        logic_state?: IFormStateValue;

        sizing?: DESIGN_SIZING_ARGUMENT;

        alignment_x?: DESIGN_ALIGNMENT_X_SINGULAR_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let logic_name: $$Props["logic_name"] = "";
    export let logic_state: $$Props["logic_state"] = "";

    export let sizing: $$Props["sizing"] = undefined;

    export let alignment_x: $$Props["alignment_x"] = undefined;

    const _form_name = make_id_context(logic_name as string, CONTEXT_FORM_NAME);
    const _form_state = make_formstate_context(logic_state as IFormStateValue);

    afterUpdate(() => {
        $_form_state = logic_state as IFormStateValue;
    });

    $: $_form_name = logic_name as string;
    $: logic_state = $_form_state;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="tab {_class}"
    {...map_data_attributes({"alignment-x": alignment_x, sizing})}
>
    <slot />
</div>
