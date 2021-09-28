<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import * as Grid from "../../layouts/grid/index";

    import * as Hero from "./index";

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
</script>

<Meta title="Surfaces/Hero" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Hero.Container palette="negative" height="viewport-100">
        <Hero.Header>404</Hero.Header>
        <Hero.Section>The page you tried to access is missing or no longer available.</Hero.Section>

        <Hero.Footer>
            <Button palette="light" variation="clear">Go Back</Button>
            <Button palette="accent">Submit Ticket</Button>
        </Hero.Footer>
    </Hero.Container>
</Story>

<Story name="Palette">
    <Grid.Container spacing="medium" points={["3", "desktop:2", "tablet:1", "mobile:1"]}>
        {#each PALETTES as [palette, is_default] (palette)}
            <Hero.Container {palette}>
                <Hero.Header>404</Hero.Header>
                <Hero.Section>
                    The page you tried to access is missing or no longer available.
                </Hero.Section>

                <Hero.Footer>
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Hero.Footer>
            </Hero.Container>
        {/each}
    </Grid.Container>
</Story>
