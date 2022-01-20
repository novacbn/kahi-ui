<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import Spinner from "./Spinner.svelte";

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

    const SIZES = [
        ["default", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];
</script>

<Meta title="Feedback/Spinner" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Spinner />
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <div>
                <Text>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Spinner palette={palette === "default" ? undefined : palette} />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Size">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <div>
                <Text>
                    <Text is="strong">
                        {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Spinner size={size === "default" ? undefined : size} />
            </div>
        {/each}
    </Stack.Container>
</Story>
