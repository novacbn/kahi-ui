<script context="module" lang="ts">
    import {state} from "../../../stores/state2";
    import type {IStateStore, IStateValue} from "../../../stores/state2";

    import {make_scoped_store} from "../../../util/store";

    const SYMBOL_FORM_ID = Symbol.for("kahi-ui-form-id");

    const SYMBOL_FORM_NAME = Symbol.for("kahi-ui-form-name");

    const SYMBOL_FORM_STATE = Symbol.for("kahi-ui-form-state");

    export const CONTEXT_FORM_ID = make_scoped_store<string>(SYMBOL_FORM_ID);

    export const CONTEXT_FORM_NAME = make_scoped_store<string>(SYMBOL_FORM_NAME);

    export const CONTEXT_FORM_STATE = make_scoped_store<IStateValue, IStateStore>(
        SYMBOL_FORM_STATE,
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

    const _form_id = logic_id !== undefined ? CONTEXT_FORM_ID.create(logic_id) : null;
    const _form_name = logic_name !== undefined ? CONTEXT_FORM_NAME.create(logic_name) : null;
    const _form_state = logic_state !== undefined ? CONTEXT_FORM_STATE.create(logic_state) : null;

    if (_form_state) {
        afterUpdate(() => {
            $_form_state = logic_state ?? "";
        });
    }

    $: if (_form_id) $_form_id = logic_id ?? "";
    $: if (_form_name) $_form_name = logic_name ?? "";

    $: if (_form_state) {
        if (logic_state !== $_form_state) {
            logic_state = $_form_state;

            dispatch("change");
        }
    }
</script>

<slot />
