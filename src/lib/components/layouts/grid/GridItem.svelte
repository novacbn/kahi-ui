<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_POINTS_BREAKPOINT} from "../../../types/points";

    import {map_data_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLDivElement;

        span?: PROPERTY_POINTS_BREAKPOINT;
        span_x?: PROPERTY_POINTS_BREAKPOINT;
        span_y?: PROPERTY_POINTS_BREAKPOINT;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

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
