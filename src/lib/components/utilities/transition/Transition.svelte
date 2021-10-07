<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";

    import {
        format_css_variables,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    type $$Events = {
        animationend: AnimationEvent;

        animationstart: AnimationEvent;
    };

    type $$Props = {
        element?: HTMLDivElement;

        animation?: "clip" | "fade" | "scale" | "slide";
        delay?: number | string;
        duration?: number | string;
        direction?: "bottom" | "left" | "right" | "top";
        variation?: "enter" | "exit";
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export let style: $$Props["style"] = "";

    export {_class as class};

    export let animation: $$Props["animation"] = undefined;
    export let delay: $$Props["delay"] = undefined;
    export let duration: $$Props["duration"] = undefined;
    export let direction: $$Props["direction"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    $: _variables = format_css_variables({delay, duration});
</script>

<div
    bind:this={element}
    {...map_global_attributes($$props)}
    class="transition {_class}"
    {...map_data_attributes({animation, direction, variation})}
    on:animationend
    on:animationstart
    style={_variables ? `${style}${_variables};` : style}
>
    <slot />
</div>
