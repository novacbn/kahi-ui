<script lang="ts">
    // TODO: Stories (?)

    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {IPaddingProperties} from "../../../lib/types/spacings";

    import {CONTEXT_FORM_ID, get_id_context, make_id_context} from "../../../lib/stores/id";
    import {map_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLLabelElement;

        for?: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    let _for: $$Props["for"] = "";

    export {_for as for};

    const _form_id =
        get_id_context(CONTEXT_FORM_ID) ?? make_id_context(_for as string, CONTEXT_FORM_ID);

    $: if (_for) $_form_id = _for;
</script>

<label
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_attributes({for: $_form_id})}
    on:click
>
    <slot />
</label>
