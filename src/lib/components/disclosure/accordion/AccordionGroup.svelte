<script context="module" lang="ts">
    import type {IStateStore, IStateValue} from "../../../stores/state2";
    import {state} from "../../../stores/state2";

    import {make_scoped_store} from "../../../util/store";

    const SYMBOL_ACCORDION_BEHAVIOR = Symbol.for("kahi-ui-accordion-behavior");

    const SYMBOL_ACCORDION_ID = Symbol.for("kahi-ui-accordion-id");

    const SYMBOL_ACCORDION_NAME = Symbol.for("kahi-ui-accordion-name");

    const SYMBOL_ACCORDION_STATE = Symbol.for("kahi-ui-accordion-state");

    export const CONTEXT_ACCORDION_BEHAVIOR =
        make_scoped_store<"exclusive" | "inclusive">(SYMBOL_ACCORDION_BEHAVIOR);

    export const CONTEXT_ACCORDION_ID = make_scoped_store<string>(SYMBOL_ACCORDION_ID);

    export const CONTEXT_ACCORDION_NAME = make_scoped_store<string>(SYMBOL_ACCORDION_NAME);

    export const CONTEXT_ACCORDION_STATE = make_scoped_store<IStateValue, IStateStore>(
        SYMBOL_ACCORDION_STATE,
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
        logic_state?: string | string[];

        behavior?: "exclusive" | "inclusive";
    };

    type $$Slots = {
        default: {};
    };

    const dispatch = createEventDispatcher();

    export let logic_id: $$Props["logic_id"] = undefined;
    export let logic_name: $$Props["logic_name"] = undefined;
    export let logic_state: $$Props["logic_state"] = undefined;

    export let behavior: $$Props["behavior"] = undefined;

    const _accordion_behavior =
        behavior !== undefined ? CONTEXT_ACCORDION_BEHAVIOR.create(behavior) : null;
    const _accordion_id = logic_id !== undefined ? CONTEXT_ACCORDION_ID.create(logic_id) : null;
    const _accordion_name =
        logic_name !== undefined ? CONTEXT_ACCORDION_NAME.create(logic_name) : null;
    const _accordion_state =
        logic_state !== undefined ? CONTEXT_ACCORDION_STATE.create(logic_state) : null;

    if (_accordion_state) {
        afterUpdate(() => {
            $_accordion_state = logic_state ?? "";
        });
    }

    $: if (_accordion_behavior) $_accordion_behavior = behavior ?? "exclusive";
    $: if (_accordion_id) $_accordion_id = logic_id ?? "";
    $: if (_accordion_name) $_accordion_name = logic_name ?? "";

    $: if (_accordion_state) {
        if (logic_state !== $_accordion_state) {
            logic_state = $_accordion_state;

            dispatch("change");
        }
    }
</script>

<slot />
