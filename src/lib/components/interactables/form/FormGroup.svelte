<script context="module" lang="ts">
    import {make_scoped_store} from "../../../stores/scoped";
    import {state} from "../../../stores/state";
    import type {IStateStore, IStateValue} from "../../../stores/state";

    export const CONTEXT_FORM_ID = make_scoped_store<string>("form-id");

    export const CONTEXT_FORM_NAME = make_scoped_store<string>("form-name");

    export const CONTEXT_FORM_STATE = make_scoped_store<IStateValue, IStateStore>(
        "form-state",
        undefined,
        (default_value) => state(default_value)
    );
</script>

<script lang="ts">
    import {afterUpdate, createEventDispatcher} from "svelte";

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        logic_id?: string;
        logic_name?: string;
        logic_state?: IStateValue;
    };

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let logic_id: $$Props["logic_id"] = undefined;
    export let logic_name: $$Props["logic_name"] = undefined;
    export let logic_state: $$Props["logic_state"] = undefined;

    const _form_id = CONTEXT_FORM_ID.create(logic_id);
    const _form_name = CONTEXT_FORM_NAME.create(logic_name);
    const _form_state = CONTEXT_FORM_STATE.create(logic_state);

    function on_state_property_update(state: IStateValue): void {
        if (_form_state && state !== $_form_state) {
            $_form_state = state;
            dispatch("change");
        }
    }

    function on_state_store_update(state: IStateValue): void {
        if (state !== logic_state) {
            logic_state = state;
            dispatch("change");
        }
    }

    $: if (_form_id) $_form_id = logic_id as string;
    $: if (_form_name) $_form_name = logic_name as string;

    $: if (logic_state !== undefined) on_state_property_update(logic_state);
    $: if (_form_state) on_state_store_update($_form_state ?? (logic_state as IStateValue));
</script>

<slot />
