<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import Dot from "./Dot.svelte";

    const PALETTES = [
        ["inherit", true],
        ["auto", false],
        ["inverse", false],
        ["accent", false],
        ["neutral", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];
</script>

<Meta title="Feedback/Dot" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Dot />
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <div>
                <Text>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Dot palette={is_default ? undefined : palette} />
            </div>
        {/each}
    </Stack.Container>
</Story>
