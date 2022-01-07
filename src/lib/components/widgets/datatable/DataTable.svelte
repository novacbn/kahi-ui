<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";
    import type {PROPERTY_VARIATION_TABLE} from "../../../types/variations";

    import type {IKeybindEvent} from "../../../actions/keybind";

    import {IS_BROWSER} from "../../../util/environment";
    import {debounce} from "../../../util/functional";
    import {navigate_up, navigate_down} from "../../../util/keybind";
    import {clamp} from "../../../util/number";

    import * as Table from "../../display/table";
    import Button from "../../interactables/button/Button.svelte";
    import NumberInput from "../../interactables/numberinput/NumberInput.svelte";
    import Stack from "../../layouts/stack/Stack.svelte";

    type IDataTableRow = $$Generic<Record<string, any>>;

    interface IDataTableColumn {
        key: keyof IDataTableRow;

        text: string;
    }

    type $$Props = {
        element?: HTMLTableElement;

        columns: IDataTableColumn[];
        rows: IDataTableRow[];
        page?: number | string;
        paginate?: boolean;
        paging?: number | string;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING;
        variation?: PROPERTY_VARIATION_TABLE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {key: keyof IDataTableRow; row: IDataTableRow};
        next: {};
        previous: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let columns: $$Props["columns"];
    export let rows: $$Props["rows"];
    export let page: $$Props["page"] = undefined;
    export let paginate: $$Props["paginate"] = undefined;
    export let paging: $$Props["paging"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    function on_paging_focus_out(event: FocusEvent): void {
        const target = event.target as HTMLInputElement | null;
        if (!target) return;

        const value = parseInt(target.value);
        if (!isNaN(value)) return;

        target.value = _page.toString();
    }

    function on_paging_input(event: InputEvent): void {
        const target = event.target as HTMLInputElement | null;
        if (!target) return;

        const value = parseInt(target.value);
        if (isNaN(value)) return;

        page = clamp(value, 1, _pages);
        target.value = page.toString();
    }

    function on_paging_step(step: number, event: IKeybindEvent | MouseEvent): void {
        if (!(event instanceof MouseEvent) && !event.detail.active) return;

        page = clamp(_page + step, 1, _pages);
    }

    $: _page = typeof page === "string" ? parseInt(page) : page ?? 1;
    $: _paging = typeof paging === "string" ? parseInt(paging) : paging ?? 5;
    $: _pages = Math.ceil(rows.length / _paging);

    let _view: IDataTableRow[];
    $: {
        if (IS_BROWSER && paginate) {
            const start_index = _paging * (_page - 1);
            const end_index = start_index + _paging;

            _view = rows.slice(start_index, end_index);
        } else _view = [...rows];
    }
</script>

<Table.Container {...$$props} bind:element class="data-table {_class}" {sizing} {variation}>
    <Table.Header>
        <Table.Row>
            {#each columns as column (column.key)}
                <Table.Heading>
                    {column.text}
                </Table.Heading>
            {/each}
        </Table.Row>
    </Table.Header>

    <Table.Section>
        {#each _view as row}
            <Table.Row>
                {#each columns as column (column.key)}
                    <Table.Column>
                        <slot key={column.key} {row}>
                            {row[column.key]}
                        </slot>
                    </Table.Column>
                {/each}
            </Table.Row>
        {/each}
    </Table.Section>

    {#if IS_BROWSER && paginate}
        <Table.Footer>
            <Table.Row>
                <Table.Column colspan={columns.length}>
                    <Stack
                        orientation="horizontal"
                        alignment_x="right"
                        alignment_y="center"
                        spacing="small"
                    >
                        <NumberInput
                            characters="1"
                            value={_page}
                            align="right"
                            {palette}
                            size={sizing}
                            actions={[
                                [navigate_up, {on_bind: on_paging_step.bind(null, 1)}],
                                [navigate_down, {on_bind: on_paging_step.bind(null, -1)}],
                            ]}
                            on:focusout={on_paging_focus_out}
                            on:input={debounce(on_paging_input, 250)}
                        />

                        <span>/</span>
                        <span>{_pages}</span>

                        <Button
                            disabled={_page === 1}
                            variation={["subtle", "clear"]}
                            size={sizing}
                            {palette}
                            on:click={on_paging_step.bind(null, -1)}
                        >
                            <slot name="previous">&lt;</slot>
                        </Button>

                        <Button
                            disabled={_page === _pages}
                            variation={["subtle", "clear"]}
                            size={sizing}
                            {palette}
                            on:click={on_paging_step.bind(null, 1)}
                        >
                            <slot name="next">&gt;</slot>
                        </Button>
                    </Stack>
                </Table.Column>
            </Table.Row>
        </Table.Footer>
    {/if}
</Table.Container>
