<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import type {
        PROPERTY_TEXT_ALIGNMENT,
        PROPERTY_TEXT_TRANSFORM,
        PROPERTY_TEXT_VARIATION,
    } from "../../../types/typography";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLHeadingElement;

        is?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

        align?: PROPERTY_TEXT_ALIGNMENT;
        transform?: PROPERTY_TEXT_TRANSFORM;

        palette?: PROPERTY_PALETTE;
        variation?: PROPERTY_TEXT_VARIATION;
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

    export let is: $$Props["is"] = "h1";

    export let align: $$Props["align"] = undefined;
    export let transform: $$Props["transform"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

{#if is === "h6"}
    <h6
        bind:this={element}
        {...map_global_attributes($$props)}
        class="heading {_class}"
        {...map_data_attributes({align, palette, transform, variation})}
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
    </h6>
{:else if is === "h5"}
    <h5
        bind:this={element}
        {...map_global_attributes($$props)}
        class="heading {_class}"
        {...map_data_attributes({align, palette, transform, variation})}
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
    </h5>
{:else if is === "h4"}
    <h4
        bind:this={element}
        {...map_global_attributes($$props)}
        class="heading {_class}"
        {...map_data_attributes({align, palette, transform, variation})}
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
    </h4>
{:else if is === "h3"}
    <h3
        bind:this={element}
        {...map_global_attributes($$props)}
        class="heading {_class}"
        {...map_data_attributes({align, palette, transform, variation})}
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
    </h3>
{:else if is === "h2"}
    <h2
        bind:this={element}
        {...map_global_attributes($$props)}
        class="heading {_class}"
        {...map_data_attributes({align, palette, transform, variation})}
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
    </h2>
{:else}
    <h1
        bind:this={element}
        {...map_global_attributes($$props)}
        class="heading {_class}"
        {...map_data_attributes({align, palette, transform, variation})}
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
    </h1>
{/if}
