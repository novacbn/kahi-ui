<script lang="ts">
    import {createEventDispatcher} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {range} from "../../../util/functional";
    import {clamp} from "../../../util/number";
    import {format_tokens} from "../../../util/string";

    import Button from "../../interactables/button/Button.svelte";
    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import StackContainer from "../../layouts/stack/StackContainer.svelte";

    type $$Events = {
        select: CustomEvent<{page: number}>;
    };

    type $$Props = {
        element?: HTMLDivElement;

        href?: string;

        pages: number | string;
        steps?: number | string;
        value: number | string;

        palette?: PROPERTY_PALETTE;
        sizing?: PROPERTY_SIZING;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        next: {};

        previous: {};
    };

    const dispatch = createEventDispatcher();

    export let element: $$Props["element"] = undefined;

    let _class = "";
    export {_class as class};

    export let href: $$Props["href"] = undefined;

    export let pages: $$Props["pages"];
    export let steps: $$Props["steps"] = undefined;
    export let value: $$Props["value"];

    export let palette: $$Props["palette"] = undefined;
    export let sizing: $$Props["sizing"] = undefined;

    function format_href(page: number): string | undefined {
        return href ? format_tokens(href, {page}) : undefined;
    }

    function on_button_click(page: number, event: MouseEvent): void {
        dispatch("select", {page});
    }

    $: _pages = typeof pages === "string" ? parseInt(pages) : pages;
    $: _steps = typeof steps === "string" ? parseInt(steps) : steps ?? 2;
    $: _value = typeof value === "string" ? parseInt(value) : value;

    $: _prev_value = Math.max(1, _value - 1);
    $: _next_value = Math.min(_pages, _value + 1);

    let _page_range: number[];
    $: {
        if (_pages > 1) {
            const ending_steps = clamp(_pages - _value, 0, _steps);
            const ending_inverse = _steps - ending_steps;

            const starting_steps = clamp(_value - 1, 0, _steps);
            const starting_inverse = _steps - starting_steps;

            const starting_page = Math.max(_value - (starting_steps + ending_inverse), 2);
            const ending_page = Math.min(_value + (ending_steps + starting_inverse), _pages - 1);

            _page_range = range(starting_page, ending_page);
        } else _page_range = [];
    }
</script>

<StackContainer
    {...$$restProps}
    bind:element
    class="pagination {_class}"
    orientation="horizontal"
    alignment_y="center"
    spacing="medium"
>
    <Button
        href={format_href(_prev_value)}
        disabled={_value === _prev_value}
        variation={["subtle", "clear"]}
        {sizing}
        {palette}
        on:click={on_button_click.bind(null, _prev_value)}
    >
        <slot name="previous">&lt;</slot>
    </Button>

    <Spacer />

    <Button
        href={format_href(1)}
        disabled={value === 1}
        variation={["subtle", "clear"]}
        {sizing}
        {palette}
        on:click={on_button_click.bind(null, 1)}
    >
        1
    </Button>

    {#if _pages > 1 && _page_range[0] !== 2}
        <span>...</span>
    {/if}

    {#each _page_range as page (page)}
        <Button
            href={format_href(page)}
            disabled={value === page}
            variation={["subtle", "clear"]}
            {sizing}
            {palette}
            on:click={on_button_click.bind(null, page)}
        >
            {page}
        </Button>
    {/each}

    {#if _pages > 1}
        {#if _page_range[_page_range.length - 1] !== _pages - 1}
            <span>...</span>
        {/if}

        <Button
            href={format_href(_pages)}
            disabled={_value === _pages}
            variation={["subtle", "clear"]}
            {sizing}
            {palette}
            on:click={on_button_click.bind(null, _pages)}
        >
            {_pages}
        </Button>
    {/if}

    <Spacer />

    <Button
        href={format_href(_next_value)}
        disabled={_value === _next_value}
        variation={["subtle", "clear"]}
        {sizing}
        {palette}
        on:click={on_button_click.bind(null, _next_value)}
    >
        <slot name="next">&gt;</slot>
    </Button>
</StackContainer>
