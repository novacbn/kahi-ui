<script lang="ts">
    // TODO: Stories (?)

    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {PROPERTY_PALETTE} from "../../../types/palettes";
    import type {PROPERTY_SIZING} from "../../../types/sizings";
    import type {IMarginProperties} from "../../../types/spacings";
    import type {PROPERTY_VARIATION_BUTTON} from "../../../types/variations";

    import {get_id_context} from "../../../stores/id";

    import Button from "../../interactables/button/Button.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLButtonElement;

        active?: boolean;
        disabled?: boolean;

        palette?: PROPERTY_PALETTE;
        size?: PROPERTY_SIZING;
        variation?: PROPERTY_VARIATION_BUTTON;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;

    let _class: $$Props["class"] = "";
    export {_class as class};

    const store = get_id_context();

    if (!store) {
        throw new ReferenceError(
            "bad initialization to `ContextButton` (failed to get `id` Svelte Store from context)"
        );
    }
</script>

<Button bind:element {...$$props} class="context-button {_class}" for={$store} on:click>
    <slot />
</Button>
