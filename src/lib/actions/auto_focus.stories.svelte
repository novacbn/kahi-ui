<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Check from "../components/interactables/check/Check.svelte";
    import TextInput from "../components/interactables/textinput/TextInput.svelte";
    import Box from "../components/surfaces/box/Box.svelte";

    import {auto_focus} from "./auto_focus";

    let element;

    let enabled = false;
</script>

<Meta title="Actions/auto_focus" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Box palette={enabled ? "affirmative" : "negative"} padding="small">
        {enabled
            ? "unselect the checkbox to restore focus"
            : "select the checkbox to auto focus input"}
    </Box>

    <Check bind:state={enabled} />

    <div use:auto_focus={{enabled}}>
        <TextInput placeholder="this TextInput will be focused" />
    </div>
</Story>

<Story name="Target">
    <Box palette={enabled ? "affirmative" : "negative"} padding="small">
        {enabled
            ? "unselect the checkbox to restore focus"
            : "select the checkbox to auto focus input"}
    </Box>

    <Check bind:state={enabled} />

    <div use:auto_focus={{enabled, target: element}}>
        <TextInput placeholder="this TextInput will NOT focused" />
        <TextInput bind:element placeholder="this TextInput will be focused" />
    </div>
</Story>
