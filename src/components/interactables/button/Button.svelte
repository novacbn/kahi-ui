<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {IMarginProperties} from "../../../lib/types/spacings";
    import type {DESIGN_FILL_BUTTON_VARIATION_ARGUMENT} from "../../../lib/types/variations";

    import {
        map_aria_attributes,
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../lib/util/attributes";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLAnchorElement | HTMLButtonElement | HTMLInputElement | HTMLLabelElement;

        active?: boolean;
        disabled?: boolean;

        type?: "submit";
        value?: string;

        download?: string;
        href?: string;
        rel?: string;
        target?: string;

        for?: boolean | string;

        palette?: DESIGN_PALETTE_ARGUMENT;
        size?: DESIGN_SIZE_ARGUMENT;
        variation?: DESIGN_FILL_BUTTON_VARIATION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = false;
    export let disabled: $$Props["disabled"] = false;

    export let type: $$Props["type"] = undefined;
    export let value: $$Props["value"] = "";

    export let download: $$Props["download"] = "";
    export let href: $$Props["href"] = "";
    export let rel: $$Props["rel"] = "";
    export let target: $$Props["target"] = "";

    let _for: $$Props["for"] = false;

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
        {...map_data_attributes({palette, size, variation})}
        {...map_aria_attributes({active, disabled})}
        {...map_attributes({download, href, rel, target})}
        on:click
    >
        <slot />
    </a>
{:else if _for}
    {#if _for === true}
        <label
            bind:this={element}
            {...map_global_attributes($$props)}
            role="button"
            {...map_data_attributes({palette, size, variation})}
            {...map_aria_attributes({disabled, pressed: active})}
            on:click
        >
            <slot />
        </label>
    {:else}
        <label
            bind:this={element}
            {...map_global_attributes($$props)}
            role="button"
            for={_for}
            {...map_data_attributes({palette, size, variation})}
            {...map_aria_attributes({disabled, pressed: active})}
            on:click
        >
            <slot />
        </label>
    {/if}
{:else if value}
    {#if type === "submit"}
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
