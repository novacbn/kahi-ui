<script context="module" lang="ts">
    import {make_scoped_store} from "../../../stores/scoped";

    export const CONTEXT_TAB_ID = make_scoped_store<string>("tab-id");

    export const CONTEXT_TAB_NAME = make_scoped_store<string>("tab-name");

    export const CONTEXT_TAB_STATE = make_scoped_store<string>("tab-state");
</script>

<script lang="ts">
    import {afterUpdate, createEventDispatcher} from "svelte";

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

    if (_tab_state) {
        afterUpdate(() => {
            $_tab_state = logic_state ?? "";
        });
    }

    $: if (_tab_id) $_tab_id = logic_id ?? "";
    $: if (_tab_name) $_tab_name = logic_name ?? "";

    $: if (_tab_state && logic_state !== $_tab_state) {
        logic_state = $_tab_state;

        dispatch("change");
    }
</script>

<slot />
