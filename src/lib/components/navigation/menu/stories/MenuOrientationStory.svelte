<script>
    import Stack from "../../../layouts/stack/Stack.svelte";
    import Text from "../../../typography/text/Text.svelte";

    import * as Menu from "../index";

    const ORIENTATIONS = [
        ["vertical", true],
        ["horizontal", false],
    ];
</script>

<Stack alignment_y="top" orientation="horizontal" spacing="medium" variation="wrap">
    {#each ORIENTATIONS as [orientation, is_default] (orientation)}
        <div>
            <Text is="strong">
                {`${orientation.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
            </Text>

            <Menu.Container orientation={is_default ? undefined : orientation}>
                <Menu.Button active>Item #1</Menu.Button>
                <Menu.Button>Item #2</Menu.Button>
            </Menu.Container>
        </div>
    {/each}
</Stack>
