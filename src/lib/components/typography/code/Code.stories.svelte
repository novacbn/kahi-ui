<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../text/Text.svelte";

    import Code from "./Code.svelte";

    const PALETTES = [
        ["inverse", true],
        ["auto", false],
        ["accent", false],
        ["neutral", false],
        ["off", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["informative", false],
        ["negative", false],
    ];
</script>

<Meta title="Typography/Code" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Code>import * as Kahi from "@kahi-ui/framework";</Code>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <div>
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <br />
                <Code palette={is_default ? undefined : palette}>
                    import * as Kahi from "@kahi-ui/framework";
                </Code>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Pre">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <div>
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <br />
                <!-- prettier-ignore -->
                <Code is="pre" palette={palette === "default" ? undefined : palette}>import math from "a-math-library";

const result = math.add(1, 1);
console.log("Our value is:", result);</Code>
            </div>
        {/each}
    </Stack.Container>
</Story>
