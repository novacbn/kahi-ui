<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import Position from "../../layouts/position/Position.svelte";
    import * as Stack from "../../layouts/stack";

    import Backdrop from "./Backdrop.svelte";

    const PALETTES = [
        ["inverse", true],
        ["auto", false],
        ["accent", false],
        ["neutral", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["informative", false],
        ["negative", false],
    ];

    let palette = undefined;

    function on_palette_click(_palette, event) {
        palette = _palette;
    }
</script>

<Meta title="Overlays/Backdrop" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    Hello World!

    <Backdrop />
</Story>

<Story name="Palette">
    Hello World!

    <Backdrop {palette} />

    <Position variation="action">
        <Stack.Container
            orientation="horizontal"
            alignment_x="right"
            spacing="small"
            variation="wrap"
            max_width="prose"
            margin_left="auto"
        >
            {#each PALETTES as [palette, is_default] (palette)}
                <Button
                    {palette}
                    on:click={on_palette_click.bind(null, is_default ? undefined : palette)}
                >
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Button>
            {/each}
        </Stack.Container>
    </Position>
</Story>
