<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import Box from "../../surfaces/box/Box.svelte";
    import Scrollable from "../../layouts/scrollable/Scrollable.svelte";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    } & IHTML5Events;

    type $$Props = {
        element?: HTMLDivElement;

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};

        activator: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let palette: $$Props["palette"] = undefined;
</script>

<Box
    bind:element
    {...$$restProps}
    class="inlay {_class}"
    variation="borders"
    radius="tiny"
    {palette}
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
    <Scrollable padding="medium" size="100">
        <slot />
    </Scrollable>
</Box>
