<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_PLACEMENT_X_ARGUMENT} from "../../../lib/types/placements";
    import type {IIntrinsicProperties} from "../../../lib/types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../lib/types/spacings";

    import {make_id_context} from "../../../lib/stores/id";
    import {make_state_context} from "../../../lib/stores/state";
    import {viewports} from "../../../lib/stores/viewport";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

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

        palette?: DESIGN_PALETTE_ARGUMENT;
        variation?: "sticky";

        placement?: DESIGN_PLACEMENT_X_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let captive: $$Props["captive"] = false;
    export let dismissible: $$Props["dismissible"] = false;
    export let logic_id: $$Props["logic_id"] = "";
    export let state: $$Props["state"] = false;

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
    </nav>
{/if}
