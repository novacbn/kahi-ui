<script lang="ts">
    import {viewports} from "../../../stores/viewport";

    import {IS_SERVER} from "../../../util/environment";

    type $$Props = {
        fallthrough?: boolean;

        mobile?: boolean;
        tablet?: boolean;
        desktop?: boolean;
        widescreen?: boolean;
    };

    type $$Slots = {
        default: {};
    };

    export let fallthrough: $$Props["fallthrough"] = undefined;

    export let mobile: $$Props["mobile"] = undefined;
    export let tablet: $$Props["tablet"] = undefined;
    export let desktop: $$Props["desktop"] = undefined;
    export let widescreen: $$Props["widescreen"] = undefined;

    $: _viewport_store = viewports({mobile, tablet, desktop, widescreen});
</script>

{#if $_viewport_store || (IS_SERVER && fallthrough)}
    <slot />
{/if}
