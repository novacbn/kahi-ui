<script lang="ts">
    import {IS_BROWSER} from "../../../util/environment";

    type $$Slots = {
        default: {};
    };
</script>

{#if IS_BROWSER}
    <slot />
{/if}
