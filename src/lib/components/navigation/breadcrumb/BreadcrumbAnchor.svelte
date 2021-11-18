<script lang="ts">
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_aria_attributes, map_global_attributes} from "../../../util/attributes";

    import BreadcrumbItem from "./BreadcrumbItem.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLLIElement;

        active?: boolean;

        download?: string;
        href: string;
        rel?: string;
        target?: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let active: boolean = false;

    export let download: $$Props["download"] = undefined;
    export let href: $$Props["href"];
    export let rel: $$Props["rel"] = undefined;
    export let target: $$Props["target"] = undefined;
</script>

<BreadcrumbItem bind:element {...$$props}>
    <a
        {...map_global_attributes($$props)}
        {...map_aria_attributes({pressed: active, current: active ? "page" : undefined})}
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
</BreadcrumbItem>
