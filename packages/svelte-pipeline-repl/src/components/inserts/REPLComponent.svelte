<script>
    import {createEventDispatcher} from "svelte";

    export let Component = null;

    const dispatch = createEventDispatcher();

    let component;
    let target;

    $: {
        if (Component && target) {
            if (component) {
                component.$destroy();
                component = null;
            }

            try {
                component = new Component({target});
            } catch (err) {
                dispatch("error", {message: err.message});
            }
        }
    }

    $: if (component) component.$set($$props);
</script>

<!--
    NOTE: / HACK: SvelteKit for some reasonhates `<svelte:component>`?? So just using this workaround for now.
-->

<div bind:this={target} class="repl-component" />
