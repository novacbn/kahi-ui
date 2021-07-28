<script lang="ts">
    import type {IGlobalProperties} from "../../../lib/types/global";
    import type {IHTML5Properties} from "../../../lib/types/html5";
    import type {IIntrinsicProperties} from "../../../lib/types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../lib/types/spacings";

    import {map_global_attributes} from "../../../lib/util/attributes";

    type $$Props = {
        element?: HTMLElement;
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;
</script>

<header bind:this={element} {...map_global_attributes($$props)}>
    <slot />
</header>
