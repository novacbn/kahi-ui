<script lang="ts">
    import type {PROPERTY_ARIA_CURRENT} from "../../../types/aria";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_aria_attributes, map_global_attributes} from "../../../util/attributes";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLAnchorElement;

        active?: boolean;
        current?: PROPERTY_ARIA_CURRENT;
        disabled?: boolean;

        download?: string;
        href: string;
        rel?: string;
        target?: string;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let active: $$Props["active"] = undefined;
    export let current: $$Props["current"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    export let download: $$Props["download"] = undefined;
    export let href: $$Props["href"];
    export let rel: $$Props["rel"] = undefined;
    export let target: $$Props["target"] = undefined;
</script>

<a
    bind:this={element}
    {...map_global_attributes($$props)}
    class="clickable-item {_class}"
    {...map_aria_attributes({pressed: active, current, disabled})}
    {download}
    {href}
    {rel}
    {target}
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
