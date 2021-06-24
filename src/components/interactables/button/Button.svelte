<script lang="ts">
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";
    import type {DESIGN_FILL_BUTTON_VARIATION_ARGUMENT} from "../../../lib/types/variations";

    import {
        map_aria_attributes,
        map_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../lib/util/attributes";

    export let element: HTMLElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let name: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;

    export let margin: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let margin_x: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_y: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let margin_top: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_left: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_bottom: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_right: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let palette: DESIGN_PALETTE_ARGUMENT | undefined = undefined;
    export let shape: undefined = undefined;
    export let size: DESIGN_SIZE_ARGUMENT | undefined = undefined;
    export let variation: DESIGN_FILL_BUTTON_VARIATION_ARGUMENT | undefined = undefined;

    export let active: boolean = false;
    export let disabled: boolean = false;

    export let type: "submit" | undefined = undefined;
    export let value: string = "";

    export let download: string = "";
    export let href: string = "";
    export let rel: string = "";
    export let target: string = "";

    export let _for: boolean | string = false;

    export {_for as for};
</script>

{#if href}
    <a
        bind:this={element}
        {...map_global_attributes($$props)}
        role="button"
        {...map_data_attributes({palette, shape, size, variation})}
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
            {...map_data_attributes({palette, shape, size, variation})}
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
            {...map_data_attributes({palette, shape, size, variation})}
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
            {...map_data_attributes({palette, shape, size, variation})}
            {...map_aria_attributes({pressed: active})}
            {...map_attributes({disabled, value})}
            on:click
        />
    {:else}
        <input
            bind:this={element}
            {...map_global_attributes($$props)}
            type="button"
            {...map_data_attributes({palette, shape, size, variation})}
            {...map_aria_attributes({pressed: active})}
            {...map_attributes({disabled, value})}
            on:click
        />
    {/if}
{:else}
    <button
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({palette, shape, size, variation})}
        {...map_aria_attributes({pressed: active})}
        {...map_attributes({disabled})}
        on:click
    >
        <slot />
    </button>
{/if}
