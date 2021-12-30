<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_PLACEMENT_X} from "../../../types/placements";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {make_id_context} from "../../../stores/id";
    import {make_state_context} from "../../../stores/state";
    import {viewports} from "../../../stores/viewport";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    import Offscreen from "../../overlays/offscreen/Offscreen.svelte";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    };

    type $$Props = {
        element?: HTMLElement;

        captive?: boolean;
        dismissible?: boolean;
        logic_id?: string;
        state?: boolean;

        palette?: PROPERTY_PALETTE;
        variation?: "sticky";

        placement?: PROPERTY_PLACEMENT_X;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};

        close: {};
        open: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let captive: $$Props["captive"] = undefined;
    export let dismissible: $$Props["dismissible"] = undefined;
    export let logic_id: $$Props["logic_id"] = "";
    export let state: $$Props["state"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    export let placement: $$Props["placement"] = undefined;

    const _logic_id = make_id_context(logic_id as string);
    const _state = make_state_context(state as boolean);
    const _viewports = viewports({mobile: true, tablet: true});

    $: if (!$_viewports) state = false;
    $: $_state = state as boolean;
</script>

{#if $_logic_id}
    <Offscreen
        hidden={["mobile", "tablet"]}
        logic_id={$_logic_id}
        bind:state
        {captive}
        {dismissible}
        {placement}
        on:active
        on:dismiss
    >
        <nav
            bind:this={element}
            {...map_global_attributes($$props)}
            class="aside {_class}"
            {...map_data_attributes({palette, placement, variation})}
        >
            <slot />

            <slot name="open" />
            <slot name="close" />
        </nav>
    </Offscreen>
{:else}
    <nav
        bind:this={element}
        {...map_global_attributes($$props)}
        class="aside {_class}"
        {...map_data_attributes({palette, placement, variation})}
    >
        <slot />

        <slot name="open" />
        <slot name="close" />
    </nav>
{/if}
