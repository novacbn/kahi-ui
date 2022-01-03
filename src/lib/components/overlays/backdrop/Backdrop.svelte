<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Events, IHTML5Properties} from "../../../types/html5";

    import {behavior_button} from "../../../actions/behavior_button";
    import type {IForwardedActions} from "../../../actions/forward_actions";
    import {forward_actions} from "../../../actions/forward_actions";

    import {map_global_attributes} from "../../../util/attributes";

    type $$Events = IHTML5Events;

    type $$Props = {
        actions?: IForwardedActions;
        element?: HTMLDivElement | HTMLLabelElement;

        for?: string;
    } & IHTML5Properties &
        IGlobalProperties;

    export let actions: $$Props["actions"] = undefined;
    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    let _for: $$Props["for"] = undefined;
    export {_for as for};
</script>

{#if _for}
    <label
        bind:this={element}
        {...map_global_attributes($$props)}
        role="button"
        class="backdrop {_class}"
        for={_for}
        use:behavior_button={{enabled: true}}
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
    />
{:else}
    <div
        bind:this={element}
        {...map_global_attributes($$props)}
        class="backdrop {_class}"
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
    />
{/if}
