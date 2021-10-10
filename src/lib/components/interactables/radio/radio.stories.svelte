<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import Stack from "../../layouts/stack/Stack.svelte";
    import Text from "../../typography/text/Text.svelte";

    import Radio from "./Radio.svelte";

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

<Meta title="Interactables/Radio" />

<Template>
    <slot />
</Template>

<Story name="Default">
    <Radio />
</Story>

<Story name="Slot">
    <Radio id="radio-slot">This was slotted and wrapped in a label.</Radio>
</Story>

<Story name="State">
    <Text is="strong">DEFAULT</Text>
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <Radio id="radio-state-block-default">DEFAULT</Radio>
        <Radio id="radio-state-block-state" state>STATE</Radio>

        <Radio id="radio-state-block-active-no-state" active>ACTIVE NO-STATE</Radio>
        <Radio id="radio-state-block-active-state" active disabled state>ACTIVE STATE</Radio>

        <Radio id="radio-state-block-disabled-no-state" disabled>DISABLED NO-STATE</Radio>
        <Radio id="radio-state-block-disabled-state" disabled state>DISABLED STATE</Radio>
    </Stack>

    <Text is="strong">FLUSH</Text>
    <Stack orientation="horizontal" spacing="medium" variation="wrap">
        <Radio id="radio-state-flush-default" variation="flush">DEFAULT</Radio>
        <Radio id="radio-state-flush-state" variation="flush" state>STATE</Radio>

        <Radio id="radio-state-flush-active-no-state" variation="flush" active>
            ACTIVE NO-STATE
        </Radio>
        <Radio id="radio-state-flush-active-state" variation="flush" active disabled state>
            ACTIVE STATE
        </Radio>

        <Radio id="radio-state-flush-disabled-no-state" variation="flush" disabled>
            DISABLED NO-STATE
        </Radio>
        <Radio id="radio-state-flush-disabled-state" variation="flush" disabled state>
            DISABLED STATE
        </Radio>
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

                <Radio name="radio-palette" {palette} />
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

                <Radio name="radio-flush" variation="flush" {palette} />
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

                <Radio name="radio-size" {size} />
            </div>
        {/each}
    </Stack>
</Story>
