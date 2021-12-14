<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {ISizeProperties} from "../../../types/sizes";

    import {behavior_button} from "../../../actions/behavior_button";

    import {map_global_attributes} from "../../../util/attributes";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLDivElement | HTMLLabelElement;

        for?: string;
    } & IHTML5Properties &
        IGlobalProperties &
        ISizeProperties;

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
        on:click
    />
{:else}
    <div
        bind:this={element}
        {...map_global_attributes($$props)}
        class="backdrop {_class}"
        on:click
    />
{/if}
