<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {
        PROPERTY_RADIUS_BREAKPOINT,
        PROPERTY_SHAPE_BREAKPOINT,
    } from "../../../types/shapes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {PROPERTY_VARIATION_BUTTON} from "../../../types/variations";

    import {behavior_button} from "../../../actions/behavior_button";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {
        map_aria_attributes,
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLAnchorElement | HTMLButtonElement | HTMLInputElement | HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;

        type?: "reset" | "submit";
        value?: string;

        download?: string;
        href?: string;
        rel?: string;
        target?: string;

        for?: string;

        palette?: PROPERTY_PALETTE;
        radius?: PROPERTY_RADIUS_BREAKPOINT;
        shape?: PROPERTY_SHAPE_BREAKPOINT;
        sizing?: PROPERTY_SIZING_BREAKPOINT;
        variation?: PROPERTY_VARIATION_BUTTON;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export let tabindex: $$Props["tabindex"] = 0;
    export {_class as class};

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    export let type: $$Props["type"] = undefined;
    export let value: $$Props["value"] = "";

    export let download: $$Props["download"] = undefined;
    export let href: $$Props["href"] = undefined;
    export let rel: $$Props["rel"] = undefined;
    export let target: $$Props["target"] = undefined;

    let _for: $$Props["for"] = undefined;
    export {_for as for};

    export let palette: $$Props["palette"] = undefined;
    export let radius: $$Props["radius"] = undefined;
    export let shape: $$Props["shape"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    // HACK: Svelte has `tabindex` typed as `number | undefined` unless
    // you pass a string literal into the markup
    $: _tabindex = tabindex as number | undefined;
</script>

{#if href}
    <a
        bind:this={element}
        {...map_global_attributes($$props)}
        role="button"
        class="button {_class}"
        {...map_data_attributes({palette, radius, shape, sizing, variation})}
        {...map_aria_attributes({active, disabled})}
        {download}
        {href}
        {rel}
        {target}
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
    </a>
{:else if _for}
    <label
        bind:this={element}
        {...map_global_attributes($$props)}
        role="button"
        class="button {_class}"
        for={_for}
        tabindex={_tabindex}
        {...map_data_attributes({palette, radius, shape, sizing, variation})}
        {...map_aria_attributes({disabled, pressed: active})}
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
    >
        <slot />
    </label>
{:else if value}
    {#if type === "reset"}
        <input
            bind:this={element}
            {...map_global_attributes($$props)}
            class="button {_class}"
            type="reset"
            {...map_data_attributes({palette, radius, shape, sizing, variation})}
            {...map_aria_attributes({pressed: active})}
            {...map_attributes({disabled, value})}
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
    {:else if type === "submit"}
        <input
            bind:this={element}
            {...map_global_attributes($$props)}
            class="button {_class}"
            type="submit"
            {...map_data_attributes({palette, radius, shape, sizing, variation})}
            {...map_aria_attributes({pressed: active})}
            {...map_attributes({disabled, value})}
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
        <input
            bind:this={element}
            {...map_global_attributes($$props)}
            class="button {_class}"
            type="button"
            {...map_data_attributes({palette, radius, shape, sizing, variation})}
            {...map_aria_attributes({pressed: active})}
            {...map_attributes({disabled, value})}
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
{:else}
    <button
        bind:this={element}
        {...map_global_attributes($$props)}
        class="button {_class}"
        {...map_data_attributes({palette, radius, shape, sizing, variation})}
        {...map_aria_attributes({pressed: active})}
        {...map_attributes({disabled})}
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
    </button>
{/if}
