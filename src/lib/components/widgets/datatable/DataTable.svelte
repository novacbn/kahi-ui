<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {PROPERTY_SORTING_MODE} from "../../../types/sorting";
    import {TOKENS_SORTING_MODE} from "../../../types/sorting";
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
    import TextInput from "../../interactables/textinput/TextInput.svelte";

    type IDataTableRow = $$Generic<Record<string, any>>;

    type IDataTableKey = keyof IDataTableRow;

    interface IDataTableColumn {
        key: IDataTableKey;

        sorting: boolean;

        sorting_algorithm?: (
            a: IDataTableRow[IDataTableKey],
            b: IDataTableRow[IDataTableKey]
        ) => number;

        text: string;
    }

    type $$Props = {
        element?: HTMLTableElement;

        columns: IDataTableColumn[];
        rows: IDataTableRow[];

        page?: number | string;
        paginate?: boolean;
        paging?: number | string;

        sorting?: IDataTableKey;
        sorting_mode?: PROPERTY_SORTING_MODE;

        searching?: string;
        searching_algorithm?: (row: IDataTableRow) => boolean;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING;
        variation?: PROPERTY_VARIATION_TABLE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {key: IDataTableKey; row: IDataTableRow};

        ascending: {};

        decending: {};

        next: {};

        previous: {};

        unsorted: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let columns: $$Props["columns"];
    export let rows: $$Props["rows"];

    export let page: $$Props["page"] = undefined;
    export let paginate: $$Props["paginate"] = undefined;
    export let paging: $$Props["paging"] = undefined;

    export let searching: $$Props["searching"] = undefined;
    export let searching_algorithm: $$Props["searching_algorithm"] = undefined;

    export let sorting: $$Props["sorting"] = undefined;
    export let sorting_mode: $$Props["sorting_mode"] = undefined;

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    function default_search(row: IDataTableRow): boolean {
        for (const key in row) {
            const value = row[key].toLowerCase();

            if (value.includes(searching)) return true;
        }

        return false;
    }

    function default_sort(
        a: IDataTableRow[IDataTableKey],
        b: IDataTableRow[IDataTableKey]
    ): number {
        const normalized_a = a.toString().toLowerCase();
        const normalized_b = b.toString().toLowerCase();

        if (normalized_a > normalized_b) return 1;
        else if (normalized_b > normalized_a) return -1;
        return 0;
    }

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

    function on_searching_input(event: InputEvent): void {
        const target = event.target as HTMLInputElement | null;
        if (!target) return;

        searching = target.value || undefined;
    }

    function on_sorting_click(key: IDataTableKey, event: MouseEvent): void {
        if (sorting !== key) {
            sorting = key;
            sorting_mode = TOKENS_SORTING_MODE.ascending;

            return;
        }

        sorting_mode =
            sorting_mode === TOKENS_SORTING_MODE.ascending
                ? TOKENS_SORTING_MODE.decending
                : TOKENS_SORTING_MODE.ascending;
    }

    $: _page = typeof page === "string" ? parseInt(page) : page ?? 1;
    $: _paging = typeof paging === "string" ? parseInt(paging) : paging ?? 5;

    let _filtered_view: IDataTableRow[];
    $: {
        _filtered_view = [...rows];

        if (searching) {
            _filtered_view = _filtered_view.filter((row, index) => {
                return searching_algorithm ? searching_algorithm(row) : default_search(row);
            });
        }
    }

    $: _pages = Math.ceil(_filtered_view.length / _paging);

    $: {
        if (sorting) {
            const column = columns.find((_column) => _column.key === sorting);
            if (column?.sorting) {
                _filtered_view = _filtered_view.sort((a, b) => {
                    // HACK: TypeScript or Svelte just isn't smart enough to infer `sorting` is
                    // a string in this nested enclosure

                    const a_value = a[sorting as string];
                    const b_value = b[sorting as string];

                    const delta = column.sorting_algorithm
                        ? column.sorting_algorithm(a_value, b_value)
                        : default_sort(a_value, b_value);

                    return sorting_mode === TOKENS_SORTING_MODE.ascending ? delta : delta * -1;
                });
            }
        }
    }

    let _paginated_view: IDataTableRow[];
    $: {
        if (IS_BROWSER && paginate) {
            const start_index = _paging * (_page - 1);
            const end_index = start_index + _paging;

            _paginated_view = _filtered_view.slice(start_index, end_index);
        } else _paginated_view = _filtered_view;
    }
</script>

<Table.Container {...$$props} bind:element class="data-table {_class}" {sizing} {variation}>
    <Table.Header>
        <Table.Row>
            {#each columns as column (column.key)}
                <Table.Heading>
                    {column.text}

                    {#if column.sorting}
                        <Button
                            disabled={!IS_BROWSER}
                            variation={["subtle", "clear"]}
                            size={sizing}
                            {palette}
                            on:click={on_sorting_click.bind(null, column.key)}
                        >
                            {#if sorting === column.key}
                                {#if sorting_mode === TOKENS_SORTING_MODE.ascending}
                                    <slot name="ascending">&uuarr;</slot>
                                {:else}
                                    <slot name="decending">&ddarr;</slot>
                                {/if}
                            {:else}
                                <slot name="unsorted">&udarr;</slot>
                            {/if}
                        </Button>
                    {/if}
                </Table.Heading>
            {/each}
        </Table.Row>
    </Table.Header>

    <Table.Section>
        {#each _paginated_view as row}
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

    {#if IS_BROWSER}
        <Table.Footer>
            <Table.Row>
                <Table.Column>
                    <slot name="search">
                        <TextInput
                            characters="10"
                            size={sizing}
                            {palette}
                            on:input={debounce(on_searching_input, 250)}
                        />
                    </slot>
                </Table.Column>

                <Table.Column colspan={columns.length}>
                    {#if paginate}
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
                    {/if}
                </Table.Column>
            </Table.Row>
        </Table.Footer>
    {/if}
</Table.Container>
