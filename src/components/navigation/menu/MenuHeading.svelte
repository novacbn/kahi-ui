<script lang="ts">
    import type {DESIGN_HIDDEN_ARGUMENT} from "../../../lib/types/hidden";

    import Text from "../../typography/text/Text.svelte";

    import MenuItem from "./MenuItem.svelte";

    export let element: HTMLLIElement | null = null;

    let _class: string = "";
    export let id: string = "";
    export let name: string = "";
    export let style: string = "";
    export let tabindex: number | string = "";
    export let title: string = "";

    export {_class as class};

    export let hidden: DESIGN_HIDDEN_ARGUMENT = false;
</script>

<MenuItem bind:element {...$$props}>
    <Text is="small">
        <slot />
    </Text>

    <slot name="sub-menu" />
</MenuItem>
