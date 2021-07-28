<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_POINTS_ARGUMENT} from "../../../lib/types/points";

    import {map_data_attributes, map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        span?: DESIGN_POINTS_ARGUMENT;
        span_x?: DESIGN_POINTS_ARGUMENT;
        span_y?: DESIGN_POINTS_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let span: $$Props["span"] = undefined;
    export let span_x: $$Props["span_x"] = undefined;
    export let span_y: $$Props["span_y"] = undefined;
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
