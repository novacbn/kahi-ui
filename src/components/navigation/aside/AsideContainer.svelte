<script lang="ts">
    import {make_id_context} from "../../../lib/stores/id";
    import {make_state_context} from "../../../lib/stores/state";
    import {viewports} from "../../../lib/stores/viewport";

    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_INTRINSIC_SIZING_ARGUMENT} from "../../../lib/types/sizings";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    import ContextBackdrop from "../../utilities/contextbackdrop/ContextBackdrop.svelte";

    export let element: HTMLElement | null = null;

    let _class: string = "";
    export let id: string = "";
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

    export let captive: boolean = false;
    export let dismissible: boolean = false;
    export let logic_id: string = "";
    export let palette: DESIGN_PALETTE_ARGUMENT | undefined = undefined;
    export let state: boolean = false;
    export let variation: "sticky" | undefined = undefined;

    const _logic_id = make_id_context(logic_id);
    const _state = make_state_context(state);
    const _viewports = viewports({mobile: true, tablet: true});

    function on_input(event: Event) {
        state = (event.target as HTMLInputElement).checked;
    }

    $: if (!$_viewports) state = false;
    $: $_state = state;

</script>

{#if $_logic_id}
    <input
        role="presentation"
        id={$_logic_id}
        type="checkbox"
        bind:checked={$_state}
        on:input={on_input}
    />

    {#if captive}
        <ContextBackdrop {dismissible} />
    {/if}
{/if}

<nav
    bind:this={element}
    {...map_global_attributes($$props)}
    class="aside {_class}"
    {...map_data_attributes({palette, variation})}
>
    <slot />
</nav>
