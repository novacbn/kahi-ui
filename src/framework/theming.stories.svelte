<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../lib/components/layouts/stack";
    import Text from "../lib/components/typography/text/Text.svelte";

    const ELEVATIONS = ["lowest", "lower", "low", "medium", "high", "higher", "highest"];

    const FONT_FAMILIES = ["block", "inline", "monospace"];

    const FONT_SIZES = ["nano", "tiny", "small", "medium", "large", "huge", "massive"];

    const LINE_HEIGHTS = ["nano", "tiny", "small", "medium", "large", "huge", "massive"];

    const PALETTES = [
        "accent",
        "neutral",
        "off",
        "dark",
        "light",
        "alert",
        "affirmative",
        "informative",
        "negative",
    ];

    const SHADES = ["lightest", "lighter", "light", "normal", "bold", "bolder", "boldest"];

    const SIZES = ["nano", "tiny", "small", "medium", "large", "huge", "massive"];

    const SPACINGS = ["nano", "tiny", "small", "medium", "large", "huge", "massive"];
</script>

<Meta title="Framework/Themeing" />

<Template>
    <slot />
</Template>

<Story name="Elevations">
    <Stack.Container orientation="horizontal" spacing="large" variation="wrap">
        {#each ELEVATIONS as elevation (elevation)}
            <div>
                <Text is="strong">{elevation.toUpperCase()}</Text>

                <div data-size="icon-massive" style="box-shadow:var(--elevations-{elevation});" />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Fonts - Families">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each FONT_FAMILIES as family (family)}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {family.toUpperCase()}
                </Text>

                <p style="font-family:var(--fonts-families-{family});">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </p>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Fonts - Block Sizes">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each FONT_SIZES as size (size)}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {size.toUpperCase()}
                </Text>

                <p style="font-size:calc(var(--fonts-sizes-block-{size}) * 1rem);">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Fonts - Inline Sizes">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each FONT_SIZES as size (size)}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {size.toUpperCase()}
                </Text>

                <p style="font-size:calc(var(--fonts-sizes-inline-{size}) * 1rem);">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </p>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Fonts - Line Heights">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each LINE_HEIGHTS as line_height (line_height)}
            <div style="max-width:25ch;">
                <Text is="strong">
                    {line_height.toUpperCase()}
                </Text>

                <p style="line-height:calc(var(--fonts-line-heights-{line_height}) * 1rem);">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </p>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Palettes">
    <Stack.Container spacing="medium">
        {#each PALETTES as palette (palette)}
            <div>
                <Text is="strong">{palette.toUpperCase()}</Text>

                <Stack.Container orientation="horizontal" alignment_x="stretch">
                    {#each SHADES as shade (shade)}
                        <div
                            data-height="icon-massive"
                            style="background:hsl(var(--palettes-{palette}-background-{shade}));"
                        />
                    {/each}
                </Stack.Container>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizes - Block">
    <Stack.Container orientation="horizontal" spacing="large" variation="wrap">
        {#each SIZES as size (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>

                <div
                    data-height="icon-nano"
                    style="background:currentColor;width:calc(var(--sizes-block-{size}) * 1rem);"
                />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizes - Borders">
    <Stack.Container orientation="horizontal" spacing="large" variation="wrap">
        {#each SIZES as size (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>

                <div
                    data-height="icon-nano"
                    style="background:currentColor;width:var(--sizes-borders-{size});"
                />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizes - Icon">
    <Stack.Container orientation="horizontal" spacing="large" variation="wrap">
        {#each SIZES as size (size)}
            <div>
                <Text is="strong">{size.toUpperCase()}</Text>

                <div
                    style="background:currentColor;width:var(--sizes-icon-{size});height:var(--sizes-icon-{size});"
                />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizes - Prose">
    <p style="border:1px solid currentColor;width:var(--sizes-prose);">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
        Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
        iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
    </p>
</Story>

<Story name="Spacings - Block">
    <Stack.Container orientation="horizontal" spacing="large" variation="wrap">
        {#each SPACINGS as spacing (spacing)}
            <div>
                <Text is="strong">{spacing.toUpperCase()}</Text>

                <div
                    data-height="icon-nano"
                    style="background:currentColor;width:calc(var(--spacings-block-{spacing}) * 1rem);"
                />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Spacings - Inline">
    <Stack.Container orientation="horizontal" spacing="large" variation="wrap">
        {#each SPACINGS as spacing (spacing)}
            <div>
                <Text is="strong">{spacing.toUpperCase()}</Text>

                <div
                    data-height="icon-nano"
                    style="background:currentColor;width:calc(var(--spacings-inline-{spacing}) * 1rem);"
                />
            </div>
        {/each}
    </Stack.Container>
</Story>
