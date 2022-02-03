<script context="module" lang="ts">
    import type {PROPERTY_BEHAVIOR_LOADING_LAZY} from "../../../types/behaviors";
    import type {PROPERTY_REFERENCE_TARGET} from "../../../types/references";
    import type {PROPERTY_VARIATION_POPOVER} from "../../../types/variations";

    import {make_scoped_store} from "../../../stores/scoped";

    export const CONTEXT_POPOVER_ID = make_scoped_store<string>("popover-id");

    export const CONTEXT_POPOVER_STATE = make_scoped_store<boolean>("popover-state");

    export const CONTEXT_POPOVER_FOCUS_TARGET =
        make_scoped_store<PROPERTY_REFERENCE_TARGET>("popover-focus-target");

    export const CONTEXT_POPOVER_DISMISSIBLE = make_scoped_store<boolean>("popover-dismissible");

    export const CONTEXT_POPOVER_LOADING =
        make_scoped_store<PROPERTY_BEHAVIOR_LOADING_LAZY>("popover-loading");

    export const CONTEXT_POPOVER_ONCE = make_scoped_store<boolean>("popover-once");

    export const CONTEXT_POPOVER_VARIATION =
        make_scoped_store<PROPERTY_VARIATION_POPOVER>("popover-variation");
</script>

<script lang="ts">
    import {createEventDispatcher} from "svelte";

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        logic_id?: string;
        logic_state?: boolean;

        focus_target?: PROPERTY_REFERENCE_TARGET;

        dismissible?: boolean;
        loading?: PROPERTY_BEHAVIOR_LOADING_LAZY;
        once?: boolean;

        variation?: PROPERTY_VARIATION_POPOVER;
    };

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let logic_id: $$Props["logic_id"] = undefined;
    export let logic_state: $$Props["logic_state"] = undefined;

    export let focus_target: $$Props["focus_target"] = undefined;

    export let dismissible: $$Props["dismissible"] = undefined;
    export let loading: $$Props["loading"] = undefined;
    export let once: $$Props["once"] = undefined;

    export let variation: $$Props["variation"] = undefined;

    const _popover_id = CONTEXT_POPOVER_ID.create(logic_id);
    const _popover_state = CONTEXT_POPOVER_STATE.create(logic_state);

    const _popover_focus_target = CONTEXT_POPOVER_FOCUS_TARGET.create(focus_target);

    const _popover_dismissible = CONTEXT_POPOVER_DISMISSIBLE.create(dismissible);
    const _popover_loading = CONTEXT_POPOVER_LOADING.create(loading);
    const _popover_once = CONTEXT_POPOVER_ONCE.create(once);

    const _popover_variation = CONTEXT_POPOVER_VARIATION.create(variation);

    function on_state_property_update(state: boolean): void {
        if (_popover_state && state !== $_popover_state) {
            $_popover_state = state;
            dispatch("change");
        }
    }

    function on_state_store_update(state: boolean): void {
        if (state !== logic_state) {
            logic_state = state;
            dispatch("change");
        }
    }

    $: if (_popover_id) $_popover_id = logic_id as string;

    $: if (_popover_focus_target)
        $_popover_focus_target = focus_target as PROPERTY_REFERENCE_TARGET;

    $: if (_popover_dismissible) $_popover_dismissible = dismissible as boolean;
    $: if (_popover_loading) $_popover_loading = loading as PROPERTY_BEHAVIOR_LOADING_LAZY;
    $: if (_popover_once) $_popover_once = once as boolean;

    $: if (_popover_variation) $_popover_variation = variation as PROPERTY_VARIATION_POPOVER;

    $: if (logic_state !== undefined) on_state_property_update(logic_state);
    $: if (_popover_state) on_state_store_update($_popover_state);
</script>

<slot />
