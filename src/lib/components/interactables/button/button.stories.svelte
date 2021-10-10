<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

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

<Meta title="Interactables/Button" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Button>This is a Button!</Button>
</Story>

<Story name="State">
    <Text is="strong">DEFAULT</Text>
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <Button>DEFAULT</Button>
        <Button disabled>DISABLED INACTIVE</Button>
        <Button active>ACTIVE</Button>
        <Button active disabled>DISABLED ACTIVE</Button>
    </Stack>

    <Text is="strong">OUTLINE</Text>
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <Button variation="outline">DEFAULT</Button>
        <Button variation="outline" disabled>DISABLED INACTIVE</Button>
        <Button variation="outline" active>ACTIVE</Button>
        <Button variation="outline" active disabled>DISABLED ACTIVE</Button>
    </Stack>

    <Text is="strong">CLEAR</Text>
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <Button variation="clear">DEFAULT</Button>
        <Button variation="clear" disabled>DISABLED INACTIVE</Button>
        <Button variation="clear" active>ACTIVE</Button>
        <Button variation="clear" active disabled>DISABLED ACTIVE</Button>
    </Stack>
</Story>

<Story name="Palette">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <Button {palette}>
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack>
</Story>

<Story name="Outline">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <Button variation="outline" {palette}>
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack>
</Story>

<Story name="Clear">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <Button variation="clear" {palette}>
                {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack>
</Story>

<Story name="Size">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <Button {size}>
                {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                Button
            </Button>
        {/each}
    </Stack>
</Story>

<Story name="Type">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        <Button>This is a DEFAULT Button!</Button>

        <Button href="https://google.com" target="_blank" rel="noopener noreferrer">
            This is an ANCHOR Button!
        </Button>

        <Button value="This is an INPUT Button!" />
        <Button type="submit" value="This is a SUBMIT Button!" />
        <Button type="reset" value="This is a RESET Button!" />
    </Stack>
</Story>
