<script lang="ts">
    /**
     * TODO: Satisfy ARIA warnings from the Compiler by making non-optional properties
     */

    import type {ARIA_CURRENT_ARGUMENT} from "../../../lib/types/aria";
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {IMarginProperties} from "../../../lib/types/spacings";

    import {
        map_aria_attributes,
        map_attributes,
        map_global_attributes,
    } from "../../../lib/util/attributes";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLAnchorElement;

        current?: ARIA_CURRENT_ARGUMENT;
        disabled?: boolean;

        download?: string;
        href?: string;
        rel?: string;
        target?: string;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;

    export let current: $$Props["current"] = undefined;
    export let disabled: $$Props["disabled"] = false;

    export let download: $$Props["download"] = "";
    export let href: $$Props["href"] = "";
    export let rel: $$Props["rel"] = "";
    export let target: $$Props["target"] = "";
</script>

<a
    bind:this={element}
    {...map_global_attributes($$props)}
    {...map_aria_attributes({current, disabled})}
    {...map_attributes({download, href, rel, target})}
    on:click
>
    <slot />
</a>
