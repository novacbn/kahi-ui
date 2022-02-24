<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Button from "../../interactables/button/Button.svelte";
    import * as Mosaic from "../../layouts/mosaic";
    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import Progress from "./Progress.svelte";

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

    const RADIUS = [
        ["medium", true],
        ["none", false],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    const SIZINGS = [
        ["medium", true],
        ["nano", false],
        ["tiny", false],
        ["small", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];

    let value = 0.5;

    function on_add_click(event) {
        value = Math.min(value + 0.05, 1);
    }

    function on_subtract_click(event) {
        value = Math.max(value - 0.05, 0);
    }
</script>

<Meta title="Feedback/Progress" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Progress shape="circle" palette="accent" {value} />
    <Progress palette="accent" {value} />

    <Button palette="negative" on:click={on_subtract_click}>-</Button>
    <Button palette="affirmative" on:click={on_add_click}>+</Button>
</Story>

<Story name="Palette">
    <Stack.Container spacing="medium">
        <Stack.Container orientation="horizontal" spacing="medium">
            {#each PALETTES as [palette, is_default] (palette)}
                <div>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>

                    <br />

                    <Progress
                        shape="circle"
                        value={0.5}
                        palette={is_default ? undefined : palette}
                    />
                </div>
            {/each}
        </Stack.Container>

        <Mosaic.Container sizing="medium" spacing="medium">
            {#each PALETTES as [palette, is_default] (palette)}
                <div>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>

                    <br />

                    <Progress value={0.5} palette={is_default ? undefined : palette} />
                </div>
            {/each}
        </Mosaic.Container>
    </Stack.Container>
</Story>

<Story name="Indeterminate">
    <Stack.Container spacing="medium">
        <Stack.Container orientation="horizontal" spacing="medium">
            {#each PALETTES as [palette, is_default] (palette)}
                <div>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>

                    <br />

                    <Progress shape="circle" palette={is_default ? undefined : palette} />
                </div>
            {/each}
        </Stack.Container>

        <Mosaic.Container sizing="medium" spacing="medium">
            {#each PALETTES as [palette, is_default] (palette)}
                <div>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>

                    <br />

                    <Progress palette={is_default ? undefined : palette} />
                </div>
            {/each}
        </Mosaic.Container>
    </Stack.Container>
</Story>

<Story name="Radius">
    <Mosaic.Container sizing="medium" spacing="medium">
        {#each RADIUS as [radius, is_default] (radius)}
            <div>
                <Text is="strong">
                    {`${radius.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                </Text>

                <br />

                <Progress value={0.5} radius={is_default ? undefined : radius} />
            </div>
        {/each}
    </Mosaic.Container>
</Story>

<Story name="Sizing">
    <Stack.Container spacing="medium">
        <Stack.Container orientation="horizontal" spacing="medium">
            {#each SIZINGS as [sizing, is_default] (sizing)}
                <div>
                    <Text is="strong">
                        {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>

                    <br />

                    <Progress shape="circle" value={0.5} sizing={is_default ? undefined : sizing} />
                </div>
            {/each}
        </Stack.Container>

        <Mosaic.Container sizing="medium" spacing="medium">
            {#each SIZINGS as [size, is_default] (size)}
                <div>
                    <Text is="strong">
                        {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>

                    <br />

                    <Progress value={0.5} sizing={is_default ? undefined : size} />
                </div>
            {/each}
        </Mosaic.Container>
    </Stack.Container>
</Story>
