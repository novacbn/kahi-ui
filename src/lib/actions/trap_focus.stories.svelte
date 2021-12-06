<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../components/interactables/button/Button.svelte";
    import Check from "../components/interactables/check/Check.svelte";
    import Box from "../components/surfaces/box/Box.svelte";

    import {trap_focus} from "./trap_focus";

    let element;

    let enabled = false;
</script>

<Meta title="Actions/trap_focus" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Box palette={enabled ? "affirmative" : "negative"} padding="small">
        {enabled
            ? "unselect the checkbox to disabled focus trapping"
            : "select the checkbox to enable focus trapping"}
    </Box>

    <Check bind:state={enabled} />

    <div use:trap_focus={{enabled}}>
        <Button tabindex="3">Index #3</Button>
        <Button tabindex="1">Index #1</Button>
        <Button tabindex="-1">Unselectable</Button>
        <Button tabindex="4">Index #4</Button>
        <Button tabindex="2">Index #2</Button>
    </div>
</Story>

<Story name="Target">
    <Box palette={enabled ? "affirmative" : "negative"} padding="small">
        {enabled
            ? "unselect the checkbox to disabled focus trapping"
            : "select the checkbox to enable focus trapping"}
    </Box>

    <Check bind:state={enabled} />

    <div use:trap_focus={{enabled, target: element}}>
        <Button tabindex="3">Index #3</Button>
        <Button bind:element tabindex="1">Index #1</Button>
        <Button tabindex="-1">Unselectable</Button>
        <Button tabindex="4">Index #4</Button>
        <Button tabindex="2">Index #2</Button>
    </div>
</Story>
