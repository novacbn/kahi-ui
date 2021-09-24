<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import * as Grid from "../../layouts/grid";
    import Box from "../../surfaces/box/Box.svelte";

    import Transition from "./Transition.svelte";

    const DIRECTIONS = [
        ["bottom", true],
        ["left", false],
        ["right", false],
        ["top", false],
    ];

    let state = false;

    function on_state_click(event) {
        state = !state;
    }
</script>

<Meta title="Utilities/Transition" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Button on:click={on_state_click}>Toggle State</Button>

    <Transition animation="clip" {state}>
        <Box palette="inverse" padding="huge">hello world!</Box>
    </Transition>
</Story>

<Story name="Clip">
    <Button on:click={on_state_click}>Toggle State</Button>

    <Grid.Container points={["4", "desktop:3", "tablet:2", "mobile:1"]} spacing="medium">
        {#each DIRECTIONS as [direction, is_default] (direction)}
            <Transition animation="clip" {direction} {state}>
                <Box palette="inverse" padding="huge">
                    Clip {`${direction.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Box>
            </Transition>
        {/each}
    </Grid.Container>
</Story>

<Story name="Clip Grid">
    <Grid.Container points="4" spacing="medium">
        {#each new Array(20) as _, index (index)}
            <Transition
                animation="clip"
                direction="bottom"
                delay={Math.floor(index / 4) * 0.5}
                state={true}
            >
                <Box palette="inverse" padding="large">hello world!</Box>
            </Transition>
        {/each}
    </Grid.Container>
</Story>

<Story name="Fade">
    <Button on:click={on_state_click}>Toggle State</Button>

    <Transition animation="fade" {state}>
        <Box palette="inverse" padding="huge">hello world!</Box>
    </Transition>
</Story>

<Story name="Fade Grid">
    <Grid.Container points="4" spacing="medium">
        {#each new Array(20) as _, index (index)}
            <Transition animation="fade" delay={Math.floor(index / 4) * 0.5} state={true}>
                <Box palette="inverse" padding="large">hello world!</Box>
            </Transition>
        {/each}
    </Grid.Container>
</Story>

<Story name="Scale">
    <Button on:click={on_state_click}>Toggle State</Button>

    <Transition animation="scale" {state}>
        <Box palette="inverse" padding="huge">hello world!</Box>
    </Transition>
</Story>

<Story name="Scale Grid">
    <Grid.Container points="4" spacing="medium">
        {#each new Array(20) as _, index (index)}
            <Transition animation="scale" delay={Math.floor(index / 4) * 0.5} state={true}>
                <Box palette="inverse" padding="large">hello world!</Box>
            </Transition>
        {/each}
    </Grid.Container>
</Story>

<Story name="Slide">
    <Button on:click={on_state_click} margin_bottom="huge">Toggle State</Button>

    <Grid.Container
        points={["4", "desktop:3", "tablet:2", "mobile:1"]}
        spacing="medium"
        margin_top="huge"
    >
        {#each DIRECTIONS as [direction, is_default] (direction)}
            <Transition animation="slide" {direction} {state}>
                <Box palette="inverse" padding="huge">
                    Slide {`${direction.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Box>
            </Transition>
        {/each}
    </Grid.Container>
</Story>

<Story name="Slide Grid">
    <Grid.Container points="4" spacing="medium">
        {#each new Array(20) as _, index (index)}
            <Transition animation="slide" delay={Math.floor(index / 4) * 0.5} state={true}>
                <Box palette="inverse" padding="large">hello world!</Box>
            </Transition>
        {/each}
    </Grid.Container>
</Story>
