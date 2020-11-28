export default `<script>
    let count = 0

    function on_click(event) {
        count += 2;
    }
</script>

<style>
    h1 {
        color: red;
    }
</style>

<h1>Count: {count}</h1>
<button on:click={on_click} data-palette="accent">+2</button>`;
