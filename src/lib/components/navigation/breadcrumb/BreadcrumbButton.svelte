<script lang="ts">
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {IGlobalProperties} from "../../../types/global";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {ISvelteKitAnchorProperties} from "../../../types/sveltekit";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    import BreadcrumbSeparator from "./BreadcrumbSeparator.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLButtonElement;

        active?: boolean;
        disabled?: boolean;

        palette?: PROPERTY_PALETTE;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        ISvelteKitAnchorProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let active: $$Props["active"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    export let palette: $$Props["palette"] = undefined;
</script>

<button
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="breadcrumb--item {_class}"
    {...map_aria_attributes({pressed: active})}
    {...map_data_attributes({palette})}
    {disabled}
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
    <slot />
</button>

{#if !active}
    <BreadcrumbSeparator />
{/if}
