<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import * as Grid from "../../layouts/grid";
    import * as Stack from "../../layouts/stack";
    import Box from "../../surfaces/box/Box.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Transition from "./Transition.svelte";

    const DIRECTIONS = [
        ["bottom", true],
        ["left", false],
        ["right", false],
        ["top", false],
    ];

    const IS = [
        ["div", true],
        ["span", false],
    ];

    let hidden = false;
    let variation = "exit";

    function on_hidden_click(event) {
        hidden = !hidden;
    }

    function on_variation_click(event) {
        variation = variation === "enter" ? "exit" : "enter";
    }
</script>

<Meta title="Utilities/Transition" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Transition animation="clip" {variation}>
        <Box palette="inverse" padding="medium">hello world!</Box>
    </Transition>
</Story>

<Story name="Delay">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Transition animation="clip" {variation}>
        <Box palette="inverse" padding="small">hello world!</Box>
    </Transition>

    <Transition animation="clip" delay={0.5} {variation}>
        <Box palette="inverse" padding="small">hello world!</Box>
    </Transition>

    <Transition animation="clip" delay={1.0} {variation}>
        <Box palette="inverse" padding="small">hello world!</Box>
    </Transition>

    <Transition animation="clip" delay={1.5} {variation}>
        <Box palette="inverse" padding="small">hello world!</Box>
    </Transition>
</Story>

<Story name="Duration">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Transition animation="clip" duration={0.25} {variation}>
        <Box palette="inverse" padding="small">hello world!</Box>
    </Transition>

    <Transition animation="clip" {variation}>
        <Box palette="inverse" padding="small">hello world!</Box>
    </Transition>

    <Transition animation="clip" duration={1.75} {variation}>
        <Box palette="inverse" padding="small">hello world!</Box>
    </Transition>

    <Transition animation="clip" duration={2.5} {variation}>
        <Box palette="inverse" padding="small">hello world!</Box>
    </Transition>

    <Transition animation="clip" duration={3.25} {variation}>
        <Box palette="inverse" padding="small">hello world!</Box>
    </Transition>
</Story>

<Story name="Elements">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Stack.Container spacing="medium" orientation="horizontal" variation="wrap">
        {#each IS as [is, is_default] (is)}
            <div>
                <Text is="strong">
                    {`${is.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Transition is={is_default ? undefined : is} animation="clip" {variation}>
                    <Box palette="inverse" padding="medium">hello world!</Box>
                </Transition>
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Clip - Preview">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Grid.Container points={["4", "desktop:3", "tablet:2", "mobile:1"]} spacing="medium">
        {#each DIRECTIONS as [direction, is_default] (direction)}
            <Transition animation="clip" {direction} {variation}>
                <Box palette="inverse" padding="medium">
                    Clip {`${direction.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Box>
            </Transition>
        {/each}
    </Grid.Container>
</Story>

<Story name="Clip - Explicit">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Grid.Container points={["4", "desktop:3", "tablet:2", "mobile:1"]} spacing="medium">
        {#each DIRECTIONS as [direction, is_default] (direction)}
            <Transition animation="clip" behavior="explicit" {direction} {variation}>
                <Box palette="inverse" padding="medium">
                    Clip {`${direction.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Box>
            </Transition>
        {/each}
    </Grid.Container>
</Story>

<Story name="Clip - Grid">
    <Button on:click={on_hidden_click}>Toggle DOM</Button>

    {#if !hidden}
        <Grid.Container points="4" spacing="medium">
            {#each new Array(20) as _, index (index)}
                <Transition
                    animation="clip"
                    direction="top"
                    delay={Math.floor(index / 4) * 0.5}
                    variation="enter"
                >
                    <Box palette="inverse" padding="small">hello world!</Box>
                </Transition>
            {/each}
        </Grid.Container>
    {/if}
</Story>

<Story name="Fade - Preview">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Transition animation="fade" {variation}>
        <Box palette="inverse" padding="medium">hello world!</Box>
    </Transition>
</Story>

<Story name="Fade - Explicit">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Transition animation="fade" behavior="explicit" {variation}>
        <Box palette="inverse" padding="medium">hello world!</Box>
    </Transition>
</Story>

<Story name="Fade - Grid">
    <Button on:click={on_hidden_click}>Toggle DOM</Button>

    {#if !hidden}
        <Grid.Container points="4" spacing="medium">
            {#each new Array(20) as _, index (index)}
                <Transition animation="fade" delay={Math.floor(index / 4) * 0.5} variation="enter">
                    <Box palette="inverse" padding="small">hello world!</Box>
                </Transition>
            {/each}
        </Grid.Container>
    {/if}
</Story>

<Story name="Scale - Preview">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Transition animation="scale" {variation}>
        <Box palette="inverse" padding="medium">hello world!</Box>
    </Transition>
</Story>

<Story name="Scale - Explicit">
    <Button on:click={on_variation_click}>Toggle Variation</Button>

    <Transition animation="scale" behavior="explicit" {variation}>
        <Box palette="inverse" padding="medium">hello world!</Box>
    </Transition>
</Story>

<Story name="Scale - Grid">
    <Button on:click={on_hidden_click}>Toggle DOM</Button>

    {#if !hidden}
        <Grid.Container points="4" spacing="medium">
            {#each new Array(20) as _, index (index)}
                <Transition animation="scale" delay={Math.floor(index / 4) * 0.5} variation="enter">
                    <Box palette="inverse" padding="small">hello world!</Box>
                </Transition>
            {/each}
        </Grid.Container>
    {/if}
</Story>

<Story name="Slide - Preview">
    <Button on:click={on_variation_click} margin_bottom="huge">Toggle Variation</Button>

    <Grid.Container
        points={["4", "desktop:3", "tablet:2", "mobile:1"]}
        spacing="medium"
        margin_top="huge"
    >
        {#each DIRECTIONS as [direction, is_default] (direction)}
            <Transition animation="slide" {direction} {variation}>
                <Box palette="inverse" padding="medium">
                    Slide {`${direction.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Box>
            </Transition>
        {/each}
    </Grid.Container>
</Story>

<Story name="Slide - Explicit">
    <Button on:click={on_variation_click} margin_bottom="huge">Toggle Variation</Button>

    <Grid.Container
        points={["4", "desktop:3", "tablet:2", "mobile:1"]}
        spacing="medium"
        margin_top="huge"
    >
        {#each DIRECTIONS as [direction, is_default] (direction)}
            <Transition animation="slide" behavior="explicit" {direction} {variation}>
                <Box palette="inverse" padding="medium">
                    Slide {`${direction.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Box>
            </Transition>
        {/each}
    </Grid.Container>
</Story>

<Story name="Slide - Grid">
    <Button on:click={on_hidden_click}>Toggle DOM</Button>

    {#if !hidden}
        <Grid.Container points="4" spacing="medium">
            {#each new Array(20) as _, index (index)}
                <Transition animation="slide" delay={Math.floor(index / 4) * 0.5} variation="enter">
                    <Box palette="inverse" padding="small">hello world!</Box>
                </Transition>
            {/each}
        </Grid.Container>
    {/if}
</Story>
