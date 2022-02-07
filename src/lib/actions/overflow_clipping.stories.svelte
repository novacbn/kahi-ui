<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Check from "../components/interactables/check/Check.svelte";
    import Scrollable from "../components/layouts/scrollable/Scrollable.svelte";
    import Box from "../components/surfaces/box/Box.svelte";
    import Heading from "../components/typography/heading/Heading.svelte";

    import {overflow_clipping} from "./overflow_clipping";

    let add_content = false;

    let horizontal_clipping = false;
    let vertical_clipping = false;

    function on_clip_horizontal(entry) {
        horizontal_clipping = entry.horizontal;
    }

    function on_clip_vertical(entry) {
        vertical_clipping = entry.vertical;
    }
</script>

<Meta title="Actions/overflow_clipping" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Box palette="negative" margin_bottom="small">
        resize the below boxes, then hit the check to add new content
    </Box>

    <Check bind:state={add_content} />

    <Box palette={horizontal_clipping ? "negative" : "affirmative"} padding="small">
        {horizontal_clipping
            ? `I was clipped, horizontally!`
            : "I am currently not clipped horizontally..."}
    </Box>

    <Scrollable
        actions={[[overflow_clipping, {enabled: true, on_clip: on_clip_horizontal}]]}
        style="border:1px solid rgb(var(--palette-inverse-boldest));width:12rem;resize:horizontal;"
    >
        <Heading style="white-space:nowrap;">
            Hello World!
            {#if add_content}
                And again!
            {/if}
        </Heading>
    </Scrollable>

    <Box palette={vertical_clipping ? "negative" : "affirmative"} padding="small">
        {vertical_clipping
            ? `I was clipped, vertically!`
            : "I am currently not clipped vertically..."}
    </Box>

    <Scrollable
        actions={[[overflow_clipping, {enabled: true, on_clip: on_clip_vertical}]]}
        style="border:1px solid rgb(var(--palette-inverse-boldest));height:3rem;resize:vertical;"
    >
        <Heading>Hello World!</Heading>

        {#if add_content}
            <Heading>And again!</Heading>
        {/if}
    </Scrollable>
</Story>
