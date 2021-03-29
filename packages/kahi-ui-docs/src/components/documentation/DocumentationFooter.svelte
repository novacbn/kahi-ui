<script>
    import {substitute_value} from "@kahi-ui/docs-kit/shared";
    import {Anchor, Box, Divider, Modifiers, Spacer, Stack} from "@kahi-ui/svelte";

    import {
        EDIT_ENABLED,
        EDIT_TEXT,
        TIMESTAMP_ENABLED,
        TIMESTAMP_LOCALE,
        TIMESTAMP_TEXT,
    } from "../../shared/environment";

    export let meta = {};

    $: ({edit_url = null, mtime = 0} = meta);

    $: edit_text = EDIT_ENABLED && edit_url ? EDIT_TEXT : null;
    $: timestamp = TIMESTAMP_ENABLED
        ? substitute_value(TIMESTAMP_TEXT, new Date(mtime).toLocaleString(TIMESTAMP_LOCALE))
        : null;
</script>

<Divider />

{#if edit_text || timestamp}
    <Box class="documentation-footer" palette="accent" variation="outline">
        <Modifiers.Small>
            <Stack orientation="horizontal">
                {#if edit_text}
                    <Anchor href={edit_url} rel="noopener noreferrer" target="_blank">
                        {edit_text}
                    </Anchor>
                {/if}

                {#if timestamp}
                    <Spacer orientation="horizontal" stretch />

                    <span>{timestamp}</span>
                {/if}
            </Stack>
        </Modifiers.Small>
    </Box>
{/if}
