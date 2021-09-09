<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";

    import {map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLLIElement;
    } & IHTML5Properties &
        IGlobalProperties;

    type $$Slots = {
        default: {};
    };

    export let element: $$Props["element"] = undefined;
</script>

<li bind:this={element} {...map_global_attributes($$props)}>
    <slot />
</li>
