<script context="module" lang="ts">
    import type {PROPERTY_BEHAVIOR_TOGGLE} from "../../../types/behaviors";

    import {make_scoped_store} from "../../../stores/scoped";
    import type {IStateStore, IStateValue} from "../../../stores/state2";
    import {state} from "../../../stores/state2";

    export const CONTEXT_ACCORDION_BEHAVIOR =
        make_scoped_store<PROPERTY_BEHAVIOR_TOGGLE>("accordion-behavior");

    export const CONTEXT_ACCORDION_ID = make_scoped_store<string>("accordion-id");

    export const CONTEXT_ACCORDION_NAME = make_scoped_store<string>("accordion-name");

    export const CONTEXT_ACCORDION_STATE = make_scoped_store<IStateValue, IStateStore>(
        "accordion-state",
        (default_value) => state(default_value)
    );
</script>

<script lang="ts">
    import {afterUpdate, createEventDispatcher} from "svelte";

    import {TOKENS_BEHAVIOR_TOGGLE} from "../../../types/behaviors";

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        logic_id?: string;
        logic_name?: string;
        logic_state?: string | string[];

        behavior?: PROPERTY_BEHAVIOR_TOGGLE;
    };

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let logic_id: $$Props["logic_id"] = undefined;
    export let logic_name: $$Props["logic_name"] = undefined;
    export let logic_state: $$Props["logic_state"] = undefined;

    export let behavior: $$Props["behavior"] = undefined;

    const _accordion_id = CONTEXT_ACCORDION_ID.create(logic_id);
    const _accordion_name = CONTEXT_ACCORDION_NAME.create(logic_name);
    const _accordion_state = CONTEXT_ACCORDION_STATE.create(logic_state);

    const _accordion_behavior = CONTEXT_ACCORDION_BEHAVIOR.create(behavior);

    if (_accordion_state) {
        afterUpdate(() => {
            $_accordion_state = logic_state ?? "";
        });
    }

    $: if (_accordion_id) $_accordion_id = logic_id ?? "";
    $: if (_accordion_name) $_accordion_name = logic_name ?? "";

    $: if (_accordion_behavior) $_accordion_behavior = behavior ?? TOKENS_BEHAVIOR_TOGGLE.exclusive;

    $: if (_accordion_state) {
        if (logic_state !== $_accordion_state) {
            logic_state = $_accordion_state;

            dispatch("change");
        }
    }
</script>

<slot />
