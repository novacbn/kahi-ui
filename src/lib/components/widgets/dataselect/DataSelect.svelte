<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING_BREAKPOINT} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import {PROPERTY_VARIATION_SURFACE, TOKENS_VARIATION_SURFACE} from "../../../types/variations";

    import {IS_BROWSER} from "../../../util/environment";
    import {debounce} from "../../../util/functional";

    import Check from "../../interactables/check/Check.svelte";
    import * as Form from "../../interactables/form";
    import Radio from "../../interactables/radio/Radio.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import * as Menu from "../../navigation/menu";
    import TextInput from "../../interactables/textinput/TextInput.svelte";

    import Dropdown from "../dropdown/Dropdown.svelte";
    import Inlay from "../inlay/Inlay.svelte";

    type IDataSelectAlgorithm =
        | ((item: IDataSelectItem) => boolean)
        | ((item: IDataSelectItem, searching: string) => boolean);

    type IDataSelectItem = $$Generic<{
        disabled?: boolean;

        id: string;

        palette?: PROPERTY_PALETTE;

        text: string;

        value?: string;
    }>;

    type $$Props = {
        element?: HTMLDivElement;

        items: IDataSelectItem[];
        max?: number | string;
        multiple?: boolean;

        logic_name: string;
        logic_state?: string | string[];

        placeholder?: string;

        searching?: string;
        searching_algorithm?: IDataSelectAlgorithm;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING_BREAKPOINT;
        variation?: PROPERTY_VARIATION_SURFACE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {index: number; item: IDataSelectItem};
    };

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let items: $$Props["items"];
    export let max: $$Props["max"] = undefined;
    export let multiple: $$Props["multiple"] = undefined;

    export let logic_name: $$Props["logic_name"];
    export let logic_state: $$Props["logic_state"] = "";

    export let placeholder: $$Props["placeholder"] = undefined;

    export let searching: $$Props["searching"] = undefined;
    export let searching_algorithm: $$Props["searching_algorithm"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    let is_active: boolean = false;
    let search_element: HTMLInputElement | undefined;

    function default_search(item: IDataSelectItem, searching: string): boolean {
        const _searching = searching.toLowerCase();

        return item.text.toLowerCase().includes(_searching);
    }

    function is_hidden(item: IDataSelectItem, searching?: string): boolean {
        if (!IS_BROWSER || !searching) return false;

        return !(default_search ?? searching_algorithm)(item, searching);
    }

    function is_multiple_disabled(
        item: IDataSelectItem,
        logic_state: string | string[] | undefined
    ): boolean {
        if (!logic_state || !_max || _max < 1) return false;

        const value = item.value ?? item.id;
        if (logic_state instanceof Array) {
            return logic_state.length >= _max ? !logic_state.includes(value) : false;
        }

        return _max === 1 && logic_state !== value;
    }

    function on_active(): void {
        is_active = true;
    }

    function on_dismiss(): void {
        is_active = false;
    }

    function on_searching_input(event: InputEvent): void {
        const target = event.target as HTMLInputElement | null;
        if (!target) return;

        searching = target.value;
    }

    $: _max = typeof max === "string" ? parseInt(max) : max;

    $: _longest_text = items.reduce(
        (accum, item) => (item.text.length > accum.length ? item.text : accum),
        ""
    ).length;

    $: _texts = Object.fromEntries(items.map((item) => [item.value ?? item.id, item.text]));

    $: _selected =
        IS_BROWSER && logic_state
            ? logic_state instanceof Array
                ? logic_state.map((value) => _texts[value]).join(", ")
                : _texts[logic_state] ?? ""
            : "";
</script>

{#if variation === TOKENS_VARIATION_SURFACE.flush}
    <Inlay bind:element {...$$restProps} class="data-select {_class}">
        <Form.Group {logic_name} bind:logic_state>
            <Menu.Container sizing="tiny">
                {#each items as item, index (item.id)}
                    <Menu.Label
                        for="{logic_name}--{item.id}"
                        disabled={item.disabled ||
                            (multiple && is_multiple_disabled(item, logic_state))}
                        hidden={is_hidden(item, searching)}
                    >
                        <slot {index} {item}>
                            {item.text}
                        </slot>

                        <Spacer />
                        {#if multiple}
                            <Check
                                value={item.value ?? item.id}
                                disabled={item.disabled || is_multiple_disabled(item, logic_state)}
                                variation="flush"
                                palette={item.palette}
                            />
                        {:else}
                            <Radio
                                value={item.value ?? item.id}
                                disabled={item.disabled}
                                variation="flush"
                                palette={item.palette}
                            />
                        {/if}
                    </Menu.Label>
                {/each}
            </Menu.Container>
        </Form.Group>
    </Inlay>
{:else}
    <Dropdown
        bind:element
        {...$$restProps}
        class="data-select {_class}"
        variation="control"
        on:active={on_active}
        on:dismiss={on_dismiss}
    >
        <svelte:fragment slot="activator">
            <TextInput
                bind:element={search_element}
                variation={is_active ? undefined : "block"}
                readonly={!is_active}
                value={is_active ? searching : _selected}
                {palette}
                {placeholder}
                {sizing}
                on:input={debounce(on_searching_input, 250)}
            />
        </svelte:fragment>

        <Form.Group {logic_name} bind:logic_state>
            <Menu.Container
                sizing="tiny"
                style="width:calc({_longest_text}ch + (var(--spacings-block-small) * {_longest_text}ch));"
            >
                {#each items as item, index (item.id)}
                    <Menu.Label
                        for="{logic_name}--{item.id}"
                        disabled={item.disabled ||
                            (multiple && is_multiple_disabled(item, logic_state))}
                        hidden={is_hidden(item, searching)}
                    >
                        <slot {index} {item}>
                            {item.text}
                        </slot>

                        <Spacer />
                        {#if multiple}
                            <Check
                                value={item.value ?? item.id}
                                disabled={item.disabled || is_multiple_disabled(item, logic_state)}
                                variation="flush"
                                palette={item.palette}
                            />
                        {:else}
                            <Radio
                                value={item.value ?? item.id}
                                disabled={item.disabled}
                                variation="flush"
                                palette={item.palette}
                            />
                        {/if}
                    </Menu.Label>
                {/each}
            </Menu.Container>
        </Form.Group>
    </Dropdown>
{/if}
