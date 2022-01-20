<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";

    import Anchor from "./Anchor.svelte";

    const PALETTES = [
        ["accent", true],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];
</script>

<Meta title="Navigation/Anchor" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Anchor href="https://google.com" target="_blank" rel="noopener noreferrer">
        Goto google.com
    </Anchor>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Anchor href="https://google.com" target="_blank" rel="noopener noreferrer" {palette}>
                Goto google.com ({`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`})
            </Anchor>
        {/each}
    </Stack.Container>
</Story>
