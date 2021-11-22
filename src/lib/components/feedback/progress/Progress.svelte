<script lang="ts">
    // TODO: Investigate SVG 2 support, the `cx`, `cy`, `r` attributes could be inlined
    // in the CSS stylesheet

    // TODO: Hopefully in the future where `attr` is supported everywhere in CSS
    // rules, we can drop the `--value` scheme

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement;

        value?: number | string;

        palette?: PROPERTY_PALETTE;
        shape?: "circle";
        size?: PROPERTY_SIZING;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let style: $$Props["style"] = undefined;

    export let value: $$Props["value"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let shape: $$Props["shape"] = undefined;
    export let size: $$Props["size"] = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes({
        ...$$props,
        style: `${style ? `${style};` : ""}${value ? `--value:${value};` : ""}`,
    })}
    role="progressbar"
    {...map_aria_attributes({valuemax: 1, valuemin: 0, valuenow: value})}
    {...map_data_attributes({palette, size})}
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
    {#if shape === "circle"}
        <svg viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="14" />
            <circle cx="16" cy="16" r="14" />
        </svg>
    {/if}
</div>
