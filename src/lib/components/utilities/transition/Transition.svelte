<script lang="ts">
    import {map_data_attributes} from "../../../util/attributes";

    type $$Events = {
        animationend: AnimationEvent;

        animationstart: AnimationEvent;
    };

    type $$Props = {
        element?: HTMLDivElement;

        delay?: number | string;
        direction?: "bottom" | "left" | "right" | "top";
        state?: boolean;
        transition?: "clip" | "scale" | "slide";
    };

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    export let delay: $$Props["delay"] = undefined;
    export let direction: $$Props["direction"] = undefined;
    export let state: $$Props["state"] = undefined;
    export let transition: $$Props["transition"] = undefined;
</script>

<div
    bind:this={element}
    class="transition"
    {...map_data_attributes({direction, transition, state})}
    on:animationend
    on:animationstart
    style={delay ? `--delay:${delay}` : ""}
>
    <slot />
</div>
