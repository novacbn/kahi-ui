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
        element?: HTMLLIElement;

        active?: boolean;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    export let active: $$Props["active"] = undefined;

    const _breadcrumb_separator = CONTEXT_BREADCRUMB_SEPARATOR.get();

    if (!_breadcrumb_separator) {
        throw new ReferenceError(
            "bad initialization to `Breadcrumb.Item` (failed to get `breadcrumb_separator` Svelte Store from context)"
        );
    }
</script>

<li
    bind:this={element}
    {...map_global_attributes($$props)}
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

    {#if !active}
        <span role="presentation">
            {#if typeof $_breadcrumb_separator === "string"}
                {$_breadcrumb_separator}
            {:else}
                <svelte:component this={$_breadcrumb_separator} />
            {/if}
        </span>
    {/if}
</li>
