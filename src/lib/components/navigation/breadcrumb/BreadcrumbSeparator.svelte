<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";
    import type {IMarginProperties} from "../../../types/spacings";

    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_global_attributes} from "../../../util/attributes";

    import {CONTEXT_BREADCRUMB_SEPARATOR} from "./BreadcrumbGroup.svelte";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLSpanElement;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    const _breadcrumb_separator = CONTEXT_BREADCRUMB_SEPARATOR.get();
    if (!_breadcrumb_separator) {
        throw new ReferenceError(
            "bad initialization to `Breadcrumb.Separator` (failed to get `breadcrumb_separator` Svelte Store from context)"
        );
    }
</script>

<span
    bind:this={element}
    {...map_global_attributes($$restProps)}
    role="presentation"
    class="breadcrumb--separator {_class}"
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
    {#if typeof $_breadcrumb_separator === "string"}
        {$_breadcrumb_separator}
    {:else}
        <svelte:component this={$_breadcrumb_separator} />
    {/if}
</span>
