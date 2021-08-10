<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../text/Text.svelte";

    import Heading from "../Heading.svelte";

    const TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    {#each TAGS as tag (tag)}
        <div style="max-width:25ch;">
            <Text is="strong">{tag.toUpperCase()}</Text>

            <Heading {...$$props} is={tag}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien.
            </Heading>
        </div>
    {/each}
</Stack>
