<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../text/Text.svelte";

    import Heading from "./Heading.svelte";

    const ALIGNMENTS = [
        ["default", true],
        ["center", false],
        ["justify", false],
        ["left", false],
        ["right", false],
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
        ["informative", false],
        ["negative", false],
    ];

    const SIZES = [
        ["h1", true],
        ["h2", false],
        ["h3", false],
        ["h4", false],
        ["h5", false],
        ["h6", false],
    ];

    const TRANSFORMS = [
        ["default", true],
        ["capitalize", false],
        ["lowercase", false],
        ["uppercase", false],
    ];

    const VARIATIONS = [
        ["default", true],
        ["truncate", false],
    ];
</script>

<Meta title="Typography/Heading" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Heading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
        Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
        iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
    </Heading>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading palette={palette === "default" ? undefined : palette}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Heading>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Size">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading is={size}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Heading>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Headline">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading is={size} variation="headline">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Heading>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Align">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ALIGNMENTS as [align, is_default]}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${align.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading align={align === "default" ? undefined : align}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Heading>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Transform">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each TRANSFORMS as [transform, is_default]}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${transform.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading transform={transform === "default" ? undefined : transform}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Heading>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Variation">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each VARIATIONS as [variation, is_default]}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${variation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading variation={variation === "default" ? undefined : variation}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Heading>
            </div>
        {/each}
    </Stack.Container>
</Story>
