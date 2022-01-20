<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import Switch from "./Switch.svelte";

    const PALETTES = [
        ["neutral", true],
        ["accent", false],
        ["auto", false],
        ["inverse", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["negative", false],
    ];

    const SIZES = [
        ["default", true],
        ["tiny", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
    ];
</script>

<Meta title="Interactables/Switch" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Switch />
</Story>

<Story name="Slot">
    <Switch id="switch-slot">This was slotted and wrapped in a label.</Switch>
</Story>

<Story name="State">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <Switch id="switch-state-default">DEFAULT</Switch>
        <Switch id="switch-state-state" state>STATE</Switch>

        <Switch id="switch-state-active-no-state" active>ACTIVE NO-STATE</Switch>
        <Switch id="switch-state-active-state" active disabled state>ACTIVE STATE</Switch>

        <Switch id="switch-state-disabled-no-state" disabled>DISABLED NO-STATE</Switch>
        <Switch id="switch-state-disabled-state" disabled state>DISABLED STATE</Switch>
    </Stack.Container>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <div>
                <Text>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Switch {palette} />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Size">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <div>
                <Text>
                    <Text is="strong">
                        {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Switch {size} />
            </div>
        {/each}
    </Stack.Container>
</Story>
