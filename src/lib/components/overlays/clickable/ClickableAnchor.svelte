<script lang="ts">
    import type {PROPERTY_ARIA_CURRENT} from "../../../types/aria";
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";

    import {
        map_aria_attributes,
        map_attributes,
        map_global_attributes,
    } from "../../../util/attributes";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
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
    on:click
>
    <slot />
</a>
