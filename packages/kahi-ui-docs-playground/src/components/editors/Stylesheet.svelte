<script>
    import {onDestroy, onMount} from "svelte";

    export let value = "";

    let stylesheet;

    $: if (stylesheet) stylesheet.innerText = value;

    onDestroy(() => {
        stylesheet.remove();
    });

    onMount(() => {
        stylesheet = document.createElement("style");
        document.head.appendChild(stylesheet);
    });
</script>
