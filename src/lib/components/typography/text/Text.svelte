<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
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
        element?: HTMLElement | HTMLParagraphElement | HTMLPreElement | HTMLSpanElement;

        is?:
            | "abbr"
            | "b"
            | "del"
            | "em"
            | "i"
            | "ins"
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

        alignment_x?: PROPERTY_TEXT_ALIGNMENT;
        transform?: PROPERTY_TEXT_TRANSFORM;
        sizing?: PROPERTY_SIZING_BREAKPOINT;

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

    export let is: $$Props["is"] = "p";

    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let transform: $$Props["transform"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

{#if is === "abbr"}
    <abbr
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </abbr>
{:else if is === "b"}
    <b
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </b>
{:else if is === "del"}
    <del
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </del>
{:else if is === "em"}
    <em
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </em>
{:else if is === "i"}
    <i
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </i>
{:else if is === "ins"}
    <ins
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </ins>
{:else if is === "mark"}
    <mark
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </mark>
{:else if is === "pre"}
    <pre
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({
            alignment_x,
            palette,
            transform,
            variation,
        })}
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
        on:pointerup>
            <slot />
    </pre>
{:else if is === "s"}
    <s
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </s>
{:else if is === "samp"}
    <samp
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </samp>
{:else if is === "small"}
    <small
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, transform, variation})}
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
    </small>
{:else if is === "span"}
    <span
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </span>
{:else if is === "strong"}
    <strong
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </strong>
{:else if is === "sub"}
    <sub
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </sub>
{:else if is === "sup"}
    <sup
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </sup>
{:else if is === "u"}
    <u
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </u>
{:else}
    <p
        bind:this={element}
        {...map_global_attributes($$restProps)}
        class="text {_class}"
        {...map_data_attributes({alignment_x, palette, sizing, transform, variation})}
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
    </p>
{/if}
