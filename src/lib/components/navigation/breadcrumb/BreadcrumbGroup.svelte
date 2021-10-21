<script context="module" lang="ts">
    import type {SvelteComponent} from "svelte";

    import {make_scoped_store} from "../../../util/store";

    const SYMBOL_BREADCRUMB_SEPARATOR = Symbol.for("kahi-ui-breadcrumb-separator");

    export const CONTEXT_BREADCRUMB_SEPARATOR = make_scoped_store<string | typeof SvelteComponent>(
        SYMBOL_BREADCRUMB_SEPARATOR
    );
</script>

<script lang="ts">
    type $$Props = {
        separator?: string | typeof SvelteComponent;
    };

    type $$Slots = {
        default: {};
    };

    export let separator: $$Props["separator"] = undefined;

    const _separator =
        separator !== undefined ? CONTEXT_BREADCRUMB_SEPARATOR.create(separator) : null;

    $: if (_separator) $_separator = separator ?? "/";
</script>

<slot />
