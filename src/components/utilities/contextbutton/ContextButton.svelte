<script lang="ts">
    // TODO: Stories (?)

    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {DESIGN_PALETTE_ARGUMENT} from "../../../lib/types/palettes";
    import type {DESIGN_SIZE_ARGUMENT} from "../../../lib/types/sizes";
    import type {IMarginProperties} from "../../../lib/types/spacings";
    import type {DESIGN_FILL_BUTTON_VARIATION_ARGUMENT} from "../../../lib/types/variations";

    import {get_id_context} from "../../../lib/stores/id";

    import Button from "../../interactables/button/Button.svelte";

    type $$Events = {
        click: MouseEvent;
    };

    type $$Props = {
        element?: HTMLButtonElement;

        active?: boolean;
        disabled?: boolean;

        palette?: DESIGN_PALETTE_ARGUMENT;
        size?: DESIGN_SIZE_ARGUMENT;
        variation?: DESIGN_FILL_BUTTON_VARIATION_ARGUMENT;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

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
