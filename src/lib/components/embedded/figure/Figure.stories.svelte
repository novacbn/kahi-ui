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

    const RADIUS = [
        ["none", true],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const SHAPES = [
        ["circle", false],
        ["pill", false],
    ];

    const SIZES_BLOCK = [
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const SIZES_ICON = [
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];
</script>

<Meta title="Embedded/Figure" />

<Template>
    <slot />
</Template>

<Story name="Preview">
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

                <Figure fit={is_default ? undefined : fit}>
                    <!-- NOTE: Using custom sizing to show how fit plays w/ non-box aspect ratios -->
                    <img src={IMAGE_BACKGROUND} style="width:12rem;height:18rem;" />
                </Figure>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Radius">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each RADIUS as [radius, is_default]}
            <div>
                <Text is="strong">
                    {`${radius.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Figure size="huge" radius={is_default ? undefined : radius}>
                    <img src={IMAGE_BACKGROUND} />
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

                <Figure size="huge" shape={is_default ? undefined : shape}>
                    <img src={IMAGE_BACKGROUND} />
                </Figure>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Block Size">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES_BLOCK as [size, is_default]}
            <div>
                <Text is="strong">
                    {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Figure width={is_default ? undefined : size}>
                    <img src={IMAGE_BACKGROUND} />
                </Figure>
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Icon Size">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES_ICON as [size, is_default]}
            <div>
                <Text is="strong">
                    {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Figure size={is_default ? undefined : `icon-${size}`}>
                    <img src={IMAGE_AVATAR} />
                </Figure>
            </div>
        {/each}
    </Stack>
</Story>
