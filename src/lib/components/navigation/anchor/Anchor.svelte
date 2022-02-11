<script lang="ts">
    /**
     * TODO: Satisfy ARIA warnings from the Compiler by making non-optional properties
     */

    import type {PROPERTY_ARIA_CURRENT} from "../../../types/aria";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {ISvelteKitAnchorProperties} from "../../../types/sveltekit";

    import {behavior_anchor} from "../../../actions/behavior_anchor";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {
        map_aria_attributes,
        map_data_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLAnchorElement;

        current?: PROPERTY_ARIA_CURRENT;
        disabled?: boolean;

        download?: string;
        href: string;
        rel?: string;
        target?: string;

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

    export let current: $$Props["current"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    export let download: $$Props["download"] = undefined;
    export let href: $$Props["href"];
    export let rel: $$Props["rel"] = undefined;
    export let target: $$Props["target"] = undefined;

    export let palette: $$Props["palette"] = undefined;
</script>

<a
    bind:this={element}
    {...map_global_attributes($$restProps)}
    class="anchor {_class}"
    {...map_aria_attributes({current, disabled})}
    {...map_data_attributes({palette})}
    {download}
    {href}
    {rel}
    {target}
    use:behavior_anchor={{enabled: true}}
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
</a>
