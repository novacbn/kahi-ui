<script lang="ts">
    import type {SvelteComponent} from "svelte";

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {ISizeProperties} from "../../../types/sizes";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_aria_attributes, map_global_attributes} from "../../../util/attributes";

    import BreadcrumbGroup from "./BreadcrumbGroup.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLElement;

        separator?: string | typeof SvelteComponent;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties &
        IPaddingProperties &
        ISizeProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let separator: $$Props["separator"] = "/";
</script>

<nav
    bind:this={element}
    {...map_global_attributes($$props)}
    class="breadcrumb {_class}"
    {...map_aria_attributes({label: "breadcrumb"})}
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
    <ol>
        <BreadcrumbGroup {separator}>
            <slot />
        </BreadcrumbGroup>
    </ol>
</nav>
