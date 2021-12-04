<script lang="ts">
    /**
     * TODO: Inverse alignment / placement whenever the `Popover` leaves
     * the document's bounds.
     */

    import {createEventDispatcher, onDestroy, onMount} from "svelte";

    import type {PROPERTY_ALIGNMENT_X, PROPERTY_ALIGNMENT_Y} from "../../../types/alignments";
    import {TOKENS_ALIGNMENT_X, TOKENS_ALIGNMENT_Y} from "../../../types/alignments";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PLACEMENT} from "../../../types/placements";
    import {TOKENS_PLACEMENT} from "../../../types/placements";
    import type {PROPERTY_SPACING} from "../../../types/spacings";

    import type {IClippingEntries, IClippingHandle} from "../../../actions/clipping";
    import {clipping} from "../../../actions/clipping";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {click_outside} from "../../../actions/click_outside";

    import {make_id_context} from "../../../stores/id";
    import {make_state_context} from "../../../stores/state";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = {
        active: CustomEvent<void>;

        dismiss: CustomEvent<void>;
    } & IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement;

        dismissible?: boolean;
        logic_id?: string;
        once?: boolean;
        state?: boolean;

        placement?: PROPERTY_PLACEMENT;

        alignment_x?: PROPERTY_ALIGNMENT_X;
        alignment_y?: PROPERTY_ALIGNMENT_Y;

        spacing?: PROPERTY_SPACING;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let dismissible: $$Props["dismissible"] = undefined;
    export let logic_id: $$Props["logic_id"] = "";
    export let once: $$Props["once"] = undefined;
    export let state: $$Props["state"] = undefined;

    export let placement: $$Props["placement"] = undefined;

    export let alignment_x: $$Props["alignment_x"] = undefined;
    export let alignment_y: $$Props["alignment_y"] = undefined;

    export let spacing: $$Props["spacing"] = undefined;

    const _logic_id = make_id_context(logic_id as string);
    const _state = make_state_context(state as boolean);

    let _clipping_handle: IClippingHandle | null = null;

    let _alignment_x = alignment_x;
    let _alignment_y = alignment_y;
    let _placement = placement;

    let _clippings: IClippingEntries | null = null;

    let _previous_clippings: IClippingEntries | null = null;
    let _previous_state = state;

    function on_change(event: Event): void {
        state = (event.target as HTMLInputElement).checked;
    }

    function on_click_inside(event: MouseEvent): void {
        if (once) {
            const target = event.target as HTMLElement;
            if (target.tagName !== "LABEL" && target.getAttribute("for") !== logic_id) {
                state = false;
            }
        }
    }

    function on_click_outside(event: MouseEvent): void {
        if (state && dismissible) state = false;
    }

    function on_clip(clippings: IClippingEntries): void {
        _clippings = clippings.is_clipping ? clippings : null;
    }

    onDestroy(() => {
        if (_clipping_handle) _clipping_handle.destroy();
    });

    onMount(() => {
        // TODO: When `Popup` is converted to multi-pattern Component for upcoming
        // Context API rework, switch to using `clipping` action on a container element
        const inner_element = (element as HTMLElement).querySelector<HTMLElement>(":last-child");
        console.log({inner_element});
        if (!inner_element) return;

        _clipping_handle = clipping(inner_element, {on_clip});
    });

    $: $_state = state as boolean;

    $: {
        if (_previous_state !== state) {
            dispatch(state ? "active" : "dismiss");

            _previous_state = state;
        }
    }

    $: {
        console.log("_clippings", JSON.stringify(_clippings));
        if (_clippings) {
            if (
                !placement ||
                placement === TOKENS_PLACEMENT.bottom ||
                placement === TOKENS_PLACEMENT.top
            ) {
                if (_clippings.bottom) _placement = TOKENS_PLACEMENT.top;
                else if (_clippings.top) _placement = TOKENS_PLACEMENT.bottom;
                else _placement = placement;

                if (_clippings.left) _alignment_x = TOKENS_ALIGNMENT_X.right;
                else if (_clippings.right) _alignment_x = TOKENS_ALIGNMENT_X.left;
                else _alignment_x = alignment_x;
            } else {
                if (_clippings.left) _placement = TOKENS_PLACEMENT.right;
                else if (_clippings.right) _placement = TOKENS_PLACEMENT.left;
                else _placement = placement;

                if (_clippings.bottom) _alignment_y = TOKENS_ALIGNMENT_Y.top;
                else if (_clippings.top) _alignment_y = TOKENS_ALIGNMENT_Y.bottom;
                else _alignment_y = alignment_y;
            }
        } else {
            _alignment_x = alignment_x;
            _alignment_y = alignment_y;
            _placement = placement;
        }
    }
</script>

{#if $_logic_id}
    <input
        role="presentation"
        id={$_logic_id}
        type="checkbox"
        bind:checked={$_state}
        on:change={on_change}
    />
{/if}

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="popover {_class}"
    {...map_data_attributes({
        "alignment-x": _alignment_x,
        "alignment-y": _alignment_y,
        placement: _placement,
        spacing,
    })}
    on:click={on_click_inside}
    use:click_outside={{on_click_outside}}
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
</div>
