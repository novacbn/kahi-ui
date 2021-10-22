<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import IMAGE_AVATAR from "../../../../../.storybook/assets/avatar.webp";
    import IMAGE_BACKGROUND from "../../../../../.storybook/assets/background.webp";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Figure from "./Figure.svelte";

    const FITS = [
        ["fill", true],
        ["contain", false],
        ["cover", false],
        ["none", false],
        ["scale-down", false],
    ];

    const SHAPES = [
        ["none", true],
        ["pill", false],
        ["rounded", false],
    ];

    const SIZES = ["tiny", "small", "medium", "large", "huge"];
</script>

<Meta title="Embedded/Figure" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Figure max_width="viewport-33">
        <img src={IMAGE_BACKGROUND} />
    </Figure>
</Story>

<Story name="Fit">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each FITS as [fit, is_default]}
            <div>
                <Text is="strong">
                    {`${fit.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Figure {fit}>
                    <!-- NOTE: Using custom sizing to show how fit plays w/ non-box aspect ratios -->
                    <img src={IMAGE_BACKGROUND} style="width:12rem;height:18rem;" />
                </Figure>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Shape">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SHAPES as [shape, is_default]}
            <div>
                <Text is="strong">
                    {`${shape.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Figure variation="icon" size="huge" {shape}>
                    <img src={IMAGE_BACKGROUND} />
                </Figure>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Size">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES as size}
            <div>
                <Text is="strong">
                    {size.toUpperCase()} / ICON
                </Text>

                <Figure variation="icon" {size}>
                    <img src={IMAGE_AVATAR} />
                </Figure>
            </div>
        {/each}
    </Stack>

    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES as size}
            <div>
                <Text is="strong">
                    {size.toUpperCase()}
                </Text>

                <Figure {size}>
                    <img src={IMAGE_BACKGROUND} />
                </Figure>
            </div>
        {/each}
    </Stack>
</Story>
