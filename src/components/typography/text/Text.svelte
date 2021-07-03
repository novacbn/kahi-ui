<script lang="ts">
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {DESIGN_INTRINSIC_SIZING_ARGUMENT} from "../../../lib/types/sizings";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";
    import type {
        DESIGN_TEXT_ALIGNMENT_ARGUMENT,
        DESIGN_TEXT_TRANSFORM_ARGUMENT,
        DESIGN_TEXT_VARIATION_ARGUMENT,
    } from "../../../lib/types/text";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

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
    export let padding: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let padding_x: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let padding_y: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let padding_top: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let padding_left: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let padding_bottom: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let padding_right: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let height: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;
    export let max_height: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;
    export let min_height: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;

    export let width: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;
    export let max_width: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;
    export let min_width: DESIGN_INTRINSIC_SIZING_ARGUMENT | undefined = undefined;

    export let align: DESIGN_TEXT_ALIGNMENT_ARGUMENT | undefined = undefined;
    export let is:
        | "abbr"
        | "b"
        | "del"
        | "em"
        | "i"
        | "ins"
        | "kbd"
        | "mark"
        | "p"
        | "pre"
        | "s"
        | "samp"
        | "small"
        | "span"
        | "strong"
        | "sub"
        | "sup"
        | "u" = "p";
    export let size: DESIGN_SIZE_ARGUMENT | undefined = undefined;
    export let transform: DESIGN_TEXT_TRANSFORM_ARGUMENT | undefined = undefined;
    export let variation: DESIGN_TEXT_VARIATION_ARGUMENT | undefined = undefined;

    export let palette: DESIGN_PALETTE_ARGUMENT | undefined = undefined;
</script>

{#if is === "abbr"}
    <abbr
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </abbr>
{:else if is === "b"}
    <b
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </b>
{:else if is === "del"}
    <del
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </del>
{:else if is === "em"}
    <em
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </em>
{:else if is === "i"}
    <i
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </i>
{:else if is === "ins"}
    <ins
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </ins>
{:else if is === "kbd"}
    <kbd
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </kbd>
{:else if is === "mark"}
    <mark
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </mark>
{:else if is === "pre"}
    <pre
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({
            align,
            palette,
            size,
            transform,
            variation,
        })}>
            <slot />
    </pre>
{:else if is === "s"}
    <s
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </s>
{:else if is === "samp"}
    <samp
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </samp>
{:else if is === "small"}
    <small
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </small>
{:else if is === "span"}
    <span
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </span>
{:else if is === "strong"}
    <strong
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </strong>
{:else if is === "sub"}
    <sub
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </sub>
{:else if is === "sup"}
    <sup
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </sup>
{:else if is === "u"}
    <u
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </u>
{:else}
    <p
        bind:this={element}
        {...map_global_attributes($$props)}
        {...map_data_attributes({align, palette, size, transform, variation})}
    >
        <slot />
    </p>
{/if}
