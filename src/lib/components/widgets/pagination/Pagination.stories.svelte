<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";
    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Pagination from "./Pagination.svelte";

    const STEPS = [
        [2, true],
        [1, false],
        [3, false],
        [4, false],
    ];

    const SIZINGS = [
        ["default", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];

    let value = 5;

    function on_select(event) {
        value = event.detail.page;
    }
</script>

<Meta title="Widgets/Pagination" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Pagination pages={10} palette="accent" {value} on:select={on_select} />
</Story>

<Story name="Anchor">
    <Pagination href={"/path/to/list?page=${page}"} pages={10} value={5} palette="accent" />
</Story>

<Story name="Steps">
    <Stack spacing="medium">
        {#each STEPS as [steps, is_default] (steps)}
            <div>
                <Text is="strong">
                    {`${steps}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Pagination pages={10} value={5} palette="accent" {steps} />
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Sizing">
    <Stack spacing="medium">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Pagination pages={10} value={5} palette="accent" {sizing} />
            </div>
        {/each}
    </Stack>
</Story>
