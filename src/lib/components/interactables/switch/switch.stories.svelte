<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Switch from "./Switch.svelte";

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

    const SIZES = [
        ["default", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];
</script>

<Meta title="Interactables/Switch" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Switch />
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

                <Switch {palette} />
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Size">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <div>
                <Text>
                    <Text is="strong">
                        {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Switch {size} />
            </div>
        {/each}
    </Stack>
</Story>
