<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Dot from "./Dot.svelte";

    const ANIMATIONS = [
        ["default", true],
        ["pulse", false],
    ];

    const PALETTES = [
        ["default", true],
        ["accent", false],
        ["auto", false],
        ["inverse", false],
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
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <div>
                <Text>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Dot palette={palette === "default" ? undefined : palette} />
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Animation">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each ANIMATIONS as [animation, is_default]}
            <div>
                <Text>
                    <Text is="strong">
                        {`${animation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Dot {animation} />
            </div>
        {/each}
    </Stack>
</Story>
