<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Box from "../../surfaces/box/Box.svelte";
    import Code from "../../typography/code/Code.svelte";

    import Transition from "../transition/Transition.svelte";

    import LazyRender from "./LazyRender.svelte";

    let is_intersecting = false;
</script>

<Meta title="Utilities/LazyRender" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Box palette={is_intersecting ? "affirmative" : "negative"} padding="small">
        Scroll down to watch this <Code>Box</Code> change when the <Code>Box</Code> comes into view.
    </Box>

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <LazyRender threshold={0.5} bind:is_intersecting>
        <Transition animation="scale" variation="enter">
            <Box palette="inverse" padding="small">I am in view!</Box>
        </Transition>
    </LazyRender>

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Box palette={is_intersecting ? "affirmative" : "negative"} padding="small">
        Scroll up to watch this <Code>Box</Code> change when the <Code>Box</Code> comes into view.
    </Box>

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />
</Story>

<Story name="Eager">
    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Box palette={is_intersecting ? "affirmative" : "negative"} padding="small">
        Scroll down to watch this <Code>Box</Code> change when the <Code>Box</Code> comes into view.
    </Box>

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <LazyRender loading="eager" threshold={0.5} bind:is_intersecting>
        <Transition animation="scale" variation="enter">
            <Box palette="inverse" padding="small">I am in view!</Box>
        </Transition>
    </LazyRender>

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Box palette={is_intersecting ? "affirmative" : "negative"} padding="small">
        Scroll up to watch this <Code>Box</Code> change when the <Code>Box</Code> comes into view.
    </Box>

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />

    <Spacer spacing="huge" />
    <Spacer spacing="huge" />
</Story>
