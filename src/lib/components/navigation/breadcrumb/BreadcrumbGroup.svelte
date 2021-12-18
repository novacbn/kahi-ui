<script context="module" lang="ts">
    import type {SvelteComponent} from "svelte";

    import {make_scoped_store} from "../../../stores/scoped";

    export const CONTEXT_BREADCRUMB_SEPARATOR =
        make_scoped_store<string | typeof SvelteComponent>("breadcrumb-separator");
</script>

<script lang="ts">
    type $$Props = {
        separator?: string | typeof SvelteComponent;
    };

    type $$Slots = {
        default: {};
    };

    export let separator: $$Props["separator"] = undefined;

    const _separator = CONTEXT_BREADCRUMB_SEPARATOR.create(separator);

    $: if (_separator) $_separator = separator ?? "/";
</script>

<slot />
