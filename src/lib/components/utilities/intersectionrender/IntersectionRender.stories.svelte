<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Spacer from "../../layouts/spacer/Spacer.svelte";
    import Box from "../../surfaces/box/Box.svelte";
    import Code from "../../typography/code/Code.svelte";

    import Transition from "../transition/Transition.svelte";

    import IntersectionRender from "./IntersectionRender.svelte";

    let is_intersecting = false;
</script>

<Meta title="Utilities/IntersectionRender" />

<Template>
    <slot />
</Template>

<Story name="Preview">
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

    <IntersectionRender threshold={0.5} bind:is_intersecting>
        <Transition animation="scale" variation="enter">
            <Box palette="inverse" padding="small">I am in view!</Box>
        </Transition>
    </IntersectionRender>

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

    <IntersectionRender loading="eager" threshold={0.5} style="height:40px;" bind:is_intersecting>
        <Transition animation="scale" variation="enter">
            <Box palette="inverse" padding="small">I am in view!</Box>
        </Transition>
    </IntersectionRender>

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
