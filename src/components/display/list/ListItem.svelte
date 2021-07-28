<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {IMarginProperties} from "../../../lib/types/spacings";

    import {map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLLIElement;
    } & IHTML5Properties &
        IGlobalProperties &
        IMarginProperties;

    export let element: $$Props["element"] = undefined;
</script>

<li bind:this={element} {...map_global_attributes($$props)}>
    <slot />
</li>
