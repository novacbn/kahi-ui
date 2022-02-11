<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";

    import {behavior_button} from "../../../actions/behavior_button";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement | HTMLLabelElement;

        for?: string;

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties;

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    let _for: $$Props["for"] = undefined;
    export {_for as for};

    export let palette: $$Props["palette"] = undefined;
</script>

{#if _for}
    <label
        bind:this={element}
        {...map_global_attributes($$restProps)}
        role="button"
        class="backdrop {_class}"
        for={_for}
        {...map_data_attributes({palette})}
        use:behavior_button={{enabled: true}}
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
    />
{:else}
    <div
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="backdrop {_class}"
        {...map_data_attributes({palette})}
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
    />
{/if}
