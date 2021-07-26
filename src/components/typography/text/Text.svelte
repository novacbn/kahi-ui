<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {IMarginProperties} from "../../../lib/types/spacings";
    import type {
        DESIGN_TEXT_ALIGNMENT_ARGUMENT,
        DESIGN_TEXT_TRANSFORM_ARGUMENT,
        DESIGN_TEXT_VARIATION_ARGUMENT,
    } from "../../../lib/types/text";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLElement | HTMLParagraphElement | HTMLPreElement | HTMLSpanElement;

        is?:
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
            | "u";

        align?: DESIGN_TEXT_ALIGNMENT_ARGUMENT;
        transform?: DESIGN_TEXT_TRANSFORM_ARGUMENT;
        size?: DESIGN_SIZE_ARGUMENT;

        palette?: DESIGN_PALETTE_ARGUMENT;
        variation?: DESIGN_TEXT_VARIATION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    export let is: $$Props["is"] = "p";

    export let align: $$Props["align"] = undefined;
    export let transform: $$Props["transform"] = undefined;
    export let size: $$Props["size"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let variation: $$Props["variation"] = undefined;
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
