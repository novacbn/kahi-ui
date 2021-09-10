<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";

    import Text from "../../typography/text/Text.svelte";

    import MenuItem from "./MenuItem.svelte";

    type $$Props = {
        element?: HTMLLIElement;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};

        "sub-menu": {};
    };

    export let element: $$Props["element"] = undefined;
</script>

<MenuItem bind:element {...$$props}>
    <Text is="small">
        <slot />
    </Text>

    <slot name="sub-menu" />
</MenuItem>
