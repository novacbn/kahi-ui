<script lang="ts">
    import {Anchor, Box, Heading, Text} from "@kahi-ui/framework";
    import {Github} from "svelte-feather/components/Github";

</script>

<Box class="landing-footer" padding_y="huge">
    <Heading is="h2" align="center" margin_bottom="small" style="letter-spacing:0.1em;">
        Kahi UI
    </Heading>

    <Text align="center">Made and developed by</Text>
    <Text align="center">
        <Anchor href="https://github.com/novacbn" rel="noopener noreferrer" target="_blank">
            NovacBN
            <Github size="0.9em" />
        </Anchor>
    </Text>
</Box>

<style>
    :global(.landing-footer svg) {
        display: inline-block;
    }

    :global(.landing-footer svg) {
        display: inline;
        margin-left: 0.1em;
    }

</style>
