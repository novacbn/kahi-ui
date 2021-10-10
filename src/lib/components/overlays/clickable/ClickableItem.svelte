<script lang="ts">
    import type {ARIA_CURRENT_ARGUMENT} from "../../../types/aria";
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
        element?: HTMLAnchorElement | HTMLLabelElement;

        active?: boolean;
        current?: ARIA_CURRENT_ARGUMENT;
        disabled?: boolean;

        for?: string;

        download?: string;
        href?: string;
        rel?: string;
        target?: string;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = undefined;
    export {_class as class};

    export let active: $$Props["active"] = undefined;
    export let current: $$Props["current"] = undefined;
    export let disabled: $$Props["disabled"] = undefined;

    let _for: $$Props["for"] = undefined;
    export {_for as for};

    export let download: $$Props["download"] = undefined;
    export let href: $$Props["href"] = undefined;
    export let rel: $$Props["rel"] = undefined;
    export let target: $$Props["target"] = undefined;
</script>

{#if href}
    <a
        bind:this={element}
        {...map_global_attributes($$props)}
        class="clickable-item {_class}"
        {...map_aria_attributes({pressed: active, current, disabled})}
        {...map_attributes({download, href, rel, target})}
        on:click
    >
        <slot />
    </a>
{:else}
    <label
        bind:this={element}
        {...map_global_attributes($$props)}
        class="clickable-item {_class}"
        {...map_attributes({for: _for})}
        {...map_aria_attributes({disabled, pressed: active})}
        on:click
    >
        <slot />
    </label>
{/if}
