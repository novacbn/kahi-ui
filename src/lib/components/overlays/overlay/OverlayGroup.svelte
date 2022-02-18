<script context="module" lang="ts">
    import type {PROPERTY_BEHAVIOR_LOADING_LAZY} from "../../../types/behaviors";
    import type {PROPERTY_REFERENCE_TARGET} from "../../../types/references";

    import {make_scoped_store} from "../../../stores/scoped";

    export const CONTEXT_OVERLAY_ID = make_scoped_store<string>("overlay-id");

    export const CONTEXT_OVERLAY_STATE = make_scoped_store<boolean>("overlay-state");

    export const CONTEXT_OVERLAY_FOCUS_FIRST =
        make_scoped_store<PROPERTY_REFERENCE_TARGET>("overlay-focus-first");

    export const CONTEXT_OVERLAY_FOCUS_LAST =
        make_scoped_store<PROPERTY_REFERENCE_TARGET>("overlay-first-last");

    export const CONTEXT_OVERLAY_FOCUS_TARGET =
        make_scoped_store<PROPERTY_REFERENCE_TARGET>("overlay-focus-target");

    export const CONTEXT_OVERLAY_DISMISSIBLE = make_scoped_store<boolean>("overlay-dismissible");

    export const CONTEXT_OVERLAY_LOADING =
        make_scoped_store<PROPERTY_BEHAVIOR_LOADING_LAZY>("overlay-loading");

    export const CONTEXT_OVERLAY_ONCE = make_scoped_store<boolean>("overlay-once");
</script>

<script lang="ts">
    import {createEventDispatcher} from "svelte";

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        logic_id?: string;
        logic_state?: boolean;

        focus_first?: PROPERTY_REFERENCE_TARGET;
        focus_last?: PROPERTY_REFERENCE_TARGET;
        focus_target?: PROPERTY_REFERENCE_TARGET;

        dismissible?: boolean;
        loading?: PROPERTY_BEHAVIOR_LOADING_LAZY;
        once?: boolean;
    };

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let logic_id: $$Props["logic_id"] = undefined;
    export let logic_state: $$Props["logic_state"] = undefined;

    export let focus_first: $$Props["focus_first"] = undefined;
    export let focus_last: $$Props["focus_last"] = undefined;
    export let focus_target: $$Props["focus_target"] = undefined;

    export let dismissible: $$Props["dismissible"] = undefined;
    export let loading: $$Props["loading"] = undefined;
    export let once: $$Props["once"] = undefined;

    const _overlay_id = CONTEXT_OVERLAY_ID.create(logic_id);
    const _overlay_state = CONTEXT_OVERLAY_STATE.create(logic_state);

    const _overlay_focus_first = CONTEXT_OVERLAY_FOCUS_FIRST.create(focus_first);
    const _overlay_focus_last = CONTEXT_OVERLAY_FOCUS_LAST.create(focus_last);
    const _overlay_focus_target = CONTEXT_OVERLAY_FOCUS_TARGET.create(focus_target);

    const _overlay_dismissible = CONTEXT_OVERLAY_DISMISSIBLE.create(dismissible);
    const _overlay_loading = CONTEXT_OVERLAY_LOADING.create(loading);
    const _overlay_once = CONTEXT_OVERLAY_ONCE.create(once);

    function on_state_property_update(state: boolean): void {
        if (_overlay_state && state !== $_overlay_state) {
            $_overlay_state = state;
            dispatch("change");
        }
    }

    function on_state_store_update(state: boolean): void {
        if (state !== logic_state) {
            logic_state = state;
            dispatch("change");
        }
    }

    $: if (_overlay_id) $_overlay_id = logic_id as string;

    $: if (_overlay_focus_first) $_overlay_focus_first = focus_first as PROPERTY_REFERENCE_TARGET;
    $: if (_overlay_focus_last) $_overlay_focus_last = focus_last as PROPERTY_REFERENCE_TARGET;
    $: if (_overlay_focus_target)
        $_overlay_focus_target = focus_target as PROPERTY_REFERENCE_TARGET;

    $: if (_overlay_dismissible) $_overlay_dismissible = dismissible as boolean;
    $: if (_overlay_loading) $_overlay_loading = loading as PROPERTY_BEHAVIOR_LOADING_LAZY;
    $: if (_overlay_once) $_overlay_once = once as boolean;

    $: if (logic_state !== undefined) on_state_property_update(logic_state);
    $: if (_overlay_state) on_state_store_update($_overlay_state ?? (logic_state as boolean));
</script>

<slot />
