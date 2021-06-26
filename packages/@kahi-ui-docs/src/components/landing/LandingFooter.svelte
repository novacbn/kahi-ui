<script lang="ts">
    import {Anchor, Box, Divider, Heading, Stack, Text} from "@kahi-ui/framework";
    import {Github} from "svelte-feather/components/Github";

    import {substitute_value} from "@kahi-ui/docs-kit/shared";

    import {
        REPOSITORY_ENABLED,
        REPOSITORY_URL,
        VERSION_ENABLED,
        VERSION_TAG,
        VERSION_URL,
    } from "../../shared/environment";

    $: _version_url = VERSION_ENABLED ? substitute_value(VERSION_URL, VERSION_TAG) : null;
</script>

<Box class="landing-footer" padding_y="huge">
    <Stack alignment_x="center">
        {#if REPOSITORY_ENABLED}
            <Anchor href={REPOSITORY_URL} rel="noopener noreferrer" target="_blank">
                <Heading is="h2">Kahi UI</Heading>
            </Anchor>
        {:else}
            <Heading is="h2">Kahi UI</Heading>
        {/if}

        <Text align="center">
            {#if _version_url}
                <Anchor href={_version_url} rel="noopener noreferrer" target="_blank">
                    <Divider margin_y="tiny">
                        v{VERSION_TAG}
                    </Divider>
                </Anchor>
            {:else}
                <Divider margin_y="tiny">
                    v{VERSION_TAG}
                </Divider>
            {/if}

            Made and developed by
            <br />
            <Anchor href="https://github.com/novacbn" rel="noopener noreferrer" target="_blank">
                NovacBN
                <Github size="0.9em" />
            </Anchor>
        </Text>
    </Stack>
</Box>

<style>
    :global(.landing-footer > .stack > a) {
        color: inherit !important;
    }

    :global(.landing-footer h2) {
        letter-spacing: 0.1em;
    }

    :global(.landing-footer svg) {
        display: inline;
        margin-left: 0.1em;
    }
</style>
