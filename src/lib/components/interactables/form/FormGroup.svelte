<script context="module" lang="ts">
    import type {Writable} from "svelte/store";
    import {get, writable} from "svelte/store";

    import {make_scoped_store} from "../../../util/store";

    /**
     * Represents the values containable in [[IFormStateStore]]
     */
    export type IFormStateValue = string | string[];

    /**
     * Represents the Svelte Store created by [[create_form_state]]
     */
    export interface IFormStateStore extends Writable<IFormStateValue> {
        /**
         * Resets the Svelte Store to an empty string
         */
        clear(): void;

        /**
         * Pushes a value to the Svelte Store
         *
         * **NOTE**: If the Store is an empty string, then the value is set as a string
         * **NOTE**: If the Store is a non-empty string, then the Store is set to an Array containing previous value and new value
         * **NOTE**: If the Store is an array, then the value is pushed into the array
         *
         * @param value
         */
        push(value: string): void;

        /**
         * Removes a value from the Svelte Store
         *
         * **NOTE**: If the Store is an array, then the value is removed. If the array is N = 1, then the Store is set to a string with remaining value
         * **NOTE**: If the Store is a non-empty string, then the Store is set to an empty string
         * @param value
         */
        remove(value: string): void;
    }

    const SYMBOL_FORM_ID = Symbol.for("kahi-ui-form-id");

    const SYMBOL_FORM_NAME = Symbol.for("kahi-ui-form-name");

    const SYMBOL_FORM_STATE = Symbol.for("kahi-ui-form-state");

    export const CONTEXT_FORM_ID = make_scoped_store<string>(SYMBOL_FORM_ID);

    export const CONTEXT_FORM_NAME = make_scoped_store<string>(SYMBOL_FORM_NAME);

    export const CONTEXT_FORM_STATE = make_scoped_store<IFormStateValue, IFormStateStore>(
        SYMBOL_FORM_STATE,
        (default_value) => {
            const store = writable(default_value);
            const {set, subscribe, update} = store;

            return {
                set,
                subscribe,
                update,

                clear() {
                    set("");
                },

                push(value) {
                    let cache = get(store);
                    if (cache.includes(value)) return;

                    if (cache) {
                        if (typeof cache === "string") cache = [cache, value];
                        else cache.push(value);

                        set([...cache]);
                    } else {
                        cache = value;
                        set(value);
                    }
                },

                remove(value) {
                    let cache = get(store);
                    if (cache) {
                        if (typeof cache === "string") {
                            if (cache === value) set("");
                        } else {
                            const index = cache.indexOf(value);
                            if (index > -1) {
                                cache = [...cache];
                                cache.splice(index, 1);

                                set(cache.length > 1 ? cache : cache[0]);
                            }
                        }
                    }
                },
            };
        }
    );
</script>

<script lang="ts">
    // TODO: Stories (?)

    import {afterUpdate, createEventDispatcher} from "svelte";

    type $$Events = {
        change: CustomEvent<void>;
    };

    type $$Props = {
        logic_id?: string;
        logic_name?: string;
        logic_state?: IFormStateValue;
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
