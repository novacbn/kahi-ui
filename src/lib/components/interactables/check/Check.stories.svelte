<script>
    import {Meta, Story, Template} from "@storybook/addon-svelte-csf";

    import * as Stack from "../../layouts/stack";
    import Text from "../../typography/text/Text.svelte";

    import Check from "./Check.svelte";

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
        ["small", true],
        ["nano", false],
        ["tiny", false],
        ["medium", false],
        ["large", false],
        ["huge", false],
        ["massive", false],
    ];
</script>

<Meta title="Interactables/Check" />

<Template>
    <slot />
</Template>

<Story name="Preview">
    <Check />
</Story>

<Story name="Slot">
    <Check id="check-slot">This was slotted and wrapped in a label.</Check>
</Story>

<Story name="State">
    <Text is="strong">DEFAULT</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
        <Check id="check-state-block-default">DEFAULT</Check>
        <Check id="check-state-block-state" state>STATE</Check>

        <Check id="check-state-block-active-no-state" active>ACTIVE NO-STATE</Check>
        <Check id="check-state-block-active-state" active disabled state>ACTIVE STATE</Check>

        <Check id="check-state-block-disabled-no-state" disabled>DISABLED NO-STATE</Check>
        <Check id="check-state-block-disabled-state" disabled state>DISABLED STATE</Check>
    </Stack.Container>

    <Text is="strong">FLUSH</Text>
    <Stack.Container orientation="horizontal" spacing="medium" variation="wrap">
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

                <Check palette={is_default ? undefined : palette} />
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

                <Check variation="flush" palette={is_default ? undefined : palette} />
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

                <Check sizing={is_default ? undefined : sizing} />
            </div>
        {/each}
    </Stack.Container>
</Story>
