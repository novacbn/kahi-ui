<script context="module" lang="ts">
    import {make_scoped_store} from "../../../stores/scoped";

    export const CONTEXT_TAB_ID = make_scoped_store<string>("tab-id");

    export const CONTEXT_TAB_NAME = make_scoped_store<string>("tab-name");

    export const CONTEXT_TAB_STATE = make_scoped_store<string>("tab-state");
</script>

<script lang="ts">
    import {createEventDispatcher} from "svelte";

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        logic_id?: string;
        logic_name?: string;
        logic_state?: string;
    };

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let logic_id: $$Props["logic_id"] = undefined;
    export let logic_name: $$Props["logic_name"] = undefined;
    export let logic_state: $$Props["logic_state"] = undefined;

    const _tab_id = CONTEXT_TAB_ID.create(logic_id);
    const _tab_name = CONTEXT_TAB_NAME.create(logic_name);
    const _tab_state = CONTEXT_TAB_STATE.create(logic_state);

    function on_state_property_update(state: string): void {
        if (_tab_state && state !== $_tab_state) {
            $_tab_state = state;
            dispatch("change");
        }
    }

    function on_state_store_update(state: string): void {
        if (state !== logic_state) {
            logic_state = state;
            dispatch("change");
        }
    }

    $: if (_tab_id) $_tab_id = logic_id as string;
    $: if (_tab_name) $_tab_name = logic_name as string;

    $: if (logic_state !== undefined) on_state_property_update(logic_state);
    $: if (_tab_state) on_state_store_update($_tab_state ?? (logic_state as string));
</script>

<slot />
