<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import Pagination from "./Pagination.svelte";

    const STEPS = [
        [2, true],
        [1, false],
        [3, false],
        [4, false],
    ];

    const PALETTES = [
        ["neutral", true],
        ["auto", false],
        ["inverse", false],
        ["accent", false],
        ["off", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["informative", false],
        ["negative", false],
    ];

    const SIZINGS = [
        ["small", true],
        ["nano", false],
        ["tiny", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
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
    <Pagination is="a" href={"/path/to/list?page=${page}"} pages={10} value={5} palette="accent" />
</Story>

<Story name="Steps">
    <Stack.Container spacing="medium">
        {#each STEPS as [steps, is_default] (steps)}
            <div>
                <Text is="strong">
                    {`${steps}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Pagination pages={10} value={5} palette="accent" {steps} />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Palette">
    <Stack.Container spacing="medium">
        {#each PALETTES as [palette, is_default] (palette)}
            <div>
                <Text is="strong">
                    {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Pagination pages={10} value={5} {palette} />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizing">
    <Stack.Container spacing="medium">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text is="strong">
                    {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <Pagination pages={10} value={5} palette="accent" {sizing} />
            </div>
        {/each}
    </Stack.Container>
</Story>
