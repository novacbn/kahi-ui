<script>
    import {Anchor, Box, Divider, Modifiers, Stack} from "@kahi-ui/svelte";

    import {
        EDIT_ENABLED,
        EDIT_TEXT,
        TIMESTAMP_ENABLED,
        TIMESTAMP_LOCALE,
        TIMESTAMP_TEXT,
    } from "../../shared/environment";
    import {substitute_value} from "../../shared/util/string";

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
                {:else}
                    <span />
                {/if}

                {#if timestamp}
                    <span>{timestamp}</span>
                {/if}
            </Stack>
        </Modifiers.Small>
    </Box>
{/if}

<style>
    :global(.documentation-footer .stack) {
        justify-content: space-between;
    }
</style>
