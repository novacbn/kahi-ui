<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Check from "./Check.svelte";

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

<Meta title="Interactables/Check" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Check />
</Story>

<Story name="Slot">
    <Check id="check-slot">This was slotted and wrapped in a label.</Check>
</Story>

<Story name="State">
    <Text is="strong">DEFAULT</Text>
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <Check id="check-state-block-default">DEFAULT</Check>
        <Check id="check-state-block-state" state>STATE</Check>

        <Check id="check-state-block-active-no-state" active>ACTIVE NO-STATE</Check>
        <Check id="check-state-block-active-state" active disabled state>ACTIVE STATE</Check>

        <Check id="check-state-block-disabled-no-state" disabled>DISABLED NO-STATE</Check>
        <Check id="check-state-block-disabled-state" disabled state>DISABLED STATE</Check>
    </Stack>

    <Text is="strong">FLUSH</Text>
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <Check id="check-state-flush-default" variation="flush">DEFAULT</Check>
        <Check id="check-state-flush-state" variation="flush" state>STATE</Check>

        <Check id="check-state-flush-active-no-state" variation="flush" active>
            ACTIVE NO-STATE
        </Check>
        <Check id="check-state-flush-active-state" variation="flush" active disabled state>
            ACTIVE STATE
        </Check>

        <Check id="check-state-flush-disabled-no-state" variation="flush" disabled>
            DISABLED NO-STATE
        </Check>
        <Check id="check-state-flush-disabled-state" variation="flush" disabled state>
            DISABLED STATE
        </Check>
    </Stack>
</Story>

<Story name="Palette">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <div>
                <Text>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Check {palette} />
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Flush">
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default]}
            <div>
                <Text>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Check variation="flush" {palette} />
            </div>
        {/each}
    </Stack>
</Story>

<Story name="Size">
    <Stack orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZES as [size, is_default]}
            <div>
                <Text>
                    <Text is="strong">
                        {`${size.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Check {size} />
            </div>
        {/each}
    </Stack>
</Story>
