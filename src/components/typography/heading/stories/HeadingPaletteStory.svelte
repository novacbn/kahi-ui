<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../text/Text.svelte";

    import Heading from "../Heading.svelte";

    const PALETTES = [
        "default",
        "auto",
        "inverse",
        "accent",
        "dark",
        "light",
        "alert",
        "affirmative",
        "negative",
    ];
</script>

<Stack orientation="horizontal" spacing="medium" variation="wrap">
    {#each PALETTES as palette (palette)}
        <div style="max-width:25ch;">
            <Text is="strong">{palette.toUpperCase()}</Text>

            <Heading {...$$props} palette={palette === "default" ? undefined : palette}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et consectetur orci.
                Curabitur a egestas turpis, vitae convallis sapien.
            </Heading>
        </div>
    {/each}
</Stack>
