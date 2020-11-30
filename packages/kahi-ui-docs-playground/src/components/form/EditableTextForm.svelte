<script>
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let palette = undefined;

    export let editable = false;
    export let value = "";

    let input = null;

    function on_change(event) {
        const {value: new_value} = event.target;

        editable = false;
        if (new_value) {
            value = new_value;

            dispatch("change", {value});
        }
    }

    function on_click(event) {
        requestAnimationFrame(() => {
            editable = true;
        });
    }

    $: if (input) input.focus();
</script>

<style>
    span {
        cursor: pointer;
    }

    input {
        border: none;
        border-radius: 0;
        padding: 0;

        font-weight: inherit;
        letter-spacing: inherit;
    }
</style>

{#if editable}
    <input type="text" data-palette={palette} bind:this={input} on:change={on_change} {value} />
{:else}<span on:click={on_click}>{value}</span>{/if}
