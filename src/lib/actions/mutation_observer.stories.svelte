<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";
    import Button from "../components/interactables/button/Button.svelte";

    import {mutation_observer} from "./mutation_observer";

    let palette = "affirmative";

    function on_click(event) {
        palette = palette === "affirmative" ? "negative" : "affirmative";
    }

    function on_mutate(mutations) {
        console.log("on_mutate", {mutations});
    }
</script>

<Meta title="Actions/mutation_observer" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Button on:click={on_click}>Toggle Palette</Button>

    <div class="box" data-palette={palette} use:mutation_observer={{attributes: true, on_mutate}}>
        click the above button and watch console for event logs
    </div>
</Story>
