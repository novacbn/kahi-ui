<script lang="ts">
    import type {PROPERTY_ANIMATION_NAMES} from "../../../types/animations";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_VARIATION_ANIMATION} from "../../../types/variations";

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
        element?: HTMLDivElement | HTMLSpanElement;

        is?: "div" | "span";

        animation: PROPERTY_ANIMATION_NAMES;
        delay?: number | string;
        duration?: number | string;
        iterations?: number | string;
        variation?: PROPERTY_VARIATION_ANIMATION;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export let style: $$Props["style"] = "";
    export {_class as class};

    export let is: $$Props["is"] = undefined;

    export let animation: $$Props["animation"];
    export let delay: $$Props["delay"] = undefined;
    export let duration: $$Props["duration"] = undefined;
    export let iterations: $$Props["iterations"] = undefined;
    export let variation: $$Props["variation"] = undefined;

    $: _variables = format_css_variables({delay, duration, iterations});
</script>

{#if is === "span"}
    <span
        bind:this={element}
        {...map_global_attributes($$props)}
        class="animation {_class}"
        {...map_data_attributes({animation, variation})}
        on:animationend
        on:animationstart
        on:transitionend
        on:transitionstart
        style={_variables ? `${style}${_variables};` : style}
    >
        <slot />
    </span>
{:else}
    <div
        bind:this={element}
        {...map_global_attributes($$props)}
        class="animation {_class}"
        {...map_data_attributes({animation, variation})}
        on:animationend
        on:animationstart
        on:transitionend
        on:transitionstart
        style={_variables ? `${style}${_variables};` : style}
    >
        <slot />
    </div>
{/if}
