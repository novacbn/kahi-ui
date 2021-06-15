<script lang="ts">
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";

    import Anchor from "../anchor/Anchor.svelte";

    import MenuItem from "./MenuItem.svelte";

    export let element: HTMLElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;

    export let margin: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let margin_x: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_y: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let margin_top: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_left: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_bottom: DESIGN_SPACING_ARGUMENT | undefined = undefined;
    export let margin_right: DESIGN_SPACING_ARGUMENT | undefined = undefined;

    export let active: boolean = false;
    export let disabled: boolean = false;

    export let download: string = "";
    export let href: string = "";
    export let rel: string = "";
    export let target: string = "";

</script>

<MenuItem bind:element>
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
