<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import Radio from "./Radio.svelte";

    const PALETTES = [
        ["neutral", true],
        ["auto", false],
        ["inverse", false],
        ["accent", false],
        ["dark", false],
        ["light", false],
        ["alert", false],
        ["affirmative", false],
        ["informative", false],
        ["negative", false],
    ];

    const SIZINGS = [
        ["tiny", true],
        ["nano", false],
        ["small", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];
</script>

<Meta title="Interactables/Radio" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Radio />
</Story>

<Story name="Slot">
    <Radio id="radio-slot">This was slotted and wrapped in a label.</Radio>
</Story>

<Story name="State">
    <Text is="strong">DEFAULT</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <Radio id="radio-state-block-default">DEFAULT</Radio>
        <Radio id="radio-state-block-state" state>STATE</Radio>

        <Radio id="radio-state-block-active-no-state" active>ACTIVE NO-STATE</Radio>
        <Radio id="radio-state-block-active-state" active disabled state>ACTIVE STATE</Radio>

        <Radio id="radio-state-block-disabled-no-state" disabled>DISABLED NO-STATE</Radio>
        <Radio id="radio-state-block-disabled-state" disabled state>DISABLED STATE</Radio>
    </Stack.Container>

    <Text is="strong">FLUSH</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
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
    </Stack.Container>
</Story>

<Story name="Palette">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <div>
                <Text>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Radio name="radio-palette" palette={is_default ? undefined : palette} />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Flush">
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        {#each PALETTES as [palette, is_default] (palette)}
            <div>
                <Text>
                    <Text is="strong">
                        {`${palette.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Radio
                    name="radio-flush"
                    variation="flush"
                    palette={is_default ? undefined : palette}
                />
            </div>
        {/each}
    </Stack.Container>
</Story>

<Story name="Sizing">
    <Stack.Container orientation="horizontal" alignment_y="top" spacing="medium" variation="wrap">
        {#each SIZINGS as [sizing, is_default] (sizing)}
            <div>
                <Text>
                    <Text is="strong">
                        {`${sizing.toUpperCase()}${is_default ? " / DEFAULT" : ""}`}
                    </Text>
                </Text>

                <Radio name="radio-sizing" sizing={is_default ? undefined : sizing} />
            </div>
        {/each}
    </Stack.Container>
</Story>
