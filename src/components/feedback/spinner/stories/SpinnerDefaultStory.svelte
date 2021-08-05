<script>
    import Button from "../../../interactables/button/Button.svelte";

    import Spinner from "../Spinner.svelte";
</script>

<Button disabled>
    Submit
    <Spinner {...$$props} />
</Button>
