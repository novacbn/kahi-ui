<script lang="ts">
    /**
     * TODO: Stories (?)
     */

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IIntrinsicProperties} from "../../../types/sizings";

    import {get_id_context} from "../../../stores/id";
    import {get_state_context} from "../../../stores/state";
    import {scrolllock} from "../../../stores/scrolllock";

    import {map_global_attributes} from "../../../util/attributes";
    import {IS_BROWSER} from "../../../util/environment";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLDivElement | HTMLLabelElement;

        dismissible?: boolean;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties;

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    export let dismissible: $$Props["dismissible"] = false;

    const _logic_id = get_id_context();
    const _scrolllock = scrolllock();
    const _state = get_state_context();

    if (!_state) {
        throw new ReferenceError(
            "bad initialization to `ContextBackdrop` (failed to get `state` Svelte Store from context)"
        );
    }

    if (dismissible && !_logic_id) {
        throw new ReferenceError(
            "bad initialization to `ContextBackdrop` (failed to get `id` Svelte Store from context)"
        );
    }

    $: if (IS_BROWSER) $_scrolllock = $_state;
</script>

{#if dismissible}
    <label
        bind:this={element}
        {...map_global_attributes($$props)}
        class="context-backdrop {_class}"
        for={_logic_id ? $_logic_id : ""}
        on:click
    />
{:else}
    <div
        bind:this={element}
        {...map_global_attributes($$props)}
        class="context-backdrop {_class}"
        on:click
    />
{/if}
