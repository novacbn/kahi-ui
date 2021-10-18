<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../types/sizes";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {DESIGN_FILL_BUTTON_VARIATION_ARGUMENT} from "../../../types/variations";

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

        palette?: DESIGN_PALETTE_ARGUMENT;
        size?: DESIGN_SIZE_ARGUMENT;
        variation?: DESIGN_FILL_BUTTON_VARIATION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

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
        on:click
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
        on:click
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
            on:click
        />
    {:else if type === "submit"}
        <input
            bind:this={element}
            {...map_global_attributes($$props)}
            type="submit"
            {...map_data_attributes({palette, size, variation})}
            {...map_aria_attributes({pressed: active})}
            {...map_attributes({disabled, value})}
            on:click
        />
    {:else}
        <input
            bind:this={element}
            {...map_global_attributes($$props)}
            type="button"
            {...map_data_attributes({palette, size, variation})}
            {...map_aria_attributes({pressed: active})}
            {...map_attributes({disabled, value})}
            on:click
        />
    {/if}
{:else}
    <button
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({palette, size, variation})}
        {...map_aria_attributes({pressed: active})}
        {...map_attributes({disabled})}
        on:click
    >
        <slot />
    </button>
{/if}
