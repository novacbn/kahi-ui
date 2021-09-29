<script lang="ts">
    import {IS_SERVER} from "../../../util/environment";

    type $$Slots = {
        default: {};
    };
</script>

{#if IS_SERVER}
    <slot />
{/if}
