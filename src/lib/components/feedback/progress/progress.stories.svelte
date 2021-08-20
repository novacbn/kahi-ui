<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import Mosaic from "../../layouts/mosaic/Mosaic.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Progress from "./Progress.svelte";

    const PALETTES = [
        ["neutral", true],
        ["accent", false],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];

    let value = 0.5;

    function on_add_click(event) {
        value = Math.min(value + 0.05, 1);
    }

    function on_subtract_click(event) {
        value = Math.max(value - 0.05, 0);
    }
</script>

<Meta title="Feedback/Progress" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Progress {value}>55%</Progress>

    <Button palette="negative" on:click={on_subtract_click}>-</Button>
    <Button palette="affirmative" on:click={on_add_click}>+</Button>
</Story>

<Story name="Palette">
    <Mosaic sizing="medium" spacing="medium">
        {#each PALETTES as [palette, is_default] (palette)}
            <div>
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Progress value="0.5" palette={is_default ? undefined : palette} />
            </div>
        {/each}
    </Mosaic>
</Story>
