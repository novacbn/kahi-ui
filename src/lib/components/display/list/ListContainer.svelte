<script lang="ts">
    import type {IGlobalProperties} from "../../../types/global";
    import type {IHTML5Properties} from "../../../types/html5";
    import type {IIntrinsicProperties} from "../../../types/sizings";
    import type {IMarginProperties, IPaddingProperties} from "../../../types/spacings";

    import {map_global_attributes} from "../../../util/attributes";

    type $$Props = {
        element?: HTMLOListElement | HTMLUListElement;

        is?: "ol" | "ul";
    } & IHTML5Properties &
        IGlobalProperties &
        IIntrinsicProperties &
        IMarginProperties &
        IPaddingProperties;

    export let element: $$Props["element"] = undefined;

    export let is: $$Props["is"] = "ul";
</script>

{#if is === "ol"}
    <ol bind:this={element} {...map_global_attributes($$props)}>
        <slot />
    </ol>
{:else}
    <ul bind:this={element} {...map_global_attributes($$props)}>
        <slot />
    </ul>
{/if}
