<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Spacer from "../components/layouts/spacer/Spacer.svelte";
    import Box from "../components/surfaces/box/Box.svelte";
    import Code from "../components/typography/code/Code.svelte";
    import Transition from "../components/utilities/transition/Transition.svelte";

    import {intersection_observer} from "./intersection_observer";

    let is_intersecting = false;

    function on_intersect(intersections) {
        is_intersecting = intersections.some((intersection) => intersection.isIntersecting);
    }
</script>

<Meta title="Actions/intersection_observer" />

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

    <div use:intersection_observer={{threshold: 0.5, on_intersect}} style="height:40px;">
        {#if is_intersecting}
            <Transition animation="scale" variation="enter">
                <Box palette="inverse" padding="small">I am in view!</Box>
            </Transition>
        {/if}
    </div>

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
