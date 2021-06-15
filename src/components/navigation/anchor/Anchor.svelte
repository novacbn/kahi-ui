<script lang="ts">
    import type {ARIA_CURRENT_ARGUMENT} from "../../../lib/types/aria";
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_SPACING_ARGUMENT} from "../../../lib/types/spacings";

    import {
        map_aria_attributes,
        map_attributes,
        map_global_attributes,
    } from "../../../lib/util/attributes";

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

    export let current: ARIA_CURRENT_ARGUMENT | undefined = undefined;
    export let disabled: boolean = false;

    export let download: string = "";
    export let href: string = "";
    export let rel: string = "";
    export let target: string = "";

</script>

<a
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_aria_attributes({current, disabled})}
    {...map_attributes({download, href, rel, target})}
    on:click
>
    <slot />
</a>
