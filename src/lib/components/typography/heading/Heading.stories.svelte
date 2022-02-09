<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../text/Text.svelte";

    import Heading from "./Heading.svelte";

    const ALIGNMENTS_X = [
        ["inherit", true],
        ["center", false],
        ["justify", false],
        ["left", false],
        ["right", false],
    ];

    const ELEMENTS = [
        ["h1", true],
        ["h2", false],
        ["h3", false],
        ["h4", false],
        ["h5", false],
        ["h6", false],
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

    const TRANSFORMS = [
        ["inherit", true],
        ["capitalize", false],
        ["lowercase", false],
        ["uppercase", false],
    ];

    const VARIATIONS = [
        ["none", true],
        ["truncate", false],
    ];
</script>

<Meta title="Typography/Heading" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Heading>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
        Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque rutrum tellus, in
        iaculis dolor tincidunt non. Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
    </Heading>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading palette={is_default ? undefined : palette}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Heading>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Elements - Inline">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ELEMENTS as [element, is_default] (element)}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${element.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading is={is_default ? undefined : element}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Heading>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Elements - Block">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ELEMENTS as [element, is_default] (element)}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${element.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading is={is_default ? undefined : element} variation="block">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Heading>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Alignments">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each ALIGNMENTS_X as [alignment_x, is_default] (alignment_x)}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${alignment_x.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading alignment_x={is_default ? undefined : alignment_x}>
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
        {#each TRANSFORMS as [transform, is_default] (transform)}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${transform.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading transform={is_default ? undefined : transform}>
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
        {#each VARIATIONS as [variation, is_default] (variation)}
            <div style="max-width:40ch;">
                <Text is="strong">
                    {`${variation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Heading variation={is_default ? undefined : variation}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur
                    orci. Curabitur a egestas turpis, vitae convallis sapien. Sed pellentesque
                    rutrum tellus, in iaculis dolor tincidunt non. Orci varius natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
                </Heading>
            </div>
        {/each}
    </Stack.Container>
</Story>
