<script lang="ts">
    import {Clock} from "svelte-feather/components/Clock";
    import {Button, Figure, Heading, Spacer, Stack, Text, Tile} from "@kahi-ui/framework";

    import {substitute_value} from "@kahi-ui/docs-kit/shared";

    import {
        EDIT_ENABLED,
        EDIT_TEXT,
        EDIT_URL,
        LOCALE_DEFAULT,
        TIMESTAMP_ENABLED,
        TIMESTAMP_TEXT,
    } from "../../shared/environment";
    import type {IContentMeta} from "../../shared/types/content";

    export let meta: IContentMeta;

    $: _edit_url = substitute_value(EDIT_URL, meta.identifier + ".md");
    $: _timestamp = new Date(meta.mtime).toLocaleString(LOCALE_DEFAULT);

</script>

<Tile.Container class="documentation-footer" palette="accent" margin_top="large">
    <Stack
        orientation={["widescreen:horizontal", "desktop:horizontal", "tablet:horizontal"]}
        alignment="center"
        spacing="medium"
        padding_x="large"
        padding_y="medium"
        width="100"
    >
        {#if TIMESTAMP_ENABLED}
            <Figure variation="icon" size="medium">
                <Clock />
            </Figure>

            <div>
                <Heading is="h5">{TIMESTAMP_TEXT}</Heading>
                <Text is="small">{_timestamp}</Text>
            </div>
        {/if}

        {#if EDIT_ENABLED}
            <Spacer hidden="mobile" />

            <div>
                <Button
                    href={_edit_url}
                    rel="noopener noreferrer"
                    target="_blank"
                    palette="light"
                    variation="outline"
                >
                    {EDIT_TEXT}
                </Button>
            </div>
        {/if}
    </Stack>
</Tile.Container>
