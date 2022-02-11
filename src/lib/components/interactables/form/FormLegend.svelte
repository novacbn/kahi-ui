<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLLegendElement | HTMLSpanElement;

        is?: "legend" | "span";
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let is: $$Props["is"] = undefined;
</script>

{#if is === "span"}
    <span
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="form--legend {_class}"
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
    </span>
{:else}
    <legend
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="form--legend {_class}"
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
    </legend>
{/if}
