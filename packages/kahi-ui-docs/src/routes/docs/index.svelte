<script context="module">
    import {load as _load} from "./[...path].svelte";

    export const load = _load;
</script>

<script>
    import DocIndex from "./[...path].svelte";
</script>

<DocIndex {...$$props} />
