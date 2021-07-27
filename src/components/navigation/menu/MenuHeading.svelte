<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";

    import Text from "../../typography/text/Text.svelte";

    import MenuItem from "./MenuItem.svelte";

    type $$Props = {
        element?: HTMLLIElement;
    } & IHTML5Properties &
        IGlobalProperties;

    export let element: $$Props["element"] = undefined;
</script>

<MenuItem bind:element {...$$props}>
    <Text is="small">
        <slot />
    </Text>

    <slot name="sub-menu" />
</MenuItem>
