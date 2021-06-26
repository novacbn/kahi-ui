<script lang="ts">
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";
    import type {DESIGN_POINTS_ARGUMENT} from "../../../lib/types/points";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    export let element: HTMLElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let name: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;

    export let span: DESIGN_POINTS_ARGUMENT | undefined = undefined;
    export let span_x: DESIGN_POINTS_ARGUMENT | undefined = undefined;
    export let span_y: DESIGN_POINTS_ARGUMENT | undefined = undefined;
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="grid-item {_class}"
    {...map_data_attributes({
        span,
        span_x,
        span_y,
    })}
>
    <slot />
</div>
