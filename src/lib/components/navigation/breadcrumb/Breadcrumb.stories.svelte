<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";

    import * as Breadcrumb from "./";

    const PALETTES = [
        ["subtle", true],
        ["auto", false],
        ["inverse", false],
        ["accent", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["informative", false],
        ["negative", false],
    ];
</script>

<Meta title="Navigation/Breadcrumb" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Breadcrumb.Container>
        <Breadcrumb.Anchor href="#">Home</Breadcrumb.Anchor>
        <Breadcrumb.Anchor href="#">Contacts</Breadcrumb.Anchor>
        <Breadcrumb.Anchor href="#" active>John Doe</Breadcrumb.Anchor>
    </Breadcrumb.Container>
</Story>

<Story name="Separator">
    <Breadcrumb.Container separator=">">
        <Breadcrumb.Anchor href="#">Home</Breadcrumb.Anchor>
        <Breadcrumb.Anchor href="#">Contacts</Breadcrumb.Anchor>
        <Breadcrumb.Anchor href="#" active>John Doe</Breadcrumb.Anchor>
    </Breadcrumb.Container>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <Breadcrumb.Container palette={is_default ? undefined : palette}>
                <Breadcrumb.Anchor href="#">Home</Breadcrumb.Anchor>
                <Breadcrumb.Anchor href="#">Contacts</Breadcrumb.Anchor>
                <Breadcrumb.Anchor href="#" active>John Doe</Breadcrumb.Anchor>
            </Breadcrumb.Container>
        {/each}
    </Stack.Container>
</Story>
