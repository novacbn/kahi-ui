<script lang="ts">
    // TODO: Stories (?)

    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {IMarginProperties} from "../../../lib/types/spacings";

    import {CONTEXT_FORM_ID, make_id_context} from "../../../lib/stores/id";

    import {map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        logic_id?: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let logic_id: $$Props["logic_id"] = "";

    const _logic_id = make_id_context(logic_id as string, CONTEXT_FORM_ID);

    $: $_logic_id = logic_id as string;
</script>

<div bind:this={element} {...map_global_attributes($$props)} class="form-control {_class}">
    <slot />
</div>
