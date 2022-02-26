<script lang="ts">
    import type {PROPERTY_ANIMATION_NAMES} from "../../../types/animations";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_global_attributes} from "../../../util/attributes";
    import {range} from "../../../util/functional";

    import Animation from "../../utilities/animation/Animation.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLSpanElement;

        animation?: PROPERTY_ANIMATION_NAMES;
        iterations?: number | string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {
            index: number;
        };
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let animation: $$Props["animation"] = undefined;
    export let iterations: $$Props["iterations"] = undefined;

    $: _iterations = typeof iterations === "string" ? parseInt(iterations) : iterations ?? 3;
</script>

<span
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="ellipsis {_class}"
    use:forward_actions={{actions}}
    on:click
    on:contextmenu
    on:dblclick
    on:focusin
    on:focusout
    on:keydown
    on:keyup
    on:pointercancel
    on:pointerdown
    on:pointerenter
    on:pointerleave
    on:pointermove
    on:pointerout
    on:pointerup
>
    {#each range(0, _iterations - 1) as index}
        <Animation
            is="span"
            class="ellipsis--item"
            animation={animation ?? "pulse"}
            delay={(index + 1) / _iterations - 1}
        >
            <slot {index}>.</slot>
        </Animation>
    {/each}
</span>
