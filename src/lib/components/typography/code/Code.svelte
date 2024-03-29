<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement | HTMLPreElement;

        is?: "code" | "pre";

        palette?: PROPERTY_PALETTE;
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

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let is: $$Props["is"] = undefined;

    export let palette: $$Props["palette"] = undefined;
</script>

{#if is === "pre"}
    <pre
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="code {_class}"
        {...map_data_attributes({
            palette,
        })}><code
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
        ><slot /></code></pre>
{:else}
    <code
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="code {_class}"
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
    >
        <slot />
    </code>
{/if}
