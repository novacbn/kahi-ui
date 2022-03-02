<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import type {PROPERTY_VARIATION_POPOVER} from "../../../types/variations";

    import Box from "../../surfaces/box/Box.svelte";
    import * as Popover from "../../overlays/popover";
    import Scrollable from "../../layouts/scrollable/Scrollable.svelte";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    } & IHTML5Events;

    type $$Props = {
        element?: HTMLDivElement;

        logic_id?: string;
        logic_state?: boolean;

        palette?: PROPERTY_PALETTE;
        variation?: PROPERTY_VARIATION_POPOVER;
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

    export let logic_id: $$Props["logic_id"] = undefined;
    export let logic_state: $$Props["logic_state"] = false;

    export let palette: $$Props["palette"] = undefined;
    export let variation: $$Props["variation"] = undefined;
</script>

<Popover.Container
    bind:element
    {...$$restProps}
    class="drop-down {_class}"
    {logic_id}
    {variation}
    bind:logic_state
    dismissible
    on:active
    on:dismiss
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
    <slot name="activator" />

    <Popover.Section alignment_x="right" spacing="small">
        <Box elevation="medium" variation="borders" radius="tiny" {palette}>
            <Scrollable padding="medium">
                <slot />
            </Scrollable>
        </Box>
    </Popover.Section>
</Popover.Container>
