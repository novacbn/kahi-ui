<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLTableCellElement;

        colspan?: number | string;
        rowspan?: number | string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let colspan: $$Props["colspan"] = undefined;
    export let rowspan: $$Props["rowspan"] = undefined;
</script>

<th
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_attributes({colspan, rowspan})}
    use:forward_actions={{actions}}
    on:click
    on:contextmenu
    on:dblclick
    on:focusin
    on:focusout
    on:keydown
    on:keyup
    on:pointercancel
    on:pointerdown
    on:pointerenter
    on:pointerleave
    on:pointermove
    on:pointerout
    on:pointerup
>
    <slot />
</th>
