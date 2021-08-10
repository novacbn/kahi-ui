<script lang="ts">
    /**
     * TODO: Now that `Popover` exists, need to redo the collapse functionality of
     * `Omni.Container` to something specialized. Thinking a full-screen blinder that
     * uses `clip-path` as the effect.
     *
     * Ideally it's something that should be convertable into a standalone Overlays Component
     * so it's reusable elsewhere as a wrapper transition. However with `Omni`, the wrapper would
     * have to be nested in the `Omni.Container` layout. Rather than used as a wrapper like how
     * `Aside.Container` is set up...
     */

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../types/palettes";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {make_id_context} from "../../../stores/id";
    import {make_state_context} from "../../../stores/state";
    import {viewports} from "../../../stores/viewport";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    import ContextBackdrop from "../../utilities/contextbackdrop/ContextBackdrop.svelte";

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

    const _logic_id = make_id_context(logic_id as string);
    const _state = make_state_context(state as boolean);
    const _viewports = viewports({mobile: true, tablet: true});

    function on_input(event: Event) {
        state = (event.target as HTMLInputElement).checked;
    }

    $: if (!$_viewports) state = false;
    $: $_state = state as boolean;
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
    class="omni {_class}"
    {...map_data_attributes({palette, variation})}
>
    <slot />
</nav>
