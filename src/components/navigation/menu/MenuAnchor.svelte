<script lang="ts">
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";

    import Anchor from "../anchor/Anchor.svelte";

    import MenuItem from "./MenuItem.svelte";

    export let element: HTMLLIElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let name: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;

    export let active: boolean = false;
    export let disabled: boolean = false;

    export let download: string = "";
    export let href: string = "";
    export let rel: string = "";
    export let target: string = "";
</script>

<MenuItem bind:element {...$$props}>
    <Anchor
        current={active ? "page" : undefined}
        {disabled}
        {download}
        {href}
        {rel}
        {target}
        on:click
    >
        <slot />
    </Anchor>
</MenuItem>
