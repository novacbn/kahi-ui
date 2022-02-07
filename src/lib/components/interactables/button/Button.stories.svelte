<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";
    import Check from "../check/Check.svelte";

    import Button from "./Button.svelte";

    const PALETTES = [
        ["neutral", true],
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

    const SIZINGS = [
        ["small", true],
        ["nano", false],
        ["tiny", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const RADIUS = [
        ["small", true],
        ["none", false],
        ["nano", false],
        ["tiny", false],
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

<Meta title="Interactables/Button" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Button>This is a Button!</Button>
</Story>

<Story name="State">
    <Text is="strong">DEFAULT</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <Button>DEFAULT</Button>
        <Button disabled>DISABLED INACTIVE</Button>
        <Button active>ACTIVE</Button>
        <Button active disabled>DISABLED ACTIVE</Button>
    </Stack.Container>

    <Text is="strong">OUTLINE</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <Button variation="outline">DEFAULT</Button>
        <Button variation="outline" disabled>DISABLED INACTIVE</Button>
        <Button variation="outline" active>ACTIVE</Button>
        <Button variation="outline" active disabled>DISABLED ACTIVE</Button>
    </Stack.Container>

    <Text is="strong">CLEAR</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <Button variation="clear">DEFAULT</Button>
        <Button variation="clear" disabled>DISABLED INACTIVE</Button>
        <Button variation="clear" active>ACTIVE</Button>
        <Button variation="clear" active disabled>DISABLED ACTIVE</Button>
    </Stack.Container>
</Story>

<Story name="Palette">
    <Text is="strong">DEFAULT</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Button palette={is_default ? undefined : palette}>
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack.Container>

    <Text is="strong">SUBTLE</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Button variation="subtle" palette={is_default ? undefined : palette}>
                SUBTLE
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack.Container>
</Story>

<Story name="Outline">
    <Text is="strong">DEFAULT</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Button variation="outline" palette={is_default ? undefined : palette}>
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack.Container>

    <Text is="strong">SUBTLE</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Button variation={["subtle", "outline"]} palette={is_default ? undefined : palette}>
                SUBTLE
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack.Container>
</Story>

<Story name="Clear">
    <Text is="strong">DEFAULT</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Button variation="clear" palette={is_default ? undefined : palette}>
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack.Container>

    <Text is="strong">SUBTLE</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Button variation={["subtle", "clear"]} palette={is_default ? undefined : palette}>
                SUBTLE
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack.Container>
</Story>

<Story name="Elements">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        <Button>This is a DEFAULT Button!</Button>

        <Button is="a" href="https://google.com" target="_blank" rel="noopener noreferrer">
            This is an ANCHOR Button!
        </Button>

        <Button is="label" for="button-type-check">This is a LABEL Button!</Button>

        <Button is="input" value="This is an INPUT Button!" />
        <Button is="input" type="submit" value="This is a SUBMIT Button!" />
        <Button is="input" type="reset" value="This is a RESET Button!" />
    </Stack.Container>

    <Check id="button-type-check" />
</Story>

<Story name="Radius">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each RADIUS as [radius, is_default] (radius)}
            <Button radius={is_default ? undefined : radius}>
                {`${radius.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack.Container>
</Story>

<Story name="Shape">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each SHAPES as [shape, is_default] (shape)}
            <Button shape={is_default ? undefined : shape}>
                {`${shape.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizing">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <Button sizing={is_default ? undefined : sizing}>
                {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack.Container>
</Story>
