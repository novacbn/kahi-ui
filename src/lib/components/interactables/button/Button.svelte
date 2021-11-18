<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {PROPERTY_VARIATION_BUTTON} from "../../../types/variations";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {
        map_aria_attributes,
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    type $$Events = {
        click: MouseEvent;
    };

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
        size?: PROPERTY_SIZING;
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
    export let size: $$Props["size"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

{#if href}
    <a
        bind:this={element}
        {...map_global_attributes($$props)}
        role="button"
        class="button {_class}"
        {...map_data_attributes({palette, size, variation})}
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
        {...map_data_attributes({palette, size, variation})}
        {...map_aria_attributes({disabled, pressed: active})}
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
            type="reset"
            {...map_data_attributes({palette, size, variation})}
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
            type="submit"
            {...map_data_attributes({palette, size, variation})}
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
            type="button"
            {...map_data_attributes({palette, size, variation})}
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
        {...map_data_attributes({palette, size, variation})}
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
