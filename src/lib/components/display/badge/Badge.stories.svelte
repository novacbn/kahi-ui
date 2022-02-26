<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";

    import Badge from "./Badge.svelte";

    const PALETTES = [
        ["inherit", true],
        ["auto", false],
        ["inverse", false],
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
</script>

<Meta title="Display/Badge" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Badge>This is a Badge!</Badge>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Badge palette={is_default ? undefined : palette}>
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Badge
            </Badge>
        {/each}
    </Stack.Container>
</Story>

<Story name="Elements">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <Badge>Default SPAN Badge</Badge>
        <Badge is="a" href="#">Default A Badge</Badge>
        <Badge is="button">
            Default BUTTON Badge
            <span>x</span>
        </Badge>
    </Stack.Container>
</Story>

<Story name="Radius">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each RADIUS as [radius, is_default] (radius)}
            <Badge palette="inverse" radius={is_default ? undefined : radius}>
                {`${radius.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Badge
            </Badge>
        {/each}
    </Stack.Container>
</Story>

<Story name="Shape">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SHAPES as [shape, is_default] (shape)}
            <Badge palette="inverse" shape={is_default ? undefined : shape}>
                {`${shape.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Badge
            </Badge>
        {/each}
    </Stack.Container>
</Story>
